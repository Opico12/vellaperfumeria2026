
// Variant types, used in Product
export interface VariantOption {
    value: string;
    colorCode?: string;
    imageUrl?: string;
    variationId?: number;
}

export interface ProductVariants {
    [key: string]: VariantOption[];
}

// Product type
export interface Product {
    id: number;
    name: string;
    brand: string;
    price: number;
    regularPrice?: number;
    imageUrl: string;
    description: string;
    howToUse?: string;
    stock: number;
    category: 'perfume' | 'hair' | 'makeup' | 'skincare' | 'personal-care' | 'men' | 'wellness' | 'accessories';
    subCategory?: 'Giordani Gold' | 'THE ONE' | 'OnColour' | 'Novage' | 'Novage+' | 'Royal Velvet' | 'Diamond Cellular' | 'Duologi' | 'Optimals' | 'BiolageStyle' | 'Oriflame' | 'Divine' | 'Milk & Honey Gold' | 'North for Men' | 'Crema Universal' | 'Be the Legend' | 'Love Potion' | 'Amber Elixir' | 'Arctic Ritual' | 'Wonder Tale' | 'Winter\'s Embrace' | 'Magical Midnights' | 'Wild Wood';
    productType?: 'Base' | 'Corrector' | 'Máscara' | 'Colorete y Bronceador' | 'Labial' | 'Accesorio' | 'Cremas BB y CC' | 'Sérum' | 'Crema Noche' | 'Limpiador' | 'Cofre' | 'Champú' | 'Acondicionador' | 'Tratamiento' | 'Exfoliante' | 'Coloración' | 'Matizador' | 'Esmalte' | 'Delineador' | 'Sombra' | 'Mascarilla' | 'Iluminador' | 'Higiene' | 'Reloj' | 'Pendientes' | 'Collar' | 'Antifaz' | 'Manta' | 'Calcetines' | 'Bálsamo' | 'Lote' | 'Caja Regalo';
    tag?: 'NOVEDAD' | 'SET' | 'OFERTA' | 'PASO 1' | 'PASO 2' | 'PASO 3' | 'PASO 4';
    statusLabel?: string;
    rating?: number;
    reviewCount?: number;
    variants?: ProductVariants;
    beautyPoints?: number;
    isShippingSaver?: boolean;
}

// Cart item type
export interface CartItem {
    id: string;
    product: Product;
    quantity: number;
    selectedVariant: Record<string, string> | null;
}

// App view type
export type View = 'home' | 'products' | 'productDetail' | 'ofertas' | 'ia' | 'catalog' | 'about' | 'contact' | 'blog' | 'blogPost' | 'checkout';
