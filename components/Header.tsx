
import React, { useState, useEffect } from 'react';
import type { View } from './types';
import type { Currency } from './currency';

// --- ICONOS ---
const BagIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
);

const PhoneIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.72 11.72 0 003.7.59 1 1 0 011 1V20a1 1 0 01-1 1A18 18 0 013 4a1 1 0 011-1h3.41a1 1 0 011 1 11.72 11.72 0 00.59 3.7 1 1 0 01-.27 1.11z" />
    </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919A118.663 118.663 0 0112 2.163zm0 1.442c-3.143 0-3.509.011-4.72.067-2.694.123-3.997 1.433-4.12 4.12C3.109 9.12 3.098 9.486 3.098 12c0 2.514.011 2.88.067 4.72.123 2.686 1.427 3.996 4.12 4.12 1.21.055 1.577.067 4.72.067 3.143 0 3.509-.011 4.72-.067 2.694-.123 3.997-1.433 4.12-4.12.056-1.84.067-2.206.067-4.72 0-2.514-.011-2.88-.067-4.72-.123-2.686-1.427-3.996-4.12-4.12-1.21-.055-1.577.067-4.72-.067zM12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zm0 1.44a2.31 2.31 0 110 4.62 2.31 2.31 0 010-4.62zM18.88 6.54a1.32 1.32 0 100-2.64 1.32 1.32 0 000 2.64z" />
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

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'Inicio', href: 'https://vellaperfumeria.com' },
        { label: 'Diagnóstico de Piel', view: 'skinDiagnostic' as View, hasMega: false },
        { label: 'Cuidado Facial', view: 'products' as View, payload: 'skincare', hasMega: true },
        { label: 'Perfumería', view: 'products' as View, payload: 'perfume', hasMega: true },
        { label: 'Maquillaje', view: 'products' as View, payload: 'makeup', hasMega: true },
        { label: 'Regalos', view: 'regalos' as View, hasMega: true },
    ];

    return (
        <header className={`w-full fixed top-0 left-0 z-[100] transition-all duration-500 ${isScrolled ? 'shadow-2xl' : ''}`}>
            {/* 1. BARRA DE PROMOCIONES - ROSA ORQUÍDEA CLARITO */}
            <div className="w-full bg-[#FAE1EF] text-black py-2 px-4 md:px-12 flex items-center justify-between border-b border-black/5">
                <div className="flex items-center gap-3 shrink-0">
                    <div className="bg-black/5 p-1 rounded-full">
                        <PhoneIcon className="w-3.5 h-3.5 text-black" />
                    </div>
                    <a href="tel:+34661202616" className="text-[10px] font-black uppercase tracking-widest hover:text-pink-700 transition-colors">
                        +34 661 202 616
                    </a>
                </div>

                <div className="flex-grow overflow-hidden mx-4 md:mx-12">
                    <div className="flex whitespace-nowrap animate-marquee text-[10px] font-black tracking-[0.3em] uppercase items-center">
                        <span className="mx-8">✨ NUEVA COLECCIÓN 2026 ✨</span>
                        <span className="mx-8 text-pink-700">🎁 ENVÍO GRATIS EN PEDIDOS +35€ 🎁</span>
                        <span className="mx-8">🔬 TEST DE PIEL CON INTELIGENCIA ARTIFICIAL 🔬</span>
                    </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                    <a href="https://www.instagram.com/vellaperfumeria/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group transition-all">
                        <span className="text-[10px] font-black uppercase tracking-widest hidden lg:inline">@vellaperfumeria</span>
                        <div className="bg-black/5 p-1 rounded-full group-hover:bg-black group-hover:text-white transition-all">
                            <InstagramIcon className="w-3.5 h-3.5" />
                        </div>
                    </a>
                </div>
            </div>

            {/* 2. CABECERA DEL LOGO - BLANCA */}
            <div className="w-full bg-white px-4 md:px-12 h-20 md:h-28 flex items-center relative border-b border-gray-100">
                <div className="hidden lg:flex flex-1 justify-start">
                    <button onClick={() => onNavigate('ia')} className="text-[10px] font-black uppercase tracking-widest bg-black text-white px-6 py-3 rounded-full transition-all flex items-center gap-2 hover:bg-[#FAE1EF] hover:text-black shadow-lg">
                        <span className="w-2.5 h-2.5 bg-[#FAE1EF] rounded-full animate-pulse"></span>
                        Asistente IA
                    </button>
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-center w-full max-w-[180px] md:max-w-none">
                    <a href="https://vellaperfumeria.com" className="flex flex-col items-center group">
                        <img 
                            src="https://i0.wp.com/vellaperfumeria.com/wp-content/uploads/2025/06/1000003724-removebg-preview.png" 
                            alt="Logo" 
                            className="h-12 md:h-20 w-auto transition-transform group-hover:scale-110 duration-700" 
                        />
                        <span className="text-[9px] md:text-[11px] font-black tracking-[0.4em] md:tracking-[0.6em] uppercase italic mt-1 text-black">
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
                    <button onClick={onCartClick} className="relative p-2 text-black hover:text-pink-600 transition-colors flex items-center gap-2 group">
                        <BagIcon />
                        {cartCount > 0 && <span className="absolute -top-1 -right-1 bg-black text-white text-[8px] font-black w-4 h-4 flex items-center justify-center rounded-full group-hover:bg-pink-600">{cartCount}</span>}
                        <span className="hidden lg:inline text-[10px] font-black uppercase tracking-widest">Mi Bolsa</span>
                    </button>
                </div>
            </div>

            {/* 3. BARRA DE MENÚ NEGRA - ANCHO COMPLETO (Solo Escritorio) */}
            <nav className="w-full bg-black hidden lg:flex items-center justify-center space-x-12 h-14 relative shadow-2xl">
                {navItems.map((item) => (
                    <div 
                        key={item.label} 
                        className="h-full flex items-center"
                        onMouseEnter={() => (item as any).hasMega && setActiveMenu(item.label)}
                        onMouseLeave={() => setActiveMenu(null)}
                    >
                        {item.href ? (
                            <a 
                                href={item.href}
                                className="text-[11px] font-black uppercase tracking-[0.4em] text-white/90 hover:text-[#FAE1EF] transition-all relative group h-full flex items-center"
                            >
                                {item.label}
                                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FAE1EF] transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100"></span>
                            </a>
                        ) : (
                            <button 
                                onClick={() => onNavigate(item.view!, item.payload)}
                                className={`text-[11px] font-black uppercase tracking-[0.4em] transition-all relative group h-full flex items-center ${activeMenu === item.label ? 'text-[#FAE1EF]' : 'text-white/90 hover:text-white'}`}
                            >
                                {item.label}
                                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#FAE1EF] transition-transform duration-500 origin-left ${activeMenu === item.label ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                            </button>
                        )}
                        
                        {/* 4. MENÚ DESPLEGABLE NEGRO (MEGA MENU) */}
                        {(item as any).hasMega && activeMenu === item.label && (
                            <div className="fixed top-[184px] md:top-[216px] left-0 w-full bg-black text-white shadow-[0_60px_100px_rgba(0,0,0,0.9)] animate-fade-in-down z-50 border-t border-white/10">
                                <div className="container mx-auto grid grid-cols-6 gap-12 p-16">
                                    <div className="col-span-1 space-y-8">
                                        <h3 className="text-[#FAE1EF] font-black text-xs tracking-[0.4em] uppercase border-b border-white/10 pb-3">Colecciones</h3>
                                        <ul className="space-y-4 text-[10px] tracking-[0.2em] font-bold uppercase text-gray-400">
                                            <li className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('products', (item as any).payload)}>Novedades 2026</li>
                                            <li className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('ofertas')}>Ventas Flash</li>
                                            <li className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('products', 'all')}>Catálogo Completo</li>
                                        </ul>
                                    </div>
                                    <div className="col-span-5 grid grid-cols-2 gap-10 pl-12 border-l border-white/5">
                                        <div className="relative group overflow-hidden bg-zinc-900 aspect-[16/7] rounded-sm">
                                            <img 
                                                src={item.label === 'Cuidado Facial' 
                                                    ? "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1200&q=80" 
                                                    : "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80"} 
                                                className="w-full h-full object-cover opacity-50 transition-transform duration-[6000ms] group-hover:scale-105" 
                                                alt="Destacado" 
                                            />
                                            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black via-transparent to-transparent">
                                                <h4 className="text-3xl font-serif italic text-white mb-2">Exclusive Preview</h4>
                                                <p className="text-[9px] tracking-[0.4em] uppercase text-[#FAE1EF] mb-6">Disfruta de la excelencia sueca</p>
                                                <button onClick={() => onNavigate('products', (item as any).payload)} className="w-fit border border-white text-white text-[9px] font-black px-10 py-4 tracking-[0.4em] uppercase hover:bg-white hover:text-black transition-all">Explorar ahora</button>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center space-y-6">
                                            <span className="text-pink-600 text-[10px] font-black tracking-[0.3em] uppercase">Vella Experience</span>
                                            <h3 className="text-2xl font-black uppercase italic tracking-tighter leading-tight">¿Buscas el tratamiento <br/> perfecto para ti?</h3>
                                            <p className="text-gray-400 text-xs leading-relaxed font-light italic">"Nuestros expertos digitales están listos para guiarte en cada paso de tu rutina diaria."</p>
                                            <button onClick={() => onNavigate('ia')} className="text-[10px] font-black text-[#FAE1EF] uppercase tracking-widest hover:underline w-fit">Hablar con Asistente IA &rarr;</button>
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
                @keyframes fade-in-down { from { opacity: 0; transform: translateY(-15px); } to { opacity: 1; transform: translateY(0); } }
                .animate-fade-in-down { animation: fade-in-down 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
            `}</style>
        </header>
    );
};

export default Header;
