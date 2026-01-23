
import React from 'react';

const SkinDiagnosticPage: React.FC = () => {
    const diagnosticUrl = "https://es.oriflame.com/gift-ideas/holiday?store=ES-beautieshopvella&openNovageSkincareAdvisor=once";

    return (
        <div className="bg-white min-h-screen font-sans">
            {/* HERO SECTION (No photos) */}
            <div className="relative h-[50vh] flex items-center overflow-hidden bg-black">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="max-w-3xl mx-auto">
                        <span className="text-[#FAE1EF] text-[11px] font-black tracking-[0.6em] uppercase mb-6 block">
                            Inteligencia Artificial Aplicada
                        </span>
                        <h1 className="text-5xl md:text-7xl text-white mb-8 tracking-tighter leading-tight uppercase font-black italic">
                            Diagnóstico de <br/> Piel <span className="text-[#FAE1EF]">Novage+</span>
                        </h1>
                        <p className="text-white/60 text-[0.8rem] font-bold mb-12 max-w-xl mx-auto leading-relaxed uppercase tracking-widest">
                            Descubre las necesidades reales de tu piel con nuestro asesor digital.
                        </p>
                        <a 
                            href={diagnosticUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-white/10 text-white border-2 border-white text-[11px] font-black tracking-[0.4em] px-16 py-6 uppercase hover:bg-white hover:text-black transition-all shadow-2xl rounded-sm"
                        >
                            Comenzar Test Ahora
                        </a>
                    </div>
                </div>
            </div>

            {/* FEATURES SECTION */}
            <div className="container mx-auto px-6 py-32">
                <div className="grid md:grid-cols-3 gap-20">
                    <div className="text-center space-y-6">
                        <div className="w-16 h-16 border-2 border-black rounded-full flex items-center justify-center mx-auto text-black font-black text-2xl">1</div>
                        <h3 className="text-sm font-black uppercase tracking-widest">Escaneo</h3>
                        <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest">Análisis preciso de 7 signos clave.</p>
                    </div>
                    <div className="text-center space-y-6">
                        <div className="w-16 h-16 border-2 border-black rounded-full flex items-center justify-center mx-auto text-black font-black text-2xl">2</div>
                        <h3 className="text-sm font-black uppercase tracking-widest">Ciencia</h3>
                        <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest">Algoritmos científicos suecos.</p>
                    </div>
                    <div className="text-center space-y-6">
                        <div className="w-16 h-16 border-2 border-pink-700 rounded-full flex items-center justify-center mx-auto text-pink-700 font-black text-2xl">3</div>
                        <h3 className="text-sm font-black uppercase tracking-widest">Rutina</h3>
                        <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest">Personalización total Novage+.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkinDiagnosticPage;
