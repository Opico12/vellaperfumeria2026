
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

const InstagramIcon = () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

const PhoneIcon = () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 015.06 2h3a2 2 0 012 1.72 12.81 12.81 0 00.62 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.62A2 2 0 0122 16.92z"></path>
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
    const HOME_URL = 'https://bellaparfumeria.com';
    const ORCHID_PINK = "#E29CD2";
    const DARK_ORCHID = "#C576B0";

    const categories = [
        { label: 'Cuidado Facial', payload: 'skincare' },
        { label: 'Maquillaje', payload: 'makeup' },
        { label: 'Fragancias', payload: 'perfume' },
        { label: 'Cuidado Personal', payload: 'personal-care' },
        { label: 'Hombre', payload: 'men' },
        { label: 'Wellness', payload: 'wellness' },
    ];

    return (
        <header className="w-full fixed top-0 left-0 z-[500] font-sans">
            {/* 1. Barra Superior Informativa Rosa Orquídea */}
            <div 
                className="w-full h-10 px-4 md:px-12 flex items-center justify-between text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] relative z-50 shadow-md"
                style={{ backgroundColor: ORCHID_PINK }}
            >
                <div className="flex gap-4">
                    <span>Distribuidor Autorizado Oriflame 2026</span>
                    <span className="hidden lg:inline text-white/50">|</span>
                    <span className="hidden lg:inline italic">Jan & Valentina Boutique</span>
                </div>
                <div className="flex gap-4 md:gap-8 items-center">
                    <div className="flex gap-5 items-center">
                        <a href="https://instagram.com/beautieshopvella" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-black transition-colors">
                            <InstagramIcon />
                            <span className="hidden sm:inline">@beautieshopvella</span>
                        </a>
                        <a href="tel:661202616" className="flex items-center gap-1.5 hover:text-black transition-colors">
                            <PhoneIcon />
                            <span className="hidden sm:inline">661 202 616</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* 2. Área del Logo Blanca */}
            <div className="w-full h-24 md:h-32 bg-white flex items-center px-4 md:px-12 border-b border-gray-100 relative shadow-sm z-40">
                <div className="flex-1"></div>
                <div className="flex-1 flex justify-center">
                    <img 
                        onClick={() => window.location.href = HOME_URL} 
                        src="https://i0.wp.com/bellaparfumeria.com/wp-content/uploads/2025/06/1000003724-removebg-preview.png" 
                        alt="Bella Perfumería" 
                        className="h-16 md:h-24 cursor-pointer hover:scale-105 transition-all duration-500 drop-shadow-sm" 
                    />
                </div>
                <div className="flex-1 flex justify-end items-center">
                    <button onClick={onCartClick} className="relative p-3 bg-gray-50 rounded-full hover:bg-pink-50 transition-all group">
                        <BagIcon />
                        {cartCount > 0 && (
                            <span 
                                className="absolute -top-1 -right-1 text-white text-[9px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white group-hover:scale-110"
                                style={{ backgroundColor: ORCHID_PINK }}
                            >
                                {cartCount}
                            </span>
                        )}
                    </button>
                </div>
            </div>

            {/* 3. Menú de Anchura Completa Negro */}
            <nav className="w-full bg-black h-12 md:h-14 flex items-center justify-center relative shadow-2xl z-30">
                <div className="flex items-center h-full w-full justify-center">
                    <button 
                        onClick={() => window.location.href = HOME_URL}
                        className="h-full px-6 md:px-10 text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-white hover:text-[#E29CD2] transition-all border-r border-white/10"
                    >
                        Inicio
                    </button>

                    <div 
                        className="h-full relative group"
                        onMouseEnter={() => setIsShopOpen(true)}
                        onMouseLeave={() => setIsShopOpen(false)}
                    >
                        <button 
                            className="h-full px-6 md:px-10 flex items-center text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-white group-hover:text-[#E29CD2] transition-all border-r border-white/10"
                        >
                            Tienda <ChevronDownIcon />
                        </button>

                        {/* Desplegable Negro de Ancho Total Visual */}
                        <div className={`absolute top-full left-1/2 -translate-x-1/2 w-[100vw] bg-black border-t-2 border-[#E29CD2] shadow-2xl transition-all duration-300 transform origin-top ${isShopOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-0 invisible pointer-events-none'}`}>
                            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 p-8 gap-4">
                                {categories.map((cat) => (
                                    <button
                                        key={cat.payload}
                                        onClick={() => { onNavigate('products', cat.payload); setIsShopOpen(false); }}
                                        className="text-center py-5 px-2 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-white/60 hover:text-white hover:bg-[#E29CD2]/10 border border-white/5 transition-all rounded-sm"
                                    >
                                        {cat.label}
                                    </button>
                                ))}
                            </div>
                            <div className="bg-[#E29CD2]/5 py-3 text-center border-t border-white/5">
                                <button 
                                    onClick={() => { onNavigate('products', 'all'); setIsShopOpen(false); }}
                                    className="text-[9px] font-black uppercase tracking-[0.5em] text-[#E29CD2] hover:text-white transition-colors"
                                >
                                    Catálogo Completo 2026
                                </button>
                            </div>
                        </div>
                    </div>

                    <button 
                        onClick={() => onNavigate('ofertas')}
                        className="h-full px-6 md:px-10 text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-white hover:text-[#E29CD2] transition-all border-r border-white/10"
                    >
                        Ofertas
                    </button>
                    
                    <button 
                        onClick={() => onNavigate('catalog')}
                        className="h-full px-6 md:px-10 text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-white hover:text-[#E29CD2] transition-all"
                    >
                        Catálogo
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
