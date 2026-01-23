
import type { Product } from './types';

export const allProducts: Product[] = [
    // --- LÍNEA ALL OR NOTHING ---
    { 
        id: 46060, 
        name: "Perfume All or Nothing Amplified", 
        brand: "All or Nothing", 
        price: 62.99, 
        regularPrice: 85.00, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46060%2F46060_1.png&w=600&q=90", 
        stock: 15, 
        category: 'perfume', 
        tag: 'NOVEDAD',
        description: "Floral Ambarina. Siente el poder de la exclusividad con notas de nardo amplificado."
    },
    { 
        id: 47020, 
        name: "Crema Corporal Perfumada All or Nothing Amplified", 
        brand: "All or Nothing", 
        price: 12.99, 
        regularPrice: 19.00, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47020%2F47020_1.png&w=600&q=90", 
        stock: 40, 
        category: 'personal-care',
        description: "Hidratación de lujo con la vibrante fragancia All or Nothing Amplified."
    },

    // --- LÍNEA LOVE POTION ---
    { 
        id: 46047, 
        name: "Eau de Parfum Love Potion Cherry on Top", 
        brand: "Love Potion", 
        price: 25.99, 
        regularPrice: 38.00, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46047%2F46047_1.png&w=600&q=90", 
        stock: 30, 
        category: 'perfume',
        description: "Aroma frutal ambarino con notas de cereza dulce y chocolate."
    },
    { 
        id: 42806, 
        name: "Crema de Manos Love Potion", 
        brand: "Love Potion", 
        price: 7.99, 
        regularPrice: 12.00, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F42806%2F42806_1.png&w=600&q=90", 
        stock: 80, 
        category: 'personal-care',
        description: "Manos suaves y delicadamente perfumadas."
    },
    { 
        id: 48083, 
        name: "Lote Love Potion (Fragancia + Crema + Caja)", 
        brand: "Love Potion", 
        price: 29.99, 
        regularPrice: 45.00, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46047%2F46047_1.png&w=600&q=90", 
        stock: 12, 
        category: 'perfume', 
        tag: 'SET',
        description: "El regalo perfecto para ella."
    },

    // --- LÍNEA ELVIE & ECLAT ---
    { 
        id: 47499, 
        name: "Eau de Toilette Elvie Midnight Magic", 
        brand: "Elvie", 
        price: 22.99, 
        regularPrice: 38.00, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47499%2F47499_1.png&w=600&q=90", 
        stock: 45, 
        category: 'perfume',
        description: "Magia y misterio en cada gota."
    },
    { 
        id: 42499, 
        name: "Eau de Toilette Eclat Femme Weekend", 
        brand: "Eclat", 
        price: 26.99, 
        regularPrice: 42.00, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F42499%2F42499_1.png&w=600&q=90", 
        stock: 40, 
        category: 'perfume',
        description: "Elegancia parisina para tus fines de semana."
    },
    { 
        id: 47014, 
        name: "Crema Corporal Perfumada Eclat Femme Weekend", 
        brand: "Eclat", 
        price: 9.99, 
        regularPrice: 15.00, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47014%2F47014_1.png&w=600&q=90", 
        stock: 45, 
        category: 'personal-care',
        description: "Complemento ideal para tu fragancia Eclat."
    },

    // --- MAQUILLAJE THE ONE ---
    { 
        id: 38863, 
        name: "Labial Ultra Glossy Unresistable THE ONE", 
        brand: "THE ONE", 
        price: 7.99, 
        regularPrice: 14.00, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F38863%2F38863_1.png&w=600&q=90", 
        stock: 100, 
        category: 'makeup', 
        tag: 'OFERTA',
        description: "Brillo máximo y confort total."
    },
    { 
        id: 48650, 
        name: "Máscara Winter Wanderlust Waterproof", 
        brand: "THE ONE", 
        price: 9.99, 
        regularPrice: 15.00, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F48650%2F48650_1.png&w=600&q=90", 
        stock: 100, 
        category: 'makeup',
        description: "Resiste a todo con un volumen espectacular."
    },
    { 
        id: 46929, 
        name: "Sombra de Ojos Color Unlimited Matte Burgundy", 
        brand: "THE ONE", 
        price: 7.99, 
        regularPrice: 16.00, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46929%2F46929_1.png&w=600&q=90", 
        stock: 90, 
        category: 'makeup',
        description: "Sombra en stick de larga duración."
    },

    // --- CUIDADO FACIAL ROYAL VELVET ---
    { 
        id: 47005, 
        name: "Crema de Día reafirmante Royal Velvet FPS 20", 
        brand: "Royal Velvet", 
        price: 43.00, 
        regularPrice: 58.00, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47005%2F47005_1.png&w=600&q=90", 
        stock: 30, 
        category: 'skincare',
        description: "Reafirma y protege tu piel a diario."
    },
    { 
        id: 47007, 
        name: "Contorno de Ojos Reafirmante Royal Velvet", 
        brand: "Royal Velvet", 
        price: 30.00, 
        regularPrice: 42.00, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47007%2F47007_1.png&w=600&q=90", 
        stock: 35, 
        category: 'skincare',
        description: "Mirada más joven y firme."
    },
    { 
        id: 48117, 
        name: "Crema de Noche Reafirmante Royal Velvet Edición Especial", 
        brand: "Royal Velvet", 
        price: 23.99, 
        regularPrice: 43.00, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F48117%2F48117_1.png&w=600&q=90", 
        stock: 20, 
        category: 'skincare',
        description: "Regeneración nocturna intensa."
    },

    // --- CUIDADO PERSONAL LOVE NATURE ---
    { 
        id: 47201, 
        name: "Gel de Ducha Love Nature Frambuesa y Menta", 
        brand: "Love Nature", 
        price: 6.99, 
        regularPrice: 12.00, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47201%2F47201_1.png&w=600&q=90", 
        stock: 100, 
        category: 'personal-care',
        description: "Energía natural para tu ducha diaria."
    },
    { 
        id: 36152, 
        name: "Crema Universal con Aceite de Frambuesa", 
        brand: "Tender Care", 
        price: 7.99, 
        regularPrice: 12.00, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F36152%2F36152_1.png&w=600&q=90", 
        stock: 120, 
        category: 'personal-care',
        description: "Bálsamo multiusos con ingredientes naturales."
    },

    // --- REGALOS & ACCESORIOS ---
    { 
        id: 48975, 
        name: "Bolsa de Regalo Festive", 
        brand: "Regalos", 
        price: 3.99, 
        regularPrice: 5.00, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F48975%2F48975_1.png&w=600&q=90", 
        stock: 100, 
        category: 'accessories'
    },
    { 
        id: 48970, 
        name: "Caja de Regalo Festive", 
        brand: "Regalos", 
        price: 10.00, 
        regularPrice: 15.00, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F48970%2F48970_1.png&w=600&q=90", 
        stock: 40, 
        category: 'accessories'
    },
    { 
        id: 48953, 
        name: "Set de 4 Pares de Pendientes Glitters", 
        brand: "Accesorios", 
        price: 11.99, 
        regularPrice: 18.00, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F48953%2F48953_1.png&w=600&q=90", 
        stock: 30, 
        category: 'accessories',
        description: "Versatilidad para cualquier ocasión."
    }
];

export const getImg = (id: number | string) => {
    return `https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F${id}%2F${id}_1.png&w=600&q=90`;
};
