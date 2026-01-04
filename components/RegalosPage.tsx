
import React, { useState, useMemo } from 'react';
import type { View, Product } from './types';
import type { Currency } from './currency';
import { formatCurrency } from './currency';
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

const promoBanners = [
    {
        title: 'Navidad Oriflame 2025, con magia y amor',
        button: 'COMPRAR REGALOS',
        img: 'https://media-cdn.oriflame.com/contentImage?externalMediaId=9e70432b-3573-48e8-bbd0-8d6885034d42&name=1_2x1_PromoBanner_Split_OriflameGifts_970x450&inputFormat=jpg',
        view: 'ofertas' as View
    },
    {
        title: 'El regalo de belleza se convierte en un momento de alegría',
        button: 'LEER MÁS',
        img: 'https://media-cdn.oriflame.com/contentImage?externalMediaId=96119198-b8ab-4de1-a77e-0d923a0753de&name=2_2x1_GiftWrapping_Split_970x450&inputFormat=jpg',
        view: 'blog' as View
    },
    {
        title: 'Regalos que brillan con el encanto de la medianoche',
        button: 'COMPRAR COLECCIÓN',
        img: 'https://media-cdn.oriflame.com/contentImage?externalMediaId=4d678b9a-4146-4f35-9562-a78da64c9df6&name=3_2x1_MagicalMidnight_Split_970x450&inputFormat=jpg',
        view: 'products' as View,
        payload: 'all'
    },
    {
        title: 'Tantos regalos. Una guía útil.',
        button: 'LEER GUÍA',
        img: 'https://media-cdn.oriflame.com/contentImage?externalMediaId=2acc16ea-fa07-4d15-9914-bff2a7683852&name=4_2x1_GiftGivingBE_Split_970x450&inputFormat=jpg',
        view: 'blog' as View
    }
];

