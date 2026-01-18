
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
    
    const productosCompletos = allProducts;
    const neceserOffer = allProducts.find(p => p.id === 48908);

    return (
        <div className="space-y-32 pb-20 bg-white">
            <HeroBanner onNavigate={onNavigate} />

            {/* SECCIÓN 1: GALERÍA DE SASTRERÍA GALA 2026 */}
            <div className="container mx-auto px-4 md:px-12">
                <section>
                    <div className="text-center mb-20">
                        <span className="text-rose-600 text-[11px] font-black tracking-[0.8em] uppercase mb-4 block italic">Colección Haute Couture Estocolmo</span>
                        <h3 className="text-5xl md:text-8xl font-black text-black tracking-tighter uppercase italic leading-none">Boutique <span className="text-rose-600">Gala</span></h3>
                        <div className="h-[4px] w-24 bg-gradient-to-r from-rose-600 to-pink-500 mx-auto mt-10 rounded-full"></div>
                    </div>
                    
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                        {productosCompletos.map(product => (
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

            {/* SECCIÓN 2: EL HILO DEL CARIÑO - CAMBIADO A FONDO CLARO VIVO */}
            <div className="w-full bg-[#FFF5F8] py-32 relative overflow-hidden border-y border-pink-100">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-rose-600/5 rotate-12 translate-x-1/2"></div>
                <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-20">
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <span className="text-rose-600 text-[11px] font-black tracking-[0.6em] uppercase mb-8 block">El Hilo de Jan & Valentina</span>
                        <h2 className="text-6xl md:text-9xl font-black text-black tracking-tighter uppercase italic mb-10 leading-none">Vestir con <br/><span className="text-rose-600">Cariño</span></h2>
                        <p className="text-gray-600 text-xl font-light italic mb-12 leading-relaxed max-w-xl">
                            "Jan y Valentina entienden que cada prenda es un lenguaje. En nuestro Atelier, cada puntada es un acto de amor que une la tradición de la sastrería con la vanguardia del estilo personal."
                        </p>
                        <button onClick={() => onNavigate('regalos')} className="bg-rose-600 text-white px-16 py-6 text-[11px] font-black uppercase tracking-widest hover:bg-black transition-all shadow-2xl rounded-sm">
                            RESERVAR ASESORÍA
                        </button>
                    </div>
                    <div className="lg:w-1/2 flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-rose-600/20 blur-[100px] rounded-full"></div>
                            <img src={getImg(48954)} className="w-[450px] mx-auto relative z-10 drop-shadow-[0_20px_50px_rgba(225,29,72,0.3)] animate-float" alt="Reloj Boutique" />
                        </div>
                    </div>
                </div>
            </div>

            {/* SECCIÓN 3: OFERTA ACCESORIO - AHORA MÁS COLORIDA */}
            {neceserOffer && (
                <div className="container mx-auto px-4 md:px-12">
                    <div className="bg-white p-12 md:p-24 rounded-sm flex flex-col md:flex-row items-center gap-20 border-2 border-rose-50 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rose-600 to-pink-500"></div>
                        <div className="md:w-1/3">
                            <img src={neceserOffer.imageUrl} className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-lg" alt="Neceser Boutique" />
                        </div>
                        <div className="md:w-2/3 text-center md:text-left">
                            <span className="bg-rose-600 text-white text-[10px] font-black px-8 py-3 uppercase tracking-[0.5em] mb-10 inline-block shadow-xl">DETALLE ATELIER</span>
                            <h3 className="text-5xl md:text-7xl font-black text-black uppercase tracking-tighter italic mb-8 leading-none">Neceser Velvet Boutique</h3>
                            <p className="text-gray-500 text-xl italic mb-12 max-w-lg leading-relaxed">
                                Complemento exclusivo en terciopelo orquídea. Un toque de distinción para organizar sus accesorios más preciosos. <span className="text-rose-600 font-black">10.99€</span> por cada 20€ de compra.
                            </p>
                            <button onClick={() => onAddToCart(neceserOffer, null, null)} className="bg-black text-white px-12 py-5 text-[11px] font-black uppercase tracking-widest hover:bg-rose-600 transition-all shadow-lg">AÑADIR A MI SELECCIÓN</button>
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
