
import React from 'react';
import type { View, Product } from './types';
import { allProducts, getImg } from './products';
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
    
    const displayProducts = allProducts.slice(0, 16);

    return (
        <div className="space-y-32 pb-20 bg-white">
            <HeroBanner onNavigate={onNavigate} />

            {/* SECCIÓN 1: GALERÍA BELLA PERFUMERÍA */}
            <div className="container mx-auto px-4 md:px-12">
                <section>
                    <div className="text-center mb-20">
                        <span className="text-pink-600 text-[11px] font-black tracking-[0.8em] uppercase mb-4 block italic">Campaña 1 - Estocolmo 2026</span>
                        <h3 className="text-5xl md:text-8xl font-black text-black tracking-tighter uppercase italic leading-none">Bella <span className="text-pink-600">Perfumería</span></h3>
                        <div className="h-[4px] w-24 bg-gradient-to-r from-pink-600 to-rose-400 mx-auto mt-10 rounded-full shadow-lg"></div>
                    </div>
                    
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                        {displayProducts.map(product => (
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
            </div>

            {/* SECCIÓN 2: REGALAR CON CARIÑO - HISTORIA DE JAN Y VALENTINA */}
            <div className="w-full bg-[#FAE1EF] py-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white/20 rotate-12 translate-x-1/2"></div>
                <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-20">
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <span className="text-pink-600 text-[11px] font-black tracking-[0.6em] uppercase mb-8 block">Jan & Valentina Presentan</span>
                        <h2 className="text-6xl md:text-9xl font-black text-black tracking-tighter uppercase italic mb-10 leading-none">Regalar con <br/><span className="text-pink-600">Cariño</span></h2>
                        <p className="text-gray-700 text-xl font-light italic mb-12 leading-relaxed max-w-xl">
                            "Jan y Valentina comparten actos de amor que inspiran nuestra belleza. En Bella Perfumería creemos que un regalo es más que un objeto; es una emoción compartida."
                        </p>
                        <button 
                            onClick={() => onNavigate('products', 'all')}
                            className="bg-black text-white px-16 py-6 text-[11px] font-black uppercase tracking-widest hover:bg-pink-600 transition-all shadow-2xl rounded-sm"
                        >
                            VER COLECCIÓN DE REGALOS
                        </button>
                    </div>
                    <div className="lg:w-1/2 flex justify-center">
                        <img 
                            src={getImg(48908)} 
                            className="w-[400px] h-auto drop-shadow-[0_20px_50px_rgba(219,39,119,0.3)] animate-float" 
                            alt="Historia de Cariño" 
                        />
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-12">
                <InteractiveCatalogSection onNavigate={onNavigate} />
            </div>

            <div className="container mx-auto px-4 md:px-12">
                <FeaturesSection />
            </div>

            <style>{`
                @keyframes float { 0% { transform: translateY(0); } 50% { transform: translateY(-20px); } 100% { transform: translateY(0); } }
                .animate-float { animation: float 6s ease-in-out infinite; }
            `}</style>
        </div>
    );
};

export default ProductList;
