
import React from 'react';
import type { View } from './types';

interface InteractiveCatalogSectionProps {
    onNavigate: (view: View) => void;
}

const InteractiveCatalogSection: React.FC<InteractiveCatalogSectionProps> = ({ onNavigate }) => {
    return (
        <section className="py-24 bg-white border-y border-gray-50">
            <div className="container mx-auto px-6 text-center">
                <div className="mb-16">
                    <span className="text-pink-600 text-[10px] font-black tracking-[0.6em] uppercase mb-4 block">EXPLORE EL FUTURO</span>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-black uppercase leading-none italic">Journal <span className="text-pink-600">Digital</span></h2>
                    <div className="w-16 h-[1px] bg-pink-100 mx-auto mt-8"></div>
                </div>

                <div className="max-w-2xl mx-auto space-y-12">
                    <p className="text-gray-400 text-[0.9rem] font-bold uppercase tracking-[0.2em] leading-relaxed italic">
                        "Nuestra edición interactiva 2026 le permite descubrir las últimas tendencias directamente en su dispositivo con asesoría en tiempo real."
                    </p>
                    
                    <button
                        onClick={() => onNavigate('catalog')}
                        className="bg-pink-100/30 text-pink-800 border-2 border-pink-800 font-black py-5 px-16 text-[11px] tracking-[0.4em] uppercase hover:bg-pink-800 hover:text-white transition-all shadow-lg rounded-sm"
                    >
                        ABRIR JOURNAL INTERACTIVO
                    </button>
                </div>
            </div>
        </section>
    );
};

export default InteractiveCatalogSection;
