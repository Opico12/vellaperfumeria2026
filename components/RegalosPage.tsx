
import React, { useState, useMemo } from 'react';
import type { View, Product } from './types';
import type { Currency } from './currency';
import { allProducts } from './products';
import { ProductCard } from './ProductCard';

interface RegalosPageProps {
    onNavigate: (view: View, payload?: any) => void;
    onProductSelect: (product: Product) => void;
    onAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onQuickAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    currency: Currency;
    onQuickView: (product: Product) => void;
}

const RegalosPage: React.FC<RegalosPageProps> = ({ 
    onNavigate, 
    onProductSelect, 
    onAddToCart, 
    onQuickAddToCart, 
    currency, 
    onQuickView 
}) => {
    const [activeTab, setActiveTab] = useState('Lotes Especiales');

    const tabs = [
        { id: 'lotes', label: 'Lotes Especiales' },
        { id: 'magnolia', label: 'Colección Magnolia' },
        { id: 'luxury', label: 'Lujo Italiano' },
        { id: 'skincare', label: 'Sets Skincare' }
    ];

    const filteredProducts = useMemo(() => {
        if (activeTab === 'Lotes Especiales') {
            return allProducts.filter(p => p.tag === 'SET' || p.tag === 'OFERTA');
        }
        if (activeTab === 'Colección Magnolia') {
            return allProducts.filter(p => p.name.includes('Magnolia') || p.id === 36152);
        }
        if (activeTab === 'Lujo Italiano') {
            return allProducts.filter(p => p.brand === 'Giordani Gold');
        }
        if (activeTab === 'Sets Skincare') {
            return allProducts.filter(p => p.category === 'skincare' && p.tag === 'SET');
        }
        return allProducts;
    }, [activeTab]);

    return (
        <div className="bg-white min-h-screen">
            <div className="container mx-auto px-4 md:px-12 py-8">
                <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6">
                    <button onClick={() => onNavigate('home')} className="hover:text-black transition-colors">Inicio</button>
                    <span>/</span>
                    <span className="text-black">Especial Regalos 2026</span>
                </nav>
                
                <h1 className="text-4xl md:text-7xl font-black text-black tracking-tighter uppercase mb-12">
                    El Arte de <span className="text-pink-600">Regalar</span>
                </h1>

                {/* TABS DE REGALO */}
                <div className="border-b border-gray-100 flex gap-8 md:gap-12 overflow-x-auto no-scrollbar mb-16">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.label)}
                            className={`pb-4 text-[10px] font-black uppercase tracking-[0.3em] whitespace-nowrap transition-all border-b-2 ${activeTab === tab.label ? 'border-pink-600 text-black' : 'border-transparent text-gray-400 hover:text-black'}`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* GRID DE PRODUCTOS */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {filteredProducts.map(product => (
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
            </div>
            <style>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </div>
    );
};

export default RegalosPage;
