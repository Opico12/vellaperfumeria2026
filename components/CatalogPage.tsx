
import React, { useState, useRef } from 'react';
import { allProducts } from './products';
import type { Product } from './types';
import type { Currency } from './currency';

// URL Oficial del Catálogo 2026
const INTERACTIVE_CATALOG_URL = 'https://es-catalogue.oriflame.com/oriflame/es/2026001-brp?HideStandardUI=true&Page=1';

interface CatalogPageProps {
    onAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onQuickAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onProductSelect: (product: Product) => void;
    onQuickView: (product: Product) => void;
    currency: Currency;
}

const CatalogPage: React.FC<CatalogPageProps> = ({ onAddToCart, onProductSelect }) => {
    const [quickAddCode, setQuickAddCode] = useState('');
    const [statusMessage, setStatusMessage] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [isOverview, setIsOverview] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleQuickAdd = (e: React.FormEvent) => {
        e.preventDefault();
        const code = parseInt(quickAddCode.trim());
        const product = allProducts.find(p => p.id === code);

        if (product) {
            onAddToCart(product, buttonRef.current, null);
            setStatusMessage(`¡${product.name} añadido!`);
            setQuickAddCode('');
            setTimeout(() => setStatusMessage(''), 3000);
        } else {
            setStatusMessage('Código no encontrado.');
            setTimeout(() => setStatusMessage(''), 3000);
        }
    };

    const orchidPink = "#FEF9FB";

    return (
        <div className="w-full bg-white flex flex-col h-full overflow-hidden">
            {/* TOOLBAR INTEGRADO (Referencia: catalogue-ipaper-root) */}
            <div id="catalogue-ipaper-root" className="w-full bg-black text-white border-b border-white/5 py-3 px-6 md:px-10 flex items-center justify-between z-30">
                <div role="toolbar" className="flex items-center gap-8 w-full justify-between">
                    
                    {/* Sección 1: Toggles y Contador */}
                    <div className="flex items-center gap-8">
                        <label 
                            className="flex items-center gap-3 cursor-pointer group" 
                            aria-label="Una página / Visión general"
                            title="Una página / Visión general"
                            onClick={() => setIsOverview(!isOverview)}
                        >
                            <div className={`relative w-10 h-5 rounded-full border border-gray-700 transition-colors ${isOverview ? 'bg-pink-600' : 'bg-neutral-800'}`}>
                                <div className={`absolute top-0.5 left-0.5 w-3.5 h-3.5 rounded-full bg-white transition-transform ${isOverview ? 'translate-x-5' : 'translate-x-0'}`}></div>
                            </div>
                            <span className="text-[10px] font-black tracking-widest uppercase hidden md:inline">Vista General</span>
                        </label>
                        <div className="flex items-center gap-4">
                            <svg className="w-5 h-5 opacity-50" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M9.5 9a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z"></path>
                                <path d="M7.5 4A2.5 2.5 0 0 0 5 6.5v11A2.5 2.5 0 0 0 7.5 20h9a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 16.5 4zM6 6.5A1.5 1.5 0 0 1 7.5 5h9A1.5 1.5 0 0 1 18 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 17.5z"></path>
                            </svg>
                            <p className="text-[11px] font-black tracking-[0.2em]" data-testid="Presentation-catalogue-ipaper-counter">
                                {currentPage} / 164
                            </p>
                        </div>
                    </div>

                    {/* Sección 2: Acciones Pro */}
                    <div className="flex items-center gap-6">
                        <button className="p-2 hover:bg-white/10 transition-colors rounded-sm" title="Entrar en pantalla completa">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M5 5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 0 0-1h-3A1.5 1.5 0 0 0 4 5.5v3a.5.5 0 0 0 1 0zm0 13a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 4 18.5v-3a.5.5 0 0 1 1 0zM18.5 5a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 1 0v-3A1.5 1.5 0 0 0 18.5 4h-3a.5.5 0 0 0 0 1zm.5 13.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 0 0 1h3a1.5 1.5 0 0 0 1.5-1.5v-3a.5.5 0 0 0-1 0z"></path>
                            </svg>
                        </button>
                        <a 
                            className="p-2 hover:bg-white/10 transition-colors rounded-sm" 
                            aria-label="Descargar" 
                            href="https://es-catalogue.oriflame.com/oriflame/es/2026001/GetPDF.ashx" 
                            title="Descargar PDF"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12.5 4a.5.5 0 0 0-1 0v9.793l-2.646-2.647a.5.5 0 0 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l3.5-3.5a.5.5 0 0 0-.708-.708L12.5 13.793z"></path>
                                <path d="M5 15.5a.5.5 0 0 0-1 0v3A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5v-3a.5.5 0 0 0-1 0v3a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5z"></path>
                            </svg>
                        </a>
                        <button className="p-2 hover:bg-white/10 transition-colors rounded-sm" title="Compartir el eCatalogue">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M14.297 6.043a.5.5 0 0 1 .537.085l5 4.5a.5.5 0 0 1 0 .744l-5 4.5A.5.5 0 0 1 14 15.5v-1.967c-2.165.157-3.714.497-5.04 1.113-1.43.664-2.642 1.668-4.098 3.199a.5.5 0 0 1-.823-.538c1.144-2.734 2.303-4.819 3.916-6.278 1.54-1.395 3.452-2.181 6.045-2.48V6.5a.5.5 0 0 1 .297-.457M15 7.623V9a.5.5 0 0 1-.455.498c-2.673.243-4.492.98-5.92 2.272-.983.89-1.803 2.063-2.583 3.575.798-.662 1.603-1.192 2.497-1.607 1.593-.74 3.427-1.096 5.933-1.237A.5.5 0 0 1 15 13v1.377L18.753 11z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex-grow flex flex-col lg:flex-row relative h-full">
                {/* VISOR DE CATÁLOGO */}
                <div className="flex-grow relative h-full bg-neutral-900 border-r border-gray-100">
                    <iframe
                        src={INTERACTIVE_CATALOG_URL}
                        title="Vellaperfumeria 2026 Interactive Journal"
                        className="w-full h-full border-none shadow-inner"
                        allowFullScreen
                        loading="lazy"
                    />
                    
                    {/* Botón Flotante Móvil */}
                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 lg:hidden">
                         <button 
                            onClick={() => {
                                const el = document.getElementById('express-order-sidebar');
                                if(el) el.classList.toggle('translate-y-full');
                            }}
                            className="bg-black text-white text-[10px] font-black tracking-[0.6em] px-14 py-7 rounded-full shadow-3xl uppercase border border-white/10"
                         >
                            PEDIDO RÁPIDO
                         </button>
                    </div>
                </div>

                {/* SIDEBAR DE COMPRA DIRECTA */}
                <div 
                    id="express-order-sidebar"
                    className="w-full lg:w-[450px] flex-shrink-0 bg-white flex flex-col p-14 md:p-20 border-l border-gray-50 shadow-3xl transition-transform duration-700 fixed lg:static bottom-0 z-20 h-auto lg:h-full"
                >
                    <div className="mb-16">
                         <span className="text-[10px] font-black tracking-[0.8em] mb-8 block text-gray-300 uppercase">VELLA INTERACTIVE</span>
                        <h2 className="text-5xl font-black text-black tracking-tighter uppercase mb-8 leading-none">Compra <br/>Directa</h2>
                        <div className="w-20 h-[1px] mb-12 bg-black"></div>
                        <p className="text-[12px] text-gray-400 leading-relaxed font-light tracking-[0.2em] uppercase italic">
                            Ingrese los códigos de referencia de su selección para procesar el pedido instantáneamente.
                        </p>
                    </div>

                    <form onSubmit={handleQuickAdd} className="space-y-16">
                        <div className="relative group">
                            <label className="text-[10px] font-black tracking-[0.6em] text-gray-300 mb-6 block uppercase">REFERENCIA</label>
                            <input
                                type="number"
                                placeholder="EJ. 31606"
                                className="w-full border-b border-gray-200 py-8 text-3xl font-black tracking-[0.8em] focus:outline-none focus:border-black transition-all uppercase placeholder:text-gray-100"
                                value={quickAddCode}
                                onChange={(e) => setQuickAddCode(e.target.value)}
                                style={{ backgroundColor: 'transparent' }}
                            />
                        </div>
                        <button
                            ref={buttonRef}
                            type="submit"
                            disabled={!quickAddCode}
                            className="w-full bg-black text-white font-black py-8 uppercase tracking-[0.7em] text-[12px] hover:text-black transition-all shadow-3xl disabled:bg-gray-50 transform active:scale-95 border border-black"
                            style={{ '--hover-bg': orchidPink } as React.CSSProperties}
                        >
                            AÑADIR A BOLSA
                        </button>
                    </form>

                    {statusMessage && (
                        <div className="mt-14 p-8 text-center rounded-sm animate-fade-in shadow-sm border border-gray-100" style={{ backgroundColor: orchidPink }}>
                            <p className="text-[11px] font-black text-black tracking-[0.5em] uppercase">
                                {statusMessage}
                            </p>
                        </div>
                    )}

                    <div className="mt-auto hidden lg:block pt-32">
                         <div className="p-14 border-t border-gray-50">
                             <h3 className="text-[11px] font-black tracking-[0.7em] uppercase mb-16 text-gray-300 italic">Destacado Milk & Honey</h3>
                             <div className="space-y-16">
                                {allProducts.filter(p => p.brand === 'Milk & Honey Gold').slice(0, 1).map(p => (
                                    <div key={p.id} className="flex gap-14 items-center group cursor-pointer" onClick={() => onProductSelect(p)}>
                                        <div className="w-32 h-32 bg-[#FAF6F0] p-8 border border-gray-50 shadow-sm overflow-hidden flex-shrink-0">
                                            <img src={p.imageUrl} alt={p.name} className="w-full h-full object-contain transition-transform duration-[2000ms] group-hover:scale-110" />
                                        </div>
                                        <div className="overflow-hidden">
                                            <p className="text-[14px] font-black truncate tracking-[0.3em] text-black uppercase mb-4">{p.name}</p>
                                            <p className="text-[12px] font-black text-[#B8860B] tracking-[0.4em]">{p.price}€</p>
                                        </div>
                                    </div>
                                ))}
                             </div>
                         </div>
                    </div>
                </div>
            </div>
            
            <style>{`
                @keyframes fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
                .animate-fade-in { animation: fade-in 0.4s ease-out forwards; }
                button[type="submit"]:hover { background-color: var(--hover-bg); color: black; }
                #express-order-sidebar { max-height: 100%; overflow-y: auto; }
                @media (max-width: 1024px) { #express-order-sidebar.translate-y-full { transform: translateY(100%); } }
            `}</style>
        </div>
    );
};

export default CatalogPage;
