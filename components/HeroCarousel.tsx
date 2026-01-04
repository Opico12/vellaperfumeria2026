
import React, { useState, useEffect, useCallback } from 'react';
import type { View } from './types';

interface HeroCarouselProps {
    onNavigate: (view: View) => void;
}

const slides = [
    {
        imageUrl: 'https://media-cdn.oriflame.com/digitalPromotionsMedia/images/banner-media/ES/20899847/20866148.jpg',
        title: 'La Nueva Era de la Elegancia',
        subtitle: 'COLECCIÓN PRIVÉE 2026: DIVINE DARK VELVET',
        buttonText: 'DESCUBRIR',
        view: 'productDetail' as View,
    },
    {
        imageUrl: 'https://media-cdn.oriflame.com/digitalPromotionsMedia/images/banner-media/ES/20900001/20866153.jpg',
        title: 'Esenciales de Pasarela',
        subtitle: 'HASTA -50% EN SELECCIÓN DE TEMPORADA',
        buttonText: 'VER OFERTAS',
        view: 'ofertas' as View,
    },
    {
        imageUrl: 'https://media-cdn.oriflame.com/digitalPromotionsMedia/images/banner-media/ES/20899692/21035391.jpg',
        title: 'Exclusiva 2026: Beauty Revelations',
        subtitle: 'NUEVO CALENDARIO DE BELLEZA 2026',
        buttonText: 'RESERVAR AHORA',
        view: 'catalog' as View,
    },
];

const ChevronLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
    </svg>
);

const ChevronRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
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
        const slideInterval = setInterval(nextSlide, 6000);
        return () => clearInterval(slideInterval);
    }, [nextSlide]);
    
    return (
        <div className="w-full bg-white">
             <div className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                            index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                        }`}
                    >
                        <div 
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide.imageUrl})` }}
                        />
                        <div className="absolute inset-0 bg-black/30" />
                        <div className="absolute inset-0 flex items-center justify-center text-center">
                            <div className="max-w-4xl px-6">
                                <span className="text-white text-[10px] font-black tracking-[0.6em] uppercase mb-6 block animate-fade-in">Temporada 2026</span>
                                <h2 className="text-5xl md:text-7xl font-serif italic text-white mb-8 leading-tight drop-shadow-2xl">
                                    {slide.title}
                                </h2>
                                <p className="text-white/80 text-xs md:text-sm tracking-[0.3em] font-bold uppercase mb-10">
                                    {slide.subtitle}
                                </p>
                                <button
                                    onClick={() => onNavigate(slide.view)}
                                    className="bg-white text-black text-[10px] font-black tracking-[0.4em] px-12 py-5 uppercase hover:bg-pink-600 hover:text-white transition-all duration-500 shadow-2xl"
                                >
                                    {slide.buttonText}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
                
                {/* Navigation Arrows - Minimalist */}
                <button 
                    onClick={prevSlide}
                    className="absolute left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2"
                    aria-label="Previous"
                >
                    <ChevronLeftIcon />
                </button>
                <button 
                    onClick={nextSlide}
                    className="absolute right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2"
                    aria-label="Next"
                >
                    <ChevronRightIcon />
                </button>

                {/* Progress Indicators */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-4">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-0.5 transition-all duration-500 ${
                                index === currentIndex ? 'w-12 bg-pink-500' : 'w-6 bg-white/30 hover:bg-white/60'
                            }`}
                            aria-label={`Slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroCarousel;
