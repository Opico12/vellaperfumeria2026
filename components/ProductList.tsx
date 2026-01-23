
import React from 'react';
import type { View, Product } from './types';
import { allProducts } from './products';
import { ProductCard } from './ProductCard';
import HeroBanner from './HeroCarousel';
import { type Currency } from './currency';
import FeaturesSection from './FeaturesSection';
import InteractiveCatalogSection from './InteractiveCatalogSection';

const ProductList: React.FC<{
    onNavigate: (view: View, payload?: any) => void;
    onProductSelect: (product: Product) => void;
    onAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onQuickAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    currency: Currency;
    onQuickView: (product: Product) => void;
}> = ({ onNavigate, onProductSelect, onAddToCart, onQuickAddToCart, currency, onQuickView }) => {
    
    const mainProducts = allProducts.slice(0, 12);
    const hasProducts = mainProducts.length > 0;

    return (
        <div className="space-y-24 pb-20 bg-white">
            <HeroBanner onNavigate={onNavigate} />

            {/* SECCIÓN 1: GALERÍA DE PRODUCTOS */}
            {hasProducts && (
                <div className="container mx-auto px-4 md:px-12">
                    <section>
                        <div className="text-center mb-20">
                            <span className="text-[#E29CD2] text-[10px] font-black tracking-[0.6em] uppercase mb-4 block underline underline-offset-8 decoration-[#E29CD2]/20">Boutique Oriflame 2026</span>
                            <h3 className="text-4xl md:text-6xl font-black text-black tracking-tighter uppercase leading-none italic">Colección <span className="text-[#E29CD2]">Elegance</span></h3>
                            <div className="h-[2px] w-16 bg-[#E29CD2]/30 mx-auto mt-8"></div>
                        </div>
                        
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                            {mainProducts.map(product => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    currency={currency}
                                    onAddToCart={onAddToCart}
                                    onQuickAddToCart={onQuickAddToCart}
                                    onProductSelect={product => onProductSelect(product)}
                                    onQuickView={product => onQuickView(product)}
                                />
                            ))}
                        </div>

                        <div className="text-center mt-16">
                            <button 
                                onClick={() => onNavigate('products', 'all')}
                                className="bg-[#E29CD2]/5 text-[#E29CD2] border-2 border-[#E29CD2] text-[11px] font-black tracking-[0.4em] px-12 py-5 uppercase hover:bg-[#E29CD2] hover:text-white transition-all rounded-sm shadow-xl"
                            >
                                Ver Todo el Catálogo
                            </button>
                        </div>
                    </section>
                </div>
            )}

            {/* SECCIÓN 2: REGALAR CON CARIÑO */}
            <section className="py-24 bg-zinc-950 text-white">
                <div className="container mx-auto px-6 text-center">
                    <span className="text-[#E29CD2] text-[10px] font-black tracking-[0.6em] uppercase mb-4 block">HISTORIA DE BELLEZA</span>
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-12 italic">Regalar con <span className="text-[#E29CD2]">Cariño</span></h2>
                    
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white p-12 shadow-2xl rounded-sm border border-[#E29CD2]/10 grid md:grid-cols-2 gap-12 items-center">
                             <div className="overflow-hidden rounded-full aspect-square max-w-[200px] mx-auto border-4 border-[#E29CD2]/20">
                                 <img src="https://images.unsplash.com/photo-1516589174184-e67823dbf124?auto=format&fit=crop&w=400&q=80" alt="Jan & Valentina" className="w-full h-full object-cover" />
                             </div>
                             <div className="text-left">
                                 <h3 className="text-2xl font-black text-black uppercase mb-6 tracking-tighter italic">Jan & Valentina</h3>
                                 <p className="text-gray-600 font-bold uppercase text-[11px] leading-loose tracking-[0.2em] mb-8">
                                    Nuestros personajes Jan y Valentina comparten actos de amor diarios, inspirando la belleza real. Cada regalo de Bella Perfumería es un gesto cuidadosamente seleccionado.
                                 </p>
                                 <button 
                                    onClick={() => onNavigate('regalos')}
                                    className="bg-black text-white text-[10px] font-black tracking-[0.4em] px-8 py-4 uppercase hover:bg-[#E29CD2] transition-all rounded-sm"
                                >
                                    Ver Lotes de Regalo
                                </button>
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 md:px-12">
                <InteractiveCatalogSection onNavigate={onNavigate} />
            </div>

            <div className="container mx-auto px-4 md:px-12">
                <FeaturesSection />
            </div>
        </div>
    );
};

export default ProductList;
