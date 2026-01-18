
import React from 'react';

// URL del catálogo interactivo de Oriflame 2026 - Campaña 1
const INTERACTIVE_CATALOG_URL = 'https://es-catalogue.oriflame.com/oriflame/es/2026001-brp?HideStandardUI=true&Page=1';

const CatalogPage: React.FC = () => {
    return (
        <div className="w-full h-full bg-white flex flex-col animate-fade-in overflow-hidden">
            {/* Cabecera del Catálogo */}
            <div className="w-full bg-white px-6 md:px-12 py-8 flex items-center justify-between border-b border-gray-100 shadow-sm relative z-20">
                <div className="flex items-center gap-6">
                    <img 
                        src="https://i0.wp.com/vellaperfumeria.com/wp-content/uploads/2025/06/1000003724-removebg-preview.png" 
                        alt="Bella Perfumería" 
                        className="h-16 w-auto cursor-pointer" 
                        onClick={() => window.location.href = '/'}
                    />
                    <div className="h-10 w-[1px] bg-gray-200 hidden md:block"></div>
                    <div className="flex flex-col">
                        <span className="text-pink-600 text-[9px] font-black uppercase tracking-[0.4em]">Campaña 1 - 2026</span>
                        <h1 className="text-2xl font-black text-black tracking-tighter uppercase italic">Catálogo Digital <span className="text-pink-600">Interactivo</span></h1>
                    </div>
                </div>
                <button 
                    onClick={() => window.location.href = 'https://bellaboriifflame.com'}
                    className="bg-black text-white text-[10px] font-black px-10 py-4 uppercase tracking-[0.3em] hover:bg-pink-600 transition-all rounded-sm shadow-xl"
                >
                    IR AL INICIO
                </button>
            </div>

            {/* Frame del Catálogo */}
            <div className="flex-grow w-full bg-white relative">
                <iframe
                    src={INTERACTIVE_CATALOG_URL}
                    title="Catálogo Bella Perfumería 2026"
                    className="absolute inset-0 w-full h-full border-none z-10"
                    allowFullScreen
                />
                
                {/* Loader mientras carga el iframe */}
                <div className="absolute inset-0 flex items-center justify-center bg-white z-0">
                    <div className="flex flex-col items-center gap-6">
                        <div className="w-12 h-12 border-4 border-pink-50 border-t-pink-600 rounded-full animate-spin"></div>
                        <span className="text-gray-300 text-[10px] font-black uppercase tracking-[0.5em]">Cargando Edición 2026...</span>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
                .animate-fade-in { animation: fade-in 1s ease-out forwards; }
            `}</style>
        </div>
    );
};

export default CatalogPage;