const RegalosPage: React.FC<RegalosPageProps> = ({ 
    onNavigate, 
    onProductSelect, 
    onAddToCart, 
    onQuickAddToCart, 
    currency, 
    onQuickView 
}) => {
    const [activeTab, setActiveTab] = useState('Regalos');

    const tabs = [
        { id: 'destinatario', label: 'Según el destinatario' },
        { id: 'sets', label: 'Sets y Packs de Regalo' },
        { id: 'Regalos', label: 'Regalos' },
        { id: 'navidad', label: 'Navidad' }
    ];

    const filteredProducts = useMemo(() => {
        if (activeTab === 'Regalos') return []; // We show banners instead
        if (activeTab === 'navidad') {
            return allProducts.filter(p => p.tag === 'SET' || p.subCategory === 'Magical Midnights' || p.subCategory === "Winter's Embrace");
        }
        if (activeTab === 'sets') {
            return allProducts.filter(p => p.tag === 'SET' || p.productType === 'Lote');
        }
        return allProducts.slice(0, 12);
    }, [activeTab]);

    return (
        <div className="bg-white min-h-screen">
            {/* AREA TOP */}
            <div className="container mx-auto px-4 md:px-12 py-8">
                <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6">
                    <button onClick={() => onNavigate('home')} className="hover:text-black transition-colors">Inicio</button>
                    <span>/</span>
                    <span className="text-black">Ideas para regalar</span>
                </nav>
                <h1 className="text-4xl md:text-6xl font-black text-black tracking-tighter uppercase mb-12 italic">
                    Regalos <span className="text-pink-600">Oriflame</span>
                </h1>

                {/* CATEGORY BAR */}
                <div className="border-b border-gray-100 flex gap-8 md:gap-12 overflow-x-auto no-scrollbar mb-12">
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

                {/* PRODUCT LIST HEADER */}
                <div className="flex items-center justify-between mb-10 border-y border-gray-50 py-4">
                    <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                        </svg>
                        <span className="text-[10px] font-black uppercase tracking-widest">Recomendado</span>
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                        {activeTab === 'Regalos' ? '64 productos' : `${filteredProducts.length} productos`}
                    </p>
                </div>

                {/* CONTENIDO SEGÚN PESTAÑA */}
                {activeTab === 'Regalos' ? (
                    <div className="space-y-6 mb-20">
                        {/* BANNERS PROMOCIONALES - COPIA EXACTA ESTRUCTURA HTML */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {promoBanners.map((banner, index) => (
                                <div 
                                    key={index}
                                    onClick={() => onNavigate(banner.view, banner.payload)}
                                    className="relative group cursor-pointer overflow-hidden bg-gray-100 aspect-[2/1] rounded-sm"
                                >
                                    <img 
                                        src={banner.img} 
                                        alt={banner.title} 
                                        className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-all"></div>
                                    <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 bg-gradient-to-t from-black/60 to-transparent">
                                        <p className="text-white text-base md:text-xl font-bold mb-4 max-w-xs md:max-w-md">{banner.title}</p>
                                        <button className="text-white text-[10px] font-black tracking-[0.3em] uppercase border-b-2 border-white pb-1 hover:text-pink-400 hover:border-pink-400 transition-all">
                                            {banner.button}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* PAGINACIÓN - COPIA EXACTA HTML */}
                        <div className="flex flex-col items-center gap-6 mt-16 pt-12 border-t border-gray-100">
                            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 italic">
                                Mostrando 0 de 64 productos
                            </p>
                            <div className="w-full max-w-xs h-[4px] bg-gray-100 relative rounded-full overflow-hidden">
                                <div className="absolute inset-0 bg-gray-200 w-0 transition-all duration-1000"></div>
                            </div>
                            <button className="border border-black px-16 py-4 text-[10px] font-black uppercase tracking-[0.4em] hover:bg-black hover:text-white transition-all active:scale-95">
                                Mostrar más
                            </button>
                        </div>
                    </div>
                ) : (
                    /* PRODUCT GRID REGULAR PARA OTRAS PESTAÑAS */
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
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
                )}
                
                <hr className="border-gray-100 mb-20" />
            </div>

            {/* BOTTOM CAROUSEL SECTION */}
            <div className="bg-[#f9f9f9] py-24 border-t border-gray-100">
                <div className="container mx-auto px-4 md:px-12 text-center">
                    <h2 className="text-3xl font-black text-black tracking-tighter uppercase mb-12">Regalos para todas las amantes de la belleza</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {[
                            { label: 'Regalos para la piel', img: 'https://media-cdn.oriflame.com/contentImage?externalMediaId=31b28bbd-5ed1-4719-9b6a-23894801ee51&name=SKC_320x450' },
                            { label: 'Regalos de maquillaje', img: 'https://media-cdn.oriflame.com/contentImage?externalMediaId=8ed17ade-cbf5-4d4a-83c9-d1a5d6f4aded&name=CCS_320x450' },
                            { label: 'Regalos en fragancias', img: 'https://media-cdn.oriflame.com/contentImage?externalMediaId=4139a5ab-c1f8-4d1f-86c8-e233f9fbc430&name=FRA_320x450' },
                            { label: 'Baño y cuerpo', img: 'https://media-cdn.oriflame.com/contentImage?externalMediaId=ec3dd7ba-43d2-48b3-af94-f88a4ef9e92e&name=BB320x450' },
                            { label: 'Complementos', img: 'https://media-cdn.oriflame.com/contentImage?externalMediaId=db6f34fa-2e26-4ab9-91c5-b93da1ae4583&name=ACC_320x450' },
                            { label: 'Cabello', img: 'https://media-cdn.oriflame.com/contentImage?externalMediaId=829122e1-126d-4fc3-aec5-86b10db4b82c&name=HC_320x450' }
                        ].map((cat, i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="aspect-[3/4] overflow-hidden mb-4 rounded-sm bg-white shadow-sm border border-gray-100">
                                    <img src={cat.img} alt={cat.label} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                                </div>
                                <p className="text-[10px] font-black uppercase tracking-widest">{cat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* SEO CONTENT BOX */}
            <div className="container mx-auto px-4 md:px-12 py-32">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-4xl font-black text-black tracking-tighter uppercase italic">Busca el regalo de belleza Oriflame perfecto</h2>
                    <p className="text-gray-500 text-lg font-light leading-relaxed italic">
                        Descubre los regalos de belleza que hacen brillar cada momento. Desde fragancias atemporales y cuidado de la piel hasta productos de maquillaje imprescindibles y mimos para el baño, Oriflame ha seleccionado las mejores ideas de regalo para todos los gustos, presupuestos y ocasiones. Tanto si celebras una fiesta, un cumpleaños, un aniversario o simplemente quieres alegrarle el día a alguien, esta es la belleza hecha para regalar.
                    </p>
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
