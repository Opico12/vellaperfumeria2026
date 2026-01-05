
import type { Product } from './types';

export const allProducts: Product[] = [
    // --- FRAGANCIAS ICÓNICAS (Restauradas) ---
    {
        id: 38497,
        name: "Divine Exclusive Parfum",
        brand: "Divine",
        price: 34.99,
        regularPrice: 52.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F38497%2FES%2F38497_1.png",
        description: "Encarna la esencia de una estrella con Divine Exclusive. Este Parfum de alta intensidad ha sido creado con el exclusivo acorde Shining Star, una nota olfativa diseñada para dejar una estela magnética y sofisticada que perdura más de 8 horas. Su frasco, inspirado en los vestidos de alta costura, está adornado con cristales de Swarovski®.",
        stock: 42,
        category: 'perfume',
        subCategory: 'Divine',
        productType: 'Base',
        tag: 'OFERTA'
    },
    {
        id: 46642,
        name: "Amber Elixir Eau de Parfum",
        brand: "Amber Elixir",
        price: 24.99,
        regularPrice: 41.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46642%2F46642_1.png",
        description: "Sumérgete en la calidez dorada del ámbar báltico con esta fragancia icónica. Amber Elixir es una oda a la sensualidad serena, combinando notas de grosella negra, mandarina y heliotropo sobre un fondo profundo de ámbar gris y sándalo.",
        stock: 15,
        category: 'perfume',
        subCategory: 'Amber Elixir',
        tag: 'OFERTA'
    },
    {
        id: 36151,
        name: "Love Potion Eau de Parfum",
        brand: "Love Potion",
        price: 22.99,
        regularPrice: 40.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F36151%2F36151_1.png",
        description: "Explora el poder de la seducción con Love Potion. Esta fragancia oriental-especiada es una pócima mágica que combina el afrodisíaco jengibre de la India con la dulzura irresistible del chocolate negro y la flor del cacao.",
        stock: 28,
        category: 'perfume',
        subCategory: 'Love Potion',
        tag: 'SET'
    },

    // --- GAMA DUOLOGI COMPLETA ---
    {
        id: 44955,
        name: "Exfoliante Anticaspa para Cuero Cabelludo DUOLOGI",
        brand: "DUOLOGI",
        price: 12.99,
        regularPrice: 19.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F44955%2F44955_1.png",
        description: "Paso 1: Desintoxica tu cuero cabelludo. Este tratamiento purificante utiliza microperlas exfoliantes y Ácido Salicílico para eliminar células muertas y exceso de grasa, preparando el cabello para una absorción óptima.",
        stock: 45,
        category: 'hair',
        subCategory: 'Duologi',
        productType: 'Exfoliante',
        tag: 'PASO 1'
    },
    {
        id: 44951,
        name: "Champú Intense Repair DUOLOGI",
        brand: "DUOLOGI",
        price: 11.99,
        regularPrice: 17.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F44951%2F44951_1.png",
        description: "Paso 2: Limpieza transformadora. Diseñado para cabellos quebradizos, enriquecido con Proteína de Queratina y Avena Nutritiva para reconstruir los enlaces de la fibra capilar.",
        stock: 60,
        category: 'hair',
        subCategory: 'Duologi',
        productType: 'Champú',
        tag: 'PASO 2'
    },
    {
        id: 44961,
        name: "Acondicionador Rich Cream DUOLOGI",
        brand: "DUOLOGI",
        price: 11.99,
        regularPrice: 17.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F44961%2F44961_1.png",
        description: "Paso 3: Hidratación intensa. Su tecnología 'Freeze Control' sella la cutícula eliminando el encrespamiento y aportando una suavidad extraordinaria. Ideal para melenas que requieren disciplina.",
        stock: 55,
        category: 'hair',
        subCategory: 'Duologi',
        productType: 'Acondicionador',
        tag: 'PASO 3'
    },
    {
        id: 44964,
        name: "Sérum Capilar Sealing Hair DUOLOGI",
        brand: "DUOLOGI",
        price: 14.99,
        regularPrice: 22.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F44964%2F44964_1.png",
        description: "Paso 4: Sellado y Perfección. El toque final para una melena impecable. Actúa como un escudo contra el calor y los rayos UV, cerrando las puntas abiertas y aportando un brillo multidimensional.",
        stock: 30,
        category: 'hair',
        subCategory: 'Duologi',
        productType: 'Sérum',
        tag: 'PASO 4'
    },
    {
        id: 44965,
        name: "Mascarilla Intensiva Reparadora DUOLOGI",
        brand: "DUOLOGI",
        price: 15.99,
        regularPrice: 24.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F44965%2F44965_1.png",
        description: "Tratamiento de nutrición profunda para cabellos rizados (Curly range) o extremadamente secos. Restaura la elasticidad del rizo y rellena las zonas dañadas de la cutícula.",
        stock: 25,
        category: 'hair',
        subCategory: 'Duologi',
        productType: 'Mascarilla',
        tag: 'OFERTA'
    },

    // --- REGALOS Y JOYERÍA ---
    {
        id: 46001,
        name: "Calcetines Térmicos Soft Cloud",
        brand: "Accessories",
        price: 7.99,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46001%2F46001_1.png",
        description: "Calidez y suavidad absoluta para tus momentos de relax. Tejido ultra-suave de edición limitada para la temporada invernal 2026.",
        stock: 200,
        category: 'accessories',
        productType: 'Calcetines',
        tag: 'SET'
    },
    {
        id: 46123,
        name: "Collar Golden Elegance Norrsken",
        brand: "Norrsken",
        price: 29.99,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46123%2F46123_1.png",
        description: "Joyería de inspiración nórdica. Baño en oro con piedras semipreciosas seleccionadas a mano. Una pieza atemporal de la colección Norrsken.",
        stock: 45,
        category: 'accessories',
        productType: 'Collar',
        tag: 'SET'
    },
    {
        id: 46124,
        name: "Pendientes Midnight Sparkle",
        brand: "Norrsken",
        price: 24.99,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46124%2F46124_1.png",
        description: "Diseño sofisticado para tus noches más especiales. Pendientes de cristales tallados con acabado en plata de alta calidad.",
        stock: 60,
        category: 'accessories',
        productType: 'Pendientes',
        tag: 'NOVEDAD'
    },
    {
        id: 47000,
        name: "Caja Regalo Colección Cremas Universales",
        brand: "Tender Care",
        price: 19.99,
        regularPrice: 35.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47000%2F47000_1.png",
        description: "Un tesoro de hidratación. Cuatro bálsamos icónicos presentados en una caja joya de edición coleccionista. El regalo perfecto para cualquier ocasión.",
        stock: 120,
        category: 'accessories',
        productType: 'Lote',
        tag: 'SET'
    },
    {
        id: 47250,
        name: "Bolsa de Regalo Turquesa Mediana",
        brand: "Oriflame",
        price: 1.99,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47250%2F47250_1.png",
        description: "La presentación que tus regalos merecen. Bolsa turquesa con acabado satinado y asas de cordón trenzado de lujo.",
        stock: 500,
        category: 'accessories',
        productType: 'Caja Regalo',
        tag: 'SET'
    },

    // --- MAQUILLAJE PROFESIONAL (Jordani Gold, The ONE, OnColour) ---
    {
        id: 42487,
        name: "Perfilador de Cejas Dúo Precision THE ONE",
        brand: "The ONE",
        price: 8.99,
        regularPrice: 15.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F42487%2F42487_1.png",
        description: "Domina el arte de la mirada. Herramienta de alta precisión con punta biselada para trazos milimétricos y cepillo ergonómico para un difuminado impecable.",
        stock: 85,
        category: 'makeup',
        subCategory: 'THE ONE',
        productType: 'Accesorio',
        tag: 'NOVEDAD'
    },
    {
        id: 40657,
        name: "Perlas Iluminadoras Giordani Gold",
        brand: "Giordani Gold",
        price: 19.99,
        regularPrice: 32.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F40657%2F40657_1.png",
        description: "El icónico resplandor de Giordani Gold. Perlas artesanales que aportan calidez y luminosidad multidimensional a tu rostro.",
        stock: 50,
        category: 'makeup',
        subCategory: 'Giordani Gold',
        productType: 'Iluminador',
        tag: 'OFERTA'
    },
    {
        id: 38810,
        name: "Paleta de Sombras OnColour All Eyes",
        brand: "OnColour",
        price: 11.99,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F38810%2F38810_1.png",
        description: "Explora un mundo de color. Tonos armonizados con alta pigmentación para crear looks infinitos, desde naturales hasta dramáticos.",
        stock: 120,
        category: 'makeup',
        subCategory: 'OnColour',
        productType: 'Sombra',
        tag: 'NOVEDAD'
    },

    // --- CUIDADO FACIAL TOTAL & WELLNESS (Restaurados) ---
    {
        id: 41058,
        name: "Sérum Antiedad Novage+ Lift + Firm",
        brand: "Novage+",
        price: 45.00,
        regularPrice: 62.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F41058%2F41058_1.png",
        description: "Bioactivación facial avanzada. Redefine el contorno y combate la flacidez con resultados visibles en tiempo récord.",
        stock: 95,
        category: 'skincare',
        subCategory: 'Novage+',
        productType: 'Sérum',
        tag: 'NOVEDAD'
    },
    {
        id: 29696,
        name: "Wellness Pack Mujer Oriflame",
        brand: "Wellness",
        price: 29.99,
        regularPrice: 42.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F29696%2F29696.png",
        description: "Tu aliado diario para una salud radiante. Vitaminas, Minerales, Omega 3 y Astaxantina en cómodos sobres diarios.",
        stock: 100,
        category: 'wellness',
        subCategory: 'Oriflame',
        tag: 'NOVEDAD'
    }
];
