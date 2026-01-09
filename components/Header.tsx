
import React, { useState } from 'react';
import type { View } from './types';
import type { Currency } from './currency';

const BagIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
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
                { name: 'Labiales OnColour', payload: 'makeup' },
                { name: 'Rostro THE ONE', payload: 'makeup' },
                { name: 'Ojos & Máscaras', payload: 'makeup' },
                { name: 'Uñas & Esmaltes', payload: 'makeup' }
            ]
        },
        { 
            label: 'Cuidado Facial', 
            view: 'products' as View, 
            payload: 'skincare', 
            hasMega: true,
            subLinks: [
                { name: 'Novage+ Advanced', payload: 'skincare' },
                { name: 'Optimals Solution', payload: 'skincare' },
                { name: 'Tender Care Colección', payload: 'skincare' },
                { name: 'Limpiadores & Tónicos', payload: 'skincare' }
            ]
        },
        { 
            label: 'Fragancias', 
            view: 'products' as View, 
            payload: 'perfume', 
            hasMega: true,
            subLinks: [
                { name: 'Perfumes Mujer', payload: 'perfume' },
                { name: 'Fragancias Hombre', payload: 'perfume' },
                { name: 'Giordani Gold Essenza', payload: 'perfume' },
                { name: 'Sets de Regalo', payload: 'perfume' }
            ]
        },
        { 
            label: 'Cuerpo & Cabello', 
            view: 'products' as View, 
            payload: 'personal-care', 
            hasMega: true,
            subLinks: [
                { name: 'Milk & Honey Gold', payload: 'personal-care' },
                { name: 'Cuidado Pies Feet Up', payload: 'personal-care' },
                { name: 'Aceites Eleo', payload: 'hair' },
                { name: 'Champús Duologi', payload: 'hair' }
            ]
        },
        { label: 'Ofertas', view: 'ofertas' as View, hasMega: false },
        { label: 'Catálogo', view: 'catalog' as View, hasMega: false },
        { label: 'Contacto', view: 'contact' as View, hasMega: false },
    ];

    return (
        <header className="w-full fixed top-0 left-0 z-[100] font-sans bg-white shadow-xl">
            {/* Barra de Anuncios Superior */}
            <div className="w-full bg-[#FAE1EF] py-2 px-6 flex items-center justify-between text-black border-b border-black/10 text-[10px] font-black uppercase tracking-widest overflow-hidden whitespace-nowrap">
                <span className="flex items-center gap-2">✨ @vellaperfumeria</span>
                <span className="hidden md:block text-[#25D366]">ENVÍO GRATIS COMPRANDO PRODUCTOS SELECCIONADOS</span>
                <span>📞 +34 661 202 616</span>
            </div>

            {/* Fila del Logo */}
            <div className="w-full h-20 md:h-28 grid grid-cols-3 items-center px-6 md:px-12 border-b border-gray-100 bg-white">
                <div className="flex justify-start">
                    <button onClick={() => onNavigate('ia')} className="hidden md:block bg-black text-white text-[9px] px-6 py-2.5 rounded-full font-black uppercase hover:bg-pink-600 transition-all shadow-md active:scale-95">Beauty IA</button>
                </div>
                <div className="flex justify-center">
                    <button onClick={() => onNavigate('home')} className="flex flex-col items-center group">
                        <img src="https://i0.wp.com/vellaperfumeria.com/wp-content/uploads/2025/06/1000003724-removebg-preview.png" alt="Vella Perfumería" className="h-12 md:h-18 transition-transform group-hover:scale-105 duration-500" />
                        <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.6em] mt-1 text-black">Vellaperfumería</span>
                    </button>
                </div>
                <div className="flex justify-end items-center gap-6">
                    <button onClick={onCartClick} className="relative p-2 text-black hover:text-pink-600 transition-colors group">
                        <BagIcon />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center animate-bounce">
                                {cartCount}
                            </span>
                        )}
                    </button>
                </div>
            </div>

            {/* Barra de Navegación: Full Width con Fondo Negro */}
            <nav className="w-full bg-black relative shadow-2xl">
                <div className="w-full flex justify-center items-stretch h-14 md:h-16">
                    <div className="flex h-full w-full justify-center overflow-x-auto no-scrollbar">
                        {navItems.map((item) => (
                            <div 
                                key={item.label} 
                                className="h-full flex items-center group/navitem"
                                onMouseEnter={() => item.hasMega && setActiveMenu(item.label)}
                                onMouseLeave={() => setActiveMenu(null)}
                            >
                                <button 
                                    onClick={() => { onNavigate(item.view, item.payload); setActiveMenu(null); }}
                                    className={`text-white text-[10px] font-black uppercase tracking-[0.35em] h-full px-5 md:px-12 flex items-center whitespace-nowrap border-b-2 border-transparent hover:text-pink-400 transition-all ${activeMenu === item.label ? 'text-pink-400 border-pink-400 bg-white/5' : ''}`}
                                >
                                    {item.label}
                                    {item.hasMega && <ChevronDownIcon />}
                                </button>

                                {/* Mega Menú Desplegable - Fondo Negro Intenso y Anchura Completa */}
                                {item.hasMega && activeMenu === item.label && (
                                    <div className="absolute top-full left-0 w-full bg-[#080808] border-t border-white/5 py-14 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.9)] animate-mega-reveal z-[110]">
                                        <div className="max-w-[1500px] mx-auto px-12 grid grid-cols-4 gap-20">
                                            <div className="col-span-1 border-r border-white/10 pr-12">
                                                <h4 className="text-pink-600 text-[10px] font-black tracking-[0.5em] uppercase mb-10">Colecciones {item.label}</h4>
                                                <ul className="space-y-8">
                                                    {item.subLinks?.map(link => (
                                                        <li key={link.name}>
                                                            <button onClick={() => { onNavigate(item.view, link.payload); setActiveMenu(null); }} className="text-white/50 hover:text-white text-[12px] font-black uppercase tracking-[0.2em] transition-all block text-left group/link"><span className="inline-block transition-transform group-hover/link:translate-x-3">{link.name}</span></button>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="col-span-3 grid grid-cols-3 gap-12">
                                                <div className="relative group/promo overflow-hidden cursor-pointer" onClick={() => onNavigate('ofertas')}>
                                                    <div className="aspect-[3/4] overflow-hidden"><img src="https://media-cdn.oriflame.com/digitalPromotionsMedia/images/banner-media/ES/20899847/20866148.jpg" className="w-full h-full object-cover opacity-60 group-hover/promo:scale-110 group-hover/promo:opacity-100 transition-all duration-1000" alt="Novedades" /></div>
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-6 flex flex-col justify-end"><span className="text-pink-500 text-[9px] font-black uppercase tracking-widest mb-1">Tendencias</span><h5 className="text-white text-sm font-black uppercase tracking-widest leading-tight">Vellaperfumería 2026</h5></div>
                                                </div>
                                                <div className="relative group/promo overflow-hidden cursor-pointer" onClick={() => onNavigate('catalog')}>
                                                    <div className="aspect-[3/4] overflow-hidden"><img src="https://media-cdn.oriflame.com/digitalPromotionsMedia/images/banner-media/ES/20900001/20866153.jpg" className="w-full h-full object-cover opacity-60 group-hover/promo:scale-110 group-hover/promo:opacity-100 transition-all duration-1000" alt="Catálogo" /></div>
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-6 flex flex-col justify-end"><span className="text-pink-500 text-[9px] font-black uppercase tracking-widest mb-1">Especial</span><h5 className="text-white text-sm font-black uppercase tracking-widest leading-tight">Digital Journal</h5></div>
                                                </div>
                                                <div className="bg-zinc-900/50 p-10 flex flex-col justify-center items-center text-center border border-white/5 space-y-6">
                                                    <img src="https://i0.wp.com/vellaperfumeria.com/wp-content/uploads/2025/06/1000003724-removebg-preview.png" className="h-20 invert opacity-10" alt="Vella Icon" />
                                                    <h6 className="text-white text-xl font-black italic uppercase tracking-tighter">Smart <span className="text-pink-600">Beauty</span></h6>
                                                    <p className="text-white/40 text-[9px] font-bold uppercase tracking-[0.3em] leading-relaxed">Asesoramiento personalizado con IA para tu piel.</p>
                                                    <button onClick={() => onNavigate('ia')} className="w-full bg-white text-black text-[10px] font-black py-4 uppercase tracking-[0.4em] hover:bg-pink-600 hover:text-white transition-all shadow-xl">Probar IA</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </nav>

            <style>{`
                @keyframes mega-reveal { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
                .animate-mega-reveal { animation: mega-reveal 0.5s cubic-bezier(0.19, 1, 0.22, 1) forwards; }
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </header>
    );
};

export default Header;
