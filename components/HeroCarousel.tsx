
import React, { useState, useEffect, useCallback } from 'react';
import type { View, Product } from './types';
import { allProducts } from './products';

interface HeroCarouselProps {
    onNavigate: (view: View, payload?: any) => void;
}

const slides = [
    {
        imageUrl: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1920&q=80',
        title: 'Fragancias de Gala 2026',
        subtitle: 'DESCUBRA LA ESENCIA DE LA ELEGANCIA SUECA',
        buttonText: 'VER PERFUMES',
        view: 'products' as View,
        payload: 'perfume'
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1920&q=80',
        title: 'Cuidado Facial Novage+',
        subtitle: 'TECNOLOGÍA AVANZADA PARA UNA PIEL RADIANTE',
        buttonText: 'DESCUBRIR RITUAL',
        view: 'products' as View,
        payload: 'skincare'
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1920&q=80',
        title: 'Campaña 1 - Oriflame',
        subtitle: 'NUEVAS TENDENCIAS DE BELLEZA INTERACTIVA',
        buttonText: 'ABRIR CATÁLOGO',
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
        <div className="w-full bg-white font-sans">
             <div className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
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
                                <span className="text-white text-[10px] font-black tracking-[0.6em] uppercase mb-6 block animate-fade-in shadow-sm">Bella Perfumería 2026</span>
                                <h2 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight drop-shadow-2xl italic uppercase tracking-tighter">
                                    {slide.title}
                                </h2>
                                <p className="text-white/90 text-xs md:text-sm tracking-[0.3em] font-bold uppercase mb-10 drop-shadow-lg">
                                    {slide.subtitle}
                                </p>
                                <button
                                    onClick={() => onNavigate(slide.view, slide.payload)}
                                    className="bg-white text-black text-[10px] font-black tracking-[0.4em] px-16 py-6 uppercase hover:bg-pink-600 hover:text-white transition-all duration-500 shadow-2xl"
                                >
                                    {slide.buttonText}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
                
                <button 
                    onClick={prevSlide}
                    className="absolute left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4 bg-black/10 hover:bg-black/20 rounded-full"
                    aria-label="Anterior"
                >
                    <ChevronLeftIcon />
                </button>
                <button 
                    onClick={nextSlide}
                    className="absolute right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4 bg-black/10 hover:bg-black/20 rounded-full"
                    aria-label="Siguiente"
                >
                    <ChevronRightIcon />
                </button>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-6">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-1 transition-all duration-500 ${
                                index === currentIndex ? 'w-16 bg-pink-500' : 'w-8 bg-white/40 hover:bg-white'
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
