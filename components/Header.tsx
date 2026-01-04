
import React, { useState, useEffect } from 'react';
import type { View } from './types';
import type { Currency } from './currency';

const SearchIcon = () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
);
const UserIcon = () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
);
const BagIcon = () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
);
const ChevronDownIcon = () => (
    <svg className="w-3 h-3 ml-2 transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
);
const PhoneIcon = () => (
    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.72 11.72 0 003.7.59 1 1 0 011 1V20a1 1 0 01-1 1A19 19 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.7 1 1 0 01-.27 1.11l-2.2 2.2z"/></svg>
);
const InstagramMiniIcon = () => (
    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919A118.663 118.663 0 0112 2.163zm0 1.442c-3.143 0-3.509.011-4.72.067-2.694.123-3.997 1.433-4.12 4.12C3.109 9.12 3.098 9.486 3.098 12c0 2.514.011 2.88.067 4.72.123 2.686 1.427 3.996 4.12 4.12 1.21.055 1.577.067 4.72.067 3.143 0 3.509-.011 4.72-.067 2.694-.123 3.997-1.433 4.12-4.12.056-1.84.067-2.206.067-4.72 0-2.514-.011-2.88-.067-4.72-.123-2.686-1.427-3.996-4.12-4.12-1.21-.055-1.577.067-4.72-.067zM12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zm0 1.44a2.31 2.31 0 110 4.62 2.31 2.31 0 010-4.62zM18.88 6.54a1.32 1.32 0 100-2.64 1.32 1.32 0 000 2.64z"/></svg>
);

