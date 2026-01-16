
import type { Product } from './types';

export const getImg = (id: number | string) => `https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F${id}%2F${id}_1.png`;

// --- 1. PRODUCTOS REALES ESPECÍFICOS (MAPEO MANUAL) ---
const manualProducts: Product[] = [
    // LÍNEA AGUACATE (32020 - 32022)
    { id: 32020, name: "Crema Facial Love Nature Aguacate", brand: "Love Nature", price: 8.50, imageUrl: getImg(32020), category: "skincare", stock: 60, description: "Nutrición natural con aceite de aguacate orgánico." },
    { id: 32021, name: "Crema de Manos Love Nature Aguacate", brand: "Love Nature", price: 5.00, imageUrl: getImg(32021), category: "personal-care", stock: 85, description: "Suavidad inmediata para tus manos." },
    { id: 32022, name: "Bálsamo Labial Love Nature Aguacate", brand: "Love Nature", price: 4.50, imageUrl: getImg(32022), category: "makeup", stock: 120, description: "Protección y brillo natural." },

    // SÉRUM DE PIES CORRECTO (32370)
    { id: 32370, name: "Sérum para Pies Feet Up Advanced", brand: "Feet Up", price: 11.00, imageUrl: getImg(32370), category: "personal-care", stock: 40, description: "Sérum con ácido salicílico para pies con durezas." },

    // LABIAL CORRECTO (33030)
    { id: 33030, name: "Labial The ONE Lip Sensation Matte", brand: "THE ONE", price: 15.00, imageUrl: getImg(33030), category: "makeup", stock: 55, description: "Mousse labial de acabado mate intenso." },

    // MAQUILLAJE CON VARIANTES (GRUPOS DE TONOS EN UNA SOLA FOTO)
    {
        id: 32191,
        name: "Perfilador de Labios Giordani Gold Iconic",
        brand: "Giordani Gold",
        price: 13.00,
        imageUrl: getImg(32191),
        category: "makeup",
        stock: 200,
        description: "Definición de lujo y color duradero.",
        variants: {
            "Tono": [
                { value: "Nude Natural", colorCode: "#d4a391", id: 32191 },
                { value: "Pink Satin", colorCode: "#e18a8a", id: 32192 },
                { value: "Rose Velvet", colorCode: "#b85c5c", id: 32193 },
                { value: "Red Passion", colorCode: "#a11d1d", id: 32194 },
                { value: "Coral Glow", colorCode: "#e36d4f", id: 32195 }
            ]
        }
    },
    {
        id: 32081,
        name: "Perlas Iluminadoras Giordani Gold",
        brand: "Giordani Gold",
        price: 26.00,
        imageUrl: getImg(32081),
        category: "makeup",
        stock: 90,
        description: "Perlas artesanales para un brillo radiante.",
        variants: {
            "Tono": [
                { value: "Natural Radiance", colorCode: "#e6c3a0", id: 32081 },
                { value: "Natural Bronze", colorCode: "#c48b5a", id: 32082 },
                { value: "Natural Peach", colorCode: "#f2b5a0", id: 32083 }
            ]
        }
    }
];

// --- 2. GENERADOR DE 600 PRODUCTOS ÚNICOS (SIN REPETIR NOMBRES) ---
const generateUniqueCatalog = (): Product[] => {
    const products: Product[] = [...manualProducts];
    const usedIds = new Set(manualProducts.map(p => p.id));
    
    // Diccionarios para crear nombres únicos
    const brands = ["Novage+", "Optimals", "Love Nature", "THE ONE", "Giordani Gold", "Milk & Honey", "Duologi", "Royal Velvet", "Feet Up", "Beautanicals"];
    const types = ["Loción Corporal", "Gel de Ducha", "Sérum Facial", "Crema de Noche", "Crema de Día", "Limpiador Espumoso", "Tónico Equilibrante", "Mascarilla Revitalizante", "Exfoliante Suave", "Acondicionador Rico"];
    const ingredients = ["Ácido Hialurónico", "Vitamina C", "Aceite de Argán", "Miel Orgánica", "Árbol de Té", "Coco y Aloe", "Carbón Activo", "Retinol", "Extracto de Rosa", "Menta Fresca"];

    let count = 0;
    // Iniciamos en 32029 como pidió el usuario
    let currentId = 32029;

    while (products.length < 600) {
        if (!usedIds.has(currentId)) {
            // Lógica para que el nombre sea siempre diferente
            const bIndex = count % brands.length;
            const tIndex = Math.floor(count / brands.length) % types.length;
            const iIndex = Math.floor(count / (brands.length * types.length)) % ingredients.length;

            const name = `${types[tIndex]} de ${ingredients[iIndex]} ${brands[bIndex]}`;
            const category = types[tIndex].includes("Crema") || types[tIndex].includes("Sérum") ? "skincare" : "personal-care";

            products.push({
                id: currentId,
                name: name,
                brand: brands[bIndex],
                price: 10.00 + (count % 40),
                imageUrl: getImg(currentId),
                category: category as any,
                stock: 50,
                description: `Producto de alta calidad ${brands[bIndex]} diseñado para resultados profesionales.`
            });
            usedIds.add(currentId);
            count++;
        }
        currentId++;
        // Saltamos bloques si es necesario para evitar IDs de variantes manuales
        if (currentId === 32191) currentId = 32200;
        if (currentId === 33030) currentId = 33031;
    }

    return products;
};

export const allProducts: Product[] = generateUniqueCatalog().sort((a,b) => a.id - b.id);
