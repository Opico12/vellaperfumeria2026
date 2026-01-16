
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
    
    // Curación de la página de inicio para máxima calidad visual
    const featuredPerfumes = allProducts.filter(p => p.category === 'perfume').slice(0, 4);
    const featuredMakeup = allProducts.filter(p => p.category === 'makeup').slice(8, 12);
    const featuredSkincare = allProducts.filter(p => p.category === 'skincare').slice(4, 8);

    return (
        <div className="space-y-32 pb-20">
            <HeroBanner onNavigate={onNavigate} />

            {/* SECCIÓN 1: FRAGANCIAS MAESTRAS */}
            <div className="container mx-auto px-4 md:px-12">
                <section>
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="text-left">
                            <span className="text-pink-600 text-[10px] font-black tracking-[0.7em] uppercase mb-4 block underline underline-offset-8 decoration-black">Edición 2026</span>
                            <h3 className="text-4xl md:text-7xl font-black text-black tracking-tighter uppercase italic">Fragancias <span className="text-pink-600">Eternas</span></h3>
                            <p className="mt-4 text-gray-400 font-light italic text-sm tracking-widest max-w-2xl uppercase">Un viaje olfativo desde los bosques suecos hasta el corazón del Mediterráneo.</p>
                        </div>
                        <button onClick={() => onNavigate('products', 'perfume')} className="bg-black text-white text-[9px] font-black uppercase tracking-[0.4em] px-10 py-5 hover:bg-pink-600 transition-all shadow-lg">EXPLORAR TODO</button>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                        {featuredPerfumes.map(product => (
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

            {/* SECCIÓN 2: MAQUILLAJE DE ALTA GAMA */}
            <div className="w-full bg-[#FAE1EF]/20 py-32 border-y border-pink-100">
                <div className="container mx-auto px-4 md:px-12">
                    <section>
                        <div className="flex flex-col md:flex-row items-center gap-20">
                            <div className="md:w-1/2 text-left">
                                <h3 className="text-5xl md:text-8xl font-black text-black tracking-tighter uppercase italic mb-8 leading-none">Color & <br/> <span className="text-pink-600">Seducción</span></h3>
                                <p className="text-gray-500 text-lg font-light italic tracking-widest uppercase mb-12 leading-relaxed">
                                    Pigmentos inteligentes y texturas de seda para la mujer que domina su destino.
                                </p>
                                <button onClick={() => onNavigate('products', 'makeup')} className="bg-black text-white text-[10px] font-black uppercase tracking-widest px-12 py-6 hover:bg-pink-600 transition-all shadow-xl">DESCUBRIR THE ONE</button>
                            </div>
                            <div className="md:w-1/2 grid grid-cols-2 gap-8">
                                {featuredMakeup.map(product => (
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
                    </section>
                </div>
            </div>

            {/* SECCIÓN 3: CIENCIA FACIAL NOVAGE+ */}
            <div className="container mx-auto px-4 md:px-12">
                <section>
                    <div className="text-center mb-24">
                         <span className="text-pink-600 text-[10px] font-black tracking-[0.8em] uppercase mb-6 block">Biotecnología Avanzada</span>
                         <h3 className="text-4xl md:text-6xl font-black text-black tracking-tighter uppercase italic">Ritual <span className="text-pink-600">Bio-Activo</span></h3>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                        {featuredSkincare.map(product => (
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

            <div className="container mx-auto px-4 md:px-12">
                <FeaturesSection />
            </div>

            <div className="container mx-auto px-4 md:px-12">
                <InteractiveCatalogSection onNavigate={onNavigate} />
            </div>
        </div>
    );
};

export default ProductList;
