
import React, { useState } from 'react';
import type { View } from './types';
import type { Currency } from './currency';

const BagIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
);

const ChevronDownIcon = () => (
    <svg className="w-3 h-3 ml-2 transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
);

interface HeaderProps {
    onNavigate: (view: View, payload?: any) => void;
    cartCount: number;
    onCartClick: () => void;
    currency: Currency;
    onCurrencyChange: (currency: Currency) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, cartCount, onCartClick }) => {
    const [isShopOpen, setIsShopOpen] = useState(false);

    const categories = [
        { label: 'Cuidado Facial', payload: 'skincare' },
        { label: 'Maquillaje', payload: 'makeup' },
        { label: 'Fragancias', payload: 'perfume' },
        { label: 'Hombre', payload: 'men' },
        { label: 'Cuidado Personal', payload: 'personal-care' },
        { label: 'Bienestar / Wellness', payload: 'wellness' },
    ];

    return (
        <header className="w-full fixed top-0 left-0 z-[500] font-sans shadow-2xl">
            {/* 1. Top Bar - Pinkish/White */}
            <div className="w-full bg-[#FAE1EF] h-10 px-4 md:px-12 flex items-center justify-between text-black text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] border-b border-pink-200">
                <div className="flex items-center gap-4">
                    <span className="hidden sm:inline">Distribuidor Autorizado Oriflame 2026</span>
                    <span className="sm:hidden">Oriflame 2026</span>
                </div>
                <div className="flex gap-4 md:gap-8 items-center">
                    <span className="hidden md:block">ENTREGA SEGURA EN 24/48H</span>
                    <div className="flex gap-4">
                        <a href="https://instagram.com" className="hover:text-pink-600 transition-colors">IG</a>
                        <a href="https://wa.me/34661202616" className="hover:text-pink-600 transition-colors">WA</a>
                    </div>
                </div>
            </div>

            {/* 2. Logo Area - White */}
            <div className="w-full h-24 md:h-28 bg-white flex items-center px-4 md:px-12 border-b border-gray-100 relative">
                <div className="flex-1 hidden md:block">
                     {/* Espacio para equilibrio visual */}
                </div>
                
                <div className="flex-1 flex justify-center">
                    <img 
                        onClick={() => onNavigate('home')} 
                        src="https://i0.wp.com/vellaperfumeria.com/wp-content/uploads/2025/06/1000003724-removebg-preview.png" 
                        alt="Bella Perfumería" 
                        className="h-16 md:h-22 cursor-pointer hover:scale-105 transition-all duration-500 drop-shadow-sm" 
                    />
                </div>

                <div className="flex-1 flex justify-end items-center gap-4">
                    <button onClick={onCartClick} className="relative p-3 bg-gray-50 rounded-full hover:bg-pink-50 transition-all group">
                        <BagIcon />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-[9px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white group-hover:scale-110">
                                {cartCount}
                            </span>
                        )}
                    </button>
                </div>
            </div>

            {/* 3. Navigation Bar - Full Width Black */}
            <nav className="w-full bg-black h-12 md:h-14 flex items-center justify-center relative">
                <div className="flex items-center h-full w-full max-w-none md:max-w-7xl justify-center">
                    <button 
                        onClick={() => onNavigate('home')}
                        className="h-full px-4 md:px-8 text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-white hover:text-pink-400 transition-all border-r border-white/10"
                    >
                        Inicio
                    </button>

                    <div 
                        className="h-full relative group"
                        onMouseEnter={() => setIsShopOpen(true)}
                        onMouseLeave={() => setIsShopOpen(false)}
                    >
                        <button 
                            className="h-full px-4 md:px-8 flex items-center text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-white group-hover:text-pink-400 transition-all border-r border-white/10"
                        >
                            Tienda <ChevronDownIcon />
                        </button>

                        {/* Dropdown - Solid Black Background */}
                        <div className={`absolute top-full left-0 md:left-1/2 md:-translate-x-1/2 w-screen md:w-[600px] bg-black border-t-2 border-pink-500 shadow-2xl transition-all duration-300 transform origin-top ${isShopOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-0 invisible pointer-events-none'}`}>
                            <div className="grid grid-cols-2 p-6 md:p-8 gap-4 md:gap-8 bg-black">
                                {categories.map((cat) => (
                                    <button
                                        key={cat.payload}
                                        onClick={() => { onNavigate('products', cat.payload); setIsShopOpen(false); }}
                                        className="text-left py-3 px-4 text-[10px] font-black uppercase tracking-widest text-white/70 hover:text-white hover:bg-pink-500/20 border-b border-white/5 transition-all flex items-center justify-between group/item"
                                    >
                                        {cat.label}
                                        <span className="opacity-0 group-hover/item:opacity-100 transition-opacity text-pink-500">→</span>
                                    </button>
                                ))}
                            </div>
                            <div className="bg-pink-500/10 p-4 text-center">
                                <button 
                                    onClick={() => { onNavigate('products', 'all'); setIsShopOpen(false); }}
                                    className="text-[9px] font-black uppercase tracking-[0.4em] text-pink-400 hover:text-pink-300 transition-colors"
                                >
                                    Ver todas las colecciones
                                </button>
                            </div>
                        </div>
                    </div>

                    <button 
                        onClick={() => onNavigate('ofertas')}
                        className="h-full px-4 md:px-8 text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-white hover:text-pink-400 transition-all border-r border-white/10"
                    >
                        Ofertas
                    </button>
                    
                    <button 
                        onClick={() => onNavigate('catalog')}
                        className="h-full px-4 md:px-8 text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-white hover:text-pink-400 transition-all"
                    >
                        Catálogo
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
