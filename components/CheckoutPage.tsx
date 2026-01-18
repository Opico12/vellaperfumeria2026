
import React, { useEffect, useState } from 'react';
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

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        city: '',
        notes: ''
    });

    const subtotal = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
    const hasShippingSaver = cartItems.some(item => item.product.isShippingSaver);
    const shippingCost = subtotal >= 35 || hasShippingSaver ? 0 : 6.00;
    const total = subtotal + shippingCost;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleProceedToCheckout = () => {
        let message = `🛍️ *PEDIDO VELLAPERFUMERIA - GALA 2026*\n\n`;
        
        if (formData.name) message += `👤 *Cliente:* ${formData.name}\n`;
        if (formData.phone) message += `📞 *Teléfono:* ${formData.phone}\n`;
        if (formData.address) message += `📍 *Dirección:* ${formData.address}, ${formData.city}\n`;
        if (formData.notes) message += `📝 *Notas:* ${formData.notes}\n`;
        
        message += `\n*ARTÍCULOS DEL PEDIDO:*\n`;
        
        cartItems.forEach(item => {
            const variantText = item.selectedVariant 
                ? ` [${Object.entries(item.selectedVariant).map(([k, v]) => `${k}: ${v}`).join(', ')}]`
                : '';
            message += `• ${item.product.name}${variantText}\n`;
            message += `  Ref: ${item.product.id} | Cant: ${item.quantity} | ${formatCurrency(item.product.price, currency)}\n`;
        });

        message += `\n--------------------------\n`;
        message += `*Subtotal:* ${formatCurrency(subtotal, currency)}\n`;
        message += `*Envío:* ${shippingCost === 0 ? 'CORTESÍA' : formatCurrency(shippingCost, currency)}\n`;
        message += `*TOTAL A PAGAR:* ${formatCurrency(total, currency)}\n`;
        message += `--------------------------\n\n`;
        
        if (!formData.address) {
            message += `_Por favor, facilítenme los detalles de envío y el método de pago por aquí._`;
        } else {
            message += `_Espero confirmación para realizar el pago. Gracias._`;
        }

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (cartItems.length === 0) {
        return (
            <div className="container mx-auto px-4 py-40 text-center animate-fade-in flex flex-col items-center justify-center h-[70vh]">
                <div className="mb-8 text-pink-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                </div>
                <h2 className="text-2xl font-black uppercase tracking-[0.4em] text-black mb-8 italic">Tu bolsa está vacía</h2>
                <button 
                    onClick={() => onNavigate('products', 'all')}
                    className="bg-black text-white px-12 py-5 text-[10px] font-black uppercase tracking-[0.4em] hover:bg-pink-600 transition-all shadow-xl"
                >
                    Volver a la Galería
                </button>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-16">
                    
                    {/* Columna Izquierda: Formulario de Envío */}
                    <div className="lg:w-7/12">
                        <div className="mb-12">
                            <span className="text-pink-600 text-[10px] font-black tracking-[0.6em] uppercase mb-4 block underline underline-offset-8 decoration-pink-100">Checkout Seguro</span>
                            <h1 className="text-4xl md:text-6xl font-black text-black tracking-tighter uppercase italic leading-none">Datos de <br/><span className="text-pink-600">Envío</span></h1>
                            <p className="mt-6 text-gray-400 font-light italic text-sm tracking-widest uppercase">Completa tus datos o envíanos el pedido directamente por WhatsApp.</p>
                        </div>

                        <div className="space-y-8 bg-gray-50/50 p-8 md:p-12 border border-gray-100 rounded-sm">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-black">Nombre Completo</label>
                                    <input 
                                        type="text" 
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Ej. Valentina Rossi"
                                        className="w-full bg-white border border-gray-200 px-5 py-4 text-xs font-bold focus:border-pink-600 outline-none transition-all uppercase tracking-widest"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-black">Teléfono de Contacto</label>
                                    <input 
                                        type="tel" 
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="+34 000 000 000"
                                        className="w-full bg-white border border-gray-200 px-5 py-4 text-xs font-bold focus:border-pink-600 outline-none transition-all tracking-widest"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-black">Dirección de Entrega</label>
                                <input 
                                    type="text" 
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    placeholder="Calle, Número, Piso..."
                                    className="w-full bg-white border border-gray-200 px-5 py-4 text-xs font-bold focus:border-pink-600 outline-none transition-all uppercase tracking-widest"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-black">Ciudad / Provincia</label>
                                    <input 
                                        type="text" 
                                        name="city"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        placeholder="Madrid, Barcelona..."
                                        className="w-full bg-white border border-gray-200 px-5 py-4 text-xs font-bold focus:border-pink-600 outline-none transition-all uppercase tracking-widest"
                                    />
                                </div>
                                <div className="space-y-2 flex items-end">
                                    <div className="p-4 bg-pink-50 border border-pink-100 rounded-sm w-full">
                                        <p className="text-[9px] font-black text-pink-600 uppercase tracking-tighter leading-tight">
                                            {shippingCost === 0 
                                                ? "¡Envío gratuito aplicado!" 
                                                : "Envío estándar: 6,00€"}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-black">Notas Adicionales (Opcional)</label>
                                <textarea 
                                    name="notes"
                                    value={formData.notes}
                                    onChange={handleInputChange}
                                    rows={3}
                                    placeholder="¿Algún detalle para el transportista?"
                                    className="w-full bg-white border border-gray-200 px-5 py-4 text-xs font-bold focus:border-pink-600 outline-none transition-all uppercase tracking-widest resize-none"
                                />
                            </div>
                        </div>

                        <div className="mt-12">
                            <button 
                                onClick={handleProceedToCheckout}
                                className="w-full bg-[#25D366] text-white font-black py-7 rounded-sm text-[12px] shadow-[0_20px_40px_-10px_rgba(37,211,102,0.4)] hover:scale-[1.02] transition-all flex justify-center items-center gap-6 uppercase tracking-[0.4em]"
                            >
                               <WhatsAppIcon />
                               <span>Confirmar por WhatsApp</span>
                            </button>
                            <p className="text-center mt-6 text-[9px] font-black text-gray-400 uppercase tracking-widest italic">
                                Sincronizando con el centro de atención al cliente de Vellaperfumeria...
                            </p>
                        </div>
                    </div>

                    {/* Columna Derecha: Resumen */}
                    <div className="lg:w-5/12">
                        <div className="sticky top-48">
                            <div className="bg-black text-white p-10 md:p-12 rounded-sm shadow-3xl">
                                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] mb-12 border-b border-white/10 pb-6 italic">Resumen de Selección</h2>
                                
                                <div className="space-y-8 mb-12 max-h-[40vh] overflow-y-auto pr-4 custom-scrollbar">
                                    {cartItems.map((item) => (
                                        <div key={item.id} className="flex gap-6 items-center">
                                            <div className="w-16 h-20 bg-white/5 p-2 rounded-sm border border-white/10 flex-shrink-0">
                                                <img src={item.product.imageUrl} alt={item.product.name} className="w-full h-full object-contain mix-blend-lighten" />
                                            </div>
                                            <div className="flex-grow min-w-0">
                                                <h4 className="text-[10px] font-black uppercase tracking-widest line-clamp-1">{item.product.name}</h4>
                                                <p className="text-[9px] text-gray-500 font-bold uppercase mt-1 tracking-tighter">Cant: {item.quantity} x {formatCurrency(item.product.price, currency)}</p>
                                                {item.selectedVariant && (
                                                    <p className="text-[8px] text-pink-400 font-black uppercase tracking-widest mt-1">
                                                        {Object.values(item.selectedVariant)[0]}
                                                    </p>
                                                )}
                                            </div>
                                            <div className="text-[11px] font-black tracking-tighter text-white">
                                                {formatCurrency(item.product.price * item.quantity, currency)}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-4 pt-10 border-t border-white/10 text-[10px] font-black uppercase tracking-[0.3em]">
                                    <div className="flex justify-between text-gray-500">
                                        <span>Suma Parcial</span>
                                        <span>{formatCurrency(subtotal, currency)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-500">
                                        <span>Gasto de Envío</span>
                                        <span className={shippingCost === 0 ? "text-pink-400 italic" : ""}>
                                            {shippingCost === 0 ? 'Cortesía' : formatCurrency(shippingCost, currency)}
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-2xl font-black italic tracking-tighter text-white pt-8 border-t border-white/10 mt-6">
                                        <span>Total</span>
                                        <span className="text-pink-500">{formatCurrency(total, currency)}</span>
                                    </div>
                                </div>

                                <div className="mt-12 p-6 bg-white/5 border border-dashed border-white/10 rounded-sm">
                                    <p className="text-[9px] text-gray-400 font-bold uppercase leading-relaxed tracking-widest text-center">
                                        Un asesor personal verificará tu pedido y te enviará el enlace de pago seguro a través del chat de WhatsApp.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
                .custom-scrollbar::-webkit-scrollbar { width: 4px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255,255,255,0.05); }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); border-radius: 10px; }
                @keyframes fade-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
                .animate-fade-in { animation: fade-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
            `}</style>
        </div>
    );
};

export default CheckoutPage;
