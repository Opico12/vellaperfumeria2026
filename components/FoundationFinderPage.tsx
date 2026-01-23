
import React, { useState } from 'react';

interface Option {
    label: string;
    value: string;
    imageUrl?: string;
}

interface Question {
    id: string;
    title: string;
    description: string;
    options: Option[];
}

const questions: Question[] = [
    {
        id: 'skin-priority',
        title: '1/5 ¿Cómo quieres que se vea tu piel?',
        description: '(Elige una respuesta)',
        options: [
            { 
                label: 'Quiero que mi piel esté hidratada y luminosa', 
                value: 'moisturization',
                imageUrl: 'https://images.typeform.com/images/ypsYGNYJDKi9'
            },
            { 
                label: 'Quiero minimizar las arrugas', 
                value: 'youth-enhancing',
                imageUrl: 'https://images.typeform.com/images/3eAhfMqnqkRn'
            },
            { 
                label: 'Quiero difuminar rojeces, imperfecciones y manchas', 
                value: 'imperfections',
                imageUrl: 'https://images.typeform.com/images/N2zTVNprjdZG'
            },
            { 
                label: 'Me gustaría conseguir una piel mate', 
                value: 'oil-free',
                imageUrl: 'https://images.typeform.com/images/hM5cE8C4VmhE'
            }
        ]
    },
    {
        id: 'skin-type',
        title: '2/5 ¿Cuál es tu tipo de piel?',
        description: 'Esto nos ayudará a elegir la fórmula perfecta para ti.',
        options: [
            { label: 'Piel Seca', value: 'dry' },
            { label: 'Piel Mixta', value: 'combination' },
            { label: 'Piel Grasa', value: 'oily' },
            { label: 'Piel Sensible', value: 'sensitive' }
        ]
    },
    {
        id: 'finish',
        title: '3/5 ¿Qué acabado prefieres?',
        description: 'La textura final es clave para tu comodidad.',
        options: [
            { label: 'Mate Natural', value: 'mate' },
            { label: 'Luminoso / Glow', value: 'glow' },
            { label: 'Satinado', value: 'satin' }
        ]
    }
];

