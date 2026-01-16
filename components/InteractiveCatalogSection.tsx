
import React from 'react';
import type { View } from './types';

interface InteractiveCatalogSectionProps {
    onNavigate: (view: View) => void;
}

const InteractiveCatalogSection: React.FC<InteractiveCatalogSectionProps> = ({ onNavigate }) => {
    // Portada representativa de la nueva temporada 2026
    const catalogCoverUrl = 'https://cdn.ipaper.io/iPaper/Papers/0ae94f9f-dbf1-41ce-8890-85ef3c56310d/Pages/1/Zoom.jpg';

    return (
        <section className="py-32 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-24">
                    <span className="text-pink-600 text-[11px] font-black tracking-[0.8em] uppercase mb-6 block">EXPLORE EL FUTURO</span>
                    <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter text-black uppercase leading-none">Journal <span className="text-pink-600">Digital</span></h2>
                    <div className="w-24 h-[1px] bg-black/10 mx-auto mt-10"></div>
                </div>

                <div className="grid lg:grid-cols-12 gap-24 items-center">
                    {/* Visual Portada - Centrada y vibrante */}
                    <div className="lg:col-span-7 flex justify-center">
                        <div 
                            onClick={() => onNavigate('catalog')}
                            className="relative group cursor-pointer overflow-hidden bg-white aspect-[3/4] max-w-md shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-8 border-gray-50"
                        >
                            <img
                                src={catalogCoverUrl}
                                alt="Catálogo Digital Vellaperfumeria 2026"
                                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                            />
                            
                            {/* Overlay de acción */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/5 group-hover:bg-transparent transition-all">
                                <div className="bg-white text-black px-12 py-5 text-[10px] font-black tracking-[0.5em] uppercase shadow-2xl opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700">
                                    VER EDICIÓN 2026
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contenido descriptivo */}
                    <div className="lg:col-span-5 space-y-12 text-center lg:text-left">
                        <h3 className="text-4xl md:text-5xl font-black text-black tracking-tighter uppercase leading-[1.1] italic">Inspiración <br/><span className="text-pink-600">Sin Límites</span></h3>
                        <p className="text-gray-500 text-xl font-light leading-relaxed tracking-wide italic">
                            "Nuestra nueva edición interactiva para 2026 no es solo una revista, es un viaje curado por las tendencias más vanguardistas de Estocolmo directamente a tu piel."
                        </p>
                        
                        <div className="space-y-6 pt-10 border-t border-gray-100 text-left">
                            <div className="flex items-center gap-6 text-[10px] font-black tracking-[0.2em] text-black">
                                <span className="w-10 h-[2px] bg-pink-500"></span>
                                +250 NOVEDADES DE ALTA GAMA
                            </div>
                            <div className="flex items-center gap-6 text-[10px] font-black tracking-[0.2em] text-black">
                                <span className="w-10 h-[2px] bg-pink-500"></span>
                                ASESOR DE BELLEZA IA INTEGRADO
                            </div>
                            <div className="flex items-center gap-6 text-[10px] font-black tracking-[0.2em] text-black">
                                <span className="w-10 h-[2px] bg-pink-500"></span>
                                COMPRA DIRECTA DESDE LA REVISTA
                            </div>
                        </div>

                        <button
                            onClick={() => onNavigate('catalog')}
                            className="inline-block bg-black text-white font-black py-6 px-16 text-[11px] tracking-[0.4em] uppercase hover:bg-pink-600 transition-all shadow-2xl active:scale-95"
                        >
                            ABRIR JOURNAL COMPLETO
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InteractiveCatalogSection;
