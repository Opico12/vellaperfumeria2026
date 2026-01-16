
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
    
    // Curación específica para la página de inicio
    const featuredPerfumes = allProducts.filter(p => [31119, 31495, 31493, 40003].includes(p.id)).slice(0, 4);
    
    // IDs de Novage+ corregidos (Ritual Bioactivo)
    const bioactiveIds = [33979, 42426, 41029, 41034];
    const bioactiveProducts = allProducts.filter(p => bioactiveIds.includes(p.id));

    const featuredMakeup = allProducts.filter(p => p.category === 'makeup').slice(5, 9);

    return (
        <div className="space-y-32 pb-20">
            <HeroBanner onNavigate={onNavigate} />

            {/* SECCIÓN 1: FRAGANCIAS MAESTRAS */}
            <div className="container mx-auto px-4 md:px-12">
                <section>
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="text-left">
                            <span className="text-pink-600 text-[10px] font-black tracking-[0.7em] uppercase mb-4 block underline underline-offset-8 decoration-black">Aromas de Estocolmo</span>
                            <h3 className="text-4xl md:text-7xl font-black text-black tracking-tighter uppercase italic">Fragancias <span className="text-pink-600">Eternas</span></h3>
                            <p className="mt-4 text-gray-400 font-light italic text-sm tracking-widest max-w-2xl uppercase">Desde la elegancia de Volare hasta la pureza de Elvie.</p>
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

            {/* SECCIÓN 2: RITUAL BIOACTIVO NOVAGE+ (CORREGIDO) */}
            <div className="w-full bg-[#fdfdfd] py-32 border-y border-gray-100">
                <div className="container mx-auto px-4 md:px-12">
                    <section>
                        <div className="text-center mb-24">
                             <span className="text-pink-600 text-[10px] font-black tracking-[0.8em] uppercase mb-6 block">Biotecnología Facial</span>
                             <h3 className="text-4xl md:text-6xl font-black text-black tracking-tighter uppercase italic">Ritual <span className="text-pink-600">Bio-Activo</span></h3>
                             <p className="mt-6 text-gray-500 uppercase tracking-widest text-[11px] font-bold">La solución antiarrugas definitiva con Novage+ de Oriflame</p>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                            {bioactiveProducts.map(product => (
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
            </div>

            {/* SECCIÓN 3: MAQUILLAJE DE ALTA GAMA */}
            <div className="container mx-auto px-4 md:px-12">
                <section>
                     <div className="flex flex-col md:flex-row items-center gap-20">
                            <div className="md:w-1/2 text-left">
                                <h3 className="text-5xl md:text-8xl font-black text-black tracking-tighter uppercase italic mb-8 leading-none">Color & <br/> <span className="text-pink-600">Seducción</span></h3>
                                <p className="text-gray-500 text-lg font-light italic tracking-widest uppercase mb-12 leading-relaxed">
                                    Define tu estilo con los tonos más icónicos de The ONE y Giordani Gold.
                                </p>
                                <button onClick={() => onNavigate('products', 'makeup')} className="bg-black text-white text-[10px] font-black uppercase tracking-widest px-12 py-6 hover:bg-pink-600 transition-all shadow-xl">DESCUBRIR TIENDA</button>
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
