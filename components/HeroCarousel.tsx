
import React, { useState, useEffect, useCallback } from 'react';
import type { View } from './types';

interface HeroCarouselProps {
    onNavigate: (view: View, payload?: any) => void;
}

const slides = [
    {
        imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        title: 'Colección 2026: Pureza Sueca',
        subtitle: 'LA FUSION PERFECTA ENTRE CIENCIA Y NATURALEZA',
        buttonText: 'EXPLORAR TIENDA',
        view: 'products' as View,
        payload: 'all'
    },
    {
        imageUrl: 'https://media-cdn.oriflame.com/digitalPromotionsMedia/images/banner-media/ES/20899847/20866148.jpg',
        title: 'Divine Dark Velvet',
        subtitle: 'LA NUEVA ERA DE LA ELEGANCIA NOCTURNA',
        buttonText: 'DESCUBRIR FRAGANCIA',
        view: 'products' as View,
        payload: 'perfume'
    },
    {
        imageUrl: 'https://media-cdn.oriflame.com/digitalPromotionsMedia/images/banner-media/ES/20900001/20866153.jpg',
        title: 'Esenciales de Invierno',
        subtitle: 'CUIDADO INTENSIVO PARA LAS TEMPERATURAS MÁS BAJAS',
        buttonText: 'VER SELECCIÓN',
        view: 'ofertas' as View,
    },
];

const ChevronLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
    </svg>
);

const ChevronRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
    </svg>
);

const HeroCarousel: React.FC<HeroCarouselProps> = ({ onNavigate }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex(prevIndex => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, []);

    const prevSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 7000);
        return () => clearInterval(slideInterval);
    }, [nextSlide]);
    
    return (
        <div className="w-full bg-white font-sans overflow-hidden">
             <div className="relative h-[75vh] min-h-[600px] w-full group">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-[1200ms] ease-in-out transform ${
                            index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
                        }`}
                    >
                        {/* Background with zoom effect */}
                        <div 
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-linear transform scale-100 group-hover:scale-110"
                            style={{ backgroundImage: `url(${slide.imageUrl})` }}
                        />
                        
                        {/* Overlays */}
                        <div className="absolute inset-0 bg-black/30" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                        {/* Content Container */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="max-w-5xl px-8 w-full text-center">
                                <div className={`transition-all duration-1000 delay-300 transform ${index === currentIndex ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                    <span className="text-white text-[11px] font-black tracking-[0.8em] uppercase mb-8 block drop-shadow-md">
                                        ESTOCOLMO &bull; 2026
                                    </span>
                                    
                                    <h2 className="text-5xl md:text-8xl font-serif italic text-white mb-10 leading-[0.9] drop-shadow-2xl">
                                        {slide.title}
                                    </h2>
                                    
                                    <p className="text-white/90 text-sm md:text-base tracking-[0.4em] font-bold uppercase mb-14 max-w-2xl mx-auto leading-relaxed">
                                        {slide.subtitle}
                                    </p>
                                    
                                    <button
                                        onClick={() => onNavigate(slide.view, slide.payload)}
                                        className="inline-block bg-white text-black text-[10px] font-black tracking-[0.5em] px-16 py-6 uppercase hover:bg-pink-600 hover:text-white transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.3)] active:scale-95"
                                    >
                                        {slide.buttonText}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                
                {/* Navigation Arrows - Only visible on hover */}
                <button 
                    onClick={prevSlide}
                    className="absolute left-10 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-all p-4 rounded-full hover:bg-white/10 opacity-0 group-hover:opacity-100 hidden md:block"
                    aria-label="Anterior"
                >
                    <ChevronLeftIcon />
                </button>
                <button 
                    onClick={nextSlide}
                    className="absolute right-10 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-all p-4 rounded-full hover:bg-white/10 opacity-0 group-hover:opacity-100 hidden md:block"
                    aria-label="Siguiente"
                >
                    <ChevronRightIcon />
                </button>

                {/* Refined Progress Indicators */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-6">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className="group py-4 px-2"
                            aria-label={`Slide ${index + 1}`}
                        >
                            <div className={`h-0.5 transition-all duration-700 ${
                                index === currentIndex ? 'w-16 bg-pink-500' : 'w-8 bg-white/20 group-hover:bg-white/50'
                            }`} />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroCarousel;
