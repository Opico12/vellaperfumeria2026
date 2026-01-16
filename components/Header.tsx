
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
        { label: 'Fragancias', view: 'products' as View, payload: 'perfume', hasMega: true, 
            subLinks: [
                { title: 'Dama', items: ['Volare 31495', 'Elvie 31119', 'Summer Joy 41129'] },
                { title: 'Caballero', items: ['Mister Giordani', 'Eclat Homme', 'Ascendant'] }
            ]
        },
        { label: 'Maquillaje', view: 'products' as View, payload: 'makeup', hasMega: true,
            subLinks: [
                { title: 'Labios', items: ['Colour Stylist 31625', 'The ONE Lip Sensation'] },
                { title: 'Ojos', items: ['WonderLash HD 42119', 'Tremendous'] }
            ]
        },
        { label: 'Cuidado Facial', view: 'products' as View, payload: 'skincare', hasMega: true,
            subLinks: [
                { title: 'Novage+', items: ['Sérum Bright', 'Limpiador Bio-Lipid'] },
                { title: 'Tratamientos', items: ['Diamond Cellular 13659', 'Optimals Hydra'] }
            ]
        },
        { label: 'Cuerpo & Baño', view: 'products' as View, payload: 'personal-care', hasMega: true,
            subLinks: [
                { title: 'Higiene', items: ['Milk & Honey 31602', 'Beautanicals 31115', 'Optifresh 31673'] },
                { title: 'Especiales', items: ['Champú 41131', 'Magnolia 41101', 'My Fragrance 40584'] }
            ]
        },
        { label: 'Catálogo', view: 'catalog' as View, hasMega: false },
        { label: 'IA Asesor', view: 'ia' as View, hasMega: false },
    ];

    return (
        <header className="w-full fixed top-0 left-0 z-[100] font-sans">
            {/* Promo Bar */}
            <div className="w-full bg-[#FAE1EF] py-1.5 px-6 flex items-center justify-between text-black text-[9px] font-black uppercase tracking-[0.3em] border-b border-pink-200">
                <span><span className="w-2 h-2 bg-pink-600 rounded-full inline-block mr-2"></span> ENVÍO GRATIS &gt; 35€</span>
                <span className="hidden md:block">PRODUCTOS 100% ORIGINALES ORIFLAME</span>
                <span className="cursor-pointer hover:text-pink-600 uppercase">Vellaperfumeria Estocolmo</span>
            </div>

            {/* Main Brand Bar */}
            <div className="w-full h-24 bg-white flex items-center px-6 md:px-12 border-b border-gray-100 shadow-sm relative z-20">
                <div className="flex-1">
                    <button onClick={() => onNavigate('ia')} className="bg-black text-white p-3 rounded-full hover:bg-pink-600 transition-all shadow-md">
                        <SearchIcon />
                    </button>
                </div>
                <div className="flex-1 flex justify-center">
                    <img onClick={() => onNavigate('home')} src="https://i0.wp.com/vellaperfumeria.com/wp-content/uploads/2025/06/1000003724-removebg-preview.png" alt="Logo" className="h-16 cursor-pointer hover:scale-105 transition-transform" />
                </div>
                <div className="flex-1 flex justify-end">
                    <button onClick={onCartClick} className="relative p-3 group">
                        <BagIcon />
                        {cartCount > 0 && (
                            <span className="absolute top-1 right-1 bg-black text-white text-[8px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                                {cartCount}
                            </span>
                        )}
                    </button>
                </div>
            </div>

            {/* FULL WIDTH BLACK MENU */}
            <nav className="w-full bg-black text-white h-14 relative shadow-2xl overflow-visible">
                <div className="w-full h-full flex justify-center items-stretch px-4">
                    {navItems.map((item) => (
                        <div 
                            key={item.label} 
                            className="group/navitem h-full flex items-center"
                            onMouseEnter={() => item.hasMega && setActiveMenu(item.label)}
                            onMouseLeave={() => setActiveMenu(null)}
                        >
                            <button 
                                onClick={() => { onNavigate(item.view, item.payload); setActiveMenu(null); }}
                                className={`h-full px-5 md:px-8 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] flex items-center whitespace-nowrap transition-all ${activeMenu === item.label ? 'text-pink-400 bg-white/10' : 'text-gray-300 hover:text-white'}`}
                            >
                                {item.label}
                                {item.hasMega && <ChevronDownIcon />}
                            </button>

                            {/* MEGA MENU DESPLEGABLE - FONDO NEGRO ANCHURA COMPLETA */}
                            {item.hasMega && activeMenu === item.label && (
                                <div className="fixed left-0 top-[152px] w-full bg-black border-t border-white/5 shadow-[0_40px_100px_rgba(0,0,0,1)] animate-mega-in z-[50] py-16">
                                    <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 md:grid-cols-4 gap-16">
                                        {item.subLinks?.map((col, idx) => (
                                            <div key={idx} className="animate-fade-up" style={{ animationDelay: `${idx * 100}ms` }}>
                                                <h4 className="text-pink-600 text-[10px] font-black uppercase tracking-[0.4em] mb-8 border-b border-white/10 pb-3">{col.title}</h4>
                                                <ul className="space-y-4">
                                                    {col.items.map((sub, sIdx) => (
                                                        <li key={sIdx}>
                                                            <button 
                                                                onClick={() => { onNavigate(item.view, item.payload); setActiveMenu(null); }}
                                                                className="text-gray-400 hover:text-white text-[11px] font-bold uppercase tracking-widest hover:translate-x-3 transition-all flex items-center group/sub"
                                                            >
                                                                <span className="w-0 h-[1px] bg-pink-500 mr-0 group-hover/sub:w-4 group-hover/sub:mr-3 transition-all"></span>
                                                                {sub}
                                                            </button>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                        <div className="md:col-span-1 border-l border-white/10 pl-16 flex items-center">
                                             <div className="bg-zinc-900 p-8 rounded-sm border border-white/5 w-full">
                                                <img src={getImg(31602)} className="h-24 object-contain mx-auto mb-6" alt="Destacado" />
                                                <p className="text-pink-500 text-[9px] font-black uppercase mb-1 tracking-widest text-center">Incondicional</p>
                                                <h5 className="text-white text-md font-black uppercase italic text-center mb-6">Milk & Honey Gold</h5>
                                                <button onClick={() => onNavigate('products', 'personal-care')} className="w-full bg-white text-black text-[9px] font-black px-6 py-4 uppercase tracking-[0.3em] hover:bg-pink-600 hover:text-white transition-all">Ver Colección</button>
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
                @keyframes fade-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
                .animate-mega-in { animation: mega-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                .animate-fade-up { animation: fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
            `}</style>
        </header>
    );
};

export default Header;
