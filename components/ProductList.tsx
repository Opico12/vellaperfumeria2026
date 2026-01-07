
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
    
    // FILTROS TOTALES POR SECCIONES ESTRATÉGICAS
    const onColourHot = allProducts.filter(p => p.subCategory === 'OnColour');
    const magnoliaVip = allProducts.filter(p => p.subCategory === 'Milk & Honey Gold');
    const premiumSkincare = allProducts.filter(p => p.category === 'skincare');

    return (
        <div className="space-y-32 pb-20">
            <HeroBanner onNavigate={onNavigate} />

            {/* SECCIÓN 1: MEGA OFERTAS ONCOLOUR (+100 PRODUCTOS DISPONIBLES) */}
            <div className="container mx-auto px-4 md:px-12">
                <section>
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="text-left">
                            <span className="text-pink-600 text-[10px] font-black tracking-[0.7em] uppercase mb-4 block underline underline-offset-8 decoration-black">Edición 2026 Sin Límites</span>
                            <h3 className="text-4xl md:text-7xl font-black text-black tracking-tighter uppercase italic">Universo <span className="text-pink-600">OnColour</span></h3>
                            <p className="mt-4 text-gray-400 font-light italic text-sm tracking-widest max-w-2xl uppercase">Explora nuestro catálogo infinito de color. Pigmentación pura y ofertas agresivas en todo el inventario.</p>
                        </div>
                        <button onClick={() => onNavigate('products', 'makeup')} className="bg-black text-white text-[9px] font-black uppercase tracking-[0.4em] px-8 py-4 hover:bg-pink-600 transition-all shadow-lg">VER TODO ONCOLOUR</button>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                        {onColourHot.slice(0, 12).map(product => (
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

            {/* SECCIÓN 2: MILK & HONEY MAGNOLIA (REGALOS SUPREMOS) */}
            <div className="w-full bg-[#FAE1EF]/20 py-32 border-y border-pink-100 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-12">
                    <section>
                        <div className="flex flex-col md:flex-row items-center gap-16 mb-24">
                            <div className="md:w-1/2 text-left">
                                <h3 className="text-5xl md:text-8xl font-black text-black tracking-tighter uppercase italic mb-8 leading-none">Magnolia <br/> <span className="text-pink-600">Essence</span></h3>
                                <p className="text-gray-500 text-lg font-light italic tracking-widest uppercase mb-10 leading-relaxed">
                                    La elegancia de la magnolia se une a la nutrición de la leche y la miel. El regalo perfecto para quienes buscan lo extraordinario.
                                </p>
                                <button onClick={() => onNavigate('regalos')} className="bg-black text-white text-[10px] font-black uppercase tracking-widest px-10 py-5 hover:bg-pink-600 transition-all shadow-xl">IR A SECCIÓN REGALOS</button>
                            </div>
                            <div className="md:w-1/2 grid grid-cols-2 gap-8">
                                {magnoliaVip.map(product => (
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

            {/* SECCIÓN 3: CIENCIA FACIAL PREMIUM */}
            <div className="container mx-auto px-4 md:px-12">
                <section>
                    <div className="text-center mb-24">
                         <span className="text-pink-600 text-[10px] font-black tracking-[0.8em] uppercase mb-6 block">Tratamientos Estocolmo Novage+</span>
                         <h3 className="text-4xl md:text-6xl font-black text-black tracking-tighter uppercase italic">Ciencia <span className="text-pink-600">Facial VIP</span></h3>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                        {premiumSkincare.map(product => (
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
