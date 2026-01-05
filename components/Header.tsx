
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
    currency: Currency;
    onCurrencyChange: (currency: Currency) => void;
    cartCount: number;
    onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currency, onCurrencyChange, cartCount, onCartClick }) => {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    const navItems = [
        { label: 'Inicio', href: 'https://vellaperfumeria.com' },
        { label: 'Cuidado Facial', view: 'products' as View, payload: 'skincare' },
        { label: 'Maquillaje', view: 'products' as View, payload: 'makeup', hasMega: true },
        { label: 'Fragancias', view: 'products' as View, payload: 'perfume' },
        { label: 'Duologi', view: 'products' as View, payload: 'hair' },
        { label: 'Regalos', view: 'regalos' as View },
    ];

    return (
        <header className="w-full fixed top-0 left-0 z-[100] bg-white">
            {/* TOP BAR */}
            <div className="w-full bg-[#FAE1EF] py-2 text-[10px] font-black uppercase tracking-[0.5em] text-center border-b border-black/5">
                ✨ COFRE DE CREMAS Y NOVEDADES ORIFLAME 2026 ✨
            </div>

            {/* BRAND BAR */}
            <div className="w-full px-4 md:px-12 h-20 md:h-24 flex items-center justify-between border-b border-gray-50">
                <div className="flex-1">
                    <button onClick={() => onNavigate('ia')} className="bg-black text-white text-[9px] font-black uppercase tracking-widest px-6 py-3 rounded-full hover:bg-pink-600 transition-all">
                        Beauty AI
                    </button>
                </div>
                
                <div className="flex-shrink-0">
                    <a href="https://vellaperfumeria.com" className="flex flex-col items-center">
                        <img src="https://i0.wp.com/vellaperfumeria.com/wp-content/uploads/2025/06/1000003724-removebg-preview.png" alt="Vella" className="h-14 md:h-18" />
                        <span className="text-[10px] font-black uppercase tracking-[0.8em] mt-1 text-black">Vella <span className="text-pink-600">Perfumeria</span></span>
                    </a>
                </div>

                <div className="flex-1 flex justify-end items-center gap-8">
                    <button onClick={onCartClick} className="relative p-2 hover:text-pink-600 transition-colors">
                        <BagIcon />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-black text-white text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                    </button>
                </div>
            </div>

            {/* FULL WIDTH BLACK MENU */}
            <nav className="w-full bg-black h-14 flex items-center justify-center relative shadow-2xl">
                {navItems.map((item) => (
                    <div 
                        key={item.label} 
                        className="h-full flex items-center px-4 md:px-10 group"
                        onMouseEnter={() => item.hasMega && setActiveMenu(item.label)}
                        onMouseLeave={() => setActiveMenu(null)}
                    >
                        <button 
                            onClick={() => item.href ? window.location.href = item.href : onNavigate(item.view, item.payload)}
                            className="text-white text-[10px] font-black uppercase tracking-[0.4em] hover:text-[#FAE1EF] transition-all h-full relative"
                        >
                            {item.label}
                            <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#FAE1EF] transition-transform duration-500 ${activeMenu === item.label ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                        </button>

                        {/* DROP DOWN MAQUILLAJE */}
                        {item.hasMega && activeMenu === item.label && (
                            <div className="absolute top-14 left-0 w-full bg-black border-t border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.8)] animate-fade-in-down z-[101]">
                                <div className="max-w-7xl mx-auto py-16 px-12 grid grid-cols-4 gap-20">
                                    <div className="col-span-1 space-y-10">
                                        <h4 className="text-[#FAE1EF] text-[13px] font-black uppercase tracking-[0.5em] border-b border-white/20 pb-4">Maquillaje</h4>
                                        <ul className="space-y-6 text-white text-[11px] font-bold uppercase tracking-widest">
                                            <li className="opacity-40">- Maquillaje de Givenchy no</li>
                                            <li className="hover:text-[#FAE1EF] cursor-pointer" onClick={() => onNavigate('products', 'makeup')}>- Dúo de maquillaje de Jordani Golds</li>
                                            <li className="hover:text-[#FAE1EF] cursor-pointer" onClick={() => onNavigate('products', 'makeup')}>- Maquillaje de The One</li>
                                            <li className="hover:text-[#FAE1EF] cursor-pointer" onClick={() => onNavigate('products', 'makeup')}>- Maquillaje de un color</li>
                                        </ul>
                                    </div>
                                    <div className="col-span-3 flex items-center justify-center border-l border-white/10 pl-20">
                                        <div className="text-center text-white space-y-6">
                                            <h3 className="text-5xl font-serif italic text-[#FAE1EF]">Belleza Sueca</h3>
                                            <p className="text-white/40 max-w-lg italic">Fórmulas profesionales diseñadas en Estocolmo para realzar tu esencia única.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </nav>

            <style>{`
                @keyframes fade-in-down { from { opacity: 0; transform: translateY(-15px); } to { opacity: 1; transform: translateY(0); } }
                .animate-fade-in-down { animation: fade-in-down 0.4s ease-out forwards; }
            `}</style>
        </header>
    );
};

export default Header;
