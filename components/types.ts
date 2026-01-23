
export interface VariantOption {
    value: string;
    colorCode?: string;
    imageUrl?: string;
    variationId?: number;
    id?: number; 
}

export interface ProductVariants {
    [key: string]: VariantOption[];
}

export interface Product {
    id: number;
    name: string;
    brand: string;
    price: number;
    regularPrice?: number;
    imageUrl: string;
    description?: string;
    howToUse?: string;
    stock: number;
    category: 'perfume' | 'hair' | 'makeup' | 'skincare' | 'personal-care' | 'men' | 'wellness' | 'accessories';
    subCategory?: string;
    productType?: string;
    tag?: 'NOVEDAD' | 'SET' | 'OFERTA' | 'PASO 1' | 'PASO 2' | 'PASO 3' | 'PASO 4';
    statusLabel?: string;
    rating?: number;
    reviewCount?: number;
    variants?: ProductVariants;
    beautyPoints?: number;
    isShippingSaver?: boolean;
}

export interface CartItem {
    id: string;
    product: Product;
    quantity: number;
    selectedVariant: Record<string, string> | null;
}

export type View = 'home' | 'products' | 'productDetail' | 'ofertas' | 'ia' | 'catalog' | 'about' | 'contact' | 'blog' | 'blogPost' | 'checkout' | 'regalos' | 'skinDiagnostic' | 'foundationFinder';
