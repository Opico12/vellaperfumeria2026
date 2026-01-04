
import React, { useRef, useState } from 'react';
import { type Currency, formatCurrency } from './currency';
import type { Product } from './types';

// --- ICONS ---
const HeartIcon: React.FC<{isFilled: boolean}> = ({ isFilled }) => (
    <svg className="h-5 w-5" fill={isFilled ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
    </svg>
);

const StarIcon: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className, style }) => (
    <svg className={`w-3 h-3 ${className}`} style={style} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const CartPlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const EyeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
);


export const ProductCard: React.FC<{
    product: Product;
    currency: Currency;
    onAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onQuickAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onProductSelect: (product: Product) => void;
    onQuickView: (product: Product) => void;
}> = ({ product, currency, onAddToCart, onQuickAddToCart, onProductSelect, onQuickView }) => {
    const btnRef = useRef<HTMLButtonElement>(null);
    const [isWishlisted, setIsWishlisted] = useState(false);

    const isDiscounted = product.regularPrice && product.regularPrice > product.price;
    const isNew2026 = product.tag === 'NOVEDAD';

    const handleToggleWishlist = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setIsWishlisted(prev => !prev);
    };

    const renderStars = () => {
        if (!product.rating) return null;
        const fullStars = Math.floor(product.rating);
        const halfStar = product.rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
        return (
            <div className="flex items-center" title={`${product.rating}/5 ★`}>
                {[...Array(fullStars)].map((_, i) => <StarIcon key={`full-${i}`} className="text-amber-400" />)}
                {halfStar && <StarIcon key="half" className="text-amber-400" style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0% 100%)' }} />}
                {[...Array(emptyStars)].map((_, i) => <StarIcon key={`empty-${i}`} className="text-gray-300" />)}
            </div>
        );
    };
    
    const handleAddToCartClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        if (product.variants && Object.keys(product.variants).length > 0) {
            onQuickView(product);
        } else {
            onQuickAddToCart(product, btnRef.current, null);
        }
    };


    return (
        <div 
            className="bg-white flex flex-col group border-transparent hover:border-gray-100 border transition-all duration-500 h-full relative"
            onClick={() => onProductSelect(product)}
        >
            {/* Minimalist Badges */}
            <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                {isNew2026 && (
                    <span className="bg-black text-white text-[8px] font-black px-3 py-1 uppercase tracking-widest">
                        2026
                    </span>
                )}
                {isDiscounted && (
                    <span className="bg-pink-600 text-white text-[8px] font-black px-3 py-1 uppercase tracking-widest">
                        OFF
                    </span>
                )}
            </div>

            <div className="relative cursor-pointer overflow-hidden aspect-[3/4] bg-[#f9f9f9]">
                <img src={product.imageUrl} alt={product.name} className="w-full h-full object-contain mix-blend-multiply p-6 transition-transform duration-700 group-hover:scale-105" />

                {/* Hover Overlay Actions - Luxury Style */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <button
                        onClick={handleToggleWishlist}
                        className={`p-3 rounded-full shadow-xl transition-all ${isWishlisted ? 'bg-pink-600 text-white' : 'bg-white text-black hover:bg-black hover:text-white'}`}
                        aria-label="Wishlist"
                    >
                        <HeartIcon isFilled={isWishlisted} />
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); onQuickView(product); }}
                        className="p-3 rounded-full bg-white text-black shadow-xl hover:bg-black hover:text-white transition-all"
                        aria-label="Quick View"
                    >
                        <EyeIcon />
                    </button>
                </div>
            </div>

            <div className="pt-6 pb-4 flex flex-col items-center text-center">
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2">{product.brand}</span>
                <h3 className="text-xs font-bold text-black uppercase tracking-wider mb-3 px-2 line-clamp-1">
                    {product.name}
                </h3>
                
                <div className="flex flex-col items-center gap-1">
                    {isDiscounted && (
                        <span className="text-[10px] text-gray-400 line-through tracking-widest">{formatCurrency(product.regularPrice!, currency)}</span>
                    )}
                    <span className={`text-sm font-black tracking-widest ${isDiscounted ? 'text-pink-600' : 'text-black'}`}>
                        {formatCurrency(product.price, currency)}
                    </span>
                </div>

                <button
                    ref={btnRef}
                    onClick={handleAddToCartClick}
                    className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 text-[10px] font-black uppercase tracking-[0.3em] text-pink-600 hover:text-black"
                >
                    + Añadir a la bolsa
                </button>
            </div>
        </div>
    );
};
