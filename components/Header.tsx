
import React, { useState, useEffect } from 'react';
import type { View } from './types';
import type { Currency } from './currency';

// --- ICONOS ---
const BagIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
);

const MenuIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M4 8h16M4 16h16" />
    </svg>
);

const CloseIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M6 18L18 6M6 6l12 12" />
    </svg>
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
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'Inicio', href: 'https://vellaperfumeria.com' },
        { label: 'Cuidado Facial', view: 'products' as View, payload: 'skincare', hasMega: true },
        { label: 'Maquillaje', view: 'products' as View, payload: 'makeup', hasMega: true },
        { label: 'Gama Duologi', view: 'products' as View, payload: 'hair', hasMega: true },
        { label: 'Fragancias', view: 'products' as View, payload: 'perfume', hasMega: true },
        { label: 'Regalos & Joyería', view: 'regalos' as View, hasMega: true },
        { label: 'Wellness', view: 'products' as View, payload: 'wellness', hasMega: true },
    ];

    return (
        <header className={`w-full fixed top-0 left-0 z-[100] transition-all duration-700 ${isScrolled ? 'shadow-2xl translate-y-[-5px]' : ''}`}>
            {/* NIVEL 1: PROMO BAR (Rosa Orquídea) */}
            <div className="w-full bg-[#FAE1EF] text-black py-2 px-4 md:px-12 flex items-center justify-between border-b border-black/5 overflow-hidden">
                <div className="flex-grow whitespace-nowrap animate-marquee text-[9px] md:text-[10px] font-black tracking-[0.5em] uppercase">
                    <span className="mx-12 italic">✨ EDICIÓN LIMITADA NAVIDAD 2026 ✨</span>
                    <span className="mx-12 text-pink-700">🎁 ENVÍO CORTESÍA EN PEDIDOS +35€ 🎁</span>
                    <span className="mx-12 italic">🔬 DIAGNÓSTICO FACIAL IA DISPONIBLE 🔬</span>
                    <span className="mx-12">✨ EDICIÓN LIMITADA NAVIDAD 2026 ✨</span>
                </div>
            </div>

            {/* NIVEL 2: BRAND BAR (Blanco) */}
            <div className="w-full bg-white px-4 md:px-12 h-20 md:h-28 flex items-center justify-between relative border-b border-gray-50">
                <div className="flex-1 flex items-center gap-4">
                    <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden p-2 text-black hover:text-pink-600 transition-colors">
                        <MenuIcon />
                    </button>
                    <button onClick={() => onNavigate('ia')} className="hidden lg:flex bg-black text-white text-[9px] font-black uppercase tracking-[0.3em] px-7 py-3.5 rounded-full transition-all items-center gap-3 hover:bg-[#FAE1EF] hover:text-black shadow-lg">
                        <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></span>
                        Asistente Experto IA
                    </button>
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-center">
                    <a href="https://vellaperfumeria.com" className="flex flex-col items-center group">
                        <img 
                            src="https://i0.wp.com/vellaperfumeria.com/wp-content/uploads/2025/06/1000003724-removebg-preview.png" 
                            alt="Vellaperfumeria" 
                            className="h-12 md:h-20 w-auto transition-transform group-hover:scale-110 duration-700" 
                        />
                        <span className="text-[9px] md:text-[12px] font-black tracking-[0.7em] md:tracking-[0.9em] uppercase italic mt-1 text-black">
                            Vella <span className="text-pink-600">Perfumeria</span>
                        </span>
                    </a>
                </div>

                <div className="flex-1 flex justify-end items-center space-x-4 md:space-x-8">
                    <div className="hidden lg:block">
                        <select value={currency} onChange={(e) => onCurrencyChange(e.target.value as Currency)} className="bg-transparent text-[10px] font-black uppercase tracking-widest focus:outline-none cursor-pointer border-b border-black/20 py-1">
                            <option value="EUR">EUR €</option>
                            <option value="USD">USD $</option>
                        </select>
                    </div>
                    <button onClick={onCartClick} className="relative p-2 text-black hover:text-pink-600 transition-colors group transform active:scale-90">
                        <BagIcon />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-black text-white text-[8px] font-black w-4 h-4 flex items-center justify-center rounded-full group-hover:bg-pink-600 transition-colors shadow-md">
                                {cartCount}
                            </span>
                        )}
                    </button>
                </div>
            </div>

            {/* NIVEL 3: NAVIGATION BAR - NEGRO ANCHO COMPLETO */}
            <nav className="w-full bg-black hidden lg:flex items-center justify-center space-x-14 h-14 relative shadow-2xl">
                {navItems.map((item) => (
                    <div key={item.label} className="h-full flex items-center" onMouseEnter={() => item.hasMega && setActiveMenu(item.label)} onMouseLeave={() => setActiveMenu(null)}>
                        {item.href ? (
                            <a href={item.href} className="text-[10px] font-black uppercase tracking-[0.4em] text-white/90 hover:text-[#FAE1EF] transition-all relative group h-full flex items-center">
                                {item.label}
                                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FAE1EF] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                            </a>
                        ) : (
                            <button onClick={() => onNavigate(item.view, item.payload)} className={`text-[10px] font-black uppercase tracking-[0.4em] transition-all relative group h-full flex items-center ${activeMenu === item.label ? 'text-[#FAE1EF]' : 'text-white/90 hover:text-white'}`}>
                                {item.label}
                                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#FAE1EF] transition-transform duration-500 origin-left ${activeMenu === item.label ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                            </button>
                        )}
                        
                        {/* MEGA MENU DESPLEGABLE NEGRO INMERSIVO */}
                        {item.hasMega && activeMenu === item.label && (
                            <div className="fixed top-[188px] md:top-[220px] left-0 w-full bg-black text-white shadow-[0_60px_100px_rgba(0,0,0,1)] animate-fade-in-down z-50 border-t border-white/10">
                                <div className="container mx-auto grid grid-cols-12 gap-16 p-24">
                                    <div className="col-span-3 space-y-12">
                                        <h3 className="text-[#FAE1EF] font-black text-[13px] tracking-[0.6em] uppercase border-b border-white/20 pb-6">Explorar {item.label}</h3>
                                        <ul className="space-y-8 text-[12px] tracking-[0.3em] font-bold uppercase text-gray-400">
                                            <li className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('products', item.payload)}>Colección 2026</li>
                                            <li className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('ofertas')}>Ventas Privadas</li>
                                            <li className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('blog')}>Artículos de Lujo</li>
                                        </ul>
                                    </div>
                                    <div className="col-span-9 grid grid-cols-2 gap-16 pl-16 border-l border-white/10">
                                        <div className="relative group overflow-hidden bg-zinc-900 aspect-[16/9] rounded-sm shadow-2xl">
                                            <img src={item.label === 'Regalos & Joyería' ? "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=80" : "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1200&q=80"} className="w-full h-full object-cover opacity-60 transition-transform duration-[12000ms] group-hover:scale-110" alt="Destacado" />
                                            <div className="absolute inset-0 flex flex-col justify-end p-12 bg-gradient-to-t from-black via-black/40 to-transparent">
                                                <h4 className="text-4xl font-serif italic text-white mb-6">Exclusivité Vella 2026</h4>
                                                <button onClick={() => onNavigate('products', item.payload)} className="w-fit border-2 border-white text-white text-[10px] font-black px-12 py-4 tracking-[0.5em] uppercase hover:bg-white hover:text-black transition-all">VER MÁS</button>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center space-y-8">
                                            <span className="text-pink-600 text-[12px] font-black tracking-[0.5em] uppercase">Vella Excellence</span>
                                            <h3 className="text-3xl font-black uppercase italic tracking-tighter leading-tight">Rituales pensados <br/>para tu bienestar</h3>
                                            <p className="text-gray-400 text-base leading-relaxed font-light italic">
                                                "Nuestra selección 2026 fusiona la ciencia bioactivadora de Oriflame Estocolmo con ingredientes orgánicos cosechados de forma sostenible, garantizando una experiencia de ultra-lujo en tu hogar."
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </nav>

            <style>{`
                @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
                .animate-marquee { display: inline-flex; animation: marquee 35s linear infinite; }
                @keyframes fade-in-down { from { opacity: 0; transform: translateY(-30px); } to { opacity: 1; transform: translateY(0); } }
                .animate-fade-in-down { animation: fade-in-down 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
            `}</style>
        </header>
    );
};

export default Header;
