
import React from 'react';

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.919 6.066l-1.475 5.422 5.571-1.469z" />
    </svg>
);

const ContactPage: React.FC = () => {
    return (
        <div className="bg-white min-h-screen animate-fade-in font-sans">
            {/* Cabecera de Sección */}
            <div className="container mx-auto px-6 py-20 text-center">
                <span className="text-pink-600 text-[11px] font-black tracking-[0.8em] uppercase mb-6 block">ATENCIÓN EXCLUSIVA</span>
                <h1 className="text-5xl md:text-8xl font-black text-black tracking-tighter uppercase italic leading-none mb-12">
                    Hablemos de <br/> <span className="text-pink-600">Belleza</span>
                </h1>
                <div className="w-24 h-[1px] bg-black/10 mx-auto"></div>
            </div>

            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-24 items-start pb-32">
                    {/* Información de Contacto */}
                    <div className="space-y-16">
                        <div className="border-l-4 border-black pl-8">
                            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-gray-400 mb-6">Nuestros Canales</h3>
                            <div className="space-y-10">
                                <div>
                                    <p className="text-[10px] font-black uppercase text-pink-600 tracking-widest mb-1">Teléfono & WhatsApp</p>
                                    <a href="tel:+34661202616" className="text-3xl font-black tracking-tighter hover:text-pink-600 transition-colors">+34 661 202 616</a>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase text-pink-600 tracking-widest mb-1">Correo Electrónico</p>
                                    <a href="mailto:info@vellaperfumeria.com" className="text-3xl font-black tracking-tighter hover:text-pink-600 transition-colors">info@vellaperfumeria.com</a>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase text-pink-600 tracking-widest mb-1">Redes Sociales</p>
                                    <p className="text-3xl font-black tracking-tighter">@vellaperfumeria</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-12 rounded-sm border border-gray-100">
                            <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-6">¿Eres Cliente VIP?</h4>
                            <p className="text-gray-500 font-light italic leading-loose text-sm mb-10">
                                Si necesitas asesoramiento directo para tu pedido o quieres conocer las ofertas exclusivas de este catálogo, nuestro equipo de Brand Partners está disponible para una consultoría personalizada vía WhatsApp.
                            </p>
                            <a 
                                href="https://wa.me/34661202616" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-4 bg-[#25D366] text-white px-10 py-5 text-[10px] font-black uppercase tracking-widest hover:opacity-90 transition-all shadow-xl"
                            >
                                <WhatsAppIcon />
                                Chatear Ahora
                            </a>
                        </div>
                    </div>

                    {/* Formulario Estético */}
                    <div className="bg-white p-12 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-gray-50">
                        <h3 className="text-2xl font-black uppercase tracking-tighter italic mb-10">Envíanos un <span className="text-pink-600">mensaje</span></h3>
                        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[9px] font-black uppercase tracking-widest text-gray-400">Nombre Completo</label>
                                    <input type="text" className="w-full border-b border-gray-200 py-3 focus:border-pink-500 outline-none transition-colors" placeholder="Tu nombre..." />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[9px] font-black uppercase tracking-widest text-gray-400">Email</label>
                                    <input type="email" className="w-full border-b border-gray-200 py-3 focus:border-pink-500 outline-none transition-colors" placeholder="ejemplo@correo.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[9px] font-black uppercase tracking-widest text-gray-400">Asunto</label>
                                <select className="w-full border-b border-gray-200 py-3 focus:border-pink-500 outline-none transition-colors bg-transparent">
                                    <option>Asesoramiento de Producto</option>
                                    <option>Estado de mi Pedido</option>
                                    <option>Problemas Técnicos</option>
                                    <option>Otros</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[9px] font-black uppercase tracking-widest text-gray-400">Mensaje</label>
                                <textarea className="w-full border-b border-gray-200 py-3 focus:border-pink-500 outline-none transition-colors h-32 resize-none" placeholder="¿Cómo podemos ayudarte?"></textarea>
                            </div>
                            <button className="w-full bg-black text-white py-6 text-[10px] font-black uppercase tracking-[0.5em] hover:bg-pink-600 transition-all shadow-2xl">
                                Enviar Solicitud
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
