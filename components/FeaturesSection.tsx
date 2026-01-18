
import React from 'react';

const TruckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 0V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const SparklesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
    </svg>
);

const SupportIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
    </svg>
);

const FeaturesSection: React.FC = () => {
    return (
        <section className="bg-gray-50 py-24 border-y border-gray-100">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
                <div className="flex flex-col items-center text-center">
                    <TruckIcon />
                    <h3 className="text-sm font-black uppercase tracking-[0.4em] mt-6 mb-3">Envío VIP</h3>
                    <p className="text-gray-500 text-[11px] font-bold uppercase tracking-widest leading-relaxed">Entrega rápida y segura en 24/48h para sus productos favoritos.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <SparklesIcon />
                    <h3 className="text-sm font-black uppercase tracking-[0.4em] mt-6 mb-3">Calidad Estocolmo</h3>
                    <p className="text-gray-500 text-[11px] font-bold uppercase tracking-widest leading-relaxed">Productos originales certificados por laboratorios Oriflame Suecia.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <SupportIcon />
                    <h3 className="text-sm font-black uppercase tracking-[0.4em] mt-6 mb-3">Asesoría Personal</h3>
                    <p className="text-gray-500 text-[11px] font-bold uppercase tracking-widest leading-relaxed">Atención experta por WhatsApp para ayudarle a elegir su rutina ideal.</p>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
