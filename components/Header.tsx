
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
        { label: 'OFERTAS ONCOLOUR', view: 'products' as View, payload: 'makeup', hasMega: true },
        { label: 'MILK & HONEY MAGNOLIA', view: 'regalos' as View, hasMega: true },
        { label: 'CATÁLOGO MAESTRO', view: 'products' as View, payload: 'all', hasMega: true },
        { label: 'Ciencia Facial', view: 'products' as View, payload: 'skincare' },
        { label: 'Digital Journal 2026', view: 'catalog' as View },
    ];

    return (
        <header className="w-full fixed top-0 left-0 z-[100] shadow-2xl">
            {/* BARRA PROMOCIONAL SUPERIOR - ANCHURA COMPLETA */}
            <div className="w-full bg-[#FAE1EF] py-2 text-[9px] font-black uppercase tracking-[0.5em] text-center border-b border-black/5 text-black">
                ✨ OFERTAS ONCOLOUR DESDE 3,49€ | MILK & HONEY MAGNOLIA DISPONIBLE PARA REGALAR ✨
            </div>

            {/* SECCIÓN DE MARCA - FONDO BLANCO */}
            <div className="w-full bg-white px-4 md:px-12 h-20 md:h-24 flex items-center justify-between border-b border-gray-100">
                <div className="flex-1">
                    <button onClick={() => onNavigate('ia')} className="bg-black text-white text-[9px] font-black uppercase tracking-widest px-6 py-3 rounded-full hover:bg-pink-600 transition-all shadow-lg active:scale-95">
                        Beauty Advisor AI
                    </button>
                </div>
                
                <div className="flex-shrink-0">
                    <a href="https://vellaperfumeria.com" className="flex flex-col items-center group">
                        <img src="https://i0.wp.com/vellaperfumeria.com/wp-content/uploads/2025/06/1000003724-removebg-preview.png" alt="Vella" className="h-14 md:h-18 transition-transform group-hover:scale-105 duration-700" />
                        <span className="text-[10px] font-black uppercase tracking-[0.8em] mt-1 text-black">Vella <span className="text-pink-600">Perfumería</span></span>
                    </a>
                </div>

                <div className="flex-1 flex justify-end items-center gap-6">
                    <button onClick={onCartClick} className="relative p-2 text-black hover:text-pink-600 transition-colors">
                        <BagIcon />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center animate-bounce">
                                {cartCount}
                            </span>
                        )}
                    </button>
                </div>
            </div>

            {/* MENÚ NEGRO ANCHURA COMPLETA (FULL-WIDTH NAVIGATION) */}
            <nav className="w-full bg-black h-14 md:h-16 flex items-center justify-center relative shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
                <div className="flex items-center h-full w-full px-4 md:px-12 justify-center md:justify-start overflow-x-auto no-scrollbar scroll-smooth">
                    {navItems.map((item) => (
                        <div 
                            key={item.label} 
                            className="h-full flex items-center group"
                            onMouseEnter={() => item.hasMega && setActiveMenu(item.label)}
                            onMouseLeave={() => setActiveMenu(null)}
                        >
                            <button 
                                onClick={() => item.href ? window.location.href = item.href : onNavigate(item.view, item.payload)}
                                className="text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] hover:text-[#FAE1EF] transition-all h-full px-4 md:px-8 relative flex items-center whitespace-nowrap"
                            >
                                {item.label}
                                {item.hasMega && (
                                    <svg className={`w-3 h-3 ml-2 transition-transform duration-300 ${activeMenu === item.label ? 'rotate-180 text-pink-400' : 'opacity-30'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                )}
                                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-pink-500 transition-all duration-300 ${activeMenu === item.label ? 'w-full' : 'group-hover:w-1/2'}`}></span>
                            </button>

                            {/* MEGA DROPDOWN - FULL WIDTH ABSOLUTO */}
                            {item.hasMega && activeMenu === item.label && (
                                <div className="fixed top-[138px] md:top-[160px] left-0 w-full bg-black/98 backdrop-blur-xl border-t border-white/5 shadow-[0_60px_100px_rgba(0,0,0,0.9)] animate-mega-slide z-[101]">
                                    <div className="max-w-7xl mx-auto py-16 px-12 grid grid-cols-12 gap-16 text-left">
                                        <div className="col-span-3 space-y-10 border-r border-white/5 pr-12">
                                            <h4 className="text-[#FAE1EF] text-[13px] font-black uppercase tracking-[0.5em] border-b border-white/10 pb-4">OnColour Hot Sales</h4>
                                            <ul className="space-y-4 text-white/70 text-[11px] font-bold uppercase tracking-[0.2em]">
                                                <li className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('products', 'makeup')}>Labiales Matte Power</li>
                                                <li className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('products', 'makeup')}>Máscaras Multi-Lash</li>
                                                <li className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('products', 'makeup')}>Polvos Power Face</li>
                                                <li className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('products', 'makeup')}>Esmaltes Pink Gloss</li>
                                            </ul>
                                        </div>
                                        <div className="col-span-3 space-y-10 border-r border-white/5 pr-12">
                                            <h4 className="text-[#FAE1EF] text-[13px] font-black uppercase tracking-[0.5em] border-b border-white/10 pb-4">Colección Magnolia</h4>
                                            <ul className="space-y-4 text-white/70 text-[11px] font-bold uppercase tracking-[0.2em]">
                                                <li className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('regalos')}>Set Gel Magnolia</li>
                                                <li className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('regalos')}>Crema Nutrición Seda</li>
                                                <li className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('regalos')}>Jabón de Gala Magnolia</li>
                                                <li className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('products', 'personal-care')}>Kits de Regalo VIP</li>
                                            </ul>
                                        </div>
                                        <div className="col-span-6 flex items-center justify-end gap-12">
                                            <div className="flex flex-col justify-center text-white space-y-8 max-w-sm text-right">
                                                <h3 className="text-5xl font-serif italic text-[#FAE1EF] tracking-tighter leading-tight">Explora lo <br/> Extraordinario</h3>
                                                <p className="text-gray-400 text-[10px] uppercase font-bold tracking-[0.4em] leading-loose">"Accede a nuestra colección infinita de más de 100 productos con descripciones técnicas ilimitadas y envíos VIP."</p>
                                                <button onClick={() => onNavigate('products', 'all')} className="w-fit ml-auto bg-pink-600 text-white text-[10px] font-black uppercase tracking-[0.4em] px-10 py-5 rounded-sm hover:bg-white hover:text-black transition-all shadow-2xl active:scale-95">VER TODO EL CATÁLOGO</button>
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
                @keyframes mega-slide { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
                .animate-mega-slide { animation: mega-slide 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </header>
    );
};

export default Header;
