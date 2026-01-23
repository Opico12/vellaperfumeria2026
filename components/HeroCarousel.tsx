
import React, { useState, useEffect, useCallback } from 'react';
import type { View } from './types';

interface HeroCarouselProps {
    onNavigate: (view: View, payload?: any) => void;
}

const slides = [
    {
        id: 'makeup-test',
        type: 'interactive',
        imageUrl: 'https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&w=1920&q=80',
        title: 'ENCUENTRA TU BASE DE MAQUILLAJE',
        description: '¡Encuentra el maquillaje que potencie la belleza de tu piel! ¿No sabes qué base le va bien a tu piel? No te preocupes, nosotros te ayudamos. Este test te ayudará a encontrar la perfecta en un abrir y cerrar de ojos.',
        buttonText: 'COMENZAR TEST',
        view: 'foundationFinder' as View
    },
    {
        id: 'diamond-luxury',
        type: 'classic',
        imageUrl: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1920&q=80',
        title: 'Diamantes para tu Piel',
        description: 'Descubre la exclusiva gama Diamond Cellular. Ciencia sueca y polvo de diamante auténtico para una luminosidad eterna.',
        buttonText: 'VER CATÁLOGO',
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
        const slideInterval = setInterval(nextSlide, 10000);
        return () => clearInterval(slideInterval);
    }, [nextSlide]);
    
    return (
        <div className="w-full bg-black font-sans relative">
             <div className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                            index === currentIndex ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-105 translate-x-full'
                        }`}
                    >
                        {/* Background Image */}
                        <div 
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide.imageUrl})` }}
                        />
                        
                        {/* Glassmorphism Overlay */}
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

                        {/* Content Area */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                                
                                {/* Text Content */}
                                <div className="text-left animate-fade-in-up">
                                    <div className="inline-block px-4 py-1 border border-pink-400 text-pink-400 text-[10px] font-black tracking-[0.5em] uppercase mb-8 bg-black/50 backdrop-blur-md">
                                        Especial 2026
                                    </div>
                                    <h2 className="text-5xl md:text-8xl font-black text-white mb-8 leading-none uppercase tracking-tighter italic">
                                        {slide.title.split(' ').map((word, i) => (
                                            <span key={i} className={i % 2 !== 0 ? 'text-pink-500' : ''}>{word} </span>
                                        ))}
                                    </h2>
                                    <p className="text-white/80 text-lg md:text-xl font-light italic mb-12 max-w-lg leading-relaxed border-l-2 border-pink-600 pl-6">
                                        {slide.description}
                                    </p>
                                    <button
                                        onClick={() => onNavigate(slide.view, slide.payload)}
                                        className="group relative overflow-hidden bg-white text-black font-black px-12 py-5 text-[12px] tracking-[0.4em] uppercase hover:text-white transition-colors duration-500 rounded-sm shadow-2xl"
                                    >
                                        <span className="relative z-10">{slide.buttonText}</span>
                                        <div className="absolute inset-0 bg-pink-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                    </button>
                                </div>

                                {/* Visual Element (Only for Interactive) */}
                                {slide.id === 'makeup-test' && (
                                    <div className="hidden md:block relative animate-float">
                                        <div className="w-[450px] h-[550px] bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-sm shadow-3xl overflow-hidden group">
                                            <img 
                                                src="https://images.typeform.com/images/CNpNdfkWvZsn/image/default-firstframe.png" 
                                                alt="Foundation Test" 
                                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="bg-black/80 backdrop-blur-md p-6 border border-pink-500/50 text-center">
                                                    <span className="text-pink-500 text-[10px] font-black uppercase tracking-[0.4em]">Experiencia Digital</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}

                {/* Navigation Dots */}
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
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                    100% { transform: translateY(0px); }
                }
                .animate-fade-in-up { animation: fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                .animate-float { animation: float 6s ease-in-out infinite; }
            `}</style>
        </div>
    );
};

export default HeroCarousel;
