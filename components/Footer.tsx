
import React from 'react';
import type { View } from './types';

const InstagramIcon = () => (
    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919A118.663 118.663 0 0112 2.163zm0 1.442c-3.143 0-3.509.011-4.72.067-2.694.123-3.997 1.433-4.12 4.12C3.109 9.12 3.098 9.486 3.098 12c0 2.514.011 2.88.067 4.72.123 2.686 1.427 3.996 4.12 4.12 1.21.055 1.577.067 4.72.067 3.143 0 3.509-.011 4.72-.067 2.694-.123 3.997-1.433 4.12-4.12.056-1.84.067-2.206.067-4.72 0-2.514-.011-2.88-.067-4.72-.123-2.686-1.427-3.996-4.12-4.12-1.21-.055-1.577.067-4.72-.067zM12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zm0 1.44a2.31 2.31 0 110 4.62 2.31 2.31 0 010-4.62zM18.88 6.54a1.32 1.32 0 100-2.64 1.32 1.32 0 000 2.64z" clipRule="evenodd" />
    </svg>
);

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.919 6.066l-1.475 5.422 5.571-1.469z" />
    </svg>
);

interface FooterProps {
    onNavigate: (view: View, payload?: any) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
    return (
        <footer className="bg-black border-t border-gray-800 text-white font-sans">
            <div className="container mx-auto px-6 py-16">
                <div className="flex flex-col items-center text-center">
                    <img 
                        src="https://i0.wp.com/vellaperfumeria.com/wp-content/uploads/2025/06/1000003724-removebg-preview.png" 
                        alt="Bella Perfumería Logo" 
                        className="h-24 w-auto mb-6" 
                    />
                    <h2 className="text-2xl font-black uppercase tracking-widest text-white mb-2">Bella Perfumería</h2>
                    <p className="text-gray-400 text-sm max-w-md italic mb-10">
                        Tu esencia, tu belleza. Distribuidora oficial Oriflame con el toque de cariño de Jan & Valentina.
                    </p>
                    
                    <div className="flex space-x-8 mb-12">
                        <a href="https://www.instagram.com/bellaperfumeria/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors"><InstagramIcon /></a>
                        <a href="https://wa.me/34661202616" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors"><WhatsAppIcon /></a>
                    </div>
                    
                    <div className="w-full border-t border-white/5 pt-8">
                        <ul className="flex flex-wrap justify-center gap-8 text-[10px] font-black uppercase tracking-widest text-gray-500">
                            <li><button onClick={() => onNavigate('home')}>Inicio</button></li>
                            <li><button onClick={() => onNavigate('catalog')}>Catálogo Digital</button></li>
                            <li><button onClick={() => onNavigate('products', 'all')}>Tienda</button></li>
                            <li><button onClick={() => onNavigate('ia')}>Asistente IA</button></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-zinc-950 py-6 text-center text-[10px] text-gray-600 font-bold uppercase tracking-widest">
                <p>&copy; {new Date().getFullYear()} Bella Perfumería. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
