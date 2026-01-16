
import React, { useState } from 'react';
import type { View } from './types';
import type { Currency } from './currency';
import { getImg } from './products';

const BagIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
);

const SearchIcon = () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

const ChevronDownIcon = () => (
    <svg className="w-3 h-3 ml-2 transition-transform group-hover/navitem:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
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
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    const navItems = [
        { label: 'Colección Tonos', view: 'products' as View, payload: 'makeup', hasMega: true,
            subLinks: [
                { title: 'Variantes Reales', items: ['Perfiladores GG 32191', 'Esmaltes GG 32088', 'Labiales Mate 33030'] },
                { title: 'Perlas & Brillos', items: ['Perlas Giordani 32081', 'Iluminador Novage+', 'Correctores THE ONE'] }
            ]
        },
        { label: 'Aguacate & Sérums', view: 'products' as View, payload: 'skincare', hasMega: true,
            subLinks: [
                { title: 'Love Nature', items: ['Crema Aguacate 32020', 'Manos Aguacate 32021', 'Labial Aguacate 32022'] },
                { title: 'Cuidado Intensivo', items: ['Sérum Pies 32370', 'Sérum Revitalizante', 'Crema Noche Optimals'] }
            ]
        },
        { label: 'Fragancias Premium', view: 'products' as View, payload: 'perfume', hasMega: true,
            subLinks: [
                { title: 'Lujo Estocolmo', items: ['Essenza EdP 32016', 'Tenderly 32000', 'Venture 32001'] },
                { title: 'Hombre', items: ['Venture EdT', 'North for Men 32004'] }
            ]
        },
        { label: 'Revista Digital', view: 'catalog' as View, hasMega: false },
        { label: 'IA Experto', view: 'ia' as View, hasMega: false },
    ];

    return (
        <header className="w-full fixed top-0 left-0 z-[100] font-sans">
            {/* Promo Bar */}
            <div className="w-full bg-[#FAE1EF] py-1.5 px-6 flex items-center justify-between text-black text-[9px] font-black uppercase tracking-[0.3em] border-b border-pink-200">
                <span>PRODUCTOS ORIGINALES ORIFLAME ESTOCOLMO</span>
                <span className="hidden md:block">ENTREGA SEGURA 24/48H</span>
                <span className="cursor-pointer hover:text-pink-600 uppercase">Vellaperfumeria</span>
            </div>

            {/* Brand Bar */}
            <div className="w-full h-24 bg-white flex items-center px-6 md:px-12 border-b border-gray-100 relative z-20">
                <div className="flex-1">
                    <button onClick={() => onNavigate('ia')} className="bg-black text-white p-3 rounded-full hover:bg-pink-600 transition-all">
                        <SearchIcon />
                    </button>
                </div>
                <div className="flex-1 flex justify-center">
                    <img onClick={() => onNavigate('home')} src="https://i0.wp.com/vellaperfumeria.com/wp-content/uploads/2025/06/1000003724-removebg-preview.png" alt="Logo" className="h-16 cursor-pointer hover:scale-105 transition-transform" />
                </div>
                <div className="flex-1 flex justify-end">
                    <button onClick={onCartClick} className="relative p-3">
                        <BagIcon />
                        {cartCount > 0 && (
                            <span className="absolute top-1 right-1 bg-black text-white text-[8px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                                {cartCount}
                            </span>
                        )}
                    </button>
                </div>
            </div>

            {/* MENU NEGRO FULL WIDTH */}
            <nav className="w-full bg-black text-white h-14 relative shadow-2xl overflow-visible">
                <div className="w-full h-full flex overflow-x-auto no-scrollbar scroll-smooth whitespace-nowrap lg:justify-center items-stretch">
                    {navItems.map((item) => (
                        <div 
                            key={item.label} 
                            className="group/navitem h-full flex items-center flex-shrink-0"
                            onMouseEnter={() => item.hasMega && setActiveMenu(item.label)}
                            onMouseLeave={() => setActiveMenu(null)}
                        >
                            <button 
                                onClick={() => { onNavigate(item.view, item.payload); setActiveMenu(null); }}
                                className={`h-full px-6 md:px-10 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] flex items-center transition-all ${activeMenu === item.label ? 'text-pink-400 bg-zinc-900' : 'text-gray-300 hover:text-white'}`}
                            >
                                {item.label}
                                {item.hasMega && <ChevronDownIcon />}
                            </button>

                            {/* MEGA MENU BLACK */}
                            {item.hasMega && activeMenu === item.label && (
                                <div className="fixed left-0 top-[152px] w-full bg-black border-t border-white/5 shadow-2xl animate-mega-in z-[50] py-16">
                                    <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
                                        {item.subLinks?.map((col, idx) => (
                                            <div key={idx} className="animate-fade-up whitespace-normal">
                                                <h4 className="text-pink-600 text-[10px] font-black uppercase tracking-[0.4em] mb-8 border-b border-white/10 pb-4">{col.title}</h4>
                                                <ul className="space-y-4">
                                                    {col.items.map((sub, sIdx) => (
                                                        <li key={sIdx}>
                                                            <button 
                                                                onClick={() => { onNavigate(item.view, item.payload); setActiveMenu(null); }}
                                                                className="text-gray-400 hover:text-white text-[11px] font-bold uppercase tracking-widest hover:translate-x-2 transition-all"
                                                            >
                                                                {sub}
                                                            </button>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                        <div className="md:col-span-1 bg-zinc-900/50 p-6 border border-white/5 rounded-sm text-center">
                                             <img src={getImg(32016)} className="h-20 mx-auto mb-4" alt="Highlight" />
                                             <p className="text-pink-500 text-[9px] font-black tracking-widest">Icono Oriflame</p>
                                             <h5 className="text-white text-xs font-black uppercase mb-4">Essenza Parfum</h5>
                                             <button onClick={() => onNavigate('products', 'perfume')} className="bg-white text-black text-[9px] font-black px-6 py-3 uppercase tracking-widest hover:bg-pink-600 hover:text-white transition-all">Ver Más</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </nav>
            <style>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                @keyframes mega-in { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes fade-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
                .animate-mega-in { animation: mega-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                .animate-fade-up { animation: fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
            `}</style>
        </header>
    );
};

export default Header;
