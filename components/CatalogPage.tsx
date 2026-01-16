
import React from 'react';

// Portada real del catálogo Oriflame 2026
const CATALOG_COVER_IMG = 'https://cdn.ipaper.io/iPaper/Papers/0ae94f9f-dbf1-41ce-8890-85ef3c56310d/Pages/1/Zoom.jpg';
const INTERACTIVE_CATALOG_URL = 'https://es-catalogue.oriflame.com/oriflame/es/2026001-brp?HideStandardUI=true&Page=1';

const CatalogPage: React.FC = () => {
    return (
        <div className="w-full min-h-screen bg-black overflow-x-hidden">
            <div className="container mx-auto px-6 py-20 flex flex-col items-center">
                
                {/* PORTADA CENTRADA Y IMPACTANTE */}
                <div className="max-w-4xl w-full mb-24 animate-fade-in text-center flex flex-col items-center">
                    <span className="text-pink-500 text-[10px] font-black tracking-[0.8em] uppercase mb-8 block">Edición Estocolmo 2026</span>
                    <h1 className="text-4xl md:text-8xl font-black text-white tracking-tighter uppercase italic mb-12 leading-none">
                        Digital <br/> <span className="text-pink-600">Journal</span>
                    </h1>
                    
                    <div className="relative group cursor-pointer shadow-[0_50px_100px_-20px_rgba(255,100,200,0.25)] mx-auto max-w-md border-8 border-white/5 rounded-sm overflow-hidden">
                        <img 
                            src={CATALOG_COVER_IMG} 
                            alt="Portada del Catálogo Vellaperfumeria 2026" 
                            className="w-full h-auto transition-transform duration-[3000ms] group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-center pb-12">
                            <button className="bg-white text-black text-[9px] font-black px-12 py-5 uppercase tracking-[0.4em] hover:bg-pink-600 hover:text-white transition-all shadow-2xl">
                                Abrir Revista Interactiva
                            </button>
                        </div>
                    </div>
                </div>

                {/* VISOR DEL CATÁLOGO */}
                <div className="w-full max-w-[1600px] aspect-[16/9] relative bg-[#0a0a0a] border border-white/10 shadow-[0_0_100px_rgba(0,0,0,1)] rounded-sm overflow-hidden">
                    <iframe
                        src={INTERACTIVE_CATALOG_URL}
                        title="Vellaperfumeria 2026 Interactive Journal"
                        className="w-full h-full border-none"
                        allowFullScreen
                        loading="lazy"
                    />
                    
                    <div className="absolute inset-0 -z-10 flex items-center justify-center">
                        <div className="flex flex-col items-center gap-6">
                            <div className="w-16 h-16 border-2 border-pink-500/20 border-t-pink-600 rounded-full animate-spin"></div>
                            <span className="text-white/20 text-[10px] font-black tracking-[0.6em] uppercase">Sincronizando Estilo...</span>
                        </div>
                    </div>
                </div>

                <div className="mt-32 text-center max-w-3xl border-t border-white/5 pt-16">
                    <p className="text-gray-500 text-xl font-light italic leading-relaxed tracking-wide italic">
                        "Nuestra nueva edición interactiva para 2026 es un viaje curado por las tendencias más vanguardistas de Estocolmo directamente a tu piel. Descubre el arte de la belleza real."
                    </p>
                </div>
            </div>
            <style>{`
                @keyframes fade-in { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
                .animate-fade-in { animation: fade-in 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
            `}</style>
        </div>
    );
};

export default CatalogPage;
