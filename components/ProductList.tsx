
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
    
    // Mostramos TODOS los productos sin un máximo, priorizando los estelares para la carga visual inicial
    const estelares = allProducts;
    const sugarSpiceOffer = allProducts.find(p => p.id === 48908 || p.name.includes("Sugar & Spice"));

    return (
        <div className="space-y-40 pb-20 bg-white">
            <HeroBanner onNavigate={onNavigate} />

            {/* SECCIÓN 1: EL CATÁLOGO COMPLETO - GALERÍA BLANCA */}
            <div className="container mx-auto px-4 md:px-12">
                <section>
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="text-left">
                            <span className="text-pink-600 text-[10px] font-black tracking-[0.8em] uppercase mb-4 block underline underline-offset-8 decoration-black italic">Gala Oficial Estocolmo 2026</span>
                            <h3 className="text-5xl md:text-8xl font-black text-black tracking-tighter uppercase italic leading-[0.9]">Edición <br/> <span className="text-pink-600">Completa</span></h3>
                            <p className="mt-8 text-gray-400 font-light italic text-base tracking-widest max-w-2xl uppercase leading-relaxed">
                                Sin límites. Todas las referencias de Diamond Cellular, Novage+ y la nueva colección Eternal Glow disponibles para ti.
                            </p>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
                        {estelares.map(product => (
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

            {/* SECCIÓN 2: LA HISTORIA DE REGALAR CON CARIÑO (JAN & VALENTINA) */}
            <div className="w-full bg-black py-40 relative overflow-hidden">
                <div className="absolute inset-0 opacity-25 bg-[url('https://images.unsplash.com/photo-1513201099705-a9746e1e201f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
                <div className="container mx-auto px-4 md:px-12 relative z-10 text-center lg:text-left flex flex-col lg:flex-row items-center gap-24">
                    <div className="lg:w-1/2">
                        <span className="text-pink-500 text-[11px] font-black tracking-[0.6em] uppercase mb-8 block italic">Actos de Amor Real</span>
                        <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter uppercase italic mb-10 leading-[0.9]">Jan & <br/><span className="text-pink-600">Valentina</span></h2>
                        <p className="text-gray-300 text-xl font-light italic mb-12 leading-relaxed max-w-xl">
                            "Jan y Valentina comparten actos de amor inspirando belleza. El regalo perfecto es aquel que se entrega con cariño, protegiendo los tesoros más valiosos."
                        </p>
                        <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
                             <div className="p-10 bg-white/5 border border-white/10 rounded-sm text-center w-48 hover:bg-white/10 transition-all cursor-pointer" onClick={() => onNavigate('regalos')}>
                                <img src={getImg(48970)} className="h-24 mx-auto mb-6" alt="Caja Festive" />
                                <span className="text-white text-[10px] font-black uppercase tracking-widest">Sets Festive</span>
                             </div>
                             <div className="p-10 bg-white/5 border border-white/10 rounded-sm text-center w-48 hover:bg-white/10 transition-all cursor-pointer" onClick={() => onNavigate('regalos')}>
                                <img src={getImg(48954)} className="h-24 mx-auto mb-6" alt="Reloj Glitters" />
                                <span className="text-white text-[10px] font-black uppercase tracking-widest">Joyas Gala</span>
                             </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <img src={getImg(48954)} className="w-[500px] mx-auto drop-shadow-[0_0_80px_rgba(255,100,200,0.3)] animate-float" alt="Reloj Glitters of Love" />
                    </div>
                </div>
            </div>

            {/* SECCIÓN 3: OFERTA VINCULADA NECESER SUGAR & SPICE */}
            {sugarSpiceOffer && (
                <div className="container mx-auto px-4 md:px-12">
                    <div className="bg-zinc-950 p-16 md:p-32 rounded-sm flex flex-col md:flex-row items-center gap-24 border border-white/5 relative overflow-hidden group shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">
                        <div className="md:w-1/3 relative">
                            <img src={sugarSpiceOffer.imageUrl} className="w-full h-auto drop-shadow-[0_0_60px_rgba(255,100,200,0.3)] transition-transform group-hover:scale-105 duration-700" alt="Necessaire Sugar & Spice" />
                        </div>
                        <div className="md:w-2/3 text-center md:text-left z-10">
                            <span className="bg-pink-600 text-white text-[10px] font-black px-8 py-3 uppercase tracking-[0.5em] mb-12 inline-block shadow-lg italic">OFERTA DE TEMPORADA</span>
                            <h3 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter italic mb-10 leading-none">{sugarSpiceOffer.name}</h3>
                            <p className="text-gray-400 text-2xl italic mb-14 max-w-xl leading-relaxed">
                                Consíguelo por solo <span className="text-white">10.99€</span> por cada 20€ de compra en este catálogo. La sofisticación para guardar tus básicos de belleza.
                            </p>
                            <div className="flex items-center gap-12 justify-center md:justify-start">
                                <div className="flex flex-col">
                                    <span className="text-gray-500 line-through text-xl">12.99€</span>
                                    <span className="text-7xl font-black text-pink-500 tracking-tighter">10.99€</span>
                                </div>
                                <button onClick={() => onAddToCart(sugarSpiceOffer, null, null)} className="bg-white text-black px-20 py-8 text-[12px] font-black uppercase tracking-widest hover:bg-pink-600 hover:text-white transition-all shadow-2xl">AÑADIR AL PEDIDO</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="container mx-auto px-4 md:px-12">
                <FeaturesSection />
            </div>

            <div className="container mx-auto px-4 md:px-12">
                <InteractiveCatalogSection onNavigate={onNavigate} />
            </div>

            <style>{`
                @keyframes float { 0% { transform: translateY(0); } 50% { transform: translateY(-20px); } 100% { transform: translateY(0); } }
                .animate-float { animation: float 6s ease-in-out infinite; }
            `}</style>
        </div>
    );
};

export default ProductList;
