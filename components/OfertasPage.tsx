
import React from 'react';
import { ProductCard } from './ProductCard';
import type { Product } from './types';
import type { Currency } from './currency';
import { allProducts } from './products';

const isOffer = (p: Product) => (p.regularPrice && p.regularPrice > p.price) || p.tag === 'OFERTA';

const OfertasPage: React.FC<{
    currency: Currency;
    onAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onQuickAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onProductSelect: (product: Product) => void;
    onQuickView: (product: Product) => void;
}> = ({ currency, onAddToCart, onQuickAddToCart, onProductSelect, onQuickView }) => {

    const allOffers = allProducts.filter(isOffer);
    
    const sections = [
        { id: 'makeup', label: 'Maquillaje Estelar', items: allOffers.filter(p => p.category === 'makeup') },
        { id: 'skincare', label: 'Facial en Oferta', items: allOffers.filter(p => p.category === 'skincare') },
        { id: 'hair', label: 'Capilar y Cuerpo', items: allOffers.filter(p => p.category === 'hair' || p.category === 'personal-care') },
    ].filter(s => s.items.length > 0);

    return (
        <div className="container mx-auto px-4 md:px-12 pb-20">
            {/* BANNER DE LUJO */}
            <div className="relative w-full h-[450px] md:h-[600px] rounded-sm overflow-hidden mb-24 flex items-center justify-center text-center shadow-3xl bg-[#050a18]">
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <div className="night-sky"></div>
                    <div className="gold-sparks"></div>
                </div>
                
                <div className="relative z-10 px-6 max-w-4xl">
                    <span className="inline-block border border-yellow-500 text-yellow-500 text-[10px] font-black px-8 py-2 mb-10 tracking-[0.5em] uppercase bg-black/30 backdrop-blur-sm">
                        PRÓXIMAMENTE 2026
                    </span>
                    <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase italic leading-none mb-8">
                        Ventas <br/> <span className="text-yellow-500 glow-text">Flash</span>
                    </h1>
                    <p className="text-white/80 text-lg md:text-2xl font-light italic mb-12 tracking-widest uppercase max-w-2xl mx-auto leading-relaxed">
                        Estamos preparando una selección de ofertas exclusivas para la nueva temporada.
                    </p>
                    <div className="flex justify-center gap-6 items-center">
                        <div className="h-[1px] w-12 md:w-24 bg-yellow-500/50"></div>
                        <span className="text-yellow-500 text-[11px] font-black tracking-[0.6em] uppercase">Vuelve Pronto</span>
                        <div className="h-[1px] w-12 md:w-24 bg-yellow-500/50"></div>
                    </div>
                </div>

                <style>{`
                    .bg-[#050a18] { background: radial-gradient(circle at center, #0a1944 0%, #040816 100%); }
                    .night-sky { position: absolute; width: 100%; height: 100%; background-image: radial-gradient(1px 1px at 15% 20%, #fff, transparent), radial-gradient(1.5px 1.5px at 35% 45%, #fff, transparent); background-size: 300px 300px; opacity: 0.2; }
                    .gold-sparks { position: absolute; width: 100%; height: 100%; background-image: radial-gradient(2px 2px at 10% 30%, #facc15, transparent), radial-gradient(1.5px 1.5px at 80% 60%, #facc15, transparent); background-size: 200px 200px; animation: sparkle 4s infinite alternate ease-in-out; }
                    @keyframes sparkle { 0% { opacity: 0.3; transform: scale(0.95); } 100% { opacity: 0.8; transform: scale(1.05); } }
                    .glow-text { text-shadow: 0 0 30px rgba(250, 204, 21, 0.4); }
                `}</style>
            </div>
            
            {/* Listado de Ofertas (Solo si existen) */}
            {sections.length > 0 ? (
                <div className="space-y-40">
                    {sections.map(section => (
                        <section key={section.id} id={section.id} className="animate-fade-in">
                            <div className="flex flex-col md:flex-row md:items-end gap-6 mb-16">
                                 <div className="text-left">
                                     <span className="text-pink-600 text-[10px] font-black tracking-[0.6em] uppercase mb-4 block underline underline-offset-8 decoration-black">Ofertas Activas</span>
                                     <h2 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tighter shrink-0 italic">{section.label}</h2>
                                 </div>
                                 <div className="h-[1px] bg-gray-100 flex-grow mb-2"></div>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
                                {section.items.map(product => (
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
                        </section>
                    ))}
                </div>
            ) : (
                <div className="text-center py-40 bg-gray-50/50 rounded-sm border border-dashed border-gray-100">
                    <p className="text-gray-400 text-[11px] font-black uppercase tracking-[0.5em] italic">No hay ofertas disponibles en este momento. <br/> Por favor, consulte nuestro catálogo digital para ver todas las promociones.</p>
                </div>
            )}
        </div>
    );
};

export default OfertasPage;
