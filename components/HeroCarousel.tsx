
import React, { useState, useEffect, useCallback } from 'react';
import type { View } from './types';

interface HeroCarouselProps {
    onNavigate: (view: View, payload?: any) => void;
}

const slides = [
    {
        id: 'blonde-model-2026',
        type: 'classic',
        // Imagen de la modelo rubia de alta calidad
        imageUrl: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1920&q=80',
        title: 'Tu Esencia, Tu Belleza',
        description: 'Descubre la Campaña 1 de 2026. Lujo sueco formulado con los ingredientes más exclusivos para una piel eternamente joven.',
        buttonText: 'VER CATÁLOGO 2026',
        view: 'products' as View,
        payload: 'all'
    },
    {
        id: 'love-potion-exclusive',
        type: 'classic',
        imageUrl: 'https://images.unsplash.com/photo-1557170334-a9632e77c6e4?auto=format&fit=crop&w=1920&q=80',
        title: 'Love Potion Cherry',
        description: 'La nueva fragancia absoluta. Siente el poder de la cereza dulce y el chocolate negro en tu piel.',
        buttonText: 'COMPRAR AHORA',
        view: 'productDetail' as View,
        payload: { id: 46047 } // ID de Love Potion Cherry
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
             <div className="relative h-[90vh] min-h-[700px] w-full overflow-hidden">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                            index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                        }`}
                    >
                        <div 
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide.imageUrl})` }}
                        />
                        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />

                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="container mx-auto px-6 text-center md:text-left">
                                <div className="max-w-4xl animate-fade-in-up">
                                    <div className="inline-block px-4 py-1 border border-pink-400 text-pink-400 text-[10px] font-black tracking-[0.5em] uppercase mb-8 bg-black/40 backdrop-blur-md">
                                        ORIFLAME EXCLUSIVE 2026
                                    </div>
                                    <h2 className="text-6xl md:text-9xl font-black text-white mb-8 leading-none uppercase tracking-tighter italic">
                                        {slide.title}
                                    </h2>
                                    <p className="text-white/80 text-lg md:text-2xl font-light italic mb-12 max-w-2xl leading-relaxed border-l-2 border-pink-500 pl-6">
                                        {slide.description}
                                    </p>
                                    
                                    {/* Botón Rosa Transparente con Borde */}
                                    <button
                                        onClick={() => onNavigate(slide.view, slide.payload)}
                                        className="bg-pink-500/10 border-2 border-pink-500 text-white font-black px-12 py-5 text-[12px] tracking-[0.4em] uppercase hover:bg-pink-500 transition-all rounded-sm shadow-2xl backdrop-blur-md"
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
                            className={`h-1 transition-all duration-500 ${currentIndex === i ? 'w-16 bg-pink-500' : 'w-8 bg-white/20'}`}
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
