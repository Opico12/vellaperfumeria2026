
import React from 'react';

// URL del catálogo interactivo de Oriflame 2026
const INTERACTIVE_CATALOG_URL = 'https://es-catalogue.oriflame.com/oriflame/es/2026001-brp?HideStandardUI=true&Page=1';
const LOGO_URL = 'https://i0.wp.com/vellaperfumeria.com/wp-content/uploads/2025/06/1000003724-removebg-preview.png';

const CatalogPage: React.FC = () => {
    return (
        <div className="w-full h-full bg-white flex flex-col animate-fade-in overflow-hidden">
            {/* CABECERA MINIMALISTA DEL JOURNAL */}
            <div className="w-full bg-white px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-gray-100">
                <div className="flex items-center gap-8">
                    <a href="https://bellaperfumeria.com" className="transition-transform duration-500 hover:scale-105">
                        <img src={LOGO_URL} alt="Vellaperfumeria" className="h-16 md:h-24 w-auto object-contain" />
                    </a>
                    <div className="hidden md:block h-12 w-[1px] bg-gray-100"></div>
                    <div className="flex flex-col text-left">
                        <span className="text-pink-600 text-[10px] font-black tracking-[0.5em] uppercase">Gala Estocolmo 2026</span>
                        <h1 className="text-2xl md:text-4xl font-black text-black tracking-tighter uppercase italic leading-none">Journal <span className="text-pink-600">Digital</span></h1>
                    </div>
                </div>

                <a 
                    href="https://bellaperfumeria.com" 
                    className="bg-black text-white text-[10px] font-black px-12 py-5 uppercase tracking-[0.4em] hover:bg-pink-600 transition-all shadow-xl rounded-sm"
                >
                    INICIO
                </a>
            </div>

            {/* VISOR DE CATÁLOGO - PANTALLA COMPLETA */}
            <div className="flex-grow w-full bg-white relative">
                <iframe
                    src={INTERACTIVE_CATALOG_URL}
                    title="Vellaperfumeria 2026 Interactive Catalog"
                    className="absolute inset-0 w-full h-full border-none z-10"
                    allowFullScreen
                    loading="lazy"
                />
                
                {/* LOADER ELEGANTE */}
                <div className="absolute inset-0 flex items-center justify-center bg-white z-0">
                    <div className="flex flex-col items-center gap-8">
                        <div className="w-16 h-16 border-4 border-pink-50 border-t-pink-600 rounded-full animate-spin"></div>
                        <span className="text-gray-300 text-[10px] font-black tracking-[0.6em] uppercase">Abriendo Revista de Gala...</span>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
                .animate-fade-in { animation: fade-in 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
            `}</style>
        </div>
    );
};

export default CatalogPage;
