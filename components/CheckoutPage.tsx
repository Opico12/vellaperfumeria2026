
import React, { useEffect, useMemo } from 'react';
import type { CartItem, View } from './types';
import type { Currency } from './currency';
import { formatCurrency } from './currency';

interface CheckoutPageProps {
    cartItems: CartItem[];
    currency: Currency;
    onClearCart: () => void;
    onNavigate: (view: View, payload?: any) => void;
}

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.919 6.066l-1.475 5.422 5.571-1.469z" />
    </svg>
);

const CheckoutPage: React.FC<CheckoutPageProps> = ({ cartItems, currency, onNavigate }) => {
    const WHATSAPP_NUMBER = '34661202616';

    const subtotal = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
    const hasShippingSaver = cartItems.some(item => item.product.isShippingSaver);
    const shippingCost = subtotal >= 35 || hasShippingSaver ? 0 : 6.00;
    const total = subtotal + shippingCost;

    const handleProceedToCheckout = () => {
        let message = `🛍️ *NUEVO PEDIDO - VELLAPERFUMERIA*\n\n`;
        message += `¡Hola! Me gustaría confirmar el siguiente pedido:\n\n`;
        
        cartItems.forEach(item => {
            const variantText = item.selectedVariant 
                ? ` (${Object.entries(item.selectedVariant).map(([k, v]) => `${k}: ${v}`).join(', ')})`
                : '';
            message += `• *${item.product.name}${variantText}*\n`;
            message += `  Cantidad: ${item.quantity} x ${formatCurrency(item.product.price, currency)}\n`;
        });

        message += `\n--------------------------\n`;
        message += `*Subtotal:* ${formatCurrency(subtotal, currency)}\n`;
        message += `*Envío:* ${shippingCost === 0 ? 'GRATIS' : formatCurrency(shippingCost, currency)}\n`;
        message += `*TOTAL ESTIMADO:* ${formatCurrency(total, currency)}\n`;
        message += `--------------------------\n\n`;
        message += `*Datos de contacto:*\n`;
        message += `Por favor, facilítenme los datos para el envío y el método de pago por aquí.`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (cartItems.length === 0) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <div className="mb-4 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </div>
                <h2 className="text-2xl font-bold mb-4">Tu carrito está vacío</h2>
                <button 
                    onClick={() => onNavigate('products', 'all')}
                    className="bg-black text-white px-8 py-3 rounded-lg hover:opacity-80 transition-colors uppercase font-black tracking-widest text-xs"
                >
                    Volver a la tienda
                </button>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-3xl mx-auto text-center mb-10">
                <h1 className="text-3xl font-black text-black uppercase tracking-tighter mb-4">Resumen del Pedido</h1>
                <p className="text-gray-500 uppercase tracking-widest text-[10px] font-bold">Finaliza tu compra directamente con nosotros</p>
            </div>
            
            <div className="max-w-3xl mx-auto bg-white shadow-3xl rounded-sm overflow-hidden border border-gray-100">
                <div className="p-6 md:p-8 bg-gray-50/50 border-b">
                    <h2 className="text-sm font-black uppercase tracking-[0.3em] mb-6">Tu Selección</h2>
                    <div className="space-y-4 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                         {cartItems.map((item) => (
                            <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-sm border border-gray-100 shadow-sm">
                                <div className="relative flex-shrink-0 w-20 h-20">
                                    <img src={item.product.imageUrl} alt={item.product.name} className="w-full h-full object-contain" />
                                    <span className="absolute -top-2 -right-2 bg-black text-white text-[9px] font-black w-5 h-5 rounded-full flex items-center justify-center">
                                        {item.quantity}
                                    </span>
                                </div>
                                <div className="flex-grow min-w-0">
                                    <h3 className="font-bold text-black text-xs uppercase tracking-wider">{item.product.name}</h3>
                                    {item.selectedVariant && (
                                        <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mt-1">
                                            {Object.entries(item.selectedVariant).map(([k, v]) => `${k}: ${v}`).join(' | ')}
                                        </p>
                                    )}
                                </div>
                                <div className="text-right font-black text-black text-sm whitespace-nowrap tracking-tighter">
                                    {formatCurrency(item.product.price * item.quantity, currency)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="p-6 md:p-8">
                    <div className="space-y-3 mb-8 text-[11px] uppercase font-black tracking-widest">
                        <div className="flex justify-between text-gray-400">
                            <span>Subtotal</span>
                            <span>{formatCurrency(subtotal, currency)}</span>
                        </div>
                        <div className="flex justify-between text-gray-400">
                            <span>Envío</span>
                            <span className={shippingCost === 0 ? "text-green-600" : ""}>
                                {shippingCost === 0 ? 'Gratis' : formatCurrency(shippingCost, currency)}
                            </span>
                        </div>
                        <div className="flex justify-between text-xl font-black text-black pt-6 border-t mt-4">
                            <span>Total Estimado</span>
                            <span className="tracking-tighter">{formatCurrency(total, currency)}</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {/* Botón WhatsApp Checkout */}
                        <button 
                            onClick={handleProceedToCheckout}
                            className="w-full bg-[#25D366] text-white font-black py-5 rounded-sm text-sm shadow-xl hover:opacity-90 transition-all flex justify-center items-center gap-4 uppercase tracking-[0.2em]"
                        >
                           <WhatsAppIcon />
                           <span>Confirmar por WhatsApp</span>
                        </button>

                        <div className="text-center mt-6">
                            <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest leading-relaxed">
                                Al confirmar, se abrirá un chat de WhatsApp con el número <strong>+34 661 202 616</strong> con los detalles de tu pedido. Un asesor gestionará tu pago y envío de forma personalizada.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
             <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #f1f1f1; 
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #d1d5db; 
                    border-radius: 3px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #9ca3af; 
                }
            `}</style>
        </div>
    );
};

export default CheckoutPage;
