
import React, { useRef, useState } from 'react';
import { type Currency, formatCurrency } from './currency';
import type { Product } from './types';

const HeartIcon: React.FC<{isFilled: boolean}> = ({ isFilled }) => (
    <svg className="h-5 w-5" fill={isFilled ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
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
    
    return (
        <div 
            className="bg-white flex flex-col group border-transparent hover:border-pink-50 border transition-all duration-500 h-full relative text-left shadow-sm hover:shadow-xl rounded-sm overflow-hidden"
            onClick={() => onProductSelect(product)}
        >
            <div className="absolute top-3 left-3 z-10">
                <span className="bg-white/90 backdrop-blur-sm text-pink-700 text-[8px] font-black px-2 py-0.5 uppercase tracking-widest rounded-full border border-pink-100 shadow-sm">REF: {product.id}</span>
            </div>

            <div className="relative cursor-pointer overflow-hidden aspect-[4/5] bg-white flex items-center justify-center p-6 border-b border-gray-50">
                <img src={product.imageUrl} alt={product.name} className="max-w-full max-h-full object-contain transition-all duration-1000 group-hover:scale-110" />
                
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <button onClick={(e) => { e.stopPropagation(); setIsWishlisted(!isWishlisted); }} className={`p-2 rounded-full shadow-lg transition-all ${isWishlisted ? 'bg-pink-600 text-white' : 'bg-white text-pink-600 hover:bg-pink-600 hover:text-white border border-pink-100'}`}>
                        <HeartIcon isFilled={isWishlisted} />
                    </button>
                </div>
            </div>

            <div className="pt-6 pb-6 px-4 flex flex-col items-center text-center flex-grow">
                <span className="text-[9px] font-black text-pink-600 uppercase tracking-[0.4em] mb-2">{product.brand}</span>
                <h3 className="text-[1.05rem] font-bold text-black uppercase tracking-wider mb-4 h-12 overflow-hidden line-clamp-2 leading-tight italic">
                    {product.name}
                </h3>
                
                <div className="flex flex-col items-center gap-1 mb-6 mt-auto">
                    <span className="text-xl font-black tracking-tighter text-black">
                        {formatCurrency(product.price, currency)}
                    </span>
                </div>

                <button
                    ref={btnRef}
                    onClick={(e) => { e.stopPropagation(); onQuickAddToCart(product, btnRef.current, null); }}
                    className="w-full bg-pink-50/10 text-pink-900 border-2 border-pink-900 text-[10px] font-black uppercase tracking-[0.3em] py-4 hover:bg-pink-900 hover:text-white transition-all shadow-sm active:scale-95 rounded-sm"
                >
                    + Añadir a la bolsa
                </button>
            </div>
        </div>
    );
};
