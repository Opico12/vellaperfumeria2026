
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
        { label: 'Fragancias', view: 'products' as View, payload: 'perfume', hasMega: true },
        { label: 'Ofertas', view: 'ofertas' as View },
    ];

    return (
        <header className="w-full fixed top-0 left-0 z-[100] shadow-2xl font-sans bg-white">
            {/* Barra de Anuncios Superior */}
            <div className="w-full bg-[#FAE1EF] py-2 px-6 flex items-center justify-between text-black border-b border-black/10 text-[10px] font-black uppercase tracking-widest overflow-hidden whitespace-nowrap">
                <span className="flex items-center gap-2">✨ @vellaperfumeria</span>
                <span className="hidden md:block">ENVÍO GRATUITO EN PEDIDOS SUPERIORES A 35€</span>
                <span>📞 +34 661 202 616</span>
            </div>

            {/* Fila del Logo: Logo centrado mediante Grid de 3 columnas */}
            <div className="w-full h-20 md:h-28 grid grid-cols-3 items-center px-6 md:px-12 border-b border-gray-100 bg-white">
                {/* Columna Izquierda: Botón IA */}
                <div className="flex justify-start">
                    <button 
                        onClick={() => onNavigate('ia')} 
                        className="hidden md:block bg-black text-white text-[9px] px-6 py-2.5 rounded-full font-black uppercase hover:bg-pink-600 transition-all shadow-md active:scale-95"
                    >
                        Beauty IA
                    </button>
                </div>

                {/* Columna Central: Logo */}
                <div className="flex justify-center">
                    <button onClick={() => onNavigate('home')} className="flex flex-col items-center group">
                        <img 
                            src="https://i0.wp.com/vellaperfumeria.com/wp-content/uploads/2025/06/1000003724-removebg-preview.png" 
                            alt="Vella Perfumería" 
                            className="h-12 md:h-18 transition-transform group-hover:scale-105 duration-500" 
                        />
                        <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.6em] mt-1 text-black">Vellaperfumería</span>
                    </button>
                </div>

                {/* Columna Derecha: Carrito */}
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

            {/* Barra de Navegación: Fondo Negro, Anchura Completa */}
            <nav className="w-full bg-black h-14 md:h-16 flex justify-center items-stretch overflow-x-auto no-scrollbar scroll-smooth">
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
                                className={`text-white text-[10px] font-black uppercase tracking-[0.3em] hover:text-pink-400 transition-all h-full px-5 md:px-10 flex items-center whitespace-nowrap border-b-2 border-transparent ${activeMenu === item.label ? 'text-pink-400 border-pink-400 bg-zinc-900' : ''}`}
                            >
                                {item.label}
                            </button>

                            {/* MEGA MENÚ DESPLEGABLE (FONDO NEGRO COMPLETO) */}
                            {item.hasMega && activeMenu === item.label && (
                                <div className="hidden md:block fixed top-[138px] md:top-[184px] left-0 w-full bg-black border-t border-white/10 shadow-2xl animate-fade-in z-[101]">
                                    <div className="w-full max-w-7xl mx-auto py-16 px-12 grid grid-cols-12 gap-20 text-left">
                                        {/* Enlaces destacados */}
                                        <div className="col-span-4 space-y-10 border-r border-white/5 pr-12">
                                            <h4 className="text-pink-500 text-[13px] font-black uppercase tracking-[0.5em] pb-4 border-b border-white/10">Categorías {item.label}</h4>
                                            <ul className="space-y-6 text-white/70 text-[11px] font-bold uppercase tracking-widest">
                                                <li className="flex items-center justify-between group cursor-pointer hover:text-white transition-colors" onClick={() => onNavigate('products', item.payload)}>
                                                    <span>Nuevas Tendencias 2026</span>
                                                    <span className="bg-zinc-800 text-gray-400 text-[8px] px-3 py-1.5 rounded-sm group-hover:bg-pink-600 group-hover:text-white transition-all italic">Nuevo</span>
                                                </li>
                                                <li className="flex items-center justify-between group cursor-pointer hover:text-white transition-colors" onClick={() => onNavigate('products', item.payload)}>
                                                    <span>Bestsellers de Estocolmo</span>
                                                    <span className="bg-zinc-800 text-gray-400 text-[8px] px-3 py-1.5 rounded-sm group-hover:bg-pink-600 group-hover:text-white transition-all">Top</span>
                                                </li>
                                                <li className="flex items-center justify-between group cursor-pointer hover:text-white transition-colors" onClick={() => onNavigate('ofertas')}>
                                                    <span>Outlet y Liquidación</span>
                                                    <span className="bg-zinc-800 text-gray-400 text-[8px] px-3 py-1.5 rounded-sm group-hover:bg-pink-600 group-hover:text-white transition-all uppercase">-50%</span>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* Banner Promocional */}
                                        <div className="col-span-8 relative overflow-hidden rounded-sm group/img min-h-[350px] border border-white/5 shadow-2xl">
                                             <img 
                                                src={item.label === 'Fragancias' 
                                                    ? "https://media-cdn.oriflame.com/digitalPromotionsMedia/images/banner-media/ES/20899847/20866148.jpg"
                                                    : "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1200&q=80"
                                                } 
                                                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover/img:scale-105 group-hover/img:opacity-70 transition-all duration-[2000ms]" 
                                                alt="Promo" 
                                            />
                                            <div className="relative z-10 p-12 flex flex-col items-center justify-center h-full bg-black/10">
                                                <h3 className="text-5xl font-serif italic text-white mb-8 tracking-tight drop-shadow-lg">Selección {item.label}</h3>
                                                <button onClick={() => onNavigate('products', item.payload)} className="bg-white text-black text-[10px] font-black px-16 py-6 uppercase tracking-[0.6em] hover:bg-pink-600 hover:text-white transition-all shadow-2xl">COMPRAR AHORA</button>
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
                .animate-fade-in { animation: fade-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
            `}</style>
        </header>
    );
};

export default Header;
