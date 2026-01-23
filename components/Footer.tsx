
import React from 'react';
import type { View } from './types';

interface FooterProps {
    onNavigate: (view: View, payload?: any) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
    return (
        <footer className="bg-black border-t border-gray-800 text-white font-sans">
            <div className="container mx-auto px-6 py-16">
                <div className="flex flex-col items-center text-center">
                    <h2 className="text-3xl font-black uppercase tracking-[0.3em] text-white mb-4 italic">Bella <span className="text-pink-600">Perfumería</span></h2>
                    <p className="text-gray-500 text-[10px] font-black uppercase tracking-0.4em max-w-md mb-12">
                        Distribuidora Oficial Oriflame 2026.
                    </p>
                    
                    <div className="w-full border-t border-white/5 pt-8">
                        <ul className="flex flex-wrap justify-center gap-12 text-[10px] font-black uppercase tracking-widest text-gray-500">
                            <li><button onClick={() => window.location.href = 'https://vellaperfumeria.com'} className="hover:text-white transition-colors">Inicio</button></li>
                            <li><button onClick={() => onNavigate('catalog')} className="hover:text-white transition-colors">Catálogo Digital</button></li>
                            <li><button onClick={() => onNavigate('products', 'all')} className="hover:text-white transition-colors">Tienda</button></li>
                            <li><button onClick={() => onNavigate('ia')} className="hover:text-white transition-colors">Asistente IA</button></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-zinc-950 py-6 text-center text-[9px] text-gray-700 font-black uppercase tracking-widest">
                <p>&copy; {new Date().getFullYear()} Bella Perfumería. Edición Minimalista 2026.</p>
            </div>
        </footer>
    );
};

export default Footer;
