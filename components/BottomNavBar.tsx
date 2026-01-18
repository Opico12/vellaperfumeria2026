
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
    external?: string;
}

const BottomNavBar: React.FC<BottomNavBarProps> = ({ onNavigate, currentView, currentCategory }) => {
    
    const navItems: NavItem[] = [
        { view: 'home', label: 'Inicio', icon: HomeIcon, external: 'https://bellaboriifflame.com' },
        { view: 'catalog', label: 'Catálogo', icon: CatalogIcon },
        { view: 'products', label: 'Tienda', icon: ShopIcon, payload: 'all' },
        { view: 'ia', label: 'IA Advisor', icon: IAIcon },
    ];

    return (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-black border-t border-white/10 shadow-[0_-10px_30px_rgba(0,0,0,0.9)] z-[200] h-20">
            <nav className="flex items-center h-full justify-around px-4">
                {navItems.map((item, idx) => {
                    const isActive = item.payload 
                        ? (currentView === 'products' && currentCategory === item.payload)
                        : currentView === item.view;
                        
                    const Icon = item.icon;

                    return (
                        <button
                            key={`${item.label}-${idx}`}
                            onClick={() => item.external ? window.location.href = item.external : onNavigate(item.view, item.payload)}
                            className={`flex flex-col items-center justify-center transition-all duration-300 ${
                                isActive ? 'text-pink-300' : 'text-gray-400'
                            }`}
                        >
                            <Icon isActive={isActive} />
                            <span className={`text-[8px] font-black uppercase tracking-widest mt-1`}>
                                {item.label}
                            </span>
                        </button>
                    )
                })}
            </nav>
        </div>
    );
};

export default BottomNavBar;
