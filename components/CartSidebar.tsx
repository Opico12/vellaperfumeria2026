
import React, { useEffect, useMemo, useRef, useState } from 'react';
import type { CartItem, View, Product } from './types';
import type { Currency } from './currency';
import { formatCurrency } from './currency';
import { allProducts } from './products';

interface CartSidebarProps {
    isOpen: boolean;
    onClose: () => void;
    cartItems: CartItem[];
    currency: Currency;
    onUpdateQuantity: (cartItemId: string, newQuantity: number) => void;
    onRemoveItem: (cartItemId: string) => void;
    onCheckout: () => void;
    isCheckingOut: boolean;
    checkoutError: string | null;
    onNavigate: (view: View, payload?: any) => void;
    onAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
}

const FREE_SHIPPING_THRESHOLD = 35;
const DISCOUNT_THRESHOLD = 35;
const DISCOUNT_PERCENTAGE = 0.15;
const SHIPPING_COST = 6.00;

const CloseIcon = () => (
    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const TrashIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
);

const CartSidebar: React.FC<CartSidebarProps> = ({ 
    isOpen, 
    onClose, 
    cartItems, 
    currency, 
    onUpdateQuantity, 
    onRemoveItem, 
    onCheckout, 
    isCheckingOut, 
    checkoutError, 
    onNavigate,
    onAddToCart
}) => {
    const sidebarRef = useRef<HTMLDivElement>(null);
    const [idToDelete, setIdToDelete] = useState<string | null>(null);
    const lightOrchid = "#FAE1EF";
    const oriflameTurquoise = "#00A99D"; 
    
    useEffect(() => {
        const handleScrollLock = () => {
            if (isOpen) document.body.style.overflow = 'hidden';
            else document.body.style.overflow = '';
        };
        handleScrollLock();
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                if (idToDelete) setIdToDelete(null);
                else onClose();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [onClose, idToDelete]);

    const subtotal = useMemo(() => {
        return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }, [cartItems]);

    const discountAmount = useMemo(() => {
        return subtotal >= DISCOUNT_THRESHOLD ? subtotal * DISCOUNT_PERCENTAGE : 0;
    }, [subtotal]);

    const hasShippingSaver = useMemo(() => cartItems.some(item => item.product.isShippingSaver), [cartItems]);
    const shippingCost = (hasShippingSaver || subtotal >= FREE_SHIPPING_THRESHOLD) ? 0 : SHIPPING_COST;
    const total = subtotal - discountAmount + shippingCost;

    const packagingOptions = useMemo(() => {
        return allProducts
            .filter(p => p.category === 'accessories' && !cartItems.some(ci => ci.product.id === p.id))
            .sort((a, b) => {
                const aName = a.name.toLowerCase();
                const bName = b.name.toLowerCase();
                if (aName.includes('bolsa turquesa')) return -1;
                if (bName.includes('bolsa turquesa')) return 1;
                return 0;
            })
            .slice(0, 3);
    }, [cartItems]);

    const handleConfirmDelete = () => {
        if (idToDelete) {
            onRemoveItem(idToDelete);
            setIdToDelete(null);
        }
    };

    return (
        <>
            <div className={`fixed inset-0 z-[250] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

                <div ref={sidebarRef} className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col transition-transform duration-500 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex items-center justify-between p-6 border-b">
                        <h2 className="text-xs font-black tracking-[0.5em] uppercase italic">Mi Bolsa de Compra</h2>
                        <button onClick={onClose} className="p-2 hover:rotate-90 transition-transform duration-300"><CloseIcon /></button>
                    </div>

                    {cartItems.length > 0 ? (
                        <div className="flex-grow flex flex-col overflow-hidden">
                            <div className="flex-grow overflow-y-auto p-6 space-y-6">
                                {cartItems.map(item => (
                                    <div key={item.id} className="flex gap-6 items-start group">
                                        <div className="w-20 h-24 bg-white p-2 rounded-sm border border-gray-100 flex-shrink-0">
                                            <img src={item.product.imageUrl} alt={item.product.name} className="w-full h-full object-contain" />
                                        </div>
                                        <div className="flex-grow flex flex-col">
                                            <div className="flex justify-between items-start">
                                                <h3 className="text-[10px] font-black uppercase tracking-wider text-black line-clamp-2">{item.product.name}</h3>
                                                <button onClick={() => setIdToDelete(item.id)} className="text-gray-300 hover:text-red-600 p-1 transition-colors"><TrashIcon /></button>
                                            </div>
                                            <p className="text-[11px] font-black mt-2 tracking-tighter">{formatCurrency(item.product.price, currency)}</p>
                                            <div className="flex items-center mt-3 border border-gray-100 w-fit rounded-sm">
                                                <button onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))} className="px-3 py-1 font-bold">-</button>
                                                <span className="px-2 text-[10px] font-black">{item.quantity}</span>
                                                <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 font-bold">+</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="p-8 bg-black text-white space-y-4">
                                <div className="space-y-2 text-[10px] font-bold uppercase tracking-widest">
                                    <div className="flex justify-between text-gray-400">
                                        <span>Subtotal</span>
                                        <span>{formatCurrency(subtotal, currency)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-400">
                                        <span>Gastos de Envío</span>
                                        <span className={shippingCost === 0 ? "italic text-white" : ""}>{shippingCost === 0 ? 'Cortesía' : formatCurrency(shippingCost, currency)}</span>
                                    </div>
                                </div>
                                <div className="flex justify-between text-xl font-black italic tracking-tighter border-t border-white/10 pt-4">
                                    <span>Total</span>
                                    <span style={{ color: lightOrchid }}>{formatCurrency(total, currency)}</span>
                                </div>
                                <button
                                    onClick={onCheckout}
                                    disabled={isCheckingOut}
                                    className="w-full bg-white text-black font-black py-4 mt-4 uppercase tracking-[0.4em] text-[11px] hover:bg-opacity-90 transition-all active:scale-95 disabled:opacity-50"
                                >
                                    {isCheckingOut ? 'Tramitando...' : 'Confirmar y Pagar'}
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="flex-grow flex flex-col items-center justify-center p-12 text-center">
                            <span className="text-gray-100 text-9xl font-black mb-8">0</span>
                            <h3 className="text-xs font-black uppercase tracking-[0.5em] mb-4">Bolsa de compra vacía</h3>
                            <button onClick={() => { onClose(); onNavigate('products', 'all'); }} className="text-[10px] font-black uppercase tracking-widest border-b-2 border-black pb-1 hover:text-pink-600 hover:border-pink-600 transition-all">Empezar a comprar</button>
                        </div>
                    )}
                </div>
            </div>

            {idToDelete && (
                <div className="fixed inset-0 z-[300] flex items-center justify-center p-6 bg-black/40 backdrop-blur-md animate-fade-in">
                    <div className="bg-white rounded-sm shadow-2xl max-w-sm w-full p-10 text-center border border-black/5 scale-95 animate-scale-up">
                        <div className="mb-6 flex justify-center">
                            <div className="bg-[#FAE1EF] p-4 rounded-full">
                                <TrashIcon />
                            </div>
                        </div>
                        <h3 className="text-xs font-black uppercase tracking-[0.4em] mb-4">¿Eliminar producto?</h3>
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest leading-loose mb-8">
                            ¿Estás seguro de que quieres retirar este artículo de tu bolsa de compra?
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <button 
                                onClick={() => setIdToDelete(null)}
                                className="border border-black py-4 text-[9px] font-black uppercase tracking-widest hover:bg-gray-50 transition-colors"
                            >
                                Cancelar
                            </button>
                            <button 
                                onClick={handleConfirmDelete}
                                className="bg-black text-white py-4 text-[9px] font-black uppercase tracking-widest hover:bg-zinc-800 transition-colors"
                            >
                                Confirmar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
                @keyframes scale-up { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
                .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
                .animate-scale-up { animation: scale-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
            `}</style>
        </>
    );
};

export default CartSidebar;
