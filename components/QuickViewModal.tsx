
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

const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, currency, onClose, onAddToCart, onProductSelect }) => {
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
        // Actualizar la imagen si la variante seleccionada tiene una imagen personalizada
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
        <div className="fixed inset-0 bg-black/90 backdrop-blur-xl flex items-center justify-center z-[200] p-4" onClick={onClose}>
            <div className="bg-white rounded-sm shadow-3xl w-full max-w-6xl flex flex-col md:flex-row relative animate-modal-in overflow-hidden max-h-[95vh]" onClick={e => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-6 right-6 text-black hover:rotate-90 transition-transform z-10"><CloseIcon /></button>
                
                {/* Visual Area */}
                <div className="md:w-1/2 bg-[#F9F9F9] p-8 md:p-16 flex items-center justify-center border-r border-gray-100">
                    <div className="relative w-full aspect-square flex items-center justify-center">
                         <img src={currentImageUrl} alt={product.name} className="max-h-full max-w-full object-contain mix-blend-multiply transition-all duration-700 ease-in-out transform hover:scale-105" />
                    </div>
                </div>
                
                {/* Details Area */}
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col overflow-y-auto bg-white">
                    <span className="text-pink-600 text-[10px] font-black uppercase tracking-[0.5em] mb-4">{product.brand}</span>
                    <h2 className="text-3xl font-black text-black uppercase tracking-tighter mb-8 leading-none italic">{product.name}</h2>
                    
                    <div className="flex items-center gap-6 mb-8">
                        <span className="text-4xl font-black text-black tracking-tighter">{formatCurrency(product.price, currency)}</span>
                        {isDiscounted && <span className="text-xl text-gray-300 line-through font-light italic">{formatCurrency(product.regularPrice!, currency)}</span>}
                    </div>
                    
                    <div className="mb-10">
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4 border-b pb-2">Expertise de Belleza</h4>
                        <p className="text-gray-700 text-base leading-relaxed italic">{product.description}</p>
                    </div>

                    {product.variants && Object.keys(product.variants).map(type => (
                        <div key={type} className="mb-10">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] mb-6 flex justify-between items-center">
                                {type}: <span className="text-pink-600 underline decoration-pink-200">{selectedVariant?.[type]}</span>
                            </h3>
                            <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar snap-x">
                                {product.variants![type].map(opt => {
                                    const isSel = selectedVariant?.[type] === opt.value;
                                    return (
                                        <button
                                            key={opt.value}
                                            onClick={() => handleVariantChange(type, opt.value)}
                                            className={`flex-shrink-0 w-12 h-12 rounded-full border-4 transition-all snap-start ${isSel ? 'border-black scale-110 shadow-xl' : 'border-white opacity-40 hover:opacity-100 hover:scale-105'}`}
                                            style={{ backgroundColor: opt.colorCode }}
                                            title={opt.value}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    ))}

                    <div className="mt-auto pt-8 border-t border-gray-100 flex flex-col gap-4">
                        <button
                            ref={addToCartBtnRef}
                            onClick={() => { onAddToCart(product, addToCartBtnRef.current, selectedVariant); onClose(); }}
                            className="w-full bg-black text-white font-black py-6 text-[11px] uppercase tracking-[0.6em] hover:bg-pink-600 transition-all shadow-2xl active:scale-95"
                        >
                            Añadir a la Cesta
                        </button>
                        <div className="flex justify-center gap-4">
                             <span className="text-[8px] font-black uppercase tracking-widest text-gray-400">Certificado Estocolmo</span>
                             <span className="text-[8px] font-black uppercase tracking-widest text-gray-400">Envío 24-48h</span>
                        </div>
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
