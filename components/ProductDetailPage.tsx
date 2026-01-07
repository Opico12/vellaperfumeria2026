
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

const TruckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M9 17a2 2 0 10-4 0 2 2 0 004 0zM19 17a2 2 0 10-4 0 2 2 0 004 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h8a1 1 0 001-1z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h2a1 1 0 001-1V7.572a1 1 0 00-.218-.671l-1.5-2.25a1 1 0 00-.868-.451H13v11z" />
    </svg>
);

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product, currency, onAddToCart, onQuickAddToCart, onProductSelect, onQuickView, onNavigate }) => {
    const btnRef = useRef<HTMLButtonElement>(null);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    
    useEffect(() => { window.scrollTo(0, 0); }, [product]);

    // PROTECCIÓN CONTRA PANTALLA GRIS: Si no hay producto, redirigimos o mostramos mensaje
    if (!product) {
        return (
            <div className="container mx-auto px-4 py-32 text-center">
                <h2 className="text-2xl font-black uppercase tracking-widest mb-6 text-gray-400">Seleccionando tu Belleza...</h2>
                <button 
                    onClick={() => onNavigate('products', 'all')}
                    className="bg-black text-white px-12 py-4 text-[11px] font-black uppercase tracking-widest"
                >
                    Ir a la Tienda
                </button>
            </div>
        );
    }

    const relatedProducts = allProducts
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    const isDiscounted = product.regularPrice && product.regularPrice > product.price;

    return (
        <div className="container mx-auto px-4 md:px-12 py-12 animate-fade-in font-sans">
            <div className="grid lg:grid-cols-12 gap-16">
                
                {/* Columna Visual */}
                <div className="lg:col-span-7">
                    <div 
                        className="relative bg-[#f9f9f9] rounded-sm overflow-hidden cursor-zoom-in group aspect-[4/5] flex items-center justify-center p-12"
                        onClick={() => setIsLightboxOpen(true)}
                    >
                        <img 
                            src={product.imageUrl} 
                            alt={product.name} 
                            className="max-w-full max-h-full object-contain mix-blend-multiply transition-transform duration-1000 group-hover:scale-105" 
                        />
                    </div>
                </div>

                {/* Columna Información */}
                <div className="lg:col-span-5 flex flex-col">
                    <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 mb-8">
                        <button onClick={() => onNavigate('home')} className="hover:text-black">Inicio</button>
                        <span>/</span>
                        <button onClick={() => onNavigate('products', product.category)} className="hover:text-black">{product.category}</button>
                    </nav>

                    <span className="text-pink-600 text-[11px] font-black tracking-[0.4em] uppercase mb-4 block">{product.brand}</span>
                    <h1 className="text-4xl md:text-5xl font-black text-black tracking-tighter uppercase italic mb-8 leading-tight">
                        {product.name}
                    </h1>

                    <div className="flex items-center gap-2 mb-8">
                        {[...Array(5)].map((_, i) => (
                            <StarIcon key={i} className={`w-4 h-4 ${i < Math.floor(product.rating || 5) ? 'text-amber-400' : 'text-gray-200'}`} />
                        ))}
                    </div>

                    <div className="flex items-baseline gap-6 mb-10">
                        <span className="text-4xl font-black tracking-tighter text-black">{formatCurrency(product.price, currency)}</span>
                        {isDiscounted && (
                            <span className="text-xl text-gray-300 line-through font-light">{formatCurrency(product.regularPrice!, currency)}</span>
                        )}
                    </div>

                    <div className="prose prose-sm max-w-none mb-12">
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
                            Añadir a la Bolsa
                        </button>
                        <div className="flex items-center justify-center gap-6 py-6 border-t border-gray-100">
                             <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-gray-400">
                                <TruckIcon /> Envío VIP Garantizado
                             </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Productos Relacionados */}
            {relatedProducts.length > 0 && (
                <section className="mt-32">
                    <div className="flex items-center gap-8 mb-16">
                         <h2 className="text-3xl font-black text-black uppercase tracking-tighter italic">Completa tu <span className="text-pink-600">Ritual</span></h2>
                         <div className="h-[1px] bg-gray-100 flex-grow"></div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
