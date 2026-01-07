
import React, { useState } from 'react';
import type { View } from './types';
import type { Currency } from './currency';

const BagIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
);

const InstaMiniIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919A118.663 118.663 0 0112 2.163zm0 1.442c-3.143 0-3.509.011-4.72.067-2.694.123-3.997 1.433-4.12 4.12C3.109 9.12 3.098 9.486 3.098 12c0 2.514.011 2.88.067 4.72.123 2.686 1.427 3.996 4.12 4.12 1.21.055 1.577.067 4.72.067 3.143 0 3.509-.011 4.72-.067 2.694-.123 3.997-1.433 4.12-4.12.056-1.84.067-2.206.067-4.72 0-2.514-.011-2.88-.067-4.72-.123-2.686-1.427-3.996-4.12-4.12-1.21-.055-1.577.067-4.72-.067zM12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zm0 1.44a2.31 2.31 0 110 4.62 2.31 2.31 0 010-4.62zM18.88 6.54a1.32 1.32 0 100-2.64 1.32 1.32 0 000 2.64z" />
    </svg>
);

const PhoneIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
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
            {/* Barra promocional rosa */}
            <div className="w-full bg-[#FAE1EF] py-2 px-6 flex items-center justify-between text-black border-b border-black/10">
                <div className="flex items-center gap-6">
                    <a href="https://www.instagram.com/vellaperfumeria/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest hover:text-pink-600 transition-colors">
                        <InstaMiniIcon /> @vellaperfumeria
                    </a>
                </div>
                <div className="flex-grow text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em] text-center hidden md:block">
                    ✨ ENVÍO GRATUITO EN PEDIDOS SUPERIORES A 35€ ✨
                </div>
                <div className="flex items-center gap-6">
                    <a href="tel:+34661202616" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest hover:text-pink-600 transition-colors">
                        <PhoneIcon /> +34 661 202 616
                    </a>
                </div>
            </div>

            {/* Barra de logo blanca */}
            <div className="w-full bg-white px-6 md:px-12 h-20 md:h-24 flex items-center justify-between border-b border-gray-100">
                <div className="flex-1 flex items-center gap-6">
                    <button onClick={() => onNavigate('ia')} className="hidden md:flex bg-black text-white text-[9px] font-black uppercase px-6 py-3 rounded-full hover:bg-pink-600 transition-all shadow-lg items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse"></span>
                        Beauty IA
                    </button>
                    <div className="hidden lg:block">
                        <select 
                            value={currency} 
                            onChange={(e) => onCurrencyChange(e.target.value as Currency)}
                            className="bg-gray-50 border border-gray-100 text-[9px] font-black px-3 py-1.5 rounded-sm focus:outline-none focus:ring-1 focus:ring-pink-300 cursor-pointer"
                        >
                            <option value="EUR">EUR (€)</option>
                            <option value="USD">USD ($)</option>
                        </select>
                    </div>
                </div>
                
                <div className="flex-shrink-0">
                    <button onClick={() => onNavigate('home')} className="flex flex-col items-center group">
                        <img src="https://i0.wp.com/vellaperfumeria.com/wp-content/uploads/2025/06/1000003724-removebg-preview.png" alt="Vella" className="h-12 md:h-16 transition-transform group-hover:scale-105 duration-700" />
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
                    </button>
                </div>
            </div>

            {/* MENÚ NEGRO FULL-WIDTH */}
            <nav className="w-full bg-black h-14 md:h-16 relative">
                <div className="h-full w-full max-w-7xl mx-auto px-6 flex items-center justify-center md:justify-start space-x-2 md:space-x-8">
                    {navItems.map((item) => (
                        <div 
                            key={item.label} 
                            className="h-full flex items-center"
                            onMouseEnter={() => item.hasMega && setActiveMenu(item.label)}
                            onMouseLeave={() => setActiveMenu(null)}
                        >
                            <button 
                                onClick={() => onNavigate(item.view, item.payload)}
                                className={`text-white text-[10px] font-black uppercase tracking-[0.3em] hover:text-pink-400 transition-all h-full px-4 flex items-center relative whitespace-nowrap ${activeMenu === item.label ? 'text-pink-400' : ''}`}
                            >
                                {item.label}
                                {item.hasMega && (
                                    <svg className={`w-3 h-3 ml-2 transition-transform duration-300 ${activeMenu === item.label ? 'rotate-180 text-pink-400' : 'opacity-40'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" /></svg>
                                )}
                            </button>

                            {/* MEGA MENÚ DESPLEGABLE */}
                            {item.hasMega && activeMenu === item.label && (
                                <div className="fixed top-[138px] md:top-[172px] left-0 w-full bg-black/98 backdrop-blur-3xl border-t border-white/10 shadow-2xl animate-mega-in z-[101]">
                                    <div className="w-full max-w-7xl mx-auto py-16 px-12 grid grid-cols-12 gap-16">
                                        <div className="col-span-3 space-y-10 border-r border-white/5 pr-12 text-left">
                                            <h4 className="text-pink-500 text-[13px] font-black uppercase tracking-[0.5em] pb-4">Destacados</h4>
                                            <ul className="space-y-6 text-white/80 text-[11px] font-bold uppercase tracking-[0.2em]">
                                                <li className="flex items-center justify-between group cursor-pointer" onClick={() => onNavigate('products', 'skincare')}>
                                                    <span>Novage+ Bio-Energía</span>
                                                    <span className="bg-zinc-700 text-gray-300 text-[8px] px-3 py-1.5 rounded-sm hover:bg-zinc-600 transition-colors">Ver página</span>
                                                </li>
                                                <li className="flex items-center justify-between group cursor-pointer" onClick={() => onNavigate('products', 'makeup')}>
                                                    <span>Giordani Gold Lujo</span>
                                                    <span className="bg-zinc-700 text-gray-300 text-[8px] px-3 py-1.5 rounded-sm hover:bg-zinc-600 transition-colors">Ver página</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-span-3 space-y-10 border-r border-white/5 pr-12 text-left">
                                            <h4 className="text-pink-500 text-[13px] font-black uppercase tracking-[0.5em] pb-4">Inspiración</h4>
                                            <ul className="space-y-6 text-white/80 text-[11px] font-bold uppercase tracking-[0.2em]">
                                                <li className="flex items-center justify-between group cursor-pointer" onClick={() => onNavigate('catalog')}>
                                                    <span>Catálogo 2026</span>
                                                    <span className="bg-zinc-700 text-gray-300 text-[8px] px-3 py-1.5 rounded-sm hover:bg-zinc-600 transition-colors">Ver página</span>
                                                </li>
                                                <li className="flex items-center justify-between group cursor-pointer" onClick={() => onNavigate('skinDiagnostic')}>
                                                    <span>Skin Advisor IA</span>
                                                    <span className="bg-zinc-700 text-gray-300 text-[8px] px-3 py-1.5 rounded-sm hover:bg-zinc-600 transition-colors">Ver página</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-span-6">
                                            <div className="relative group overflow-hidden rounded-sm w-full h-full max-h-[300px]">
                                                <img src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-700" alt="Promo" />
                                                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-black/40">
                                                    <h3 className="text-3xl font-serif italic text-white mb-6">Novedades 2026</h3>
                                                    <button onClick={() => onNavigate('products', 'all')} className="bg-zinc-700 text-gray-200 text-[10px] font-black px-10 py-4 hover:bg-pink-600 transition-all uppercase tracking-[0.4em]">Ver página completa</button>
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
                @keyframes mega-in { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
                .animate-mega-in { animation: mega-in 0.4s cubic-bezier(0.2, 1, 0.2, 1) forwards; }
            `}</style>
        </header>
    );
};

export default Header;
