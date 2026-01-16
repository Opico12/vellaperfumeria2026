
import React, { useState } from 'react';
import type { View } from './types';
import type { Currency } from './currency';
// Added import for getImg helper function
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

const Header: React.FC<HeaderProps> = ({ onNavigate, cartCount, onCartClick, currency, onCurrencyChange }) => {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    const navItems = [
        { label: 'Fragancias', view: 'products' as View, payload: 'perfume', hasMega: true, 
            subLinks: [
                { title: 'Perfumería Femenina', items: ['Love Potion Parfum', 'Giordani Gold Essenza', 'Divine Exclusive', 'Amber Elixir', 'Infinita'] },
                { title: 'Selección Masculina', items: ['Eclat Style', 'Possess Secret Man', 'Signature for Him', 'Nordic Waters', 'Glacier Rock'] }
            ]
        },
        { label: 'Maquillaje', view: 'products' as View, payload: 'makeup', hasMega: true,
            subLinks: [
                { title: 'Rostro & Perfección', items: ['Base Everlasting Sync', 'Correctores HD', 'Polvos Giordani Gold', 'Coloretes en Perlas'] },
                { title: 'Ojos & Labios', items: ['Máscara WonderLash HD', 'Labiales Ultra Fix', 'Sombras High Definition', 'Delineadores Kohl'] }
            ]
        },
        { label: 'Cuidado Facial', view: 'products' as View, payload: 'skincare', hasMega: true,
            subLinks: [
                { title: 'Sistemas Novage+', items: ['Ritual Lift & Firm', 'Sérum Bright Intense', 'Tratamiento Arrugas', 'Limpiadoras Bio-Lipid'] },
                { title: 'Cuidado Diario', items: ['Optimals Hydra', 'Royal Velvet', 'Diamond Cellular', 'Even Out'] }
            ]
        },
        { label: 'Cuerpo & Baño', view: 'products' as View, payload: 'personal-care', hasMega: true,
            subLinks: [
                { title: 'Milk & Honey Gold', items: ['Crema Cuerpo Nutritiva', 'Exfoliante de Azúcar', 'Champú de Lujo', 'Jabón Suave'] },
                { title: 'Love Nature', items: ['Línea Magnolia', 'Línea Coco & Agua', 'Aceites Esenciales', 'Cuidado de Manos'] }
            ]
        },
        { label: 'Journal 2026', view: 'catalog' as View, hasMega: false },
        { label: 'IA Consultor', view: 'ia' as View, hasMega: false },
    ];

    return (
        <header className="w-full fixed top-0 left-0 z-[100] font-sans">
            {/* Promo Bar */}
            <div className="w-full bg-[#FAE1EF] py-1.5 px-6 flex items-center justify-between text-black text-[9px] font-black uppercase tracking-[0.3em] border-b border-pink-200">
                <span className="flex items-center gap-2"><span className="w-2 h-2 bg-pink-600 rounded-full animate-pulse"></span> ENVÍO VIP GRATUITO POR COMPRAS SUPERIORES A 35€</span>
                <span className="hidden md:block">ENTREGA EXPRESA 24/48H EN TODA LA PENÍNSULA</span>
                <span className="cursor-pointer hover:text-pink-600 transition-colors uppercase">Vellaperfumeria Estocolmo</span>
            </div>

            {/* Main Brand Bar */}
            <div className="w-full h-24 bg-white flex items-center px-6 md:px-12 border-b border-gray-100 shadow-sm relative z-20">
                <div className="flex-1 flex justify-start">
                    <button onClick={() => onNavigate('ia')} className="bg-black text-white p-3 rounded-full hover:bg-pink-600 transition-all shadow-md">
                        <SearchIcon />
                    </button>
                </div>
                <div className="flex-1 flex justify-center">
                    <img onClick={() => onNavigate('home')} src="https://i0.wp.com/vellaperfumeria.com/wp-content/uploads/2025/06/1000003724-removebg-preview.png" alt="Logo Vellaperfumeria" className="h-16 cursor-pointer hover:scale-105 transition-transform" />
                </div>
                <div className="flex-1 flex justify-end items-center gap-6">
                    <button onClick={onCartClick} className="relative p-3 group">
                        <BagIcon />
                        {cartCount > 0 && (
                            <span className="absolute top-1 right-1 bg-black text-white text-[8px] font-black w-5 h-5 rounded-full flex items-center justify-center font-black border-2 border-white group-hover:bg-pink-600 transition-colors">
                                {cartCount}
                            </span>
                        )}
                    </button>
                </div>
            </div>

            {/* FULL WIDTH BLACK NAVIGATION MENU */}
            <nav className="w-full bg-black text-white h-14 relative flex justify-center shadow-2xl">
                <div className="w-full h-full flex justify-center items-stretch overflow-x-auto no-scrollbar px-6 max-w-[1920px]">
                    {navItems.map((item) => (
                        <div 
                            key={item.label} 
                            className="group/navitem h-full flex items-center"
                            onMouseEnter={() => item.hasMega && setActiveMenu(item.label)}
                            onMouseLeave={() => setActiveMenu(null)}
                        >
                            <button 
                                onClick={() => { onNavigate(item.view, item.payload); setActiveMenu(null); }}
                                className={`h-full px-8 md:px-14 text-[10px] font-black uppercase tracking-[0.45em] flex items-center whitespace-nowrap transition-all ${activeMenu === item.label ? 'text-pink-400 bg-white/5' : 'text-gray-300 hover:text-white'}`}
                            >
                                {item.label}
                                {item.hasMega && <ChevronDownIcon />}
                            </button>

                            {/* DROPDOWN / MEGA MENU */}
                            {item.hasMega && activeMenu === item.label && (
                                <div className="fixed left-0 w-full bg-black border-t border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.95)] animate-mega-in top-[152px] z-[50]">
                                    <div className="max-w-[1400px] mx-auto px-12 py-20 grid grid-cols-2 lg:grid-cols-4 gap-20 text-left">
                                        {item.subLinks?.map((col, idx) => (
                                            <div key={idx} className="space-y-8">
                                                <h4 className="text-pink-600 text-[11px] font-black uppercase tracking-[0.5em] border-b border-white/10 pb-4 mb-6 italic">{col.title}</h4>
                                                <ul className="space-y-4">
                                                    {col.items.map((sub, sIdx) => (
                                                        <li key={sIdx}>
                                                            <button 
                                                                onClick={() => { onNavigate(item.view, item.payload); setActiveMenu(null); }}
                                                                className="text-gray-400 hover:text-white text-[11px] font-bold uppercase tracking-widest hover:translate-x-3 transition-all block text-left"
                                                            >
                                                                {sub}
                                                            </button>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                        
                                        {/* Luxury Feature in Menu */}
                                        <div className="hidden lg:flex border-l border-white/10 pl-16 col-span-2 items-center">
                                            <div className="bg-white/5 p-12 rounded-sm w-full group/promo cursor-pointer flex items-center gap-14" onClick={() => onNavigate(item.view, item.payload)}>
                                                <div className="w-1/2 bg-white rounded-sm p-8 aspect-square flex items-center justify-center shadow-xl">
                                                    <img 
                                                        src={item.payload === 'perfume' ? getImg(42751) : getImg(42119)} 
                                                        className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover/promo:scale-110" 
                                                        alt="Destacado" 
                                                    />
                                                </div>
                                                <div className="w-1/2">
                                                    <p className="text-pink-500 text-[9px] font-black uppercase tracking-[0.6em] mb-4">Experiencia Premium</p>
                                                    <h5 className="text-white text-3xl font-black uppercase italic leading-none mb-8 tracking-tighter">Maestros <br/> de {item.label}</h5>
                                                    <button className="bg-white text-black text-[9px] font-black px-10 py-5 uppercase tracking-widest hover:bg-pink-600 hover:text-white transition-all">Ver la Colección</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="h-1.5 bg-gradient-to-r from-transparent via-pink-600/30 to-transparent"></div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </nav>
            <style>{`
                @keyframes mega-in { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
                .animate-mega-in { animation: mega-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </header>
    );
};

export default Header;
