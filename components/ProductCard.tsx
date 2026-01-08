
import React, { useRef, useState } from 'react';
import { type Currency, formatCurrency } from './currency';
import type { Product } from './types';

// --- ICONS ---
const HeartIcon: React.FC<{isFilled: boolean}> = ({ isFilled }) => (
    <svg className="h-5 w-5" fill={isFilled ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
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

    const handleToggleWishlist = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setIsWishlisted(prev => !prev);
    };

    const handleAddToCartClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        onQuickAddToCart(product, btnRef.current, null);
    };


    return (
        <div 
            className="bg-white flex flex-col group border-transparent hover:border-gray-100 border transition-all duration-500 h-full relative text-left"
            onClick={() => onProductSelect(product)}
        >
            {/* Badges */}
            <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                {isDiscounted && (
                    <span className="bg-pink-600 text-white text-[8px] font-black px-3 py-1 uppercase tracking-widest shadow-lg">
                        OFF
                    </span>
                )}
            </div>

            <div className="relative cursor-pointer overflow-hidden aspect-[3/4] bg-[#fdfdfd] border-b border-gray-50">
                <img src={product.imageUrl} alt={product.name} className="w-full h-full object-contain mix-blend-multiply p-6 transition-transform duration-700 group-hover:scale-105" />

                {/* Hover Overlay */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <button
                        onClick={handleToggleWishlist}
                        className={`p-3 rounded-full shadow-2xl transition-all ${isWishlisted ? 'bg-pink-600 text-white' : 'bg-white text-black hover:bg-black hover:text-white'}`}
                        aria-label="Deseos"
                    >
                        <HeartIcon isFilled={isWishlisted} />
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); onQuickView(product); }}
                        className="p-3 rounded-full bg-white text-black shadow-2xl hover:bg-black hover:text-white transition-all"
                        aria-label="Vista rápida"
                    >
                        <EyeIcon />
                    </button>
                </div>
            </div>

            <div className="pt-6 pb-6 px-4 flex flex-col items-center text-center flex-grow">
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2">{product.brand}</span>
                <h3 className="text-[11px] font-black text-black uppercase tracking-wider mb-4 h-10 overflow-hidden line-clamp-2">
                    {product.name}
                </h3>
                
                <div className="flex flex-col items-center gap-1 mb-6">
                    {isDiscounted && (
                        <span className="text-[11px] text-gray-300 line-through tracking-widest font-light">{formatCurrency(product.regularPrice!, currency)}</span>
                    )}
                    <span className={`text-lg font-black tracking-tighter ${isDiscounted ? 'text-pink-600' : 'text-black'}`}>
                        {formatCurrency(product.price, currency)}
                    </span>
                </div>

                <button
                    ref={btnRef}
                    onClick={handleAddToCartClick}
                    className="w-full bg-black text-white text-[9px] font-black uppercase tracking-[0.4em] py-4 hover:bg-pink-600 transition-all shadow-xl active:scale-95"
                >
                    + Añadir a la bolsa
                </button>
            </div>
        </div>
    );
};
