
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
        { label: 'Novedades', view: 'products' as View, payload: 'all', hasMega: true,
            subLinks: [
                { title: 'Exclusivos', items: ['All or Nothing 47718', 'Love Potion 46047', 'Eclat Weekends 31292'] },
                { title: 'Lanzamientos', items: ['Necessaire Sugar Spice', 'Set Joyas Pearl', 'Reloj Glitters'] }
            ]
        },
        { label: 'Maquillaje', view: 'products' as View, payload: 'makeup', hasMega: true,
            subLinks: [
                { title: 'THE ONE', items: ['Labiales Stylist 43295', 'Sombra Burgundy 46929', 'Máscara Wanderlust'] },
                { title: 'Rostro', items: ['Bases Novage+', 'Perlas Giordani', 'Correctores'] }
            ]
        },
        { label: 'Cuidado Facial', view: 'products' as View, payload: 'skincare', hasMega: true,
            subLinks: [
                { title: 'Royal Velvet', items: ['Día Reafirmante 47005', 'Noche Reafirmante 48117', 'Contorno Ojos 47007'] },
                { title: 'Expertise', items: ['Tender Care Frambuesa', 'Sérum Bio-Active', 'Novage+ Energize'] }
            ]
        },
        { label: 'Accesorios & Regalos', view: 'products' as View, payload: 'accessories', hasMega: true,
            subLinks: [
                { title: 'El Arte de Envolver', items: ['Caja Festive 48970', 'Bolsa Grande 48975', 'Envoltorio Pequeño'] },
                { title: 'Detalles Joyería', items: ['Set Pendientes 48908', 'Collar Glitters', 'Spatula Exclusiva'] }
            ]
        },
        { label: 'Revista Digital', view: 'catalog' as View, hasMega: false },
        { label: 'Asistente IA', view: 'ia' as View, hasMega: false },
    ];

    return (
        <header className="w-full fixed top-0 left-0 z-[150] font-sans">
            {/* Promo Bar */}
            <div className="w-full bg-[#FAE1EF] py-2 px-6 flex items-center justify-between text-black text-[10px] font-black uppercase tracking-[0.3em] border-b border-pink-200">
                <span>ORIFLAME ESTOCOLMO - CÓDIGOS ACTUALIZADOS 2026</span>
                <span className="hidden md:block">ENTREGA VIP 24/48H A TODA ESPAÑA</span>
                <span className="cursor-pointer hover:text-pink-600">Vellaperfumeria</span>
            </div>

            {/* Brand Bar */}
            <div className="w-full h-24 bg-white flex items-center px-6 md:px-12 border-b border-gray-100 relative z-20">
                <div className="flex-1">
                    <button onClick={() => onNavigate('ia')} className="bg-black text-white p-3 rounded-full hover:bg-pink-600 transition-all shadow-lg">
                        <SearchIcon />
                    </button>
                </div>
                <div className="flex-1 flex justify-center">
                    <img onClick={() => onNavigate('home')} src="https://i0.wp.com/vellaperfumeria.com/wp-content/uploads/2025/06/1000003724-removebg-preview.png" alt="Logo" className="h-20 cursor-pointer hover:scale-105 transition-transform" />
                </div>
                <div className="flex-1 flex justify-end">
                    <button onClick={onCartClick} className="relative p-3 bg-gray-50 rounded-full hover:bg-pink-50 transition-all">
                        <BagIcon />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-black text-white text-[9px] font-black w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
                                {cartCount}
                            </span>
                        )}
                    </button>
                </div>
            </div>

            {/* FULL WIDTH BLACK MENU */}
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
                                className={`h-full px-8 md:px-12 text-[10px] font-black uppercase tracking-[0.3em] flex items-center transition-all ${activeMenu === item.label ? 'text-pink-400 bg-zinc-900 border-b-2 border-pink-400' : 'text-gray-300 hover:text-white'}`}
                            >
                                {item.label}
                                {item.hasMega && <ChevronDownIcon />}
                            </button>

                            {/* MEGA MENU BLACK DROPDOWN */}
                            {item.hasMega && activeMenu === item.label && (
                                <div className="fixed left-0 top-[152px] w-full bg-black border-t border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.8)] animate-mega-in z-[50] py-16">
                                    <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 md:grid-cols-4 gap-16">
                                        {item.subLinks?.map((col, idx) => (
                                            <div key={idx} className="animate-fade-up whitespace-normal text-left">
                                                <h4 className="text-pink-500 text-[10px] font-black uppercase tracking-[0.4em] mb-10 border-b border-white/5 pb-4 italic">{col.title}</h4>
                                                <ul className="space-y-5">
                                                    {col.items.map((sub, sIdx) => (
                                                        <li key={sIdx}>
                                                            <button 
                                                                onClick={() => { onNavigate(item.view, item.payload); setActiveMenu(null); }}
                                                                className="text-gray-400 hover:text-white text-[11px] font-bold uppercase tracking-widest hover:translate-x-2 transition-all block text-left"
                                                            >
                                                                {sub}
                                                            </button>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                        <div className="md:col-span-1 bg-zinc-900/40 p-10 border border-white/5 rounded-sm text-center">
                                             <img src={getImg(47718)} className="h-28 mx-auto mb-8 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]" alt="Destacado" />
                                             <p className="text-pink-500 text-[9px] font-black tracking-widest uppercase mb-2">Edición Limitada</p>
                                             <h5 className="text-white text-[11px] font-black uppercase mb-8 tracking-widest leading-tight">All or Nothing 17.99€</h5>
                                             <button onClick={() => onNavigate('products', 'all')} className="bg-white text-black text-[9px] font-black px-10 py-5 uppercase tracking-widest hover:bg-pink-600 hover:text-white transition-all w-full shadow-xl">Comprar Ahora</button>
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
