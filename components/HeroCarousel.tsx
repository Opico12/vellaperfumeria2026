
import React, { useState, useEffect, useCallback } from 'react';
import type { View } from './types';

interface HeroCarouselProps {
    onNavigate: (view: View, payload?: any) => void;
}

const slides = [
    {
        id: 'all-or-nothing-amplified',
        type: 'perfume',
        imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1920&q=80',
        title: 'ALL OR NOTHING AMPLIFIED',
        description: 'SIENTE EL PODER DE LA FRAGANCIA FLORAL AMBARINA · AHORA 62,99€',
        buttonText: 'COMPRAR AHORA',
        view: 'productDetail' as View,
        payload: { id: 46060 }
    },
    {
        id: 'lujo-detalle-modelo',
        type: 'luxury',
        imageUrl: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=1920&q=80',
        title: 'LUJO EN CADA DETALLE',
        description: 'DESCUBRE LOS NUEVOS ENVOLTORIOS PREMIUM · CAMPAÑA 1 - 2026',
        buttonText: 'VER NOVEDADES',
        view: 'products' as View,
        payload: 'skincare'
    }
];

const HeroCarousel: React.FC<HeroCarouselProps> = ({ onNavigate }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex(prevIndex => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, []);

    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 8000);
        return () => clearInterval(slideInterval);
    }, [nextSlide]);
    
    return (
        <div className="w-full bg-black font-sans relative">
             <div className="relative h-[90vh] min-h-[700px] w-full overflow-hidden bg-black">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                            index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                        }`}
                    >
                        {slide.imageUrl && (
                            <div 
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${slide.imageUrl})` }}
                            />
                        )}
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-[0.5px]" />

                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="container mx-auto px-6 text-center">
                                <div className="max-w-5xl mx-auto animate-fade-in-up">
                                    <div className="inline-block px-5 py-1.5 border border-[#E29CD2]/50 text-[#E29CD2] text-[10px] font-black tracking-[0.5em] uppercase mb-8 bg-black/40 backdrop-blur-md">
                                        CALIDAD SUECA · ORIFLAME
                                    </div>
                                    <h2 className="text-6xl md:text-9xl font-black text-white mb-8 leading-none uppercase tracking-tighter italic">
                                        {slide.title}
                                    </h2>
                                    <p className="text-white/90 text-[10px] md:text-[13px] font-black uppercase tracking-[0.4em] mb-12 max-w-2xl mx-auto leading-relaxed opacity-80">
                                        {slide.description}
                                    </p>
                                    
                                    {/* Botón Rosa Orquídea */}
                                    <button
                                        onClick={() => onNavigate(slide.view, slide.payload)}
                                        className="text-black font-black px-16 py-5 text-[11px] tracking-[0.5em] uppercase hover:bg-white transition-all rounded-sm shadow-2xl active:scale-95 border-2 border-[#C576B0]"
                                        style={{ backgroundColor: "#E29CD2" }}
                                    >
                                        {slide.buttonText}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-30">
                    {slides.map((_, i) => (
                        <button 
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`h-1 transition-all duration-500 ${currentIndex === i ? 'w-16 bg-[#E29CD2]' : 'w-8 bg-white/20'}`}
                        />
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up { animation: fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
            `}</style>
        </div>
    );
};

export default HeroCarousel;
