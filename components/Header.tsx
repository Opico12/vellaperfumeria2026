
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
        { label: 'Maquillaje OnColour', view: 'products' as View, payload: 'makeup', hasMega: true },
        { label: 'Cuidado Facial', view: 'products' as View, payload: 'skincare' },
        { label: 'Ofertas Especiales', view: 'ofertas' as View },
        { label: 'Digital Journal 2026', view: 'catalog' as View },
    ];

    return (
        <header className="w-full fixed top-0 left-0 z-[100] shadow-2xl font-sans">
            {/* BARRA SUPERIOR PROMOCIONAL */}
            <div className="w-full bg-[#FAE1EF] py-2.5 text-[10px] font-black uppercase tracking-[0.4em] text-center text-black border-b border-black/5">
                ✨ ENVÍO GRATUITO EN PEDIDOS SUPERIORES A 35€ | EXPERIENCIA VIP VELLAPERFUMERÍA ✨
            </div>

            {/* MARCA Y LOGO (FONDO BLANCO) */}
            <div className="w-full bg-white px-6 md:px-12 h-20 md:h-24 flex items-center justify-between border-b border-gray-100">
                <div className="flex-1 flex items-center gap-6">
                    <button 
                        onClick={() => onNavigate('ia')} 
                        className="hidden md:flex bg-black text-white text-[9px] font-black uppercase tracking-widest px-6 py-3 rounded-full hover:bg-pink-600 transition-all shadow-lg items-center gap-3 group"
                    >
                        <span className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse group-hover:bg-white"></span>
                        Beauty AI
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
                        <span className="text-[10px] font-black uppercase tracking-[0.8em] mt-1 text-black">Vellaperfumería</span>
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
                <div className="h-full max-w-7xl mx-auto px-6 flex items-center justify-center md:justify-start space-x-2 md:space-x-8">
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
                                <span className={`absolute bottom-0 left-0 h-[2px] bg-pink-600 transition-all duration-500 ${activeMenu === item.label ? 'w-full' : 'w-0'}`}></span>
                            </button>

                            {/* MEGA DESPLEGABLE VISIBLE */}
                            {item.hasMega && activeMenu === item.label && (
                                <div className="fixed top-[134px] md:top-[160px] left-0 w-full bg-black/95 backdrop-blur-2xl border-t border-white/5 shadow-[0_40px_80px_rgba(0,0,0,0.8)] animate-mega-fade-in z-[101]">
                                    <div className="max-w-7xl mx-auto py-16 px-12 grid grid-cols-12 gap-16">
                                        <div className="col-span-3 space-y-8 border-r border-white/10 pr-12">
                                            <h4 className="text-pink-400 text-[12px] font-black uppercase tracking-[0.5em] mb-6">Lo Más Buscado</h4>
                                            <ul className="space-y-4 text-white/60 text-[11px] font-bold uppercase tracking-[0.2em]">
                                                <li className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('products', 'makeup')}>Best Sellers 2026</li>
                                                <li className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('products', 'skincare')}>Sets Bioactivos</li>
                                                <li className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('regalos')}>Kits para Regalo</li>
                                                <li className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('products', 'perfume')}>Fragancias de Lujo</li>
                                            </ul>
                                        </div>
                                        <div className="col-span-3 space-y-8 border-r border-white/10 pr-12">
                                            <h4 className="text-pink-400 text-[12px] font-black uppercase tracking-[0.5em] mb-6">Por Marca</h4>
                                            <ul className="space-y-4 text-white/60 text-[11px] font-bold uppercase tracking-[0.2em]">
                                                <li className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('products', 'all')}>Giordani Gold</li>
                                                <li className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('products', 'all')}>Novage+</li>
                                                <li className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('products', 'all')}>Milk & Honey Magnolia</li>
                                                <li className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('products', 'all')}>OnColour Nordic</li>
                                            </ul>
                                        </div>
                                        <div className="col-span-6 flex items-center justify-end">
                                            <div className="relative group/promo overflow-hidden rounded-sm w-full h-full max-h-[300px]">
                                                <img 
                                                    src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80" 
                                                    className="w-full h-full object-cover grayscale group-hover/promo:grayscale-0 transition-all duration-1000 opacity-60" 
                                                    alt="Promo" 
                                                />
                                                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-black/40">
                                                    <h3 className="text-3xl font-serif italic text-white mb-4 tracking-tighter">Experiencia <br/> Inolvidable</h3>
                                                    <button 
                                                        onClick={() => onNavigate('products', 'all')}
                                                        className="bg-white text-black text-[10px] font-black uppercase tracking-[0.4em] px-8 py-4 hover:bg-pink-600 hover:text-white transition-all shadow-2xl"
                                                    >
                                                        Explorar Todo
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
                    from { opacity: 0; transform: translateY(-10px); } 
                    to { opacity: 1; transform: translateY(0); } 
                }
                .animate-mega-fade-in { animation: mega-fade-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </header>
    );
};

export default Header;
