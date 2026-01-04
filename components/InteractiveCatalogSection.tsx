
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
                    <h2 className="text-5xl md:text-8xl font-serif italic tracking-tighter text-black">Catálogo 2026</h2>
                    <div className="w-24 h-[1px] bg-black/10 mx-auto mt-10"></div>
                </div>

                <div className="grid lg:grid-cols-12 gap-24 items-center">
                    {/* Visual Portada */}
                    <div className="lg:col-span-7">
                        <div 
                            onClick={() => onNavigate('catalog')}
                            className="relative group cursor-pointer overflow-hidden bg-black aspect-[16/10] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)]"
                        >
                            <img
                                src={catalogCoverUrl}
                                alt="Catálogo Digital 2026"
                                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110 opacity-90 group-hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-700"></div>
                            
                            {/* Overlay de acción */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-white text-black px-16 py-6 text-[11px] font-black tracking-[0.5em] uppercase shadow-2xl opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700">
                                    ABRIR EDICIÓN 2026
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contenido descriptivo */}
                    <div className="lg:col-span-5 space-y-12 text-center lg:text-left">
                        <h3 className="text-4xl font-black text-black tracking-tighter uppercase leading-[1.1]">Inspiración <br/>sin fronteras</h3>
                        <p className="text-gray-500 text-xl font-light leading-relaxed tracking-wide italic">
                            "Nuestra nueva edición interactiva para 2026 no es solo un catálogo, es un viaje curado por las tendencias más vanguardistas del mundo."
                        </p>
                        
                        <div className="space-y-6 pt-6 border-t border-gray-100">
                            <div className="flex items-center gap-6 text-xs font-bold tracking-[0.2em] text-black">
                                <span className="w-10 h-[1px] bg-pink-500"></span>
                                +250 LANZAMIENTOS EXCLUSIVOS
                            </div>
                            <div className="flex items-center gap-6 text-xs font-bold tracking-[0.2em] text-black">
                                <span className="w-10 h-[1px] bg-pink-500"></span>
                                TECNOLOGÍA BIOACTIVADORA
                            </div>
                            <div className="flex items-center gap-6 text-xs font-bold tracking-[0.2em] text-black">
                                <span className="w-10 h-[1px] bg-pink-500"></span>
                                COMPRA DIRECTA EN PÁGINA
                            </div>
                        </div>

                        <button
                            onClick={() => onNavigate('catalog')}
                            className="inline-block bg-black text-white font-black py-6 px-16 text-[11px] tracking-[0.4em] uppercase hover:bg-pink-600 transition-all shadow-2xl active:scale-95"
                        >
                            VER JOURNAL 2026
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InteractiveCatalogSection;
