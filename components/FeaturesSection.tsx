
import React from 'react';

const TruckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path d="M9 17a2 2 0 10-4 0 2 2 0 004 0zM19 17a2 2 0 10-4 0 2 2 0 004 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h8a1 1 0 001-1z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h2a1 1 0 001-1V7.572a1 1 0 00-.218-.671l-1.5-2.25a1 1 0 00-.868-.451H13v11z" />
    </svg>
);

const GiftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 012-2h2a2 2 0 012 2v2m-6 0h6m-6 0a2 2 0 00-2 2v11a2 2 0 002 2h6a2 2 0 002-2V10a2 2 0 00-2-2h-6z" />
    </svg>
);

const UserGroupIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.122-1.28-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.122-1.28.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const FeaturesSection: React.FC = () => {
    return (
        <section className="bg-gray-50 py-24 border-y border-gray-100">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
                <div className="flex flex-col items-center text-center">
                    <TruckIcon />
                    <h3 className="text-sm font-black uppercase tracking-[0.4em] mt-6 mb-3">Envío Premium</h3>
                    <p className="text-gray-500 text-[11px] font-bold uppercase tracking-widest leading-relaxed">Gratis en pedidos &gt; 35€. Entrega VIP 24/48h.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <GiftIcon />
                    <h3 className="text-sm font-black uppercase tracking-[0.4em] mt-6 mb-3">Puntos Beauty</h3>
                    <p className="text-gray-500 text-[11px] font-bold uppercase tracking-widest leading-relaxed">Acumula puntos en cada compra y canjéalos por regalos exclusivos.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <UserGroupIcon />
                    <h3 className="text-sm font-black uppercase tracking-[0.4em] mt-6 mb-3">Asesoría IA</h3>
                    <p className="text-gray-500 text-[11px] font-bold uppercase tracking-widest leading-relaxed">Consultoría personalizada con nuestra inteligencia artificial experta.</p>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
