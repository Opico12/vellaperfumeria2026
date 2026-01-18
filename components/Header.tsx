
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

const PhoneIconSm = () => (
    <svg className="w-3.5 h-3.5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
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
        { label: 'Colecciones', view: 'home' as View },
        { label: 'Sastrería Bespoke', view: 'products' as View, payload: 'men', hasMega: true, 
            sub: ['Trajes Medida', 'Chaquetas Gala', 'Abrigos Lana', 'Corte Premium'] 
        },
        { label: 'Alta Costura', view: 'products' as View, payload: 'skincare', hasMega: true,
            sub: ['Vestidos Noche', 'Blusas Seda', 'Faldas Sastre']
        },
        { label: 'Complementos', view: 'products' as View, payload: 'accessories', hasMega: true,
            sub: ['Pañuelos', 'Cinturones', 'Relojes', 'Bolsos Boutique']
        },
        { label: 'Cita en Atelier', view: 'regalos' as View },
        { label: 'Lookbook 2026', view: 'catalog' as View }
    ];

    return (
        <header className="w-full fixed top-0 left-0 z-[150] font-sans bg-white shadow-md">
            {/* Promo Bar - Más brillante */}
            <div className="w-full bg-[#FAE1EF] h-10 px-6 flex items-center justify-between text-black text-[10px] font-black uppercase tracking-[0.2em] border-b border-pink-200 shadow-sm relative z-50">
                <div className="flex items-center gap-8">
                    <a href="https://www.instagram.com/atelier_gala/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-pink-600 transition-colors">
                        <InstagramIconSm /> @atelier_gala
                    </a>
                    <div className="flex items-center">
                        <PhoneIconSm /> +34 661 202 616
                    </div>
                </div>
                <span className="hidden lg:block italic font-bold">ATELIER GALA - ALTA SASTRERÍA 2026 EDITION</span>
                <button onClick={() => onNavigate('ia')} className="hover:bg-black hover:text-white transition-all font-black tracking-widest bg-white px-4 py-1 rounded-full shadow-sm">IA STYLE ADVISOR</button>
            </div>

            {/* Logo Area */}
            <div className="w-full h-24 bg-white flex items-center px-6 md:px-12 relative z-40">
                <div className="flex-1"></div>
                <div className="flex-1 flex justify-center">
                    <img onClick={() => onNavigate('home')} src="https://i0.wp.com/vellaperfumeria.com/wp-content/uploads/2025/06/1000003724-removebg-preview.png" alt="Atelier Gala" className="h-16 md:h-20 cursor-pointer hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex-1 flex justify-end">
                    <button onClick={onCartClick} className="relative p-4 bg-[#FFF5F8] rounded-full hover:bg-[#FAE1EF] transition-all border border-pink-100 shadow-sm">
                        <BagIcon />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-[9px] font-black w-6 h-6 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                                {cartCount}
                            </span>
                        )}
                    </button>
                </div>
            </div>

            {/* Nav Bar - Ahora con color vivo para eliminar el gris */}
            <nav className="w-full bg-gradient-to-r from-rose-600 to-pink-500 text-white h-14 relative shadow-xl overflow-visible">
                <div className="w-full h-full flex justify-center items-stretch">
                    {navItems.map((item) => (
                        <div 
                            key={item.label} 
                            className="group/nav h-full flex items-center"
                            onMouseEnter={() => item.hasMega && setActiveMenu(item.label)}
                            onMouseLeave={() => setActiveMenu(null)}
                        >
                            <button 
                                onClick={() => onNavigate(item.view, item.payload)}
                                className={`h-full px-8 text-[10px] font-black uppercase tracking-[0.3em] flex items-center transition-all ${activeMenu === item.label ? 'bg-white/20 text-white' : 'text-white/80 hover:text-white hover:bg-white/10'}`}
                            >
                                {item.label}
                                {item.hasMega && <span className="ml-2 text-[7px] opacity-60">▼</span>}
                            </button>

                            {/* MEGA MENU DESPLEGABLE */}
                            {item.hasMega && activeMenu === item.label && (
                                <div className="fixed left-0 top-[192px] w-full bg-white border-t-2 border-rose-600 shadow-[0_60px_100px_rgba(0,0,0,0.2)] animate-mega-in z-[30] py-16">
                                    <div className="max-w-7xl mx-auto px-12 grid grid-cols-4 gap-20">
                                        <div className="col-span-1 border-r border-gray-100 pr-10 text-left">
                                            <h4 className="text-rose-600 text-[11px] font-black uppercase tracking-widest mb-10 border-b border-rose-50 pb-4 italic">Boutique {item.label}</h4>
                                            <ul className="space-y-6">
                                                {item.sub?.map(s => (
                                                    <li key={s}>
                                                        <button 
                                                            onClick={() => { onNavigate(item.view, item.payload); setActiveMenu(null); }}
                                                            className="text-gray-500 hover:text-rose-600 text-[11px] font-bold uppercase tracking-widest transition-all hover:translate-x-2 block text-left"
                                                        >
                                                            {s}
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="col-span-3 grid grid-cols-2 gap-10 text-left">
                                            <div className="relative group/promo overflow-hidden rounded-sm aspect-video shadow-2xl">
                                                <img src="https://images.unsplash.com/photo-1539109132314-34755219f688?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" alt="Promo Fashion" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                                <div className="absolute bottom-6 left-6 text-white">
                                                    <span className="text-[8px] font-black tracking-widest uppercase bg-rose-600 px-3 py-1 mb-2 inline-block">EDICIÓN 2026</span>
                                                    <h5 className="text-xl font-black uppercase tracking-tighter italic">Tendencias de Gala</h5>
                                                </div>
                                            </div>
                                            <div className="bg-[#FFFDFE] p-10 flex flex-col justify-center border border-pink-50 rounded-sm shadow-sm">
                                                <p className="text-rose-600 text-[11px] font-black tracking-[0.4em] uppercase mb-6">Asesoría Atelier</p>
                                                <p className="text-gray-500 text-sm font-light italic leading-relaxed">
                                                    "Descubra la perfección en cada puntada. Nuestro equipo de maestros sastres le espera para crear su próxima obra maestra."
                                                </p>
                                                <button onClick={() => onNavigate('regalos')} className="mt-8 text-black text-[9px] font-black uppercase tracking-[0.4em] border-b-2 border-rose-600 pb-1 w-fit hover:text-rose-600 transition-all">Saber más</button>
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
                @keyframes mega-in { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
                .animate-mega-in { animation: mega-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
            `}</style>
        </header>
    );
};

export default Header;
