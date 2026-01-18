
import React from 'react';

const HangerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4l3 2v2a3 3 0 01-6 0V6l3-2zM4 18s1-1 4-1 5 1 8 1 4-1 4-1M12 8v10" />
    </svg>
);

const TapeMeasureIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 10h12M3 14h18M3 18h12" />
    </svg>
);

const GoldCardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 10h18" />
    </svg>
);

const FeaturesSection: React.FC = () => {
    return (
        <section className="bg-gray-50 py-24 border-y border-gray-100">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
                <div className="flex flex-col items-center text-center">
                    <HangerIcon />
                    <h3 className="text-sm font-black uppercase tracking-[0.4em] mt-6 mb-3">Sastrería Express</h3>
                    <p className="text-gray-500 text-[11px] font-bold uppercase tracking-widest leading-relaxed">Ajustes perfectos en 24h para sus eventos de gala más urgentes.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <TapeMeasureIcon />
                    <h3 className="text-sm font-black uppercase tracking-[0.4em] mt-6 mb-3">Citas Bespoke</h3>
                    <p className="text-gray-500 text-[11px] font-bold uppercase tracking-widest leading-relaxed">Toma de medidas personalizada por nuestros maestros sastres.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <GoldCardIcon />
                    <h3 className="text-sm font-black uppercase tracking-[0.4em] mt-6 mb-3">Atelier Club</h3>
                    <p className="text-gray-500 text-[11px] font-bold uppercase tracking-widest leading-relaxed">Acceso exclusivo a preventas de colecciones y servicios VIP.</p>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
