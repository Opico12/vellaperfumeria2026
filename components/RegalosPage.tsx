
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
    const [activeTab, setActiveTab] = useState('Colección Magnolia');

    const tabs = [
        { id: 'magnolia', label: 'Colección Magnolia' },
        { id: 'milk-honey', label: 'Milk & Honey Gold' },
        { id: 'luxury', label: 'Lujo Italiano' },
        { id: 'skincare', label: 'Sets Skincare' }
    ];

    const filteredProducts = useMemo(() => {
        if (activeTab === 'Colección Magnolia') {
            return allProducts.filter(p => p.subCategory === 'Milk & Honey Gold' && p.name.includes('Magnolia'));
        }
        if (activeTab === 'Milk & Honey Gold') {
            return allProducts.filter(p => p.subCategory === 'Milk & Honey Gold');
        }
        if (activeTab === 'Lujo Italiano') {
            return allProducts.filter(p => p.subCategory === 'Giordani Gold');
        }
        if (activeTab === 'Sets Skincare') {
            return allProducts.filter(p => p.category === 'skincare' || p.tag === 'SET');
        }
        return allProducts;
    }, [activeTab]);

    return (
        <div className="bg-white min-h-screen">
            <div className="container mx-auto px-4 md:px-12 py-8">
                <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6">
                    <button onClick={() => onNavigate('home')} className="hover:text-black transition-colors">Inicio</button>
                    <span>/</span>
                    <span className="text-black italic">Especial Regalos 2026</span>
                </nav>
                
                <h1 className="text-4xl md:text-7xl font-black text-black tracking-tighter uppercase mb-12 italic">
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

                {/* BANNER DE IMPACTO MAGNOLIA (VINCULADO) */}
                <div className="bg-black text-white py-32 rounded-sm relative overflow-hidden shadow-3xl">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1596704017254-9b121068fb31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
                    <div className="relative z-10 px-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-16">
                        <div className="max-w-2xl">
                             <span className="text-pink-600 text-[11px] font-black tracking-[0.5em] uppercase mb-4 block">Especial Magnolia</span>
                             <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-8 leading-tight">La Seda Hecha <br/> <span className="text-pink-400">Cosmética</span></h2>
                             <p className="text-gray-400 text-lg font-light italic mb-10 leading-relaxed">
                                "Descubra por qué Milk & Honey Magnolia es la opción número uno en regalos de alta gama en Vellaperfumería. Nutrición orgánica con aroma de gala para momentos inolvidables."
                             </p>
                             <button onClick={() => setActiveTab('Colección Magnolia')} className="bg-white text-black px-12 py-5 text-[10px] font-black uppercase tracking-widest hover:bg-pink-600 hover:text-white transition-all">
                                VER TODA LA LÍNEA MAGNOLIA
                             </button>
                        </div>
                        <img src="https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46272%2F46272_1.png" className="w-80 drop-shadow-2xl animate-float" alt="Magnolia Gold" />
                    </div>
                </div>
            </div>
            <style>{`
                @keyframes float { 0% { transform: translateY(0); } 50% { transform: translateY(-20px); } 100% { transform: translateY(0); } }
                .animate-float { animation: float 6s ease-in-out infinite; }
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </div>
    );
};

export default RegalosPage;
