
import React, { useEffect, useRef, useState } from 'react';
import type { Product } from './types';
import type { Currency } from './currency';
import { formatCurrency } from './currency';

const CloseIcon = () => (
    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const getDefaultVariant = (product: Product): Record<string, string> | null => {
    if (!product.variants) return null;
    const defaultVariant: Record<string, string> = {};
    for (const key in product.variants) {
        if (product.variants[key].length > 0) {
           defaultVariant[key] = product.variants[key][0].value;
        }
    }
    return defaultVariant;
};

interface QuickViewModalProps {
    product: Product;
    currency: Currency;
    onClose: () => void;
    onAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onProductSelect: (product: Product) => void;
}

const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, currency, onClose, onAddToCart }) => {
    const addToCartBtnRef = useRef<HTMLButtonElement>(null);
    const [selectedVariant, setSelectedVariant] = useState<Record<string, string> | null>(getDefaultVariant(product));
    const [currentImageUrl, setCurrentImageUrl] = useState(product.imageUrl);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);
    
    useEffect(() => {
        if (product.variants && selectedVariant) {
            for (const type in product.variants) {
                const val = selectedVariant[type];
                const opt = product.variants[type].find(v => v.value === val);
                if (opt?.imageUrl) {
                    setCurrentImageUrl(opt.imageUrl);
                    return;
                }
            }
        }
        setCurrentImageUrl(product.imageUrl);
    }, [selectedVariant, product.variants, product.imageUrl]);

    const handleVariantChange = (type: string, value: string) => {
        setSelectedVariant(prev => ({ ...(prev || {}), [type]: value }));
    };

    const isDiscounted = product.regularPrice && product.regularPrice > product.price;

    return (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-xl flex items-center justify-center z-[600] p-4" onClick={onClose}>
            <div className="bg-white rounded-sm shadow-3xl w-full max-w-6xl flex flex-col md:flex-row relative animate-modal-in overflow-hidden max-h-[95vh]" onClick={e => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-6 right-6 text-black hover:rotate-90 transition-transform z-10"><CloseIcon /></button>
                
                <div className="md:w-1/2 bg-[#F9F9F9] p-8 md:p-16 flex items-center justify-center border-r border-gray-100">
                    <div className="relative w-full aspect-square flex items-center justify-center">
                         <img 
                            src={currentImageUrl} 
                            alt={product.name} 
                            referrerPolicy="no-referrer"
                            className="max-h-full max-w-full object-contain transition-all duration-700 ease-in-out transform hover:scale-105" 
                         />
                    </div>
                </div>
                
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col overflow-y-auto bg-white">
                    <span className="text-pink-600 text-[10px] font-black uppercase tracking-[0.5em] mb-4">{product.brand}</span>
                    <h2 className="text-3xl font-black text-black uppercase tracking-tighter mb-8 leading-none italic">{product.name}</h2>
                    
                    <div className="flex items-center gap-6 mb-8">
                        <span className="text-4xl font-black text-black tracking-tighter">{formatCurrency(product.price, currency)}</span>
                        {isDiscounted && <span className="text-xl text-gray-300 line-through font-light italic">{formatCurrency(product.regularPrice!, currency)}</span>}
                    </div>
                    
                    <div className="mb-10">
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4 border-b pb-2">Experiencia de Belleza</h4>
                        <p className="text-gray-700 text-base leading-relaxed italic">{product.description}</p>
                    </div>

                    <div className="mt-auto pt-8 border-t border-gray-100 flex flex-col gap-4">
                        <button
                            ref={addToCartBtnRef}
                            onClick={() => { onAddToCart(product, addToCartBtnRef.current, selectedVariant); onClose(); }}
                            className="w-full bg-pink-500/10 border-2 border-pink-700 text-pink-800 font-black py-6 text-[11px] uppercase tracking-[0.6em] hover:bg-pink-600 hover:text-white transition-all shadow-2xl active:scale-95"
                        >
                            Añadir a la Cesta
                        </button>
                    </div>
                </div>
            </div>
            <style>{`
                @keyframes modal-in { from { opacity: 0; transform: translateY(30px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
                .animate-modal-in { animation: modal-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                .no-scrollbar::-webkit-scrollbar { display: none; }
            `}</style>
        </div>
    );
};

export default QuickViewModal;
