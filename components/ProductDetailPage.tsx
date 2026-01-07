
import React, { useRef, useState, useEffect } from 'react';
import { ProductCard } from './ProductCard';
import type { Product, View } from './types';
import { type Currency, formatCurrency } from './currency';
import { allProducts } from './products';
import ImageLightbox from './ImageLightbox';

interface ProductDetailPageProps {
    product: Product | null;
    currency: Currency;
    onAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onQuickAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onProductSelect: (product: Product) => void;
    onQuickView: (product: Product) => void;
    onNavigate: (view: View, payload?: any) => void;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product, currency, onAddToCart, onQuickAddToCart, onProductSelect, onQuickView, onNavigate }) => {
    const btnRef = useRef<HTMLButtonElement>(null);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    
    useEffect(() => { window.scrollTo(0, 0); }, [product]);

    // PROTECCIÓN CRÍTICA: Si el producto no es válido, redirigimos o mostramos cargando elegantemente
    if (!product || typeof product !== 'object') {
        return (
            <div className="container mx-auto px-4 py-40 text-center animate-fade-in">
                <div className="animate-pulse space-y-8">
                    <div className="w-20 h-20 bg-gray-50 border border-gray-100 rounded-full mx-auto flex items-center justify-center">
                        <svg className="w-8 h-8 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <h2 className="text-xl font-black uppercase tracking-[0.5em] text-gray-300 italic">Preparando tu Experiencia...</h2>
                </div>
                <button 
                    onClick={() => onNavigate('products', 'all')}
                    className="mt-12 bg-black text-white px-12 py-5 text-[10px] font-black uppercase tracking-[0.4em] hover:bg-pink-600 transition-all shadow-xl"
                >
                    Volver a la Tienda
                </button>
            </div>
        );
    }

    const relatedProducts = allProducts
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    return (
        <div className="container mx-auto px-4 md:px-12 py-12 animate-fade-in font-sans">
            <div className="grid lg:grid-cols-12 gap-16">
                {/* Visual */}
                <div className="lg:col-span-7">
                    <div 
                        className="relative bg-[#fcfcfc] rounded-sm overflow-hidden cursor-zoom-in group aspect-[4/5] flex items-center justify-center p-12 border border-gray-50 shadow-inner"
                        onClick={() => setIsLightboxOpen(true)}
                    >
                        <img 
                            src={product.imageUrl} 
                            alt={product.name} 
                            className="max-w-full max-h-full object-contain mix-blend-multiply transition-transform duration-1000 group-hover:scale-105" 
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all pointer-events-none"></div>
                    </div>
                </div>

                {/* Info */}
                <div className="lg:col-span-5 flex flex-col">
                    <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 mb-8">
                        <button onClick={() => onNavigate('home')} className="hover:text-black transition-colors">Inicio</button>
                        <span>/</span>
                        <button onClick={() => onNavigate('products', product.category)} className="hover:text-black transition-colors">{product.category}</button>
                    </nav>

                    <span className="text-pink-600 text-[11px] font-black tracking-[0.5em] uppercase mb-4 block">{product.brand}</span>
                    <h1 className="text-4xl md:text-5xl font-black text-black tracking-tighter uppercase italic mb-8 leading-tight">
                        {product.name}
                    </h1>

                    <div className="flex items-baseline gap-6 mb-10">
                        <span className="text-4xl font-black tracking-tighter text-black">{formatCurrency(product.price, currency)}</span>
                        {product.regularPrice && product.regularPrice > product.price && (
                            <span className="text-xl text-gray-300 line-through font-light">{formatCurrency(product.regularPrice, currency)}</span>
                        )}
                    </div>

                    <div className="prose prose-sm max-w-none mb-12 border-l-2 border-pink-100 pl-6">
                        <p className="text-gray-500 text-base leading-relaxed font-light italic whitespace-pre-line">
                            {product.description}
                        </p>
                    </div>

                    <div className="space-y-4 mt-auto">
                        <button
                            ref={btnRef}
                            onClick={() => onAddToCart(product, btnRef.current, null)}
                            className="w-full bg-black text-white font-black py-6 px-12 text-[11px] uppercase tracking-[0.5em] hover:bg-pink-600 transition-all shadow-2xl active:scale-95"
                        >
                            Añadir a la Bolsa de Compra
                        </button>
                    </div>
                </div>
            </div>

            {relatedProducts.length > 0 && (
                <section className="mt-40">
                    <div className="flex items-center gap-8 mb-20">
                         <h2 className="text-3xl font-black text-black uppercase tracking-tighter italic shrink-0">Completa tu <span className="text-pink-600">Ritual</span></h2>
                         <div className="h-[1px] bg-gray-100 flex-grow"></div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                        {relatedProducts.map(rp => (
                            <ProductCard 
                                key={rp.id} 
                                product={rp} 
                                currency={currency} 
                                onAddToCart={onAddToCart} 
                                onQuickAddToCart={onQuickAddToCart} 
                                onProductSelect={onProductSelect} 
                                onQuickView={onQuickView} 
                            />
                        ))}
                    </div>
                </section>
            )}

            {isLightboxOpen && (
                <ImageLightbox imageUrl={product.imageUrl} altText={product.name} onClose={() => setIsLightboxOpen(false)} />
            )}
        </div>
    );
};

export default ProductDetailPage;
