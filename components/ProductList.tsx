
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
    
    // Filtro de las novedades prioritarias
    const novedades = allProducts.filter(p => [47718, 46047, 48650, 48908, 47005].includes(p.id));
    const specialOffer = allProducts.find(p => p.id === 48953);

    return (
        <div className="space-y-40 pb-20">
            <HeroBanner onNavigate={onNavigate} />

            {/* NOVEDADES LANZAMIENTO */}
            <div className="container mx-auto px-4 md:px-12">
                <section>
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="text-left">
                            <span className="text-pink-600 text-[10px] font-black tracking-[0.8em] uppercase mb-4 block underline underline-offset-8 decoration-black italic">Estrenos 2026</span>
                            <h3 className="text-5xl md:text-8xl font-black text-black tracking-tighter uppercase italic leading-none">Pura <br/> <span className="text-pink-600">Esencia</span></h3>
                            <p className="mt-6 text-gray-400 font-light italic text-base tracking-widest max-w-2xl uppercase">Tus códigos reales de Oriflame, ahora en Vellaperfumería.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
                        {novedades.map(product => (
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

            {/* BANNER ENVOLTORIOS - EL ARTE DE REGALAR */}
            <div className="w-full bg-black py-40 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1513201099705-a9746e1e201f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
                <div className="container mx-auto px-4 md:px-12 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-24">
                        <div className="lg:w-1/2 text-center lg:text-left">
                            <span className="text-pink-500 text-[11px] font-black tracking-[0.6em] uppercase mb-8 block">LA HISTORIA DE DAR CON AMOR</span>
                            <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter uppercase italic mb-10 leading-[0.9]">El Arte de <br/><span className="text-pink-600">Regalar</span></h2>
                            <p className="text-gray-400 text-xl font-light italic mb-12 leading-relaxed max-w-xl">
                                Convierte cada compra en un acto de amor inspirado. Jan y Valentina nos invitan a descubrir la belleza de compartir momentos únicos.
                            </p>
                            <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
                                <div className="bg-white/5 border border-white/10 p-8 rounded-sm text-center w-48 hover:bg-white/10 transition-colors">
                                    <img src={getImg(48975)} className="h-20 mx-auto mb-6 drop-shadow-2xl" alt="Bolsa Festive" />
                                    <span className="text-white text-[10px] font-black uppercase tracking-widest">Bolsa Festive</span>
                                    <p className="text-pink-500 text-xs font-black mt-2">3,99€</p>
                                </div>
                                <div className="bg-white/5 border border-white/10 p-8 rounded-sm text-center w-48 hover:bg-white/10 transition-colors">
                                    <img src={getImg(48970)} className="h-20 mx-auto mb-6 drop-shadow-2xl" alt="Caja Festive" />
                                    <span className="text-white text-[10px] font-black uppercase tracking-widest">Caja Premium</span>
                                    <p className="text-pink-500 text-xs font-black mt-2">10€</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 flex justify-center relative">
                            <div className="absolute inset-0 bg-pink-500/20 blur-[120px] rounded-full"></div>
                            <img src={getImg(48970)} className="w-[500px] relative z-10 animate-float drop-shadow-[0_0_80px_rgba(255,255,255,0.2)]" alt="Regalo Oriflame" />
                        </div>
                    </div>
                </div>
            </div>

            {/* OFERTA NECESSAIRE */}
            {specialOffer && (
                <div className="container mx-auto px-4 md:px-12">
                    <div className="bg-zinc-950 p-16 md:p-32 rounded-sm flex flex-col md:flex-row items-center gap-24 border border-white/5 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,100,200,0.05),transparent)] pointer-events-none"></div>
                        <div className="md:w-1/3 relative">
                            <img src={specialOffer.imageUrl} className="w-full h-auto drop-shadow-[0_0_60px_rgba(255,100,200,0.2)] group-hover:scale-110 transition-transform duration-700" alt="Necessaire" />
                        </div>
                        <div className="md:w-2/3 text-center md:text-left z-10">
                            <span className="bg-pink-600 text-white text-[10px] font-black px-6 py-2 uppercase tracking-[0.5em] mb-10 inline-block">SÚPER PRECIO LANZAMIENTO</span>
                            <h3 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter italic mb-8 leading-none">{specialOffer.name}</h3>
                            <p className="text-gray-400 text-xl italic mb-12 max-w-xl leading-relaxed">
                                {specialOffer.description}
                            </p>
                            <div className="flex items-center gap-10 justify-center md:justify-start">
                                <div className="flex flex-col">
                                    <span className="text-gray-500 line-through text-lg font-light italic">12.99€</span>
                                    <span className="text-6xl font-black text-pink-500 tracking-tighter">10.99€</span>
                                </div>
                                <button onClick={() => onAddToCart(specialOffer, null, null)} className="bg-white text-black px-16 py-6 text-[11px] font-black uppercase tracking-widest hover:bg-pink-600 hover:text-white transition-all shadow-2xl">AÑADIR A LA BOLSA</button>
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
                @keyframes float { 0% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-30px) rotate(2deg); } 100% { transform: translateY(0) rotate(0deg); } }
                .animate-float { animation: float 10s ease-in-out infinite; }
            `}</style>
        </div>
    );
};

export default ProductList;
