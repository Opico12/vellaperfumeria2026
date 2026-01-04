
import React from 'react';
import { ProductCard } from './ProductCard';
import type { Product } from './types';
import type { Currency } from './currency';
import { allProducts } from './products';

// Helper to check if a product is an offer
const isOffer = (p: Product) => (p.regularPrice && p.regularPrice > p.price) || p.tag === 'OFERTA';

const allOffers = allProducts.filter(isOffer);
const highlightProduct = allProducts.find(p => p.id === 46801);

const OfertasPage: React.FC<{
    currency: Currency;
    onAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onQuickAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onProductSelect: (product: Product) => void;
    onQuickView: (product: Product) => void;
}> = ({ currency, onAddToCart, onQuickAddToCart, onProductSelect, onQuickView }) => {

    const sections = [
        { id: 'makeup', label: 'Maquillaje', items: allOffers.filter(p => p.category === 'makeup') },
        { id: 'perfume', label: 'Fragancias', items: allOffers.filter(p => p.category === 'perfume') },
        { id: 'skincare', label: 'Cuidado Facial', items: allOffers.filter(p => p.category === 'skincare') },
        { id: 'hair', label: 'Cuidado Capilar', items: allOffers.filter(p => p.category === 'hair') },
        { id: 'personal', label: 'Higiene y Cuidado', items: allOffers.filter(p => p.category === 'personal-care') },
    ].filter(s => s.items.length > 0);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
            {/* Header Area */}
            <div className="text-center mb-16">
                <h1 className="text-5xl font-black text-black tracking-[0.2em] uppercase mb-4">OFERTAS</h1>
                <p className="text-gray-500 font-medium tracking-widest text-sm uppercase">Selección Exclusiva de Catálogo</p>
                <div className="w-20 h-1 bg-pink-500 mx-auto mt-6"></div>
            </div>

            {/* Catalog Jump Menu */}
            <nav className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16 py-4 border-y border-gray-100 sticky top-20 bg-white/90 backdrop-blur-md z-20">
                {sections.map(s => (
                    <button 
                        key={s.id} 
                        onClick={() => scrollTo(s.id)}
                        className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-pink-500 transition-colors"
                    >
                        {s.label}
                    </button>
                ))}
            </nav>

            {/* Featured Launch */}
            {highlightProduct && (
                 <div 
                    className="relative rounded-sm overflow-hidden mb-24 text-white p-10 md:p-20 border border-gray-900 shadow-2xl"
                    style={{ background: 'linear-gradient(135deg, #111111 0%, #000000 100%)' }}
                 >
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-1/2 text-left">
                             <span className="inline-block bg-pink-600 text-white text-[10px] font-black px-4 py-1 mb-8 tracking-[0.3em] uppercase">
                                DESTACADO DEL MES
                             </span>
                            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase">{highlightProduct.name}</h2>
                            <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-md font-light italic">"{highlightProduct.description}"</p>
                            
                            <div className="flex items-baseline gap-6 mb-12">
                                <span className="text-5xl font-black text-white tracking-tighter">{highlightProduct.price}€</span>
                                {highlightProduct.regularPrice && (
                                    <span className="text-2xl text-gray-600 line-through font-light">{highlightProduct.regularPrice}€</span>
                                )}
                            </div>
                            
                            <button
                                onClick={() => onProductSelect(highlightProduct)}
                                className="bg-pink-500 text-white font-black py-4 px-12 rounded-full hover:bg-pink-600 transition-all shadow-xl transform hover:scale-105 active:scale-95 tracking-widest text-xs"
                            >
                                VER OFERTA
                            </button>
                        </div>
                         <div className="w-full md:w-1/2 flex justify-center">
                             <img 
                                src={highlightProduct.imageUrl} 
                                alt={highlightProduct.name} 
                                className="w-full max-w-md object-contain drop-shadow-[0_35px_35px_rgba(255,255,255,0.1)] transform hover:translate-y-[-10px] transition-transform duration-1000" 
                            />
                         </div>
                    </div>
                </div>
            )}
            
            {/* Sections */}
            <div className="space-y-32">
                {sections.map(section => (
                    <section key={section.id} id={section.id} className="scroll-mt-40">
                        <div className="flex items-center gap-8 mb-12">
                             <h2 className="text-3xl font-black text-black uppercase tracking-tighter shrink-0">{section.label}</h2>
                             <div className="h-[1px] bg-gray-100 flex-grow"></div>
                             <span className="text-gray-300 font-bold text-xs tracking-widest uppercase">{section.items.length} ARTÍCULOS</span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
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
        </div>
    );
};

export default OfertasPage;
