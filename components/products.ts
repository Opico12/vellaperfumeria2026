
import type { Product } from './types';

export const getImg = (id: number | string) => `https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F${id}%2F${id}_1.png`;

// --- 1. PRODUCTOS DEFINIDOS MANUALMENTE (CORRECCIONES CRÍTICAS) ---
const manualProducts: Product[] = [
    {
        id: 31602,
        name: "Crema para Manos y Cuerpo Milk & Honey Gold",
        brand: "Milk & Honey Gold",
        price: 19.00,
        regularPrice: 24.00,
        imageUrl: getImg(31602),
        category: "personal-care",
        stock: 500,
        description: "Hidratación legendaria con extractos orgánicos de leche y miel. Textura suntuosa para una piel de seda."
    },
    {
        id: 31603,
        name: "Exfoliante de Azúcar Milk & Honey Gold",
        brand: "Milk & Honey Gold",
        price: 12.00,
        regularPrice: 18.00,
        imageUrl: getImg(31603),
        category: "personal-care",
        stock: 200,
        description: "Exfoliante premium con cristales de azúcar que eliminan células muertas y suavizan la piel."
    },
    {
        id: 41101,
        name: "Loción Corporal Love Nature con Sésamo y Magnolia",
        brand: "Love Nature",
        price: 11.00,
        imageUrl: getImg(41101),
        category: "personal-care",
        stock: 150,
        description: "Loción hidratante de rápida absorción con extractos naturales orgánicos."
    },
    {
        id: 41129,
        name: "Eau de Toilette Elvie Summer Joy - Edición Especial",
        brand: "Elvie",
        price: 29.99,
        regularPrice: 42.00,
        imageUrl: getImg(41129),
        category: "perfume",
        stock: 45,
        description: "Fragancia floral frutal que captura la alegría del verano sueco."
    },
    {
        id: 40584,
        name: "Gel de Ducha Scents & Moments My Fragrance",
        brand: "Scents & Moments",
        price: 6.99,
        imageUrl: getImg(40584),
        category: "personal-care",
        stock: 180,
        description: "Limpia delicadamente tu piel dejando un aroma fresco y duradero."
    },
    {
        id: 31115,
        name: "Jabón Líquido Purificante Beautanicals",
        brand: "Beautanicals",
        price: 15.00,
        imageUrl: getImg(31115),
        category: "personal-care",
        stock: 120,
        description: "Formulado con minerales esenciales para una limpieza profunda y respetuosa."
    },
    {
        id: 31119,
        name: "Eau de Toilette Elvie Clásico",
        brand: "Elvie",
        price: 24.99,
        imageUrl: getImg(31119),
        category: "perfume",
        stock: 90,
        description: "La icónica fragancia del muguete y las flores blancas."
    },
    {
        id: 32635,
        name: "Crema de Manos Hidratante con Árnica y Espino Amarillo",
        brand: "Oriflame",
        price: 4.99,
        imageUrl: getImg(32635),
        category: "personal-care",
        stock: 300,
        description: "Alivio instantáneo para manos secas. Protege y suaviza."
    },
    {
        id: 31625,
        name: "Barra de Labios / Perfilador The ONE Colour Stylist",
        brand: "The ONE",
        price: 11.00,
        imageUrl: getImg(31625),
        category: "makeup",
        stock: 200,
        description: "Color intenso y definición perfecta en un solo producto."
    },
    {
        id: 31673,
        name: "Pasta de Dientes Optifresh Menta Refrescante",
        brand: "Optifresh",
        price: 4.99,
        imageUrl: getImg(31673),
        category: "personal-care",
        stock: 500,
        description: "Higiene bucal completa con sabor a menta natural."
    }
];

// --- 2. GENERADOR LÓGICO POR RANGOS PARA COMPLETAR 600 PRODUCTOS ---
// Evitamos nombres genéricos cruzados usando tipos de producto por rangos de ID
const generateCategorizedCatalog = (): Product[] => {
    const products: Product[] = [];
    
    // Rango 31xxx: Mayormente Cuidado Personal y Fragancias Clásicas
    for (let i = 0; i < 150; i++) {
        const id = 31200 + i;
        const brand = i % 2 === 0 ? "Love Nature" : "Feet Up";
        const type = i % 3 === 0 ? "Champú Nutritivo" : (i % 3 === 1 ? "Gel de Ducha" : "Crema de Pies");
        products.push({
            id,
            name: `${type} ${brand} Orgánico`,
            brand,
            price: 8.99 + (i % 10),
            imageUrl: getImg(id),
            category: "personal-care",
            stock: 100,
            description: "Cuidado natural inspirado en los bosques suecos."
        });
    }

    // Rango 32xxx / 33xxx: Cuidado Facial NovAge y Fragancias Premium
    for (let i = 0; i < 150; i++) {
        const id = 32050 + i;
        const brand = i % 2 === 0 ? "NovAge" : "Giordani Gold";
        const isSkincare = i % 2 === 0;
        products.push({
            id,
            name: isSkincare ? `Tratamiento Facial ${brand}` : `Eau de Parfum ${brand} Essenza`,
            brand,
            price: 25.00 + (i % 30),
            imageUrl: getImg(id),
            category: isSkincare ? "skincare" : "perfume",
            stock: 50,
            description: "La excelencia del diseño sueco y la innovación científica."
        });
    }

    // Rango 41xxx: NovAge+ y Maquillaje Moderno
    for (let i = 0; i < 150; i++) {
        const id = 41200 + i;
        if (manualProducts.some(p => p.id === id)) continue;
        const brand = i % 2 === 0 ? "Novage+" : "The ONE";
        const isSkincare = i % 2 === 0;
        products.push({
            id,
            name: isSkincare ? `Sérum Bioactivador ${brand}` : `Máscara de Pestañas HD ${brand}`,
            brand,
            price: 15.00 + (i % 40),
            imageUrl: getImg(id),
            category: isSkincare ? "skincare" : "makeup",
            stock: 80,
            description: "Resultados profesionales con tecnología de vanguardia."
        });
    }

    // Rango 42xxx / 45xxx: Wellness y Hombre
    for (let i = 0; i < 140; i++) {
        const id = 42500 + i;
        if (manualProducts.some(p => p.id === id)) continue;
        const brand = i % 2 === 0 ? "Wellness" : "North for Men";
        const isWellness = i % 2 === 0;
        products.push({
            id,
            name: isWellness ? `Suplemento ${brand} Pack` : `Aftershave Calmante ${brand}`,
            brand,
            price: 12.00 + (i % 25),
            imageUrl: getImg(id),
            category: isWellness ? "wellness" : "men",
            stock: 60,
            description: "Belleza desde el interior y protección masculina extrema."
        });
    }

    return products;
};

export const allProducts: Product[] = [...manualProducts, ...generateCategorizedCatalog()].slice(0, 600);
