
import React from 'react';
import type { View } from './types';

// Icons
const HomeIcon = ({ isActive }: { isActive: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={isActive ? 2.5 : 1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
);

const ShopIcon = ({ isActive }: { isActive: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={isActive ? 2.5 : 1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
);

const GiftIcon = ({ isActive }: { isActive: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={isActive ? 2.5 : 1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 012-2h2a2 2 0 012 2v2m-6 0h6m-6 0a2 2 0 00-2 2v11a2 2 0 002 2h6a2 2 0 002-2V10a2 2 0 00-2-2h-6z" />
    </svg>
);

const CatalogIcon = ({ isActive }: { isActive: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={isActive ? 2.5 : 1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
);

const IAIcon = ({ isActive }: { isActive: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={isActive ? 2.5 : 1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);

interface BottomNavBarProps {
    onNavigate: (view: View, payload?: any) => void;
    currentView: View;
    currentCategory: string;
}

interface NavItem {
    view: View;
    label: string;
    icon: React.FC<{ isActive: boolean }>;
    payload?: any;
}

const BottomNavBar: React.FC<BottomNavBarProps> = ({ onNavigate, currentView, currentCategory }) => {
    
    const navItems: NavItem[] = [
        { view: 'home', label: 'Inicio', icon: HomeIcon },
        { view: 'products', label: 'Tienda', icon: ShopIcon, payload: 'all' },
        { view: 'ofertas', label: 'Ofertas', icon: GiftIcon },
        { view: 'products', label: 'Facial', icon: CatalogIcon, payload: 'skincare' },
        { view: 'products', label: 'Maquillaje', icon: CatalogIcon, payload: 'makeup' },
        { view: 'products', label: 'Fragancias', icon: CatalogIcon, payload: 'perfume' },
        { view: 'products', label: 'Cuerpo', icon: CatalogIcon, payload: 'personal-care' },
        { view: 'products', label: 'Capilar', icon: CatalogIcon, payload: 'hair' },
        { view: 'catalog', label: 'Digital', icon: CatalogIcon },
        { view: 'ia', label: 'Asistente', icon: IAIcon },
    ];

    return (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-black border-t border-white/5 shadow-[0_-10px_30px_rgba(0,0,0,0.8)] z-[200] h-20">
            <nav className="flex items-center h-full overflow-x-auto no-scrollbar scroll-smooth px-4">
                <div className="flex items-center gap-1 min-w-max">
                    {navItems.map((item, idx) => {
                        const isActive = item.payload 
                            ? (currentView === 'products' && currentCategory === item.payload)
                            : currentView === item.view;
                            
                        const Icon = item.icon;

                        return (
                            <button
                                key={`${item.label}-${idx}`}
                                onClick={() => onNavigate(item.view, item.payload)}
                                className={`flex flex-col items-center justify-center w-[85px] h-20 transition-all duration-300 relative ${
                                    isActive ? 'text-[#FAE1EF]' : 'text-gray-500'
                                }`}
                                aria-label={item.label}
                            >
                                <div className={`p-2 rounded-2xl transition-all ${isActive ? 'bg-white/10 scale-110' : ''}`}>
                                    <Icon isActive={isActive} />
                                </div>
                                <span className={`text-[8px] font-black uppercase tracking-[0.15em] mt-1 ${isActive ? 'opacity-100' : 'opacity-60'}`}>
                                    {item.label}
                                </span>
                                {isActive && (
                                    <div className="absolute bottom-1 w-1 h-1 bg-[#FAE1EF] rounded-full animate-pulse shadow-[0_0_8px_#FAE1EF]"></div>
                                )}
                            </button>
                        )
                    })}
                </div>
            </nav>
            <style>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                .pb-safe { padding-bottom: env(safe-area-inset-bottom); }
            `}</style>
        </div>
    );
};

export default BottomNavBar;
