
import React, { useRef, useState } from 'react';
import { type Currency, formatCurrency } from './currency';
import type { Product } from './types';
import { getImg } from './products';

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
    
    // Manejo de tonos dinámicos
    const [selectedVariant, setSelectedVariant] = useState<Record<string, string> | null>(() => {
        if (!product.variants) return null;
        const firstType = Object.keys(product.variants)[0];
        return { [firstType]: product.variants[firstType][0].value };
    });
    
    const [currentImg, setCurrentImg] = useState(product.imageUrl);
    const [currentName, setCurrentName] = useState(product.name);
    const [currentId, setCurrentId] = useState<number>(product.id);

    const handleSwatchClick = (e: React.MouseEvent, type: string, val: string, id?: number) => {
        e.stopPropagation();
        setSelectedVariant({ [type]: val });
        if (id) {
            setCurrentImg(getImg(id));
            setCurrentId(id);
            setCurrentName(`${product.name} - ${val}`);
        }
    };

    return (
        <div 
            className="bg-white flex flex-col group border-transparent hover:border-gray-100 border transition-all duration-500 h-full relative text-left"
            onClick={() => onProductSelect({ ...product, id: currentId, name: currentName, imageUrl: currentImg })}
        >
            {/* Tag de Referencia */}
            <div className="absolute top-4 left-4 z-10">
                <span className="bg-black text-white text-[7px] font-black px-2 py-0.5 uppercase tracking-tighter shadow-sm">REF: {currentId}</span>
            </div>

            {/* Visual */}
            <div className="relative cursor-pointer overflow-hidden aspect-[3/4] bg-[#f9f9f9] border-b border-gray-50 flex items-center justify-center p-8">
                <img src={currentImg} alt={currentName} className="max-w-full max-h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-105" />
                
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <button onClick={(e) => { e.stopPropagation(); setIsWishlisted(!isWishlisted); }} className={`p-3 rounded-full shadow-2xl transition-all ${isWishlisted ? 'bg-pink-600 text-white' : 'bg-white text-black hover:bg-black hover:text-white'}`}>
                        <HeartIcon isFilled={isWishlisted} />
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); onQuickView(product); }} className="p-3 rounded-full bg-white text-black shadow-2xl hover:bg-black hover:text-white transition-all">
                        <EyeIcon />
                    </button>
                </div>
            </div>

            {/* Contenido */}
            <div className="pt-6 pb-6 px-5 flex flex-col items-center text-center flex-grow">
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2">{product.brand}</span>
                <h3 className="text-[11px] font-black text-black uppercase tracking-wider mb-4 h-10 overflow-hidden line-clamp-2 leading-tight">
                    {currentName}
                </h3>
                
                {/* SCROLL HORIZONTAL DE TONOS (SWATCHES) */}
                {product.variants && Object.keys(product.variants).map(type => (
                    <div key={type} className="w-full mb-6">
                        <div className="flex justify-center gap-2 overflow-x-auto no-scrollbar py-2 px-1 scroll-smooth snap-x">
                            {product.variants![type].map(opt => (
                                <button
                                    key={opt.value}
                                    onClick={(e) => handleSwatchClick(e, type, opt.value, opt.id)}
                                    className={`w-8 h-8 rounded-full border-2 transition-all flex-shrink-0 snap-center ${selectedVariant?.[type] === opt.value ? 'border-black scale-110 ring-2 ring-pink-100' : 'border-white hover:scale-110 shadow-sm'}`}
                                    style={{ backgroundColor: opt.colorCode }}
                                    title={opt.value}
                                />
                            ))}
                        </div>
                        <p className="text-[7px] font-black text-pink-600 uppercase tracking-[0.2em] mt-2">{selectedVariant?.[type]}</p>
                    </div>
                ))}

                <div className="flex flex-col items-center gap-1 mb-6 mt-auto">
                    <span className="text-lg font-black tracking-tighter text-black">
                        {formatCurrency(product.price, currency)}
                    </span>
                </div>

                <button
                    ref={btnRef}
                    onClick={(e) => { e.stopPropagation(); onQuickAddToCart({ ...product, id: currentId, name: currentName, imageUrl: currentImg }, btnRef.current, selectedVariant); }}
                    className="w-full bg-black text-white text-[9px] font-black uppercase tracking-[0.3em] py-4 hover:bg-pink-600 transition-all shadow-xl active:scale-95"
                >
                    + Añadir a la bolsa
                </button>
            </div>
            <style>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </div>
    );
};
