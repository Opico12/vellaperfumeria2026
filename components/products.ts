
import type { Product } from './types';

export const allProducts: Product[] = [
    // --- MAQUILLAJE (25 PRODUCTOS MÍNIMO) ---
    ...Array.from({ length: 30 }, (_, i): Product => ({
        id: 1000 + i,
        name: `OnColour Vivid Eye N°${i + 1}`,
        brand: "OnColour",
        price: 5.99 + (i * 0.1),
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F38920%2F38920_1.png",
        description: `Define tu mirada con los pigmentos vibrantes de OnColour. Esta sombra individual ofrece una textura sedosa que se desliza sin esfuerzo, proporcionando un color intenso y duradero. Ideal para crear looks diarios con un toque de frescura escandinava. Su fórmula ligera permite difuminar fácilmente para lograr el acabado perfecto.`,
        stock: 100,
        category: 'makeup',
        subCategory: 'OnColour'
    })),

    // --- GIORDANI GOLD (50 PRODUCTOS MÍNIMO) ---
    ...Array.from({ length: 55 }, (_, i): Product => ({
        id: 2000 + i,
        name: `GG Iconic Lux N°${i + 1}`,
        brand: "Giordani Gold",
        price: 18.00 + (i * 0.5),
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F40772%2F40772_1.png",
        description: `Experimenta el lujo supremo con Giordani Gold. Este producto representa la elegancia atemporal y la sofisticación italiana. Enriquecido con ingredientes premium, no solo embellece sino que cuida tu piel profundamente. Cada detalle ha sido cuidado para ofrecerte una experiencia sensorial única y un acabado profesional de alta gama.`,
        stock: 50,
        category: 'makeup',
        subCategory: 'Giordani Gold'
    })),

    // --- THE ONE (50 PRODUCTOS MÍNIMO) ---
    ...Array.from({ length: 55 }, (_, i): Product => ({
        id: 3000 + i,
        name: `THE ONE Everlasting N°${i + 1}`,
        brand: "THE ONE",
        price: 10.50 + (i * 0.2),
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F42123%2F42123_1.png",
        description: `Innovación y tendencia directa desde Estocolmo. La línea THE ONE está diseñada para la mujer moderna que necesita productos que sigan su ritmo. Con tecnología Everlasting Sync, este producto se adapta a tu entorno, asegurando que tu look permanezca impecable durante todo el día, sin importar la humedad o la temperatura.`,
        stock: 80,
        category: 'makeup',
        subCategory: 'THE ONE'
    })),

    // --- CUIDADO FACIAL (50 PRODUCTOS MÍNIMO) ---
    ...Array.from({ length: 55 }, (_, i): Product => ({
        id: 4000 + i,
        name: `Novage+ Bio-Energizer N°${i + 1}`,
        brand: "Novage+",
        price: 35.00 + (i * 1.5),
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F41030%2F41030_1.png",
        description: `Novage+ lleva el cuidado facial a una nueva dimensión con tecnologías bionutricionales avanzadas. Formulado para combatir los signos del envejecimiento de manera efectiva, este producto reactiva los procesos naturales de la piel. Resultados clínicamente probados que transforman la textura y luminosidad de tu rostro en pocas semanas.`,
        stock: 30,
        category: 'skincare',
        subCategory: 'Novage+'
    })),

    // --- CUIDADO CORPORAL (50 PRODUCTOS MÍNIMO) ---
    ...Array.from({ length: 55 }, (_, i): Product => ({
        id: 5000 + i,
        name: `Miel & Leche Nutrición N°${i + 1}`,
        brand: "Milk & Honey Gold",
        price: 9.99 + (i * 0.2),
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F31609%2F31609_1.png",
        description: `Un clásico de la hidratación que nunca falla. Nuestra línea Milk & Honey Gold utiliza extractos orgánicos de leche y miel para nutrir la piel de todo el cuerpo. Su aroma reconfortante y su textura cremosa proporcionan un momento de relax absoluto en tu rutina de higiene diaria. Piel suave, elástica y delicadamente perfumada.`,
        stock: 150,
        category: 'personal-care',
        subCategory: 'Milk & Honey Gold'
    })),

    // --- CUIDADO DEL CABELLO (25 PRODUCTOS MÍNIMO) ---
    ...Array.from({ length: 30 }, (_, i): Product => ({
        id: 6000 + i,
        name: `Duologi Hair Solution N°${i + 1}`,
        brand: "Oriflame",
        price: 8.50 + (i * 0.3),
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F44951%2F44951_1.png",
        description: `Duologi es el sistema capilar que trata tu cabello como si fuera tu piel. Con ingredientes activos de alta potencia, esta solución aborda problemas específicos desde la raíz hasta las puntas. Limpieza, protección y reparación en un solo paso para una melena saludable, brillante y con un volumen espectacular.`,
        stock: 60,
        category: 'hair',
        subCategory: 'Oriflame'
    })),

    // --- REGALOS (25 PRODUCTOS MÍNIMO) ---
    ...Array.from({ length: 30 }, (_, i): Product => ({
        id: 7000 + i,
        name: `Set Especial Regalo N°${i + 1}`,
        brand: "Oriflame",
        price: 25.00 + (i * 2),
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F41029%2F41029_1.png",
        description: `La mejor manera de decir "te quiero" es a través de la belleza. Este cofre de regalo ha sido seleccionado por nuestros expertos para ofrecer una rutina completa de bienestar. Presentado en una caja de lujo de edición limitada, es el detalle ideal para cualquier ocasión especial, garantizando una sonrisa y una piel radiante.`,
        stock: 20,
        category: 'makeup',
        tag: 'SET',
        subCategory: 'Oriflame'
    }))
];
