
import React from 'react';

const FoundationFinderPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col md:flex-row animate-fade-in">
            {/* Lado Imagen - Banner de bienvenida */}
            <div className="md:w-1/2 h-[40vh] md:h-screen relative overflow-hidden">
                <img 
                    src="https://images.typeform.com/images/CNpNdfkWvZsn/background/large" 
                    alt="Find your foundation banner" 
                    className="w-full h-full object-cover animate-ken-burns"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent md:bg-gradient-to-t md:from-black/40"></div>
            </div>

            {/* Lado Contenido - Texto y Acción */}
            <div className="md:w-1/2 flex items-center justify-center p-8 md:p-24 bg-zinc-950">
                <div className="max-w-xl space-y-12">
                    <div className="space-y-4">
                        <span className="text-pink-500 text-[11px] font-black tracking-[0.6em] uppercase block">Bella Perfumería Exclusive</span>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-none">
                            ENCUENTRA TU <br/>
                            <span className="text-pink-600">BASE DE MAQUILLAJE</span>
                        </h1>
                    </div>

                    <div className="space-y-6 text-gray-300 font-medium leading-relaxed tracking-wide">
                        <p className="text-xl italic font-black text-white">¡Encuentra el maquillaje que potencie la belleza de tu piel!</p>
                        <p className="text-sm uppercase tracking-widest text-gray-400">
                            ¿No sabes qué base de maquillaje le va bien a tu piel? No te preocupes, nosotros te ayudamos. 
                            Este test te ayudará a encontrar la perfecta en un abrir y cerrar de ojos.
                        </p>
                    </div>

                    <div className="pt-8">
                        <button className="group relative px-16 py-6 bg-white text-black font-black text-[12px] tracking-[0.5em] uppercase overflow-hidden transition-all hover:text-white">
                            <span className="relative z-10">Comenzar el Test</span>
                            <div className="absolute inset-0 bg-pink-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                        </button>
                    </div>

                    <div className="pt-12 flex items-center gap-4 text-gray-600">
                        <div className="h-[1px] w-12 bg-gray-800"></div>
                        <span className="text-[9px] font-black uppercase tracking-widest">Powered by Beauty AI 2026</span>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
                @keyframes ken-burns { 
                    0% { transform: scale(1); } 
                    100% { transform: scale(1.1); } 
                }
                .animate-fade-in { animation: fade-in 1.2s ease-out forwards; }
                .animate-ken-burns { animation: ken-burns 20s ease-out infinite alternate; }
            `}</style>
        </div>
    );
};

export default FoundationFinderPage;
