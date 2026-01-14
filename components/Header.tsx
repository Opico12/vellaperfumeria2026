
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
                { title: 'Labios', items: ['Labiales OnColour', 'Iconic Giordani', 'Brillos Gloss'] },
                { title: 'Rostro', items: ['Bases Sérum GG', 'Polvos Compactos', 'Iluminadores'] },
                { title: 'Ojos', items: ['Máscaras Wonder Lash', 'Sombras OnColour', 'Delineadores'] },
                { title: 'Uñas', items: ['Esmaltes Gloss N\' Wear', 'Tratamientos'] }
            ]
        },
        { 
            label: 'Cuidado Facial', 
            view: 'products' as View, 
            payload: 'skincare', 
            hasMega: true,
            subLinks: [
                { title: 'Colecciones', items: ['Novage+ Advanced', 'Optimals Hydra', 'Royal Velvet'] },
                { title: 'Limpieza', items: ['Geles Limpiadores', 'Tónicos Suaves', 'Exfoliantes'] },
                { title: 'Hidratación', items: ['Cremas de Día', 'Cremas de Noche', 'Sérums'] },
                { title: 'Tratamientos', items: ['Mascarillas', 'Contorno de Ojos', 'Aceites'] }
            ]
        },
        { 
            label: 'Fragancias', 
            view: 'products' as View, 
            payload: 'perfume', 
            hasMega: true,
            subLinks: [
                { title: 'Mujer', items: ['Eclat Femme', 'Divine', 'Love Potion'] },
                { title: 'Hombre', items: ['Possess Man', 'Eclat Style', 'Nordic Waters'] },
                { title: 'Premium', items: ['Essenza Parfum', 'All or Nothing', 'Signature'] },
                { title: 'Novedades', items: ['Nuevos Lanzamientos', 'Miniaturas'] }
            ]
        },
        { 
            label: 'Cuerpo & Cabello', 
            view: 'products' as View, 
            payload: 'personal-care', 
            hasMega: true,
            subLinks: [
                { title: 'Higiene', items: ['Geles de Ducha', 'Jabones Naturales', 'Desodorantes'] },
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
            {/* 1. Barra de Anuncio */}
            <div className="w-full bg-[#FAE1EF] py-2 px-6 flex items-center justify-between text-gray-800 text-[9px] font-black uppercase tracking-[0.2em] border-b border-pink-200">
                <div className="flex gap-4 items-center">
                    <span className="hidden md:inline text-pink-700 font-bold">✨ EXCLUSIVO ONLINE</span>
                    <span>ENVÍO GRATIS DESDE 35€</span>
                </div>
                <div className="flex gap-6 items-center">
                    <button className="hover:text-pink-600 transition-colors uppercase">Asesoría Gratuita</button>
                    <span className="hidden sm:inline">ESP 🇪🇸</span>
                </div>
            </div>

            {/* 2. Barra Principal de Marca */}
            <div className="w-full h-24 md:h-28 bg-white flex items-center px-6 md:px-12 border-b border-gray-100">
                <div className="flex-1 flex justify-start items-center">
                   <button onClick={() => onNavigate('ia')} className="flex items-center gap-3 group">
                       <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-pink-600 group-hover:scale-110 transition-all duration-300 shadow-lg">
                           <SearchIcon />
                       </div>
                       <div className="flex flex-col items-start leading-none">
                           <span className="text-[10px] font-black text-black uppercase tracking-widest">Beauty IA</span>
                           <span className="text-[8px] text-gray-400 font-bold uppercase mt-0.5 group-hover:text-pink-600">Consultar</span>
                       </div>
                   </button>
                </div>

                <div className="flex-1 flex justify-center">
                    <button onClick={() => onNavigate('home')} className="flex flex-col items-center group">
                        <img 
                            src="https://i0.wp.com/vellaperfumeria.com/wp-content/uploads/2025/06/1000003724-removebg-preview.png" 
                            alt="Vella Perfumería" 
                            className="h-12 md:h-16 transition-transform group-hover:scale-105 duration-700" 
                        />
                        <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.6em] mt-2 text-black group-hover:text-pink-600 transition-colors">Vellaperfumería</span>
                    </button>
                </div>

                <div className="flex-1 flex justify-end items-center gap-6">
                    <button onClick={onCartClick} className="relative p-2 text-black hover:text-pink-600 transition-all group">
                        <BagIcon />
                        {cartCount > 0 && (
                            <span className="absolute top-0 right-0 bg-black text-white text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-lg border border-white">
                                {cartCount}
                            </span>
                        )}
                    </button>
                </div>
            </div>

            {/* 3. Menú de Navegación - Ancho Completo Negro */}
            <nav className="w-full bg-black text-white relative h-12 md:h-14">
                <div className="w-full h-full flex justify-center items-stretch overflow-x-auto no-scrollbar">
                    {navItems.map((item) => (
                        <div 
                            key={item.label} 
                            className="h-full flex items-center group/navitem"
                            onMouseEnter={() => item.hasMega && setActiveMenu(item.label)}
                            onMouseLeave={() => setActiveMenu(null)}
                        >
                            <button 
                                onClick={() => { onNavigate(item.view, item.payload); setActiveMenu(null); }}
                                className={`h-full px-5 md:px-8 text-[9px] font-black uppercase tracking-[0.3em] flex items-center whitespace-nowrap transition-all hover:text-pink-400 ${activeMenu === item.label ? 'text-pink-500 bg-white/5' : 'text-gray-300'}`}
                            >
                                {item.label}
                                {item.hasMega && <ChevronDownIcon />}
                            </button>

                            {/* 4. Mega Menú Desplegable Visible de Fondo Negro */}
                            {item.hasMega && activeMenu === item.label && (
                                <div 
                                    className="fixed left-0 w-full bg-[#050505] border-t border-white/10 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.9)] z-[200] animate-mega-reveal"
                                    style={{ top: 'calc(24px + 96px + 48px)' }}
                                    onMouseEnter={() => setActiveMenu(item.label)}
                                    onMouseLeave={() => setActiveMenu(null)}
                                >
                                    <div className="max-w-7xl mx-auto px-12 py-16 grid grid-cols-5 gap-12">
                                        {item.subLinks?.map((col, idx) => (
                                            <div key={idx} className="flex flex-col space-y-6 animate-fade-in-up" style={{ animationDelay: `${idx * 80}ms` }}>
                                                <h4 className="text-pink-600 text-[10px] font-black uppercase tracking-[0.4em] mb-2 border-b border-white/5 pb-3">{col.title}</h4>
                                                <ul className="space-y-4">
                                                    {col.items.map((sub, sIdx) => (
                                                        <li key={sIdx}>
                                                            <button 
                                                                onClick={() => { onNavigate(item.view, item.payload); setActiveMenu(null); }}
                                                                className="text-gray-400 hover:text-white text-[11px] font-bold uppercase tracking-widest transition-all hover:translate-x-2 block text-left"
                                                            >
                                                                {sub}
                                                            </button>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}

                                        <div className="col-span-1 border-l border-white/5 pl-12 flex flex-col justify-center animate-fade-in-up" style={{ animationDelay: '320ms' }}>
                                            <div className="relative group/promo overflow-hidden rounded-sm cursor-pointer aspect-[3/4] mb-6" onClick={() => onNavigate('catalog')}>
                                                <img src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover opacity-50 group-hover/promo:scale-110 group-hover/promo:opacity-100 transition-all duration-1000" alt="Promo" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-4">
                                                    <span className="text-pink-500 text-[8px] font-black uppercase tracking-widest mb-1">Nueva Temporada</span>
                                                    <h5 className="text-white text-[10px] font-black uppercase tracking-widest">Catálogo 2026</h5>
                                                </div>
                                            </div>
                                            <button onClick={() => onNavigate('catalog')} className="bg-white text-black py-3 text-[8px] font-black uppercase tracking-[0.3em] hover:bg-pink-600 hover:text-white transition-all">Ver Digital</button>
                                        </div>
                                    </div>
                                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-pink-500/20 to-transparent"></div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </nav>

            <style>{`
                @keyframes mega-reveal { from { opacity: 0; transform: translateY(-5px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes fade-in-up { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
                .animate-mega-reveal { animation: mega-reveal 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                .animate-fade-in-up { animation: fade-in-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </header>
    );
};

export default Header;
