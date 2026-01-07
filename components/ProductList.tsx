
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
    
    // Filtrado manual para asegurar CERO REPETICIÓN en la home
    // Sección 1: OnColour (Maquillaje)
    const section1OnColour = allProducts.filter(p => p.subCategory === 'OnColour').slice(0, 4);
    
    // Sección 2: Cuidado Orgánico (Diferente a la sección 1)
    const section2Magnolia = allProducts.filter(p => 
        p.subCategory === 'Milk & Honey Gold' && 
        p.category === 'personal-care' &&
        !section1OnColour.some(s1 => s1.id === p.id)
    ).slice(0, 2);
    
    // Sección 3: Premium (Diferente a las anteriores)
    const section3Premium = allProducts.filter(p => 
        (p.subCategory === 'Giordani Gold' || p.subCategory === 'Novage+') &&
        !section1OnColour.some(s1 => s1.id === p.id) &&
        !section2Magnolia.some(s2 => s2.id === p.id)
    ).slice(0, 4);

    return (
        <div className="space-y-32 pb-20">
            <HeroBanner onNavigate={onNavigate} />

            {/* SECCIÓN 1 */}
            <div className="container mx-auto px-4 md:px-12">
                <section>
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="text-left">
                            <span className="text-pink-600 text-[10px] font-black tracking-[0.7em] uppercase mb-4 block underline underline-offset-8 decoration-black">Tendencia 2026</span>
                            <h3 className="text-4xl md:text-7xl font-black text-black tracking-tighter uppercase italic">Universo <span className="text-pink-600">OnColour</span></h3>
                            <p className="mt-4 text-gray-400 font-light italic text-sm tracking-widest max-w-2xl uppercase">Color vibrante sin compromisos. La esencia de Estocolmo en tu neceser.</p>
                        </div>
                        <button onClick={() => onNavigate('products', 'makeup')} className="bg-black text-white text-[9px] font-black uppercase tracking-[0.4em] px-8 py-4 hover:bg-pink-600 transition-all shadow-lg">VER MAQUILLAJE</button>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                        {section1OnColour.map(product => (
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

            {/* SECCIÓN 2 */}
            <div className="w-full bg-[#FAE1EF]/20 py-32 border-y border-pink-100">
                <div className="container mx-auto px-4 md:px-12">
                    <section>
                        <div className="flex flex-col md:flex-row items-center gap-16">
                            <div className="md:w-1/2 text-left">
                                <h3 className="text-5xl md:text-8xl font-black text-black tracking-tighter uppercase italic mb-8 leading-none">Cuidado <br/> <span className="text-pink-600">Orgánico</span></h3>
                                <p className="text-gray-500 text-lg font-light italic tracking-widest uppercase mb-10 leading-relaxed">
                                    Extractos de leche y miel pura para una nutrición que atraviesa los sentidos.
                                </p>
                                <button onClick={() => onNavigate('products', 'personal-care')} className="bg-black text-white text-[10px] font-black uppercase tracking-widest px-10 py-5 hover:bg-pink-600 transition-all shadow-xl">DESCUBRIR LÍNEA</button>
                            </div>
                            <div className="md:w-1/2 grid grid-cols-2 gap-8">
                                {section2Magnolia.map(product => (
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

            {/* SECCIÓN 3 */}
            <div className="container mx-auto px-4 md:px-12">
                <section>
                    <div className="text-center mb-24">
                         <span className="text-pink-600 text-[10px] font-black tracking-[0.8em] uppercase mb-6 block">Exclusividad Vellaperfumería</span>
                         <h3 className="text-4xl md:text-6xl font-black text-black tracking-tighter uppercase italic">Lujo <span className="text-pink-600">Sin Límites</span></h3>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                        {section3Premium.map(product => (
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
