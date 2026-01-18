
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
      { label: 'Aromas Gala 2026', view: 'products' as View, payload: 'perfume', hasMega: true,
          subLinks: [
              { title: 'Alta Perfumería', items: ['All or Nothing 46060', 'Essenza 47511', 'Divine Idol 38497'] },
              { title: 'Joyce & Scents', items: ['Turquoise 42508', 'Rose 37766', 'O Sweet Marshmallow'] },
              { title: 'Cuidado Corporal', items: ['Cremas Perfumadas', 'Brumas Giordani'] }
          ]
      },
      { label: 'Maquillaje Pro', view: 'products' as View, payload: 'makeup', hasMega: true,
          subLinks: [
              { title: 'Eternal Glow GG', items: ['Foundation Vainilla 43243', 'Foundation Icy 43247', 'Natural Base 43248'] },
              { title: 'The One 3-Free', items: ['Labiales Super Pout', 'Máscara Wanderlust', 'Sombra Unlimited'] },
              { title: 'Luxury Finishes', items: ['Marble Neutral 42105', 'Leggy Bodhi 42107', 'Ultra Glossy Lip'] }
          ]
      },
      { label: 'Tratamiento Real', view: 'products' as View, payload: 'skincare', hasMega: true,
          subLinks: [
              { title: 'Lujo Diamond', items: ['Crema Antiedad 13659', 'Noche Diamond 18437', 'Micelar 21339'] },
              { title: 'Royal Velvet', items: ['Crema Día SPF 20', 'Noche Edición Especial', 'Espátula Exclusive'] },
              { title: 'Novage+ Expert', items: ['Sérum Pro-Collagen', 'Bruma Micro Essence', 'Sérum Eclat'] }
          ]
      },
      { label: 'Men & Wellness', view: 'products' as View, payload: 'men', hasMega: true,
          subLinks: [
              { title: 'Grooming', items: ['GG Man Elixir 45967', 'Nordic Waters Blue', 'Reloj Wildy Wood'] },
              { title: 'Wellbeing', items: ['Colágeno Sophy', 'Daily Vitamins', 'Mineral Drinks'] }
          ]
      },
      { label: 'Ideas Regalo', view: 'regalos' as View, hasMega: true,
          subLinks: [
              { title: 'Glitters of Love', items: ['Reloj Glitters', 'Joyas Pearl', 'Set Pendientes'] },
              { title: 'Packaging Gala', items: ['Bolsa Festive 48975', 'Sobre Festive 48977', 'Caja Premium 48970'] }
          ]
      }
    ];

    return (
        <header className="w-full fixed top-0 left-0 z-[150] font-sans">
            {/* Promo Bar */}
            <div className="w-full bg-[#FAE1EF] h-9 px-6 flex items-center justify-between text-black text-[10px] font-black uppercase tracking-[0.3em] border-b border-pink-200">
                <span>VELLAPERFUMERIA - ORIFLAME ESTOCOLMO</span>
                <span className="hidden md:block italic uppercase">EDICIÓN GALA: DISPONIBLES +200 ICONOS DE BELLEZA</span>
                <span className="cursor-pointer hover:text-pink-600">TIENDA OFICIAL</span>
            </div>

            {/* Brand Bar */}
            <div className="w-full h-24 bg-white flex items-center px-6 md:px-12 relative z-20 shadow-sm border-b border-gray-100">
                <div className="flex-1 text-left">
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

            {/* FULL WIDTH NAVIGATION BAR (CINEMA BLACK) */}
            <nav className="w-full bg-black text-white h-14 relative shadow-2xl overflow-visible">
                <div className="w-full h-full flex overflow-x-auto no-scrollbar lg:justify-center items-stretch px-4">
                    {navItems.map((item) => (
                        <div 
                            key={item.label} 
                            className="group/navitem h-full flex items-center"
                            onMouseEnter={() => item.hasMega && setActiveMenu(item.label)}
                            onMouseLeave={() => setActiveMenu(null)}
                        >
                            <button 
                                onClick={() => { onNavigate(item.view, item.payload); setActiveMenu(null); }}
                                className={`h-full px-8 md:px-12 text-[10px] font-black uppercase tracking-[0.3em] flex items-center transition-all ${activeMenu === item.label ? 'text-pink-400 bg-zinc-950 border-b-2 border-pink-400' : 'text-gray-300 hover:text-white'}`}
                            >
                                {item.label}
                                {item.hasMega && <ChevronDownIcon />}
                            </button>

                            {/* MEGA MENU - FULL WIDTH BLACK OVERLAY */}
                            {item.hasMega && activeMenu === item.label && (
                                <div className="fixed left-0 top-[188px] w-full bg-black border-t border-white/10 shadow-[0_60px_100px_rgba(0,0,0,0.95)] animate-mega-in z-[50] py-20">
                                    <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 md:grid-cols-4 gap-16">
                                        {item.subLinks?.map((col, idx) => (
                                            <div key={idx} className="animate-fade-up whitespace-normal text-left">
                                                <h4 className="text-pink-500 text-[10px] font-black uppercase tracking-[0.4em] mb-10 border-b border-white/5 pb-4 italic">{col.title}</h4>
                                                <ul className="space-y-6">
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
                                    </div>
                                    <div className="max-w-7xl mx-auto px-12 mt-16 pt-16 border-t border-white/5 flex items-center justify-between">
                                        <div className="flex items-center gap-10">
                                            <img src={getImg(13659)} className="h-16 opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer" alt="Diamond Cellular" />
                                            <img src={getImg(46060)} className="h-16 opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer" alt="All or Nothing" />
                                            <img src={getImg(43243)} className="h-16 opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer" alt="Eternal Glow" />
                                        </div>
                                        <button onClick={() => onNavigate('catalog')} className="text-pink-500 text-[10px] font-black uppercase tracking-[0.4em] hover:text-white transition-colors italic">Ver Revista Digital &rarr;</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                    <button 
                        onClick={() => onNavigate('catalog')}
                        className="h-full px-8 md:px-12 text-[10px] font-black uppercase tracking-[0.3em] flex items-center text-pink-400 hover:text-white transition-all"
                    >
                        Journal Digital
                    </button>
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
