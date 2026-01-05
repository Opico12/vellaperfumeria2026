
import React, { useState, useEffect } from 'react';
import type { View } from './types';
import type { Currency } from './currency';

// --- ICONOS ---
const BagIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
);

const MenuIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
);

const CloseIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
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
        { label: 'Diagnóstico', view: 'skinDiagnostic' as View },
        { label: 'Facial', view: 'products' as View, payload: 'skincare', hasMega: true },
        { label: 'Perfumería', view: 'products' as View, payload: 'perfume', hasMega: true },
        { label: 'Maquillaje', view: 'products' as View, payload: 'makeup', hasMega: true },
        { label: 'Wellness', view: 'products' as View, payload: 'wellness', hasMega: true },
        { label: 'Regalos', view: 'regalos' as View, hasMega: true },
    ];

    return (
        <header className={`w-full fixed top-0 left-0 z-[100] transition-all duration-500 ${isScrolled ? 'shadow-2xl' : ''}`}>
            {/* 1. TOP BAR - ROSA ORQUÍDEA CLARITO */}
            <div className="w-full bg-[#FAE1EF] text-black py-2 px-4 md:px-12 flex items-center justify-between border-b border-black/5 overflow-hidden">
                <div className="flex-grow whitespace-nowrap animate-marquee text-[9px] font-black tracking-[0.4em] uppercase">
                    <span className="mx-12">✨ NUEVA COLECCIÓN 2026 DISPONIBLE ✨</span>
                    <span className="mx-12 text-pink-700">🎁 ENVÍO GRATIS EN PEDIDOS +35€ 🎁</span>
                    <span className="mx-12">🔬 TEST DE PIEL IA NOVAGE+ 🔬</span>
                    <span className="mx-12">✨ NUEVA COLECCIÓN 2026 DISPONIBLE ✨</span>
                </div>
            </div>

            {/* 2. BRAND BAR - BLANCA */}
            <div className="w-full bg-white px-4 md:px-12 h-20 md:h-24 flex items-center justify-between relative border-b border-gray-100">
                <div className="flex-1 flex items-center gap-4">
                    <button 
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="lg:hidden p-2 text-black hover:text-pink-600 transition-colors"
                    >
                        <MenuIcon />
                    </button>
                    <button onClick={() => onNavigate('ia')} className="hidden lg:flex text-[9px] font-black uppercase tracking-widest bg-black text-white px-5 py-2.5 rounded-full transition-all items-center gap-2 hover:bg-[#FAE1EF] hover:text-black">
                        <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></span>
                        Asistente IA
                    </button>
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-center">
                    <a href="https://vellaperfumeria.com" className="flex flex-col items-center group">
                        <img 
                            src="https://i0.wp.com/vellaperfumeria.com/wp-content/uploads/2025/06/1000003724-removebg-preview.png" 
                            alt="Logo" 
                            className="h-10 md:h-16 w-auto transition-transform group-hover:scale-110 duration-700" 
                        />
                        <span className="text-[8px] md:text-[10px] font-black tracking-[0.5em] uppercase italic mt-1 text-black">
                            Vella <span className="text-pink-600">Perfumeria</span>
                        </span>
                    </a>
                </div>

                <div className="flex-1 flex justify-end items-center space-x-4 md:space-x-8">
                    <div className="hidden md:block">
                        <select value={currency} onChange={(e) => onCurrencyChange(e.target.value as Currency)} className="bg-transparent text-[9px] font-black uppercase tracking-widest focus:outline-none cursor-pointer border-b border-black/10 py-1">
                            <option value="EUR">EUR €</option>
                            <option value="USD">USD $</option>
                        </select>
                    </div>
                    <button onClick={onCartClick} className="relative p-2 text-black hover:text-pink-600 transition-colors group">
                        <BagIcon />
                        {cartCount > 0 && <span className="absolute -top-1 -right-1 bg-black text-white text-[8px] font-black w-4 h-4 flex items-center justify-center rounded-full group-hover:bg-pink-600">{cartCount}</span>}
                    </button>
                </div>
            </div>

            {/* 3. NAVIGATION BAR - NEGRA ANCHO COMPLETO */}
            <nav className="w-full bg-black hidden lg:flex items-center justify-center space-x-12 h-12 relative shadow-xl">
                {navItems.map((item) => (
                    <div 
                        key={item.label} 
                        className="h-full flex items-center"
                        onMouseEnter={() => item.hasMega && setActiveMenu(item.label)}
                        onMouseLeave={() => setActiveMenu(null)}
                    >
                        {item.href ? (
                            <a 
                                href={item.href}
                                className="text-[10px] font-black uppercase tracking-[0.4em] text-white/80 hover:text-[#FAE1EF] transition-all relative group h-full flex items-center"
                            >
                                {item.label}
                                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FAE1EF] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                            </a>
                        ) : (
                            <button 
                                onClick={() => onNavigate(item.view, item.payload)}
                                className={`text-[10px] font-black uppercase tracking-[0.4em] transition-all relative group h-full flex items-center ${activeMenu === item.label ? 'text-[#FAE1EF]' : 'text-white/80 hover:text-white'}`}
                            >
                                {item.label}
                                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#FAE1EF] transition-transform duration-500 origin-left ${activeMenu === item.label ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                            </button>
                        )}
                        
                        {/* 4. MEGA MENU - FONDO NEGRO */}
                        {item.hasMega && activeMenu === item.label && (
                            <div className="fixed top-[136px] md:top-[160px] left-0 w-full bg-black text-white shadow-[0_50px_100px_rgba(0,0,0,1)] animate-fade-in-down z-50 border-t border-white/5">
                                <div className="container mx-auto grid grid-cols-12 gap-16 p-16">
                                    <div className="col-span-3 space-y-8">
                                        <h3 className="text-[#FAE1EF] font-black text-xs tracking-[0.4em] uppercase border-b border-white/10 pb-4">Explorar {item.label}</h3>
                                        <ul className="space-y-4 text-[10px] tracking-[0.2em] font-bold uppercase text-gray-400">
                                            <li className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('products', item.payload)}>Ver Todo</li>
                                            <li className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('ofertas')}>Nuestras Ofertas</li>
                                            <li className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('blog')}>Consejos Beauty</li>
                                        </ul>
                                    </div>
                                    <div className="col-span-9 grid grid-cols-2 gap-12 pl-12 border-l border-white/5">
                                        <div className="relative group overflow-hidden bg-zinc-900 aspect-[16/8] rounded-sm">
                                            <img 
                                                src={item.label === 'Facial' 
                                                    ? "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1200&q=80" 
                                                    : "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80"} 
                                                className="w-full h-full object-cover opacity-40 transition-transform duration-[6000ms] group-hover:scale-105" 
                                                alt="Banner" 
                                            />
                                            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black via-transparent to-transparent">
                                                <h4 className="text-3xl font-serif italic text-white mb-2">Colección 2026</h4>
                                                <button onClick={() => onNavigate('products', item.payload)} className="w-fit border border-white text-white text-[9px] font-black px-8 py-3 tracking-[0.4em] uppercase hover:bg-white hover:text-black transition-all">DESCUBRIR</button>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <span className="text-pink-600 text-[10px] font-black tracking-widest uppercase mb-4">Recomendación Personalizada</span>
                                            <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-4">Encuentra tu esencia</h3>
                                            <p className="text-gray-400 text-xs leading-relaxed font-light mb-6 italic">"La belleza no es solo lo que se ve, sino lo que se siente. Deja que nuestra IA te ayude a elegir."</p>
                                            <button onClick={() => onNavigate('ia')} className="text-[10px] font-black text-[#FAE1EF] uppercase tracking-widest hover:underline w-fit">Consultar con Beauty AI &rarr;</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </nav>

            {/* MOBILE MENU - FONDO NEGRO */}
            <div className={`fixed inset-0 bg-black z-[200] transition-transform duration-500 ease-expo ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-6 border-b border-white/5">
                        <span className="text-pink-600 text-[10px] font-black tracking-[0.5em] uppercase">Vella Menu</span>
                        <button onClick={() => setIsMobileMenuOpen(false)} className="text-white p-2">
                            <CloseIcon />
                        </button>
                    </div>
                    
                    <div className="flex-grow overflow-y-auto py-12 px-8 flex flex-col items-center justify-center space-y-8">
                        {navItems.map((item) => (
                            <button
                                key={item.label}
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    if (item.href) window.location.href = item.href;
                                    else onNavigate(item.view, item.payload);
                                }}
                                className="text-white text-3xl font-black uppercase italic tracking-tighter hover:text-[#FAE1EF] transition-colors"
                            >
                                {item.label}
                            </button>
                        ))}
                        <button 
                            onClick={() => { setIsMobileMenuOpen(false); onNavigate('ia'); }}
                            className="bg-[#FAE1EF] text-black w-full py-5 font-black uppercase tracking-[0.3em] text-xs rounded-full mt-8"
                        >
                            Beauty AI
                        </button>
                    </div>

                    <div className="p-12 border-t border-white/5 text-center space-y-4">
                        <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">Síguenos</p>
                        <div className="flex justify-center gap-6 text-white">
                            <span className="text-sm font-bold tracking-widest">INSTAGRAM</span>
                            <span className="text-sm font-bold tracking-widest">TIKTOK</span>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
                .animate-marquee { display: inline-flex; animation: marquee 40s linear infinite; }
                @keyframes fade-in-down { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
                .animate-fade-in-down { animation: fade-in-down 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                .ease-expo { transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1); }
            `}</style>
        </header>
    );
};

export default Header;
