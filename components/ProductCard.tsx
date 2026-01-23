
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
    const [imageLoaded, setImageLoaded] = useState(false);
    
    const ORCHID_PINK = "#E29CD2";

    return (
        <div 
            className="bg-white flex flex-col group border-gray-100 hover:border-[#E29CD2] border transition-all duration-500 h-full relative text-left shadow-sm hover:shadow-xl rounded-sm overflow-hidden"
            onClick={() => onProductSelect(product)}
        >
            {/* Tag de Referencia */}
            <div className="absolute top-3 left-3 z-20">
                <span className="bg-white/95 backdrop-blur-sm text-[#C576B0] text-[8px] font-black px-2 py-1 uppercase tracking-widest rounded-full border border-pink-100 shadow-sm">
                    Ref: {product.id}
                </span>
            </div>

            {/* Contenedor de Imagen */}
            <div className="relative cursor-pointer bg-white flex items-center justify-center p-6 h-64 md:h-80 w-full overflow-hidden border-b border-gray-50">
                {!imageLoaded && (
                    <div className="absolute inset-0 bg-gray-50 animate-pulse flex items-center justify-center">
                         <div className="w-8 h-8 border-2 border-pink-100 border-t-[#E29CD2] rounded-full animate-spin"></div>
                    </div>
                )}
                <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    referrerPolicy="no-referrer"
                    className={`w-full h-full object-contain transition-all duration-700 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`} 
                    onLoad={() => setImageLoaded(true)}
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://bellaparfumeria.com/wp-content/uploads/2024/06/vellaperfumeralogo.png";
                        setImageLoaded(true);
                    }}
                />
                
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                    <button 
                        onClick={(e) => { e.stopPropagation(); setIsWishlisted(!isWishlisted); }} 
                        className={`p-2 rounded-full shadow-lg transition-all ${isWishlisted ? 'bg-[#E29CD2] text-white' : 'bg-white text-[#E29CD2] hover:bg-[#E29CD2] hover:text-white border border-pink-100'}`}
                    >
                        <HeartIcon isFilled={isWishlisted} />
                    </button>
                </div>
            </div>

            {/* Información y Precios */}
            <div className="pt-5 pb-6 px-4 flex flex-col items-center text-center flex-grow bg-white">
                <span className="text-[8px] font-black text-gray-400 uppercase tracking-[0.4em] mb-1">{product.brand}</span>
                <h3 className="text-[12px] font-bold text-black uppercase tracking-wider mb-4 h-12 overflow-hidden line-clamp-2 leading-tight italic">
                    {product.name}
                </h3>
                
                <div className="flex flex-col items-center gap-1 mb-6 mt-auto">
                    <div className="flex items-center gap-3">
                         <span className="text-xl font-black tracking-tighter text-black">
                            {formatCurrency(product.price, currency)}
                        </span>
                        {product.regularPrice && (
                             <span className="text-xs text-gray-300 line-through">
                                {formatCurrency(product.regularPrice, currency)}
                             </span>
                        )}
                    </div>
                </div>

                {/* Botón Rosa Orquídea */}
                <button
                    ref={btnRef}
                    onClick={(e) => { e.stopPropagation(); onQuickAddToCart(product, btnRef.current, null); }}
                    className="w-full border-2 text-white text-[9px] font-black uppercase tracking-[0.4em] py-3.5 transition-all shadow-sm active:scale-95 rounded-sm"
                    style={{ backgroundColor: ORCHID_PINK, borderColor: "#C576B0" }}
                >
                    + Añadir a la bolsa
                </button>
            </div>
        </div>
    );
};
