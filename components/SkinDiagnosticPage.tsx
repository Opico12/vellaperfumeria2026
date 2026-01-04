
import React from 'react';

const SkinDiagnosticPage: React.FC = () => {
    const diagnosticUrl = "https://es.oriflame.com/gift-ideas/holiday?store=ES-beautieshopvella&openNovageSkincareAdvisor=once";

    return (
        <div className="bg-white min-h-screen">
            {/* HERO SECTION */}
            <div className="relative h-[80vh] flex items-center overflow-hidden bg-black">
                <img 
                    src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                    alt="Skin Diagnostic"
                />
                <div className="container mx-auto px-6 relative z-10 text-center lg:text-left">
                    <div className="max-w-3xl">
                        <span className="text-[#FAE1EF] text-[11px] font-black tracking-[0.6em] uppercase mb-6 block animate-fade-in">
                            Inteligencia Artificial aplicada a la belleza
                        </span>
                        <h1 className="text-5xl md:text-8xl font-serif italic text-white mb-8 tracking-tighter leading-tight">
                            Diagnóstico de <br/> Piel <span className="text-[#FAE1EF]">Novage+</span>
                        </h1>
                        <p className="text-white/80 text-lg md:text-xl font-light mb-12 max-w-xl leading-relaxed italic">
                            "Descubre las necesidades reales de tu piel con nuestro asesor digital de última generación. Una rutina personalizada en menos de 2 minutos."
                        </p>
                        <a 
                            href={diagnosticUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-[#FAE1EF] text-black text-[11px] font-black tracking-[0.4em] px-16 py-6 uppercase hover:bg-white transition-all shadow-2xl active:scale-95"
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
                        <div className="w-16 h-16 bg-[#FAE1EF] rounded-full flex items-center justify-center mx-auto text-black font-black text-2xl">1</div>
                        <h3 className="text-xl font-black uppercase tracking-widest">Escaneo Facial</h3>
                        <p className="text-gray-500 font-light italic">Nuestra tecnología analiza 7 signos clave del envejecimiento mediante una simple foto.</p>
                    </div>
                    <div className="text-center space-y-6">
                        <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto text-white font-black text-2xl">2</div>
                        <h3 className="text-xl font-black uppercase tracking-widest">Análisis Experto</h3>
                        <p className="text-gray-500 font-light italic">Algoritmos desarrollados por científicos de la piel para identificar tus prioridades.</p>
                    </div>
                    <div className="text-center space-y-6">
                        <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto text-white font-black text-2xl">3</div>
                        <h3 className="text-xl font-black uppercase tracking-widest">Tu Rutina Ideal</h3>
                        <p className="text-gray-500 font-light italic">Recibe una recomendación completa de Novage+ adaptada a tu estilo de vida.</p>
                    </div>
                </div>
            </div>

            {/* BANNER INFERIOR */}
            <div className="bg-[#f9f9f9] py-24 border-y border-gray-100">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <h2 className="text-3xl md:text-5xl font-black text-black tracking-tighter uppercase mb-8 italic">
                        No esperes más para <br/> una piel <span className="text-pink-600">extraordinaria</span>
                    </h2>
                    <p className="text-gray-500 text-lg mb-12 font-light">
                        El diagnóstico es totalmente gratuito y el primer paso hacia la mejor versión de tu piel. Realizado por Vellaperfumeria en colaboración con los laboratorios Oriflame Estocolmo.
                    </p>
                    <a 
                        href={diagnosticUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-black uppercase tracking-[0.4em] border-b-2 border-black pb-2 hover:text-pink-600 hover:border-pink-600 transition-all"
                    >
                        Acceder al Skincare Advisor
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SkinDiagnosticPage;
