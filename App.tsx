
import React, { useState, useEffect, useCallback } from 'react';
// Types
import type { View, Product, CartItem } from './types';
import type { Currency } from './currency';
import { blogPosts } from './components/blogData';
// Components
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import ShopPage from './components/ShopPage';
import ProductDetailPage from './components/ProductDetailPage';
import CartSidebar from './components/CartSidebar';
import OfertasPage from './components/OfertasPage';
import RegalosPage from './components/RegalosPage';
import SkinDiagnosticPage from './components/SkinDiagnosticPage';
import AsistenteIAPage from './components/AsistenteIAPage';
import CatalogPage from './components/CatalogPage';
import BlogPage from './components/BlogPage';
import BlogPostPage from './components/BlogPostPage';
import QuickViewModal from './components/QuickViewModal';
import CheckoutPage from './components/CheckoutPage';
import BottomNavBar from './components/BottomNavBar';

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

    const orchidPink = "#FAE1EF";

    useEffect(() => {
        try {
            const storedCart = localStorage.getItem('vellaperfumeria_cart');
            if (storedCart) setCartItems(JSON.parse(storedCart));
        } catch (error) { console.error(error); }
    }, []);

    useEffect(() => {
        try { localStorage.setItem('vellaperfumeria_cart', JSON.stringify(cartItems)); }
        catch (error) { console.error(error); }
    }, [cartItems]);
    
    useEffect(() => { window.scrollTo(0, 0); }, [view]);

    const handleNavigate = useCallback((newView: View, payload?: any) => {
        setView({ current: newView, payload });
    }, []);

    const handleProductSelect = (product: Product) => handleNavigate('productDetail', product);

    const handleAddToCart = useCallback((product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => {
        const cartItemId = selectedVariant 
            ? `${product.id}-${Object.values(selectedVariant).join('-')}`
            : `${product.id}`;
        const existingItem = cartItems.find(item => item.id === cartItemId);
        if (existingItem) {
            setCartItems(cartItems.map(item => item.id === cartItemId ? { ...item, quantity: item.quantity + 1 } : item));
        } else {
            setCartItems([...cartItems, { id: cartItemId, product, quantity: 1, selectedVariant }]);
        }
        setIsCartOpen(true);
    }, [cartItems]);

    const renderContent = () => {
        switch (view.current) {
            case 'home': return <ProductList onNavigate={handleNavigate} onProductSelect={handleProductSelect} onAddToCart={handleAddToCart} onQuickAddToCart={handleAddToCart} currency={currency} onQuickView={setQuickViewProduct} />;
            case 'products': return <ShopPage initialCategory={view.payload || 'all'} currency={currency} onAddToCart={handleAddToCart} onQuickAddToCart={handleAddToCart} onProductSelect={handleProductSelect} onQuickView={setQuickViewProduct} />;
            case 'productDetail': return <ProductDetailPage product={view.payload} currency={currency} onAddToCart={handleAddToCart} onQuickAddToCart={handleAddToCart} onProductSelect={handleProductSelect} onQuickView={setQuickViewProduct} />;
            case 'ofertas': return <OfertasPage currency={currency} onAddToCart={handleAddToCart} onQuickAddToCart={handleAddToCart} onProductSelect={handleProductSelect} onQuickView={setQuickViewProduct} />;
            case 'regalos': return <RegalosPage onNavigate={handleNavigate} onProductSelect={handleProductSelect} onAddToCart={handleAddToCart} onQuickAddToCart={handleAddToCart} currency={currency} onQuickView={setQuickViewProduct} />;
            case 'skinDiagnostic': return <SkinDiagnosticPage />;
            case 'ia': return <AsistenteIAPage />;
            case 'catalog': return <CatalogPage />;
            case 'blog': return <BlogPage posts={blogPosts} onSelectPost={(p) => handleNavigate('blogPost', p)} />;
            case 'blogPost': return <BlogPostPage post={view.payload} allPosts={blogPosts} onSelectPost={(p) => handleNavigate('blogPost', p)} onBack={() => handleNavigate('blog')} />;
            case 'checkout': return <CheckoutPage cartItems={cartItems} currency={currency} onClearCart={() => setCartItems([])} onNavigate={handleNavigate} />;
            default: return <ProductList onNavigate={handleNavigate} onProductSelect={handleProductSelect} onAddToCart={handleAddToCart} onQuickAddToCart={handleAddToCart} currency={currency} onQuickView={setQuickViewProduct} />;
        }
    };

    const isCatalogView = view.current === 'catalog';

    return (
        <div className="flex flex-col min-h-screen bg-white font-sans selection:bg-[#FAE1EF] selection:text-black">
            <Header
                onNavigate={handleNavigate}
                currency={currency}
                onCurrencyChange={setCurrency}
                cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                onCartClick={() => setIsCartOpen(true)}
            />
            
             <main className={`flex-grow relative ${isCatalogView ? 'h-screen overflow-hidden pt-[140px] md:pt-[190px]' : 'pt-[140px] md:pt-[210px] pb-20 md:pb-8'}`}>
                {renderContent()}

                <aside className="fixed bottom-20 md:bottom-8 right-6 md:right-8 z-[60] flex flex-col gap-5 items-end">
                    <a href="https://wa.me/34661202616" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform"><WhatsAppIcon /></a>
                    <button onClick={() => handleNavigate('ia')} className="bg-black text-white px-8 py-4 rounded-full shadow-lg flex items-center gap-4 hover:-translate-y-2 transition-transform border border-white/10">
                        <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: orchidPink }}></span>
                        <span className="text-[10px] font-black tracking-widest uppercase">Beauty AI</span>
                    </button>
                </aside>
            </main>
            
            {!isCatalogView && <Footer onNavigate={handleNavigate} />}

            <BottomNavBar 
                onNavigate={handleNavigate} 
                currentView={view.current} 
                currentCategory={view.payload || 'all'} 
            />

            <CartSidebar 
                isOpen={isCartOpen} 
                onClose={() => setIsCartOpen(false)} 
                cartItems={cartItems} 
                currency={currency} 
                onUpdateQuantity={(id, q) => setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity: q } : item))} 
                onRemoveItem={(id) => setCartItems(prev => prev.filter(i => i.id !== id))} 
                onCheckout={() => { setIsCartOpen(false); handleNavigate('checkout'); }} 
                isCheckingOut={false} 
                checkoutError={null} 
                onNavigate={handleNavigate} 
                onAddToCart={handleAddToCart}
            />

            {quickViewProduct && <QuickViewModal product={quickViewProduct} currency={currency} onClose={() => setQuickViewProduct(null)} onAddToCart={handleAddToCart} onProductSelect={handleProductSelect} />}
        </div>
    );
};

export default App;
