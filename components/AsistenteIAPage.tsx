
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

interface Message {
    role: 'user' | 'model';
    text: string;
}

const SparklesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m1-9l2-2 2 2m-2 4v6m2-6l2 2-2 2M15 3l2 2-2 2m-2-4v4m2 4l2 2-2 2m-8 4h12" />
    </svg>
);

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);


const AsistenteIAPage: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [chat, setChat] = useState<any>(null);

    const chatContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        try {
            if (process.env.API_KEY) {
                const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
                const newChat = ai.chats.create({
                    model: 'gemini-3-flash-preview',
                    config: {
                        systemInstruction: 'Eres un asesor de belleza personal y experto en cosmética para la boutique online "Bella Perfumería". Tu objetivo es ayudar a los clientes a encontrar la fragancia perfecta, asesorar sobre rutinas de cuidado facial Novage+, maquillaje y bienestar. Sé amable, sofisticado y conocedor de los productos Oriflame. Céntrate exclusivamente en el catálogo de Bella Perfumería y la Campaña 1 de 2026.',
                    },
                });
                setChat(newChat);
            } else {
                setError("Clave de API no disponible.");
            }
        } catch (e) {
            console.error("Error initializing Gemini:", e);
            setError("No se pudo inicializar el asistente de belleza.");
        }
    }, []);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages, isProcessing]);

    const handleSendMessage = async (messageText: string) => {
        if (!messageText.trim() || isProcessing || !chat) {
            return;
        }

        const userMessage: Message = { role: 'user', text: messageText };
        setMessages(prev => [...prev, userMessage, { role: 'model', text: '' }]);
        setInput('');
        setIsProcessing(true);
        setError(null);

        try {
            const responseStream = await chat.sendMessageStream({ message: messageText });

            for await (const chunk of responseStream) {
                const c = chunk as GenerateContentResponse;
                const chunkText = c.text;
                if (chunkText) {
                    setMessages(prev => {
                        const newMessages = [...prev];
                        const lastMessage = newMessages[newMessages.length - 1];
                        lastMessage.text += chunkText;
                        return newMessages;
                    });
                }
            }
        } catch (e) {
            console.error("Error sending message to Gemini:", e);
            const errorMessage = "Lo siento, ha ocurrido un error al procesar tu solicitud.";
            setError(errorMessage);
            setMessages(prev => {
                const newMessages = [...prev];
                const lastMessage = newMessages[newMessages.length - 1];
                lastMessage.text = errorMessage;
                return newMessages;
            });
        } finally {
            setIsProcessing(false);
        }
    };
    
    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleSendMessage(input);
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-extrabold text-black tracking-tight uppercase italic leading-none">Asistente de Belleza <br/><span className="text-pink-600">INTELIGENTE</span></h1>
                <p className="mt-4 text-lg text-gray-400 italic font-light uppercase tracking-widest">Asesoría personalizada en cosmética y bienestar.</p>
            </div>

            <div className="max-w-2xl mx-auto bg-white rounded-sm shadow-2xl border border-gray-100 flex flex-col h-[60vh] overflow-hidden">
                <div ref={chatContainerRef} className="flex-grow p-8 overflow-y-auto space-y-8 no-scrollbar">
                    {messages.length === 0 && !isProcessing && (
                         <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center">
                                <SparklesIcon />
                            </div>
                            <div className="max-w-md p-6 rounded-2xl bg-pink-50 text-black rounded-tl-none border border-pink-100 shadow-sm">
                                <p className="text-sm italic">"Bienvenido a Bella Perfumería. Soy su asesor de belleza digital. ¿En qué puedo asistirle hoy?"</p>
                            </div>
                        </div>
                    )}

                    {messages.map((msg, index) => {
                        const isLastMessage = index === messages.length - 1;
                        return (
                            <div key={index} className={`flex items-start gap-4 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                                 {msg.role === 'model' && (
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center">
                                        <SparklesIcon />
                                    </div>
                                )}
                                <div className={`max-w-md p-6 rounded-2xl ${msg.role === 'user' ? 'bg-black text-white rounded-tr-none' : 'bg-gray-50 text-black rounded-tl-none'}`}>
                                     {isProcessing && isLastMessage && msg.text === '' ? (
                                         <div className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
                                            <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse [animation-delay:0.2s]"></div>
                                            <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse [animation-delay:0.4s]"></div>
                                        </div>
                                    ) : (
                                         <p className="whitespace-pre-wrap text-sm leading-relaxed">{msg.text}</p>
                                    )}
                                </div>
                                {msg.role === 'user' && (
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                                        <UserIcon />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                    {error && <div className="p-4 bg-red-50 text-red-600 text-[10px] font-black uppercase text-center">{error}</div>}
                </div>

                <div className="p-6 border-t bg-white">
                    <form onSubmit={handleFormSubmit} className="flex items-center gap-4">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Consulte sus dudas de belleza aquí..."
                            className="flex-grow px-6 py-4 border border-gray-100 rounded-sm focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm italic"
                            disabled={isProcessing}
                        />
                        <button 
                            type="submit" 
                            disabled={isProcessing || !input.trim()}
                            className="bg-black text-white font-black rounded-sm px-8 py-4 shadow-xl hover:bg-pink-600 transition-colors disabled:bg-gray-100 uppercase text-[10px] tracking-widest"
                        >
                            ENVIAR
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AsistenteIAPage;
