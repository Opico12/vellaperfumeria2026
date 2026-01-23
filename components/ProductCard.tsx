
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
    const [imgErrorCount, setImgErrorCount] = useState(0);
    
    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        const target = e.target as HTMLImageElement;
        if (imgErrorCount === 0) {
            // Reintento con CDN alternativo
            target.src = `https://media-es-cdn.oriflame.com/product-images/external/es-ES/${product.id}_1.png`;
            setImgErrorCount(1);
        } else {
            // Placeholder final si todo falla
            target.src = "https://vellaperfumeria.com/wp-content/uploads/2024/06/vellaperfumeralogo.png";
        }
    };

    return (
        <div 
            className="bg-white flex flex-col group border-gray-100 hover:border-pink-200 border transition-all duration-500 h-full relative text-left shadow-sm hover:shadow-xl rounded-sm overflow-hidden"
            onClick={() => onProductSelect(product)}
        >
            {/* Tag de Referencia */}
            <div className="absolute top-3 left-3 z-20">
                <span className="bg-white/90 backdrop-blur-sm text-pink-600 text-[8px] font-black px-2 py-1 uppercase tracking-widest rounded-full border border-pink-100 shadow-sm">
                    Ref: {product.id}
                </span>
            </div>

            {/* Imagen del Producto - Contenedor con altura mínima */}
            <div className="relative cursor-pointer bg-white flex items-center justify-center p-6 min-h-[250px] md:min-h-[320px] w-full overflow-hidden border-b border-gray-50">
                <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full h-auto max-h-[280px] object-contain transition-transform duration-700 group-hover:scale-110 block" 
                    onError={handleImageError}
                />
                
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                    <button 
                        onClick={(e) => { e.stopPropagation(); setIsWishlisted(!isWishlisted); }} 
                        className={`p-2 rounded-full shadow-lg transition-all ${isWishlisted ? 'bg-pink-500 text-white' : 'bg-white text-pink-500 hover:bg-pink-500 hover:text-white border border-pink-100'}`}
                    >
                        <HeartIcon isFilled={isWishlisted} />
                    </button>
                </div>
            </div>

            {/* Datos */}
            <div className="pt-5 pb-6 px-4 flex flex-col items-center text-center flex-grow bg-white">
                <span className="text-[8px] font-black text-gray-400 uppercase tracking-[0.4em] mb-1">{product.brand}</span>
                <h3 className="text-[13px] font-bold text-black uppercase tracking-wider mb-4 h-10 overflow-hidden line-clamp-2 leading-tight italic">
                    {product.name}
                </h3>
                
                <div className="flex flex-col items-center gap-1 mb-6 mt-auto">
                    <span className="text-xl font-black tracking-tighter text-black">
                        {formatCurrency(product.price, currency)}
                    </span>
                </div>

                {/* Botón Rosa con Borde */}
                <button
                    ref={btnRef}
                    onClick={(e) => { e.stopPropagation(); onQuickAddToCart(product, btnRef.current, null); }}
                    className="w-full bg-transparent border-2 border-pink-500 text-pink-600 text-[10px] font-black uppercase tracking-[0.4em] py-3.5 hover:bg-pink-500 hover:text-white transition-all shadow-sm active:scale-95 rounded-sm"
                >
                    + Añadir Bolsa
                </button>
            </div>
        </div>
    );
};