const FoundationFinderPage: React.FC = () => {
    const [step, setStep] = useState<'welcome' | 'quiz' | 'result'>('welcome');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});

    const handleStart = () => setStep('quiz');

    const handleOptionSelect = (value: string) => {
        const question = questions[currentQuestionIndex];
        setAnswers({ ...answers, [question.id]: value });

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setStep('result');
        }
    };

    const handleReset = () => {
        setStep('welcome');
        setCurrentQuestionIndex(0);
        setAnswers({});
    };

    if (step === 'welcome') {
        return (
            <div className="min-h-screen bg-black text-white flex flex-col md:flex-row animate-fade-in">
                <div className="md:w-1/2 h-[40vh] md:h-screen relative overflow-hidden">
                    <img 
                        src="https://images.typeform.com/images/CNpNdfkWvZsn/background/large" 
                        alt="Encuentra tu base" 
                        className="w-full h-full object-cover animate-ken-burns"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent md:bg-gradient-to-t md:from-black/40"></div>
                </div>

                <div className="md:w-1/2 flex items-center justify-center p-8 md:p-24 bg-zinc-950 border-l border-white/5">
                    <div className="max-w-xl space-y-12">
                        <div className="space-y-4">
                            <span className="text-[#E29CD2] text-[11px] font-black tracking-[0.6em] uppercase block">Bella Perfumería Exclusive</span>
                            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-none">
                                ENCUENTRA TU <br/>
                                <span className="text-[#E29CD2]">BASE DE MAQUILLAJE</span>
                            </h1>
                        </div>

                        <div className="space-y-6 text-gray-300 font-medium leading-relaxed tracking-wide">
                            <p className="text-xl italic font-black text-white">¡Encuentra el maquillaje que potencie la belleza de tu piel!</p>
                            <p className="text-sm uppercase tracking-widest text-gray-400">
                                ¿No sabes qué base de maquillaje le va bien a tu piel? No te preocupes, nosotros te ayudamos. 
                                Este test te ayudará a encontrar la perfecta en un abrir y cerrar de ojos.
                            </p>
                        </div>

                        <div className="pt-8">
                            <button 
                                onClick={handleStart}
                                className="group relative px-16 py-6 bg-white text-black font-black text-[12px] tracking-[0.5em] uppercase overflow-hidden transition-all hover:text-white"
                            >
                                <span className="relative z-10">Comenzar Cuestionario</span>
                                <div className="absolute inset-0 bg-[#E29CD2] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (step === 'quiz') {
        const currentQuestion = questions[currentQuestionIndex];
        const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
        const hasImages = currentQuestion.options.some(opt => opt.imageUrl);

        return (
            <div className="min-h-screen bg-black text-white flex flex-col p-6 md:p-12 animate-fade-in overflow-y-auto">
                <div className="w-full max-w-6xl mx-auto space-y-12 py-10">
                    {/* Header & Progress */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-12">
                        <div className="space-y-4 max-w-2xl">
                            <span className="text-[#E29CD2] text-[10px] font-black tracking-[0.4em] uppercase block">Bella AI Advisor</span>
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic leading-none text-white">
                                {currentQuestion.title}
                            </h2>
                            <p className="text-gray-500 text-lg italic">{currentQuestion.description}</p>
                        </div>
                        <div className="w-full md:w-64 space-y-3">
                            <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                                <span>Progreso</span>
                                <span>{Math.round(progress)}%</span>
                            </div>
                            <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
                                <div className="h-full bg-[#E29CD2] transition-all duration-700 ease-out" style={{ width: `${progress}%` }}></div>
                            </div>
                        </div>
                    </div>

                    {/* Grid of Options */}
                    <div className={`grid gap-6 ${hasImages ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
                        {currentQuestion.options.map((option, idx) => (
                            <button
                                key={option.value}
                                onClick={() => handleOptionSelect(option.value)}
                                className={`group relative flex flex-col bg-zinc-950 border border-white/5 hover:border-[#E29CD2] transition-all duration-500 overflow-hidden text-left rounded-sm ${hasImages ? 'aspect-[4/5]' : 'p-8'}`}
                            >
                                {option.imageUrl && (
                                    <div className="flex-grow overflow-hidden relative">
                                        <img 
                                            src={option.imageUrl} 
                                            alt={option.label} 
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                                    </div>
                                )}
                                <div className={`p-6 bg-zinc-950 relative z-10 flex items-start gap-4 ${hasImages ? 'border-t border-white/5' : ''}`}>
                                    <span className="bg-[#E29CD2] text-black font-black text-[10px] w-6 h-6 rounded-full flex items-center justify-center shrink-0">
                                        {String.fromCharCode(65 + idx)}
                                    </span>
                                    <span className="text-[12px] font-black uppercase tracking-widest leading-relaxed">
                                        {option.label}
                                    </span>
                                </div>
                                <div className="absolute inset-0 bg-[#E29CD2] opacity-0 group-hover:opacity-5 transition-opacity"></div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center animate-fade-in">
            <div className="max-w-2xl space-y-12">
                <div className="space-y-4">
                    <div className="w-24 h-24 bg-[#E29CD2]/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-[#E29CD2]/30">
                        <svg className="w-12 h-12 text-[#E29CD2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-none">
                        RESULTADO <br/><span className="text-[#E29CD2]">PREPARADO</span>
                    </h2>
                </div>
                <p className="text-gray-400 text-lg uppercase tracking-widest leading-loose">
                    Nuestra inteligencia artificial ha analizado tus preferencias. <br/>
                    <span className="text-[#E29CD2] mt-6 block italic font-black text-2xl uppercase tracking-tighter">Bases Seleccionadas para ti</span>
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                    <button 
                        onClick={() => window.location.href = 'https://vellaperfumeria.com'}
                        className="px-16 py-6 bg-white text-black font-black text-[12px] tracking-[0.4em] uppercase hover:bg-[#E29CD2] hover:text-white transition-all shadow-2xl"
                    >
                        Ver Recomendación
                    </button>
                    <button 
                        onClick={handleReset}
                        className="px-16 py-6 border border-zinc-800 text-gray-500 font-black text-[12px] tracking-[0.4em] uppercase hover:text-white hover:border-white transition-all"
                    >
                        Repetir Test
                    </button>
                </div>
            </div>

            <style>{`
                @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
                @keyframes ken-burns { 0% { transform: scale(1); } 100% { transform: scale(1.1); } }
                .animate-fade-in { animation: fade-in 1s ease-out forwards; }
                .animate-ken-burns { animation: ken-burns 30s ease-out infinite alternate; }
            `}</style>
        </div>
    );
};

export default FoundationFinderPage;