interface HeaderProps {
    onNavigate: (view: View, payload?: any) => void;
    currency: Currency;
    onCurrencyChange: (currency: Currency) => void;
    cartCount: number;
    onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currency, onCurrencyChange, cartCount, onCartClick }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const categories = [
        { label: 'Cuidado Facial', payload: 'skincare' },
        { label: 'Maquillaje Pro', payload: 'makeup' },
        { label: 'Alta Perfumería', payload: 'perfume' },
        { label: 'Wellness Elite', payload: 'wellness' },
        { label: 'Cuidado Personal', payload: 'personal-care' },
    ];

    // Rosa más intenso solicitado
    const orchidPink = "#FBB9D2";

    return (
        <header className="relative w-full z-50 font-sans">
            {/* Barra Promo Rosa Intenso con IG y TEL */}
            <div 
                className="w-full py-2.5 text-[9px] font-black tracking-[0.3em] uppercase border-b border-gray-100/50 shadow-sm"
                style={{ backgroundColor: orchidPink, color: '#000' }}
            >
                <div className="w-full px-6 md:px-12 flex justify-between items-center">
                    {/* TELÉFONO */}
                    <a href="https://wa.me/34661202616" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-60 transition-opacity cursor-pointer">
                        <PhoneIcon />
                        <span className="hidden sm:inline">+34 661 202 616</span>
                    </a>

                    {/* MENSAJE CENTRAL */}
                    <div className="flex-grow text-center">
                        <span className="animate-pulse">✨ ENVÍO GRATUITO EN SELECCIÓN 2026</span>
                    </div>

                    {/* INSTAGRAM */}
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-60 transition-opacity cursor-pointer">
                        <span className="hidden sm:inline">@VELLAPERFUMERIA</span>
                        <InstagramMiniIcon />
                    </a>
                </div>
            </div>

            {/* Utility Strip Negro */}
            <div className="bg-black text-white py-2 text-[8px] font-black tracking-[0.5em] uppercase border-b border-white/5">
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <div className="flex gap-12">
                        <span className="cursor-default opacity-30 hidden sm:inline tracking-[0.8em]">VELLA EDITORIAL HOUSE</span>
                        <button onClick={() => onNavigate('blog')} className="hover:opacity-60 transition-opacity italic">The Journal</button>
                    </div>
                    <div className="flex items-center gap-10">
                        <select
                            value={currency}
                            onChange={(e) => onCurrencyChange(e.target.value as Currency)}
                            className="bg-transparent border-none focus:ring-0 cursor-pointer p-0 text-[9px] font-black uppercase"
                        >
                            <option className="bg-black text-white" value="EUR">EUR (€)</option>
                            <option className="bg-black text-white" value="USD">USD ($)</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Logo Area */}
            <div className="bg-white py-8 md:py-12 px-10">
                <div className="flex items-center justify-between">
                    <div className="hidden md:flex w-1/3">
                         <button className="flex items-center gap-6 group">
                            <SearchIcon />
                            <span className="text-[10px] font-bold tracking-[0.5em] text-gray-300 group-hover:text-black transition-colors uppercase italic">Explorar</span>
                        </button>
                    </div>

                    <div className="w-full md:w-1/3 flex justify-center">
                        <button onClick={() => onNavigate('home')} className="hover:scale-105 transition-transform duration-700">
                            <img 
                                src="https://i0.wp.com/vellaperfumeria.com/wp-content/uploads/2025/06/1000003724-removebg-preview.png" 
                                alt="Vellaperfumeria" 
                                className="h-20 md:h-32 w-auto object-contain" 
                            />
                        </button>
                    </div>

                    <div className="flex items-center justify-end gap-10 w-1/3">
                        <button className="hidden md:flex items-center gap-4 text-[10px] font-bold tracking-[0.5em] text-black uppercase italic">
                            <UserIcon />
                            <span>Mi Cuenta</span>
                        </button>
                        <button onClick={onCartClick} className="relative group p-2">
                            <BagIcon />
                            {cartCount > 0 && (
                                <span className="absolute top-0 right-0 bg-black text-white text-[9px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white animate-pop">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                        <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden p-2">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 8h16M4 16h16" strokeWidth="1" /></svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* MENÚ DE ANCHURA COMPLETA NEGRO */}
            <nav className={`w-full bg-black text-white transition-all duration-700 z-40 hidden md:block ${isScrolled ? 'fixed top-0 py-4 shadow-2xl' : 'relative py-8'}`}>
                <div className="w-full px-16">
                    <ul className="flex justify-center items-center space-x-20 text-[11px] font-black tracking-[0.7em] uppercase">
                        <li><button onClick={() => onNavigate('home')} className="hover:opacity-60 transition-opacity">Inicio</button></li>
                        
                        <li className="group">
                            <button onClick={() => onNavigate('products', 'all')} className="flex items-center hover:opacity-60 transition-opacity py-2">
                                Colecciones <ChevronDownIcon />
                            </button>
                            
                            {/* Mega Menú Pantalla Completa */}
                            <div className="absolute left-0 top-full w-full bg-black border-t border-white/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform -translate-y-4 group-hover:translate-y-0">
                                <div className="max-w-[1920px] mx-auto px-20 py-24 flex justify-between">
                                    <div className="grid grid-cols-3 gap-32 w-3/4">
                                        <div className="space-y-12">
                                            <h4 className="text-[10px] tracking-[0.8em] border-b border-white/10 pb-6 font-black uppercase italic" style={{ color: orchidPink }}>Facial & Cuerpo</h4>
                                            <ul className="space-y-6">
                                                {categories.map(cat => (
                                                    <li key={cat.payload}>
                                                        <button onClick={() => onNavigate('products', cat.payload)} className="text-gray-400 hover:text-white transition-all text-lg font-light hover:pl-6 block italic">{cat.label}</button>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="space-y-12">
                                            <h4 className="text-[10px] tracking-[0.8em] border-b border-white/10 pb-6 font-black uppercase italic" style={{ color: orchidPink }}>Festive Season</h4>
                                            <ul className="space-y-6">
                                                <li><button onClick={() => onNavigate('ofertas')} className="text-white hover:opacity-60 text-lg font-bold">MILK & HONEY GOLD</button></li>
                                                <li><button onClick={() => onNavigate('products', 'accessories')} className="text-gray-400 hover:text-white text-lg font-light italic">Envoltorios de Gala</button></li>
                                                <li><button onClick={() => onNavigate('ofertas')} className="text-gray-400 hover:text-white text-lg font-light italic">Ventas Privadas</button></li>
                                            </ul>
                                        </div>
                                        <div className="space-y-12">
                                            <h4 className="text-[10px] tracking-[0.8em] border-b border-white/10 pb-6 font-black uppercase italic" style={{ color: orchidPink }}>Elite House</h4>
                                            <ul className="space-y-6">
                                                <li><button onClick={() => onNavigate('ia')} className="text-gray-400 hover:text-white text-lg font-light italic">Beauty Concierge AI</button></li>
                                                <li><button onClick={() => onNavigate('blog')} className="text-gray-400 hover:text-white text-lg font-light italic">Magazine</button></li>
                                                <li><button onClick={() => onNavigate('catalog')} className="text-gray-400 hover:text-white text-lg font-light italic">Journal Interactivo</button></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="w-1/4 max-sm mx-auto overflow-hidden">
                                        <div className="relative aspect-[3/4] bg-neutral-900 overflow-hidden border border-white/5 rounded-sm group/card">
                                            <img src="https://media-cdn.oriflame.com/contentImage?externalMediaId=d1c4b0a1-ec74-4986-90ce-7157e3505084&name=TopBannerMilkHoney&inputFormat=jpg" className="w-full h-full object-cover grayscale opacity-30 group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-1000 transform group-hover/card:scale-110" alt="Special Offer" />
                                            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-black/40">
                                                <span className="text-[10px] font-black tracking-[0.5em] mb-4 text-white uppercase italic">Icónicos</span>
                                                <p className="text-white text-2xl font-serif italic mb-8">Milk & Honey <br/>Essence</p>
                                                <button onClick={() => onNavigate('products', 'personal-care')} className="bg-white text-black px-10 py-3 text-[9px] font-black tracking-[0.4em] hover:bg-black hover:text-white transition-all uppercase">Ver Línea</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li><button onClick={() => onNavigate('catalog')} className="hover:opacity-60 transition-opacity">Catálogo 2026</button></li>
                        <li><button onClick={() => onNavigate('ofertas')} className="italic font-black" style={{ color: orchidPink }}>Privée Sales</button></li>
                        <li>
                            <button onClick={() => onNavigate('ia')} className="flex items-center gap-4 hover:opacity-70 transition-all group/ai">
                                <span className="w-2.5 h-2.5 rounded-full animate-pulse shadow-[0_0_15px_rgba(251,185,210,1)]" style={{ backgroundColor: orchidPink }}></span>
                                Beauty Assistant
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Menú Móvil */}
            <div className={`fixed inset-0 bg-white z-[100] transition-transform duration-700 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="p-12 h-full flex flex-col">
                    <div className="flex justify-between items-center mb-24">
                        <span className="text-[11px] font-black tracking-[0.6em] uppercase italic">Vellaperfumeria</span>
                        <button onClick={() => setIsMobileMenuOpen(false)} className="p-2"><svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M6 18L18 6M6 6l12 12" strokeWidth="1" /></svg></button>
                    </div>
                    <nav className="flex flex-col space-y-12">
                        <button onClick={() => onNavigate('home')} className="text-left text-5xl font-serif italic border-b border-gray-100 pb-8">Inicio</button>
                        <button onClick={() => onNavigate('products', 'all')} className="text-left text-5xl font-serif italic border-b border-gray-100 pb-8">Colecciones</button>
                        <button onClick={() => onNavigate('catalog')} className="text-left text-5xl font-serif italic border-b border-gray-100 pb-8">Catálogo 2026</button>
                        <button onClick={() => onNavigate('ia')} className="text-left text-5xl font-serif italic border-b border-gray-100 pb-8 font-bold">Beauty AI</button>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
