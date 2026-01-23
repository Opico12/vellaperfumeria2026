
import React, { useState, useEffect, useCallback } from 'react';
import type { View } from './types';

interface HeroCarouselProps {
    onNavigate: (view: View, payload?: any) => void;
}

const slides = [
    {
        imageUrl: 'https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&w=1920&q=80',
        title: 'Esencia de Lujo',
        subtitle: 'DESCUBRE LA COLECCIÓN 2026 DE BELLA PERFUMERÍA',
        buttonText: 'VER CATÁLOGO',
        view: 'products' as View,
        payload: 'all'
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1920&q=80',
        title: 'Cuidado Avanzado',
        subtitle: 'CIENCIA SUECA PARA UNA PIEL RADIANTE',
        buttonText: 'DIAGNÓSTICO IA',
        view: 'skinDiagnostic' as View,
    },
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
        <div className="w-full bg-white font-sans border-b border-gray-100">
             <div className="relative h-[65vh] min-h-[450px] w-full overflow-hidden">
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
                        <div className="absolute inset-0 bg-black/10" />
                        <div className="absolute inset-0 flex items-center justify-center text-center">
                            <div className="max-w-4xl px-6">
                                <span className="text-white text-[10px] font-black tracking-[0.6em] uppercase mb-6 block drop-shadow-lg">BELLA PERFUMERÍA</span>
                                <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight uppercase tracking-tighter drop-shadow-2xl">
                                    {slide.title}
                                </h2>
                                <p className="text-white text-[1.1rem] tracking-[0.3em] font-bold uppercase mb-12 drop-shadow-lg">
                                    {slide.subtitle}
                                </p>
                                <button
                                    onClick={() => onNavigate(slide.view, slide.payload)}
                                    className="bg-pink-100/20 text-white border-2 border-pink-900 text-[11px] font-black tracking-[0.4em] px-14 py-5 uppercase hover:bg-pink-900 transition-all duration-500 rounded-sm shadow-2xl backdrop-blur-sm"
                                >
                                    {slide.buttonText}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HeroCarousel;
