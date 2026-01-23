
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
        { label: 'Complementos', payload: 'accessories' },
    ];

    return (
        <header className="w-full fixed top-0 left-0 z-[150] font-sans shadow-2xl">
            {/* Promo Bar */}
            <div className="w-full bg-[#FAE1EF] h-10 px-4 md:px-12 flex items-center justify-between text-black text-[10px] font-black uppercase tracking-[0.2em] border-b border-pink-200 shadow-sm relative z-[60]">
                <span className="hidden sm:block text-[9px] tracking-widest uppercase">Boutique Oriflame Oficial 2026</span>
                <span className="font-bold text-[9px] tracking-widest animate-pulse">ENVÍO GRATIS EN PEDIDOS SUPERIORES A 35€</span>
                <button onClick={() => onNavigate('ia')} className="text-[8px] font-black uppercase underline decoration-2 hover:text-pink-700 transition-colors">Beauty AI Advisor</button>
            </div>

            {/* Logo Area */}
            <div className="w-full h-24 bg-white flex items-center px-6 md:px-12 relative z-[50] border-b border-gray-50">
                <div className="flex-1"></div>
                <div className="flex-1 flex justify-center">
                    <img 
                        onClick={() => window.location.href = 'https://vellaperfumeria.com'} 
                        src="https://i0.wp.com/vellaperfumeria.com/wp-content/uploads/2025/06/1000003724-removebg-preview.png" 
                        alt="Bella Perfumería" 
                        className="h-16 cursor-pointer hover:scale-105 transition-transform duration-500" 
                    />
                </div>
                <div className="flex-1 flex justify-end items-center gap-6">
                    <button onClick={onCartClick} className="relative p-3 bg-gray-50 rounded-full hover:bg-pink-50 transition-all border border-gray-100 group">
                        <BagIcon />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-black text-white text-[9px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white group-hover:bg-pink-600 transition-colors">
                                {cartCount}
                            </span>
                        )}
                    </button>
                </div>
            </div>

            {/* Main Nav - Full Width Black */}
            <nav className="w-full bg-black text-white h-14 relative z-[40] flex items-center justify-center">
                <div className="flex items-center h-full">
                    <button 
                        onClick={() => window.location.href = 'https://vellaperfumeria.com'}
                        className="h-full px-8 text-[11px] font-black uppercase tracking-[0.3em] hover:text-pink-400 transition-all"
                    >
                        Inicio
                    </button>

                    {/* Dropdown Tienda */}
                    <div 
                        className="h-full relative group"
                        onMouseEnter={() => setIsShopOpen(true)}
                        onMouseLeave={() => setIsShopOpen(false)}
                    >
                        <button 
                            onClick={() => onNavigate('products', 'all')}
                            className={`h-full px-8 flex items-center text-[11px] font-black uppercase tracking-[0.3em] transition-all ${isShopOpen ? 'text-pink-400 bg-white/5' : 'hover:text-pink-400'}`}
                        >
                            Catálogo <ChevronDownIcon />
                        </button>

                        {/* Dropdown Panel - Visible Fondo Negro */}
                        <div className={`absolute top-full left-0 w-[240px] bg-black border-t border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 origin-top overflow-hidden ${isShopOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
                            <div className="py-2">
                                <button 
                                    onClick={() => { onNavigate('products', 'all'); setIsShopOpen(false); }}
                                    className="w-full text-left px-8 py-4 text-[10px] font-black uppercase tracking-widest text-white/50 hover:text-white hover:bg-white/5 transition-all"
                                >
                                    Ver Todo
                                </button>
                                {categories.map((cat) => (
                                    <button 
                                        key={cat.payload}
                                        onClick={() => {
                                            onNavigate('products', cat.payload);
                                            setIsShopOpen(false);
                                        }}
                                        className="w-full text-left px-8 py-4 text-[10px] font-black uppercase tracking-widest text-white/50 hover:text-pink-400 hover:bg-white/5 transition-all"
                                    >
                                        {cat.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <button 
                        onClick={() => onNavigate('ofertas')}
                        className="h-full px-8 text-[11px] font-black uppercase tracking-[0.3em] text-yellow-500 hover:text-yellow-400 transition-all"
                    >
                        Ofertas Flash
                    </button>
                    
                    <button 
                        onClick={() => onNavigate('catalog')}
                        className="h-full px-8 text-[11px] font-black uppercase tracking-[0.3em] hover:text-pink-400 transition-all"
                    >
                        Journal 2026
                    </button>

                    <button 
                        onClick={() => onNavigate('regalos')}
                        className="h-full px-8 text-[11px] font-black uppercase tracking-[0.3em] hover:text-pink-400 transition-all"
                    >
                        Especial Regalos
                    </button>

                    <button 
                        onClick={() => onNavigate('ia')}
                        className="h-full px-8 text-[11px] font-black uppercase tracking-[0.3em] hover:text-pink-400 transition-all hidden md:block"
                    >
                        IA Advisor
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
