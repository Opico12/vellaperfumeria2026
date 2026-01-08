
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
    cartCount: number;
    onCartClick: () => void;
    currency: Currency;
    onCurrencyChange: (currency: Currency) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, cartCount, onCartClick, currency, onCurrencyChange }) => {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    const navItems = [
        { label: 'Tienda', view: 'products' as View, payload: 'all', hasMega: true },
        { label: 'Maquillaje', view: 'products' as View, payload: 'makeup', hasMega: true },
        { label: 'Facial', view: 'products' as View, payload: 'skincare', hasMega: true },
        { label: 'Cuerpo', view: 'products' as View, payload: 'personal-care', hasMega: true },
        { label: 'Capilar', view: 'products' as View, payload: 'hair', hasMega: true },
        { label: 'Fragancias', view: 'products' as View, payload: 'perfume', hasMega: true },
        { label: 'Ofertas', view: 'ofertas' as View },
    ];

    return (
        <header className="w-full fixed top-0 left-0 z-[100] shadow-2xl font-sans">
            {/* Barra Rosa Superior */}
            <div className="w-full bg-[#FAE1EF] py-2 px-6 flex items-center justify-between text-black border-b border-black/10 text-[10px] font-black uppercase tracking-widest overflow-hidden whitespace-nowrap">
                <span className="flex items-center gap-2">✨ @vellaperfumeria</span>
                <span className="hidden md:block">ENVÍO GRATUITO EN PEDIDOS SUPERIORES A 35€</span>
                <span>📞 +34 661 202 616</span>
            </div>

            {/* Logo y Bolsa - LOGO CENTRADO PERFECTAMENTE */}
            <div className="w-full bg-white px-6 md:px-12 h-20 md:h-24 grid grid-cols-3 items-center border-b border-gray-100">
                {/* Izquierda */}
                <div className="flex justify-start">
                    <button 
                        onClick={() => onNavigate('ia')} 
                        className="hidden md:block bg-black text-white text-[9px] px-6 py-2.5 rounded-full font-black uppercase hover:bg-pink-600 transition-colors whitespace-nowrap"
                    >
                        Beauty IA
                    </button>
                </div>

                {/* Centro - Logo */}
                <div className="flex justify-center">
                    <button onClick={() => onNavigate('home')} className="flex flex-col items-center group">
                        <img 
                            src="https://i0.wp.com/vellaperfumeria.com/wp-content/uploads/2025/06/1000003724-removebg-preview.png" 
                            alt="Vella" 
                            className="h-10 md:h-14 transition-transform group-hover:scale-105" 
                        />
                        <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.5em] mt-1 text-black">Vellaperfumería</span>
                    </button>
                </div>

                {/* Derecha - Carrito */}
                <div className="flex justify-end items-center gap-6">
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

            {/* MENÚ NEGRO FULL-WIDTH */}
            <nav className="w-full bg-black h-14 md:h-16 flex justify-center overflow-x-auto no-scrollbar scroll-smooth">
                <div className="flex h-full">
                    {navItems.map((item) => (
                        <div 
                            key={item.label} 
                            className="h-full flex items-center relative"
                            onMouseEnter={() => item.hasMega && setActiveMenu(item.label)}
                            onMouseLeave={() => setActiveMenu(null)}
                        >
                            <button 
                                onClick={() => onNavigate(item.view, item.payload)}
                                className={`text-white text-[10px] font-black uppercase tracking-[0.25em] hover:text-pink-400 transition-all h-full px-5 md:px-8 flex items-center whitespace-nowrap ${activeMenu === item.label ? 'text-pink-400' : ''}`}
                            >
                                {item.label}
                            </button>

                            {/* MEGA MENÚ DESPLEGABLE NEGRO */}
                            {item.hasMega && activeMenu === item.label && (
                                <div className="hidden md:block fixed top-[138px] md:top-[160px] left-0 w-full bg-black border-t border-white/10 shadow-2xl animate-fade-in z-[101]">
                                    <div className="w-full max-w-7xl mx-auto py-12 px-12 grid grid-cols-12 gap-16 text-left">
                                        <div className="col-span-4 space-y-8 border-r border-white/5 pr-12">
                                            <h4 className="text-pink-500 text-[12px] font-black uppercase tracking-[0.4em] pb-4">Destacados de {item.label}</h4>
                                            <ul className="space-y-6 text-white/80 text-[11px] font-bold uppercase tracking-widest">
                                                <li className="flex items-center justify-between group cursor-pointer" onClick={() => onNavigate('products', item.payload)}>
                                                    <span>Novedades 2026</span>
                                                    <span className="bg-zinc-700 text-gray-300 text-[8px] px-3 py-1.5 rounded-sm hover:bg-zinc-600 transition-colors">Ver página</span>
                                                </li>
                                                <li className="flex items-center justify-between group cursor-pointer" onClick={() => onNavigate('products', item.payload)}>
                                                    <span>Los Más Vendidos</span>
                                                    <span className="bg-zinc-700 text-gray-300 text-[8px] px-3 py-1.5 rounded-sm hover:bg-zinc-600 transition-colors">Ver página</span>
                                                </li>
                                                <li className="flex items-center justify-between group cursor-pointer" onClick={() => onNavigate('products', item.payload)}>
                                                    <span>Ofertas Exclusivas</span>
                                                    <span className="bg-zinc-700 text-gray-300 text-[8px] px-3 py-1.5 rounded-sm hover:bg-zinc-600 transition-colors">Ver página</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-span-8">
                                            <div className="relative group overflow-hidden rounded-sm w-full h-64 border border-white/5">
                                                <img 
                                                    src={item.label === 'Fragancias' 
                                                        ? "https://media-cdn.oriflame.com/digitalPromotionsMedia/images/banner-media/ES/20899847/20866148.jpg"
                                                        : "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1200&q=80"
                                                    } 
                                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700" 
                                                    alt="Promo" 
                                                />
                                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
                                                    <h3 className="text-3xl font-serif italic text-white mb-6">Colección {item.label} 2026</h3>
                                                    <button onClick={() => onNavigate('products', item.payload)} className="bg-zinc-700 text-gray-200 text-[9px] font-black px-12 py-4 uppercase tracking-[0.3em] hover:bg-pink-600 hover:text-white transition-all">Explorar Colección</button>
                                                </div>
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
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                @keyframes fade-in { from { opacity: 0; transform: translateY(-5px); } to { opacity: 1; transform: translateY(0); } }
                .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
            `}</style>
        </header>
    );
};

export default Header;
