
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
    { key: 'personal-care', name: 'Lociones y Geles' },
    { key: 'men', name: 'Hombre' },
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
        // Si la categoría inicial era 'accessories', la cambiamos a 'all' ya que ya no existe
        if (initialCategory === 'accessories') {
            setActiveCategory('all');
        } else {
            setActiveCategory(initialCategory);
        }
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
            default:
                break;
        }
        return filtered;
    }, [activeCategory, sortOrder, searchQuery]);

    const currentCategoryName = categories.find(c => c.key === activeCategory)?.name || 'Tienda';

    return (
        <div className="container mx-auto px-4 md:px-12 py-10">
            <div className="flex flex-col lg:flex-row gap-12">
                <aside className="w-full lg:w-1/4">
                    <div className="sticky top-48 space-y-10">
                        <div>
                            <h2 className="text-[9px] font-black uppercase tracking-[0.3em] mb-4 border-b pb-3">Buscar</h2>
                            <input 
                                type="text"
                                placeholder="Ref..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full border border-gray-100 p-3 text-[10px] font-bold uppercase tracking-widest focus:border-pink-600 outline-none transition-all rounded-sm"
                            />
                        </div>

                        <div>
                            <h2 className="text-[9px] font-black uppercase tracking-[0.3em] mb-4 border-b pb-3">Categorías</h2>
                            <ul className="space-y-1.5">
                                {categories.map(cat => (
                                    <li key={cat.key}>
                                        <button
                                            onClick={() => setActiveCategory(cat.key)}
                                            className={`w-full text-left px-4 py-2 text-[9px] font-black uppercase tracking-[0.2em] transition-all rounded-sm border ${
                                                activeCategory === cat.key
                                                    ? 'bg-pink-100/30 text-pink-700 border-pink-700'
                                                    : 'text-gray-400 border-transparent hover:text-black hover:bg-gray-50'
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

                <main className="w-full lg:w-3/4">
                    <div className="flex justify-between items-end mb-10 border-b border-gray-50 pb-6">
                        <div>
                            <span className="text-pink-600 text-[8px] font-black tracking-[0.5em] uppercase mb-1 block">Oriflame 2026</span>
                            <h1 className="text-3xl font-black text-black tracking-tighter uppercase italic">{currentCategoryName}</h1>
                        </div>
                    </div>

                    {filteredAndSortedProducts.length > 0 ? (
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
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
                        <div className="text-center py-32 border border-dashed border-gray-100 rounded-sm">
                            <p className="text-gray-300 text-[9px] font-black uppercase tracking-[0.4em]">Sin resultados</p>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default ShopPage;
