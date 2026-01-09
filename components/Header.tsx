
import React, { useState } from 'react';
import type { View } from './types';
import type { Currency } from './currency';

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
    <svg className="w-3 h-3 ml-1.5 transition-transform group-hover/navitem:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        { 
            label: 'Maquillaje', 
            view: 'products' as View, 
            payload: 'makeup', 
            hasMega: true,
            subLinks: [
                { title: 'Labios', items: ['Labiales OnColour', 'Brillos Gloss', 'Perfiladores'] },
                { title: 'Rostro', items: ['Bases Giordani Gold', 'Correctores', 'Iluminadores'] },
                { title: 'Ojos', items: ['Máscaras Wonder Lash', 'Sombras OnColour', 'Delineadores'] },
                { title: 'Uñas', items: ['Esmaltes de Larga Duración', 'Tratamientos'] }
            ]
        },
        { 
            label: 'Cuidado Facial', 
            view: 'products' as View, 
            payload: 'skincare', 
            hasMega: true,
            subLinks: [
                { title: 'Colecciones', items: ['Novage+ Advanced', 'Optimals Hydra', 'Diamond Cellular'] },
                { title: 'Limpieza', items: ['Limpiadores en Gel', 'Tónicos Suaves', 'Exfoliantes'] },
                { title: 'Hidratación', items: ['Cremas de Día', 'Cremas de Noche', 'Sérums'] },
                { title: 'Tratamientos', items: ['Mascarillas', 'Contorno de Ojos', 'Aceites Faciales'] }
            ]
        },
        { 
            label: 'Fragancias', 
            view: 'products' as View, 
            payload: 'perfume', 
            hasMega: true,
            subLinks: [
                { title: 'Mujer', items: ['Eclat Femme', 'Divine', 'Love Potion'] },
                { title: 'Hombre', items: ['Possess The Secret', 'Eclat Style', 'Nordic Waters'] },
                { title: 'Premium', items: ['Essenza Parfum', 'All or Nothing', 'Signature'] },
                { title: 'Ofertas', items: ['Sets de Fragancia', 'Miniaturas'] }
            ]
        },
        { 
            label: 'Cuerpo & Cabello', 
            view: 'products' as View, 
            payload: 'personal-care', 
            hasMega: true,
            subLinks: [
                { title: 'Higiene', items: ['Geles de Ducha', 'Jabones Orgánicos', 'Desodorantes'] },
                { title: 'Cuidado Corporal', items: ['Milk & Honey Gold', 'Cremas de Manos', 'Pies Feet Up'] },
                { title: 'Cabello', items: ['Champús Duologi', 'Aceites Eleo', 'Mascarillas'] },
                { title: 'Protección', items: ['Cuidado Solar', 'Bálsamos'] }
            ]
        },
        { label: 'Wellness', view: 'products' as View, payload: 'wellness', hasMega: false },
        { label: 'Ideas Regalo', view: 'ofertas' as View, hasMega: false },
        { label: 'Revista Digital', view: 'catalog' as View, hasMega: false },
    ];

    return (
        <header className="w-full fixed top-0 left-0 z-[100] font-sans">
            {/* Announcement Bar */}
            <div className="w-full bg-black py-2.5 px-6 flex items-center justify-between text-white text-[9px] font-black uppercase tracking-[0.2em] border-b border-white/10">
                <div className="flex gap-4 items-center">
                    <span className="hidden md:inline text-pink-500">✨ EXCLUSIVO ONLINE</span>
                    <span>ENVÍO GRATIS A PARTIR DE 35€</span>
                </div>
                <div className="flex gap-6 items-center">
                    <button className="hover:text-pink-500 transition-colors">ENCUENTRA TU ESTILO</button>
                    <span className="hidden sm:inline">📞 +34 661 202 616</span>
                </div>
            </div>

            {/* Main Branding Header */}
            <div className="w-full h-24 md:h-32 bg-white flex items-center px-6 md:px-12 border-b border-gray-100">
                <div className="flex-1 flex justify-start items-center gap-4">
                   <button onClick={() => onNavigate('ia')} className="hidden lg:flex items-center gap-2 group">
                       <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-pink-600 transition-all">
                           <SearchIcon />
                       </div>
                       <span className="text-[10px] font-black uppercase tracking-widest group-hover:text-pink-600 transition-colors">Beauty Advisor IA</span>
                   </button>
                </div>

                <div className="flex-1 flex justify-center">
                    <button onClick={() => onNavigate('home')} className="flex flex-col items-center group">
                        <img 
                            src="https://i0.wp.com/vellaperfumeria.com/wp-content/uploads/2025/06/1000003724-removebg-preview.png" 
                            alt="Vella Perfumería" 
                            className="h-14 md:h-20 transition-transform group-hover:scale-105 duration-700" 
                        />
                        <span className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.5em] mt-2 text-black">Vellaperfumería</span>
                    </button>
                </div>

                <div className="flex-1 flex justify-end items-center gap-4 md:gap-8">
                    <button onClick={onCartClick} className="relative p-2 text-black hover:text-pink-600 transition-colors group">
                        <BagIcon />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-black text-white text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                                {cartCount}
                            </span>
                        )}
                    </button>
                </div>
            </div>

            {/* Navigation Menu - Full Width Black */}
            <nav className="w-full bg-black text-white relative h-14 md:h-16 shadow-2xl">
                <div className="w-full h-full max-w-[1920px] mx-auto flex justify-center items-stretch overflow-x-auto no-scrollbar">
                    {navItems.map((item) => (
                        <div 
                            key={item.label} 
                            className="h-full flex items-center group/navitem"
                            onMouseEnter={() => item.hasMega && setActiveMenu(item.label)}
                            onMouseLeave={() => setActiveMenu(null)}
                        >
                            <button 
                                onClick={() => { onNavigate(item.view, item.payload); setActiveMenu(null); }}
                                className={`h-full px-6 md:px-10 text-[10px] font-black uppercase tracking-[0.3em] flex items-center whitespace-nowrap transition-all hover:bg-white/5 border-b-2 border-transparent ${activeMenu === item.label ? 'border-pink-500 text-pink-400 bg-white/5' : ''}`}
                            >
                                {item.label}
                                {item.hasMega && <ChevronDownIcon />}
                            </button>

                            {/* Spectacular Mega Menu - Visible on Hover, Full Width Deep Black */}
                            {item.hasMega && activeMenu === item.label && (
                                <div 
                                    className="absolute top-full left-0 w-full bg-black border-t border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] z-[200] animate-mega-reveal"
                                    onMouseEnter={() => setActiveMenu(item.label)}
                                    onMouseLeave={() => setActiveMenu(null)}
                                >
                                    <div className="max-w-[1600px] mx-auto px-12 py-16 grid grid-cols-5 gap-16">
                                        {/* Sub-links Columns */}
                                        {item.subLinks?.map((col, idx) => (
                                            <div key={idx} className="flex flex-col space-y-6 animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                                                <h4 className="text-pink-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4 border-b border-white/5 pb-2">{col.title}</h4>
                                                <ul className="space-y-4">
                                                    {col.items.map((sub, sIdx) => (
                                                        <li key={sIdx}>
                                                            <button 
                                                                onClick={() => { onNavigate(item.view, item.payload); setActiveMenu(null); }}
                                                                className="text-gray-400 hover:text-white text-[12px] font-bold uppercase tracking-widest transition-all hover:translate-x-2 block text-left"
                                                            >
                                                                {sub}
                                                            </button>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}

                                        {/* Featured Promotion Column */}
                                        <div className="col-span-1 border-l border-white/5 pl-16 flex flex-col justify-center items-center text-center space-y-8 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                                            <div className="relative group/promo overflow-hidden rounded-sm cursor-pointer" onClick={() => onNavigate('ofertas')}>
                                                <div className="aspect-[4/5] bg-zinc-900 flex items-center justify-center overflow-hidden">
                                                    <img 
                                                        src="https://media-cdn.oriflame.com/digitalPromotionsMedia/images/banner-media/ES/20899847/20866148.jpg" 
                                                        className="w-full h-full object-cover opacity-60 group-hover/promo:scale-110 group-hover/promo:opacity-100 transition-all duration-1000" 
                                                        alt="Featured" 
                                                    />
                                                </div>
                                                <div className="absolute inset-0 p-4 flex flex-col justify-end bg-gradient-to-t from-black to-transparent">
                                                    <span className="text-pink-500 text-[8px] font-black uppercase tracking-widest">Novedad</span>
                                                    <h5 className="text-white text-[10px] font-black uppercase tracking-widest">Edición Limitada</h5>
                                                </div>
                                            </div>
                                            <button 
                                                onClick={() => onNavigate('catalog')}
                                                className="w-full bg-white text-black py-4 text-[9px] font-black uppercase tracking-[0.4em] hover:bg-pink-500 hover:text-white transition-all shadow-xl"
                                            >
                                                Ver Catálogo
                                            </button>
                                        </div>
                                    </div>
                                    {/* Bottom Decorative Line */}
                                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-pink-500/30 to-transparent"></div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </nav>

            <style>{`
                @keyframes mega-reveal {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-mega-reveal {
                    animation: mega-reveal 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </header>
    );
};

export default Header;
