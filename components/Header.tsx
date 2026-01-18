
import React, { useState } from 'react';
import type { View } from './types';
import type { Currency } from './currency';

const BagIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
);

const InstagramIconSm = () => (
    <svg className="w-3.5 h-3.5 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919A118.663 118.663 0 0112 2.163zm0 1.442c-3.143 0-3.509.011-4.72.067-2.694.123-3.997 1.433-4.12 4.12C3.109 9.12 3.098 9.486 3.098 12c0 2.514.011 2.88.067 4.72.123 2.686 1.427 3.996 4.12 4.12 1.21.055 1.577.067 4.72.067 3.143 0 3.509-.011 4.72-.067 2.694-.123 3.997-1.433 4.12-4.12.056-1.84.067-2.206.067-4.72 0-2.514-.011-2.88-.067-4.72-.123-2.686-1.427-3.996-4.12-4.12-1.21-.055-1.577.067-4.72-.067zM12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zm0 1.44a2.31 2.31 0 110 4.62 2.31 2.31 0 010-4.62zM18.88 6.54a1.32 1.32 0 100-2.64 1.32 1.32 0 000 2.64z"/>
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
        { label: 'Inicio', view: 'home' as View },
        { label: 'Cuidado Facial', view: 'products' as View, payload: 'skincare' },
        { label: 'Cuidado Corporal', view: 'products' as View, payload: 'personal-care' },
        { label: 'Perfumes', view: 'products' as View, payload: 'perfume' },
        { label: 'Catálogo', view: 'catalog' as View },
        { label: 'IA Advisor', view: 'ia' as View }
    ];

    return (
        <header className="w-full fixed top-0 left-0 z-[150] font-sans">
            {/* Promo Bar - Rosa Orquídea (#FAE1EF) */}
            <div className="w-full bg-[#FAE1EF] h-10 px-6 flex items-center justify-between text-black text-[10px] font-black uppercase tracking-[0.2em] border-b border-pink-200 shadow-sm relative z-50">
                <div className="flex items-center gap-8">
                    <a href="https://www.instagram.com/bellaperfumeria/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-pink-600 transition-colors">
                        <InstagramIconSm /> @bellaperfumeria
                    </a>
                    <div className="flex items-center">
                         BELLA PERFUMERÍA - DISTRIBUIDORA OFICIAL ORIFLAME
                    </div>
                </div>
                <span className="hidden lg:block font-bold">TU ESENCIA, TU BELLEZA</span>
                <button onClick={() => onNavigate('ia')} className="hover:bg-black hover:text-white transition-all font-black tracking-widest bg-white px-4 py-1 rounded-full shadow-sm text-[8px]">PROBAR IA ADVISOR</button>
            </div>

            {/* Logo Area */}
            <div className="w-full h-24 bg-white flex items-center px-6 md:px-12 relative z-40 border-b border-gray-50">
                <div className="flex-1"></div>
                <div className="flex-1 flex justify-center flex-col items-center">
                    <img 
                        onClick={() => window.location.href = 'https://bellaboriifflame.com'} 
                        src="https://i0.wp.com/vellaperfumeria.com/wp-content/uploads/2025/06/1000003724-removebg-preview.png" 
                        alt="Bella Perfumería" 
                        className="h-16 md:h-20 cursor-pointer hover:scale-105 transition-transform duration-500" 
                    />
                    <span className="text-[10px] font-black tracking-[0.3em] uppercase text-black mt-1">Bella Perfumería</span>
                </div>
                <div className="flex-1 flex justify-end">
                    <button onClick={onCartClick} className="relative p-4 bg-gray-50 rounded-full hover:bg-[#FAE1EF] transition-all border border-gray-100 shadow-sm group">
                        <BagIcon />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-black text-white text-[9px] font-black w-6 h-6 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                                {cartCount}
                            </span>
                        )}
                    </button>
                </div>
            </div>

            {/* Nav Bar - Fondo Negro de Anchura Completa */}
            <nav className="w-full bg-black text-white h-14 relative shadow-2xl overflow-visible">
                <div className="w-full h-full flex justify-center items-stretch">
                    {navItems.map((item) => (
                        <div 
                            key={item.label} 
                            className="group/nav h-full flex items-center"
                            onMouseEnter={() => setActiveMenu(item.label)}
                            onMouseLeave={() => setActiveMenu(null)}
                        >
                            <button 
                                onClick={() => onNavigate(item.view, item.payload)}
                                className={`h-full px-8 text-[10px] font-black uppercase tracking-[0.3em] flex items-center transition-all ${activeMenu === item.label ? 'text-pink-300' : 'text-white/80 hover:text-white'}`}
                            >
                                {item.label}
                            </button>
                        </div>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Header;
