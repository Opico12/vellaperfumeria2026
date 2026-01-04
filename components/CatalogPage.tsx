
import React from 'react';

// URL Oficial del Catálogo 2026
const INTERACTIVE_CATALOG_URL = 'https://es-catalogue.oriflame.com/oriflame/es/2026001-brp?HideStandardUI=true&Page=1';

const CatalogPage: React.FC = () => {
    return (
        <div className="fixed inset-0 top-[140px] md:top-[180px] bg-black z-0">
            {/* El catálogo ocupa todo el ancho y alto disponible debajo del header */}
            <div className="w-full h-full relative">
                <iframe
                    src={INTERACTIVE_CATALOG_URL}
                    title="Vellaperfumeria 2026 Interactive Journal"
                    className="w-full h-full border-none"
                    allowFullScreen
                    loading="lazy"
                />
                
                {/* Badge flotante minimalista */}
                <div className="absolute top-4 left-4 md:top-8 md:left-8 pointer-events-none">
                    <span className="bg-black/80 text-white text-[9px] font-black tracking-[0.5em] px-5 py-3 rounded-sm backdrop-blur-md uppercase border border-white/10">
                        Digital Journal 2026
                    </span>
                </div>

                {/* Indicador de carga sutil */}
                <div className="absolute inset-0 -z-10 flex items-center justify-center bg-black">
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-12 h-12 border-2 border-white/10 border-t-pink-500 rounded-full animate-spin"></div>
                        <span className="text-white/30 text-[10px] font-black tracking-widest uppercase">Cargando Experiencia...</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CatalogPage;
