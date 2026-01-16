
import React, { useState, useMemo, useEffect } from 'react';
import { ProductCard } from './ProductCard';
import type { Product } from './types';
import type { Currency } from './currency';
import { allProducts } from './products';

const categories = [
    { key: 'all', name: 'Todos los productos' },
    { key: 'skincare', name: 'Cuidado Facial' },
    { key: 'makeup', name: 'Maquillaje' },
    { key: 'perfume', name: 'Brumas y Fragancias' },
    { key: 'hair', name: 'Cabello' },
    { key: 'personal-care', name: 'Lociones y Geles' },
    { key: 'men', name: 'Hombre' },
    { key: 'accessories', name: 'Accesorios' },
];

const ShopPage: React.FC<{
    currency: Currency;
    initialCategory: string;
    onAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onQuickAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onProductSelect: (product: Product) => void;
    onQuickView: (product: Product) => void;
}> = ({ currency, initialCategory, onAddToCart, onQuickAddToCart, onProductSelect, onQuickView }) => {
    
    const [activeCategory, setActiveCategory] = useState(initialCategory);
    const [sortOrder, setSortOrder] = useState('menu_order');
    const [searchQuery, setSearchQuery] = useState('');
    
    useEffect(() => {
        setActiveCategory(initialCategory);
    }, [initialCategory]);

    const filteredAndSortedProducts = useMemo(() => {
        let filtered = activeCategory === 'all'
            ? [...allProducts]
            : allProducts.filter(p => p.category === activeCategory);

        if (searchQuery) {
            filtered = filtered.filter(p => 
                p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                p.id.toString().includes(searchQuery)
            );
        }

        switch (sortOrder) {
            case 'price':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'menu_order':
            default:
                break;
        }
        return filtered;
    }, [activeCategory, sortOrder, searchQuery]);

    const currentCategoryName = categories.find(c => c.key === activeCategory)?.name || 'Tienda';

    return (
        <div className="container mx-auto px-4 md:px-12 py-10">
            <div className="flex flex-col lg:flex-row gap-12">
                {/* Sidebar Filtros */}
                <aside className="w-full lg:w-1/4">
                    <div className="sticky top-48 space-y-10">
                        <div>
                            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] mb-6 border-b pb-4">Buscar Producto</h2>
                            <input 
                                type="text"
                                placeholder="Ref o Ingrediente..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full border-2 border-gray-100 p-4 text-xs font-bold uppercase tracking-widest focus:border-black outline-none transition-all"
                            />
                        </div>

                        <div>
                            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] mb-6 border-b pb-4">Categorías</h2>
                            <ul className="space-y-2">
                                {categories.map(cat => (
                                    <li key={cat.key}>
                                        <button
                                            onClick={() => setActiveCategory(cat.key)}
                                            className={`w-full text-left px-4 py-3 text-[9px] font-black uppercase tracking-[0.2em] transition-all border ${
                                                activeCategory === cat.key
                                                    ? 'bg-black text-white border-black'
                                                    : 'text-gray-400 border-transparent hover:border-gray-100 hover:text-black'
                                            }`}
                                        >
                                            {cat.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </aside>

                {/* Grid de Productos */}
                <main className="w-full lg:w-3/4">
                    <div className="flex justify-between items-end mb-12 border-b border-gray-100 pb-8">
                        <div>
                            <span className="text-pink-600 text-[9px] font-black tracking-[0.6em] uppercase mb-2 block">Catálogo Oriflame 2026</span>
                            <h1 className="text-4xl font-black text-black tracking-tighter uppercase italic">{currentCategoryName}</h1>
                        </div>
                        <div className="hidden md:block">
                            <select 
                                value={sortOrder}
                                onChange={(e) => setSortOrder(e.target.value)}
                                className="border-none text-[9px] font-black uppercase tracking-widest bg-transparent cursor-pointer outline-none"
                            >
                                <option value="menu_order">Por Defecto</option>
                                <option value="price">Precio: Bajo a Alto</option>
                                <option value="price-desc">Precio: Alto a Bajo</option>
                            </select>
                        </div>
                    </div>

                    {filteredAndSortedProducts.length > 0 ? (
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16">
                            {filteredAndSortedProducts.map(product => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    currency={currency}
                                    onAddToCart={onAddToCart}
                                    onQuickAddToCart={onQuickAddToCart}
                                    onProductSelect={onProductSelect}
                                    onQuickView={onQuickView}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-40 border-2 border-dashed border-gray-100">
                            <p className="text-gray-300 text-[10px] font-black uppercase tracking-[0.5em]">No se han encontrado resultados</p>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default ShopPage;
