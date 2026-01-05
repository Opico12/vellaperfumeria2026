
import React from 'react';
import type { View, Product } from './types';
import { allProducts } from './products';
import { ProductCard } from './ProductCard';
import HeroBanner from './HeroCarousel';
import type { Currency } from './currency';
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
    
    // BLOQUE 1: COFRES Y CAJAS (Caja Tender Care, Cofre Divine, Cofre Possess)
    const cofferBlock = allProducts.filter(p => [47000, 48001, 48003].includes(p.id));

    // BLOQUE 2: JOYERÍA Y NAVIDAD (Norrsken Collar, Pendientes, Reloj y CALCETINES)
    const luxuryAccessories = allProducts.filter(p => [46123, 46124, 45458, 46001].includes(p.id));

    // BLOQUE 3: PERFUMERÍA ICÓNICA (Love Potion Roja, Amber Elixir)
    const iconicFragrances = allProducts.filter(p => [36151, 46642, 42865, 40771].includes(p.id));

    return (
        <div className="space-y-24">
            <HeroBanner onNavigate={onNavigate} />

            {/* SECCIÓN 1: CAJAS Y COFRES DE REGALO */}
            <div className="container mx-auto px-4 md:px-12">
                <section>
                    <div className="text-center mb-16">
                        <span className="text-pink-600 text-[11px] font-black tracking-[0.6em] uppercase mb-4 block">Exclusivo Ella</span>
                        <h3 className="text-4xl md:text-6xl font-black text-black tracking-tighter uppercase italic">Cofres y <span className="text-pink-600">Cajas Regalo</span></h3>
                        <div className="w-20 h-1 bg-black mx-auto mt-8"></div>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-12">
                        {cofferBlock.map(product => (
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

            {/* SECCIÓN 2: JOYERÍA NORRSKEN Y CALCETINES */}
            <div className="container mx-auto px-4 md:px-12 bg-[#f9f9f9] py-24">
                <section>
                    <div className="text-center mb-16">
                         <h3 className="text-4xl md:text-5xl font-black text-black tracking-tighter uppercase italic">Joyería & <span className="text-pink-600">Navidad</span></h3>
                         <p className="mt-4 text-gray-500 font-light italic text-sm tracking-widest uppercase">Calcetines térmicos y piedras semipreciosas</p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {luxuryAccessories.map(product => (
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

            {/* SECCIÓN 3: ESENCIAS ROJAS Y ÁMBAR */}
            <div className="container mx-auto px-4 md:px-12">
                <section>
                    <div className="flex flex-col md:flex-row items-center justify-between mb-16 border-b border-gray-100 pb-8">
                        <h3 className="text-3xl font-black text-black tracking-tighter uppercase italic mb-4 md:mb-0">Colección <span className="text-pink-600">Fragancias Icónicas</span></h3>
                        <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Love Potion & Amber Elixir</div>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {iconicFragrances.map(product => (
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
            
            <FeaturesSection />
            <div className="container mx-auto px-4 md:px-12 pb-12">
                <InteractiveCatalogSection onNavigate={onNavigate} />
            </div>
        </div>
    );
};

export default ProductList;
