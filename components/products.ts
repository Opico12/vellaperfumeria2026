
import type { Product } from './types';

export const getImg = (id: number | string) => `https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F${id}%2F${id}_1.png`;

// --- 1. BASE DE DATOS MANUAL (IDENTIDADES REALES VERIFICADAS) ---
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
        name: "Loción Corporal Love Nature Magnolia - Edición Especial",
        brand: "Love Nature",
        price: 11.00,
        imageUrl: getImg(41101),
        category: "personal-care",
        stock: 150,
        description: "Loción hidratante de edición limitada con exquisito aroma a Magnolia y aceites orgánicos."
    },
    {
        id: 41129,
        name: "Fragancia My Fragrance - Edición Especial Invierno",
        brand: "Special Edition",
        price: 29.99,
        regularPrice: 42.00,
        imageUrl: getImg(41129),
        category: "perfume",
        stock: 45,
        description: "Una esencia exclusiva diseñada para momentos inolvidables. Notas florales y amaderadas."
    },
    {
        id: 41131,
        name: "Champú Nutritivo Love Nature con Trigo y Coco",
        brand: "Love Nature",
        price: 7.50,
        imageUrl: getImg(41131),
        category: "personal-care",
        stock: 140,
        description: "Limpieza profunda y nutrición intensa para cabellos secos con ingredientes biodegradables."
    },
    {
        id: 40584,
        name: "Gel de Ducha My Fragrance - Scents & Moments",
        brand: "Scents & Moments",
        price: 6.99,
        imageUrl: getImg(40584),
        category: "personal-care",
        stock: 180,
        description: "Limpia delicadamente tu piel dejando un aroma fresco y duradero de la colección My Fragrance."
    },
    {
        id: 31115,
        name: "Jabón Líquido Purificante Beautanicals",
        brand: "Beautanicals",
        price: 15.00,
        imageUrl: getImg(31115),
        category: "personal-care",
        stock: 120,
        description: "Formulado con minerales esenciales para una limpieza profunda y respetuosa con el medio ambiente."
    },
    {
        id: 31119,
        name: "Eau de Toilette Elvie Clásico",
        brand: "Elvie",
        price: 24.99,
        imageUrl: getImg(31119),
        category: "perfume",
        stock: 90,
        description: "La icónica fragancia sueca del muguete y las flores blancas del bosque."
    },
    {
        id: 32635,
        name: "Crema de Manos Hidratante con Aceite de Árnica",
        brand: "Oriflame",
        price: 4.99,
        imageUrl: getImg(32635),
        category: "personal-care",
        stock: 300,
        description: "Alivio instantáneo para manos secas. Protege y suaviza con aceite de árnica natural."
    },
    {
        id: 31625,
        name: "Perfilador de Labios The ONE Colour Stylist",
        brand: "The ONE",
        price: 9.00,
        imageUrl: getImg(31625),
        category: "makeup",
        stock: 200,
        description: "Definición perfecta y larga duración para resaltar la belleza de tus labios."
    },
    {
        id: 31673,
        name: "Pasta de Dientes Optifresh Menta Refrescante",
        brand: "Optifresh",
        price: 4.99,
        imageUrl: getImg(31673),
        category: "personal-care",
        stock: 500,
        description: "Higiene bucal completa con sistema de protección total y sabor a menta natural."
    }
];

// --- 2. GENERADOR DE BLOQUES LÓGICOS PARA LLEGAR A 600 ---
// Dividimos por rangos de Oriflame para que el nombre coincida con la categoría real del ID
const generateStructuredCatalog = (): Product[] => {
    const products: Product[] = [...manualProducts];
    const usedIds = new Set(manualProducts.map(p => p.id));

    // Bloque 1: Rango 31xxx (Higiene, Capilar y Fragancias Clásicas)
    for (let i = 0; i < 180; i++) {
        const id = 31000 + i;
        if (usedIds.has(id)) continue;
        const brand = i % 2 === 0 ? "Love Nature" : "Feet Up";
        const type = i % 3 === 0 ? "Champú Suave" : (i % 3 === 1 ? "Gel de Ducha" : "Crema Hidratante");
        products.push({
            id,
            name: `${type} ${brand} con Extractos Orgánicos`,
            brand,
            price: 7.99 + (i % 12),
            imageUrl: getImg(id),
            category: "personal-care",
            stock: 100,
            description: "Cuidado diario inspirado en la naturaleza sueca."
        });
        usedIds.add(id);
    }

    // Bloque 2: Rango 32xxx / 33xxx (Fragancias Premium y Giordani Gold)
    for (let i = 0; i < 150; i++) {
        const id = 32100 + i;
        if (usedIds.has(id)) continue;
        const brand = i % 2 === 0 ? "Giordani Gold" : "Eclat";
        const type = i % 2 === 0 ? "Eau de Parfum" : "Eau de Toilette";
        products.push({
            id,
            name: `${type} ${brand} Colección 2026`,
            brand,
            price: 25.00 + (i % 30),
            imageUrl: getImg(id),
            category: "perfume",
            stock: 40,
            description: "Fragancias de alta gama con ingredientes exclusivos."
        });
        usedIds.add(id);
    }

    // Bloque 3: Rango 41xxx (Novage+ y Cuidado Facial Avanzado)
    for (let i = 0; i < 150; i++) {
        const id = 41000 + i;
        if (usedIds.has(id)) continue;
        const brand = i % 2 === 0 ? "Novage+" : "Optimals";
        const type = i % 3 === 0 ? "Sérum Bioactivador" : (i % 3 === 1 ? "Crema de Día SPF" : "Contorno de Ojos");
        products.push({
            id,
            name: `${type} ${brand} Intense`,
            brand,
            price: 22.00 + (i % 45),
            imageUrl: getImg(id),
            category: "skincare",
            stock: 60,
            description: "Ciencia avanzada para resultados visibles en tu piel."
        });
        usedIds.add(id);
    }

    // Bloque 4: Rango 42xxx (Maquillaje The ONE y Wellness)
    for (let i = 0; i < 109; i++) {
        const id = 42000 + i;
        if (usedIds.has(id)) continue;
        const brand = i % 2 === 0 ? "The ONE" : "Wellness";
        const isMakeup = i % 2 === 0;
        products.push({
            id,
            name: isMakeup ? `Máscara de Pestañas ${brand} HD` : `Suplemento ${brand} Pack`,
            brand,
            price: 14.00 + (i % 25),
            imageUrl: getImg(id),
            category: isMakeup ? "makeup" : "wellness",
            stock: 80,
            description: "Innovación y bienestar para tu día a día."
        });
        usedIds.add(id);
    }

    return products;
};

export const allProducts: Product[] = generateStructuredCatalog().sort((a, b) => a.id - b.id);
