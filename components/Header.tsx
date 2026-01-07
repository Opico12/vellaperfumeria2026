
import React, { useState } from 'react';
import type { View } from './types';
import type { Currency } from './currency';

const BagIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
);

interface HeaderProps {
    onNavigate: (view: View, payload?: any) => void;
    cartCount: number;
    onCartClick: () => void;
    currency: Currency;
    onCurrencyChange: (currency: Currency) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, cartCount, onCartClick, currency, onCurrencyChange }) => {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    const navItems = [
        { label: 'Colecciones', view: 'products' as View, payload: 'all', hasMega: true },
        { label: 'Maquillaje', view: 'products' as View, payload: 'makeup', hasMega: true },
        { label: 'Cuidado Facial', view: 'products' as View, payload: 'skincare', hasMega: true },
        { label: 'Cuidado del Cabello', view: 'products' as View, payload: 'hair', hasMega: true },
        { label: 'Wellness', view: 'products' as View, payload: 'wellness' },
        { label: 'Ofertas', view: 'ofertas' as View },
    ];

    return (
        <header className="w-full fixed top-0 left-0 z-[100] shadow-2xl font-sans">
            {/* BARRA SUPERIOR PROMOCIONAL */}
            <div className="w-full bg-[#FAE1EF] py-2.5 text-[10px] font-black uppercase tracking-[0.4em] text-center text-black border-b border-black/5">
                ✨ EXPERIENCIA VIP VELLAPERFUMERÍA: ENVÍO GRATIS DESDE 35€ ✨
            </div>

            {/* MARCA Y LOGO (FONDO BLANCO) */}
            <div className="w-full bg-white px-6 md:px-12 h-20 md:h-24 flex items-center justify-between border-b border-gray-100">
                <div className="flex-1 flex items-center gap-6">
                    <button 
                        onClick={() => onNavigate('ia')} 
                        className="hidden md:flex bg-black text-white text-[9px] font-black uppercase tracking-widest px-6 py-3 rounded-full hover:bg-pink-600 transition-all shadow-lg items-center gap-3"
                    >
                        <span className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse"></span>
                        Asistente Beauty IA
                    </button>
                    <div className="hidden lg:block">
                        <select 
                            value={currency}
                            onChange={(e) => onCurrencyChange(e.target.value as Currency)}
                            className="bg-gray-50 border border-gray-100 text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-sm focus:outline-none focus:ring-1 focus:ring-pink-300 transition-all cursor-pointer"
                        >
                            <option value="EUR">EUR (€)</option>
                            <option value="USD">USD ($)</option>
                        </select>
                    </div>
                </div>
                
                <div className="flex-shrink-0">
                    <button onClick={() => onNavigate('home')} className="flex flex-col items-center group">
                        <img 
                            src="https://i0.wp.com/vellaperfumeria.com/wp-content/uploads/2025/06/1000003724-removebg-preview.png" 
                            alt="Vella" 
                            className="h-12 md:h-16 transition-transform group-hover:scale-105 duration-700" 
                        />
                        <span className="text-[9px] font-black uppercase tracking-[0.8em] mt-1 text-black">Vellaperfumería</span>
                    </button>
                </div>

                <div className="flex-1 flex justify-end items-center gap-6">
                    <button onClick={onCartClick} className="relative p-2 text-black hover:text-pink-600 transition-colors group">
                        <BagIcon />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center animate-bounce">
                                {cartCount}
                            </span>
                        )}
                        <span className="hidden md:inline ml-2 text-[9px] font-black uppercase tracking-widest">Mi Bolsa</span>
                    </button>
                </div>
            </div>

            {/* MENÚ DE NAVEGACIÓN NEGRO (ANCHURA COMPLETA) */}
            <nav className="w-full bg-black h-14 md:h-16 relative">
                <div className="h-full w-full max-w-7xl mx-auto px-6 flex items-center justify-center md:justify-start space-x-2 md:space-x-8 overflow-x-auto no-scrollbar">
                    {navItems.map((item) => (
                        <div 
                            key={item.label} 
                            className="h-full flex items-center"
                            onMouseEnter={() => item.hasMega && setActiveMenu(item.label)}
                            onMouseLeave={() => setActiveMenu(null)}
                        >
                            <button 
                                onClick={() => onNavigate(item.view, item.payload)}
                                className={`text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] hover:text-pink-400 transition-all h-full px-4 flex items-center relative whitespace-nowrap ${activeMenu === item.label ? 'text-pink-400' : ''}`}
                            >
                                {item.label}
                                {item.hasMega && (
                                    <svg className={`w-3 h-3 ml-2 transition-transform duration-300 ${activeMenu === item.label ? 'rotate-180' : 'opacity-30'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                )}
                                <span className={`absolute bottom-0 left-0 h-[2.5px] bg-pink-600 transition-all duration-500 ${activeMenu === item.label ? 'w-full' : 'w-0'}`}></span>
                            </button>

                            {/* MEGA DESPLEGABLE - ANCHURA COMPLETA */}
                            {item.hasMega && activeMenu === item.label && (
                                <div className="fixed top-[134px] md:top-[160px] left-0 w-full bg-black/98 backdrop-blur-3xl border-t border-white/5 shadow-[0_50px_100px_rgba(0,0,0,0.9)] animate-mega-fade-in z-[101]">
                                    <div className="w-full max-w-7xl mx-auto py-16 px-12 grid grid-cols-12 gap-20">
                                        <div className="col-span-3 space-y-10 border-r border-white/10 pr-12">
                                            <h4 className="text-pink-400 text-[13px] font-black uppercase tracking-[0.5em] border-b border-white/5 pb-4">Destacados</h4>
                                            <ul className="space-y-5 text-white/70 text-[11px] font-bold uppercase tracking-[0.2em]">
                                                <li className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('products', 'makeup')}>Novage+ Bioactive</li>
                                                <li className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('products', 'skincare')}>Sets Rutina Completa</li>
                                                <li className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('products', 'hair')}>Línea Duologi</li>
                                                <li className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('products', 'all')}>Catálogo Completo</li>
                                            </ul>
                                        </div>
                                        <div className="col-span-3 space-y-10 border-r border-white/10 pr-12">
                                            <h4 className="text-pink-400 text-[13px] font-black uppercase tracking-[0.5em] border-b border-white/5 pb-4">Lo Más Buscado</h4>
                                            <ul className="space-y-5 text-white/70 text-[11px] font-bold uppercase tracking-[0.2em]">
                                                <li className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('products', 'skincare')}>Anti-Edad Premium</li>
                                                <li className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('products', 'makeup')}>Maquillaje Vegano</li>
                                                <li className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('products', 'perfume')}>Fragancias de Lujo</li>
                                                <li className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('ofertas')}>Super Ofertas</li>
                                            </ul>
                                        </div>
                                        <div className="col-span-6 flex items-center justify-end">
                                            <div className="relative group/promo overflow-hidden rounded-sm w-full h-full max-h-[320px] shadow-2xl">
                                                <img 
                                                    src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80" 
                                                    className="w-full h-full object-cover grayscale opacity-40 group-hover/promo:scale-105 transition-all duration-[3s]" 
                                                    alt="Promo" 
                                                />
                                                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center bg-black/40 backdrop-grayscale-[0.5]">
                                                    <h3 className="text-4xl font-serif italic text-white mb-6 tracking-tighter leading-tight">La Belleza del <br/> Futuro 2026</h3>
                                                    <button 
                                                        onClick={() => onNavigate('products', 'all')}
                                                        className="bg-white text-black text-[10px] font-black uppercase tracking-[0.4em] px-10 py-5 hover:bg-pink-600 hover:text-white transition-all shadow-2xl active:scale-95"
                                                    >
                                                        Descubrir Ahora
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </nav>

            <style>{`
                @keyframes mega-fade-in { 
                    from { opacity: 0; transform: translateY(-15px); } 
                    to { opacity: 1; transform: translateY(0); } 
                }
                .animate-mega-fade-in { animation: mega-fade-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </header>
    );
};

export default Header;
