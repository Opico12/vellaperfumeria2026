
import type { Product } from './types';

/**
 * Catálogo Maestro Bella Perfumería 2026.
 * Usando la ruta directa de Oriflame para máxima visibilidad.
 */
export const allProducts: Product[] = [
    { id: 48970, name: "Caja de Regalo Festive Luxury", brand: "Festive", price: 4.50, imageUrl: "https://es.oriflame.com/product-images/external/es-ES/48970_1.png", stock: 100, category: 'accessories', tag: 'SET' },
    { id: 42503, name: "Perfume Giordani Gold Essenza", brand: "Giordani Gold", price: 45.00, imageUrl: "https://es.oriflame.com/product-images/external/es-ES/42503_1.png", stock: 30, category: 'perfume' },
    { id: 38601, name: "Aceite Protector Eleo con Aceites Naturales", brand: "Eleo", price: 18.99, imageUrl: "https://es.oriflame.com/product-images/external/es-ES/38601_1.png", stock: 50, category: 'hair' },
    { id: 46060, name: "Perfume All or Nothing Amplified", brand: "Oriflame Exclusive", price: 62.99, imageUrl: "https://es.oriflame.com/product-images/external/es-ES/46060_1.png", stock: 20, category: 'perfume', tag: 'NOVEDAD' },
    { id: 38527, name: "Eau de Parfum Ascendant Intense", brand: "Ascendant", price: 29.99, imageUrl: "https://es.oriflame.com/product-images/external/es-ES/38527_1.png", stock: 35, category: 'men' },
    { id: 40657, name: "The One BB Cream Beautifier Max", brand: "The One", price: 12.99, imageUrl: "https://es.oriflame.com/product-images/external/es-ES/40657_1.png", stock: 60, category: 'makeup' },
    { id: 48650, name: "Máscara Winter Wonder Lash Waterproof", brand: "The One", price: 10.99, imageUrl: "https://es.oriflame.com/product-images/external/es-ES/48650_1.png", stock: 45, category: 'makeup' },
    { id: 43456, name: "The One Illuskin Liquid Highlighter", brand: "The One", price: 14.99, imageUrl: "https://es.oriflame.com/product-images/external/es-ES/43456_1.png", stock: 40, category: 'makeup' },
    { id: 40692, name: "The One Brow Pomade", brand: "The One", price: 11.99, imageUrl: "https://es.oriflame.com/product-images/external/es-ES/40692_1.png", stock: 50, category: 'makeup' },
    { id: 47718, name: "O Sweet Marshmallow Eau de Toilette", brand: "OnColour", price: 15.99, imageUrl: "https://es.oriflame.com/product-images/external/es-ES/47718_1.png", stock: 100, category: 'perfume', tag: 'NOVEDAD' },
    { id: 48954, name: "Reloj Glitters of Love Jan & Valentina", brand: "Oriflame Exclusive", price: 34.99, imageUrl: "https://es.oriflame.com/product-images/external/es-ES/48954_1.png", stock: 15, category: 'accessories' },
    { id: 48101, name: "Crema Noche Reafirmante Regal Velvet", brand: "Royal Velvet", price: 24.99, imageUrl: "https://es.oriflame.com/product-images/external/es-ES/48101_1.png", stock: 30, category: 'skincare' },
    { id: 36152, name: "Crema Universal Aceite Frambuesa", brand: "Tender Care", price: 7.99, imageUrl: "https://es.oriflame.com/product-images/external/es-ES/36152_1.png", stock: 200, category: 'personal-care' },
    { id: 45967, name: "Perfume Giordani Gold Man Elixir", brand: "Giordani Gold", price: 35.00, imageUrl: "https://es.oriflame.com/product-images/external/es-ES/45967_1.png", stock: 25, category: 'men' }
];

export const getImg = (id: number | string) => {
    return `https://es.oriflame.com/product-images/external/es-ES/${id}_1.png`;
};
