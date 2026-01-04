
import React, { useState, useEffect, useCallback } from 'react';
// Types
import type { View, Product, CartItem } from './components/types';
import type { Currency } from './components/currency';
import { blogPosts } from './components/blogData';
// Components
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import ShopPage from './components/ShopPage';
import ProductDetailPage from './components/ProductDetailPage';
import CartSidebar from './components/CartSidebar';
import OfertasPage from './components/OfertasPage';
import AsistenteIAPage from './components/AsistenteIAPage';
import CatalogPage from './components/CatalogPage';
import BlogPage from './components/BlogPage';
import BlogPostPage from './components/BlogPostPage';
import QuickViewModal from './components/QuickViewModal';
import Breadcrumbs, { type BreadcrumbItem } from './components/Breadcrumbs';
import CheckoutPage from './components/CheckoutPage';

type AppView = {
    current: View;
    payload?: any;
};

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.919 6.066l-1.475 5.422 5.571-1.469z" />
    </svg>
);

const App: React.FC = () => {
    const [view, setView] = useState<AppView>({ current: 'home' });
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [currency, setCurrency] = useState<Currency>('EUR');
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

    // Color Global: Rosa Pétalo Intenso (#FBB9D2)
    const orchidPink = "#FBB9D2";

    useEffect(() => {
        try {
            const storedCart = localStorage.getItem('vellaperfumeria_cart');
            if (storedCart) {
                setCartItems(JSON.parse(storedCart));
            }
        } catch (error) {
            console.error("Failed to load cart from localStorage", error);
        }
    }, []);

    useEffect(() => {
        try {
            localStorage.setItem('vellaperfumeria_cart', JSON.stringify(cartItems));
        } catch (error) {
            console.error("Failed to save cart to localStorage", error);
        }
    }, [cartItems]);
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [view]);

    const handleNavigate = useCallback((newView: View, payload?: any) => {
        setView({ current: newView, payload });
    }, []);

    const handleProductSelect = (product: Product) => {
        handleNavigate('productDetail', product);
    };

    const handleAddToCart = (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => {
        const cartItemId = selectedVariant 
            ? `${product.id}-${Object.values(selectedVariant).join('-')}`
            : `${product.id}`;
            
        const existingItem = cartItems.find(item => item.id === cartItemId);

        if (existingItem) {
            setCartItems(cartItems.map(item =>
                item.id === cartItemId ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCartItems([...cartItems, { id: cartItemId, product, quantity: 1, selectedVariant }]);
        }
        
        setIsCartOpen(true);
    };
    
    const handleQuickAddToCart = (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => {
        handleAddToCart(product, buttonElement, selectedVariant);
        if (!isCartOpen) setIsCartOpen(true);
    };

    const handleUpdateQuantity = (cartItemId: string, newQuantity: number) => {
        if (newQuantity <= 0) {
            handleRemoveItem(cartItemId);
        } else {
            setCartItems(cartItems.map(item =>
                item.id === cartItemId ? { ...item, quantity: newQuantity } : item
            ));
        }
    };

    const handleRemoveItem = (cartItemId: string) => {
        setCartItems(cartItems.filter(item => item.id !== cartItemId));
    };

    const handleClearCart = () => {
        setCartItems([]);
    };

    const handleCheckout = () => {
        setIsCartOpen(false);
        handleNavigate('checkout');
    };

    const handleSelectPost = (post: any) => {
        handleNavigate('blogPost', post);
    };

    const renderContent = () => {
        switch (view.current) {
            case 'home':
                return <ProductList onNavigate={handleNavigate} onProductSelect={handleProductSelect} onAddToCart={handleAddToCart} onQuickAddToCart={handleQuickAddToCart} currency={currency} onQuickView={setQuickViewProduct} />;
            case 'products':
                return <ShopPage initialCategory={view.payload || 'all'} currency={currency} onAddToCart={handleAddToCart} onQuickAddToCart={handleQuickAddToCart} onProductSelect={handleProductSelect} onQuickView={setQuickViewProduct} />;
            case 'productDetail':
                return <ProductDetailPage product={view.payload} currency={currency} onAddToCart={handleAddToCart} onQuickAddToCart={handleQuickAddToCart} onProductSelect={handleProductSelect} onQuickView={setQuickViewProduct} />;
            case 'ofertas':
                return <OfertasPage currency={currency} onAddToCart={handleAddToCart} onQuickAddToCart={handleQuickAddToCart} onProductSelect={handleProductSelect} onQuickView={setQuickViewProduct} />;
            case 'ia':
                return <AsistenteIAPage />;
            case 'catalog':
                return <CatalogPage onAddToCart={handleAddToCart} onQuickAddToCart={handleQuickAddToCart} onProductSelect={handleProductSelect} onQuickView={setQuickViewProduct} currency={currency} />;
            case 'blog':
                 return <BlogPage posts={blogPosts} onSelectPost={handleSelectPost} />;
            case 'blogPost':
                 return <BlogPostPage post={view.payload} allPosts={blogPosts} onSelectPost={handleSelectPost} onBack={() => handleNavigate('blog')} />;
            case 'checkout':
                return <CheckoutPage cartItems={cartItems} currency={currency} onClearCart={handleClearCart} onNavigate={handleNavigate} />;
            default:
                return <ProductList onNavigate={handleNavigate} onProductSelect={handleProductSelect} onAddToCart={handleAddToCart} onQuickAddToCart={handleQuickAddToCart} currency={currency} onQuickView={setQuickViewProduct} />;
        }
    };
    
    const buildBreadcrumbs = (): BreadcrumbItem[] => {
        if (view.current === 'catalog') return []; 
        const homeCrumb: BreadcrumbItem = { label: 'Inicio', onClick: () => handleNavigate('home') };
        const crumbs = [homeCrumb];

        switch(view.current) {
            case 'products':
                crumbs.push({ label: 'Store', onClick: () => handleNavigate('products', 'all') });
                if (view.payload && view.payload !== 'all') {
                    crumbs.push({ label: view.payload });
                }
                break;
            case 'productDetail':
                crumbs.push({ label: 'Colección', onClick: () => handleNavigate('products', 'all') });
                crumbs.push({ label: (view.payload as Product).name });
                break;
            case 'ofertas':
                crumbs.push({ label: 'Privée Sales' });
                break;
             case 'ia':
                crumbs.push({ label: 'Beauty Concierge' });
                break;
        }
        return crumbs;
    };

    const isCatalogView = view.current === 'catalog';

    return (
        <div className="flex flex-col min-h-screen bg-white font-sans selection:bg-[#FBB9D2] selection:text-black">
            <Header
                onNavigate={handleNavigate}
                currency={currency}
                onCurrencyChange={setCurrency}
                cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                onCartClick={() => setIsCartOpen(true)}
            />
             <main className={`flex-grow relative ${isCatalogView ? 'py-0 h-[calc(100vh-140px)] md:h-[calc(100vh-180px)] overflow-hidden' : 'py-8'}`}>
                {!isCatalogView && <Breadcrumbs items={buildBreadcrumbs()} />}
                {renderContent()}

                {/* Botones Flotantes */}
                <aside className="fixed bottom-8 right-8 z-[60] flex flex-col gap-5 items-end">
                    {/* Botón WhatsApp Flotante */}
                    <a 
                        href="https://wa.me/34661202616?text=Hola,%20me%20gustaría%20realizar%20una%20consulta."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#25D366] text-white p-4 rounded-full shadow-[0_20px_40px_rgba(37,211,102,0.5)] flex items-center justify-center hover:scale-110 transition-all duration-300 transform active:scale-95"
                    >
                        <WhatsAppIcon />
                    </a>

                    {/* Botón de Chat AI */}
                    <button 
                        onClick={() => handleNavigate('ia')}
                        className="bg-black text-white px-8 py-4 rounded-full shadow-[0_25px_50px_rgba(0,0,0,0.5)] flex items-center gap-4 hover:opacity-80 transition-all transform hover:-translate-y-2 group border border-gray-800"
                    >
                        <div className="relative">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.805 15.881q-.14.27-.266.523c-.192.428-.14.768.071 1.052.237.319.723.63 1.513.83a.5.5 0 0 1 .036.96c-.706.237-1.412.33-2.153.185-.653-.127-1.301-.432-1.978-.928a7.2 7.2 0 0 1-3.24.769c-4.032 0-7.288-3.314-7.288-7.386C4.5 7.813 7.756 4.5 11.788 4.5s7.288 3.313 7.288 7.386c0 1.53-.69 2.868-1.271 3.995"></path></svg>
                            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full animate-pulse shadow-[0_0_10px_rgba(251,185,210,1)]" style={{ backgroundColor: orchidPink }}></span>
                        </div>
                        <span className="text-[10px] font-black tracking-[0.3em] uppercase">Beauty AI</span>
                    </button>
                </aside>
            </main>
            
            {!isCatalogView && <Footer onNavigate={handleNavigate} />}

            <CartSidebar
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                cartItems={cartItems}
                currency={currency}
                onUpdateQuantity={handleUpdateQuantity}
                onRemoveItem={handleRemoveItem}
                onCheckout={handleCheckout}
                isCheckingOut={false}
                checkoutError={null}
                onNavigate={handleNavigate}
            />

            {quickViewProduct && (
                <QuickViewModal
                    product={quickViewProduct}
                    currency={currency}
                    onClose={() => setQuickViewProduct(null)}
                    onAddToCart={handleAddToCart}
                    onProductSelect={(p) => {
                        setQuickViewProduct(null);
                        handleProductSelect(p);
                    }}
                />
            )}
            
            <style>{`
                @keyframes pop {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                    100% { transform: scale(1); }
                }
                .animate-pop {
                    animation: pop 0.3s ease-out;
                }
                :root {
                    --color-primary: #000000;
                    --color-accent: ${orchidPink};
                }
                body {
                    background-color: #ffffff;
                }
                ::selection {
                    background: ${orchidPink};
                    color: black;
                }
            `}</style>
        </div>
    );
};

export default App;
