
import type { Product } from './types';

export const allProducts: Product[] = [
    // --- LÍNEA MILK & HONEY GOLD (6 PRODUCTOS) ---
    {
        id: 31602,
        name: "Crema Nutritiva Manos y Cuerpo Milk & Honey Gold",
        brand: "Milk & Honey Gold",
        price: 14.99,
        regularPrice: 22.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F31602%2F31602_1.png",
        description: "Indulgencia pura para tu piel. Esta crema rica y aterciopelada combina extractos orgánicos de leche y miel para nutrir profundamente las manos y el cuerpo durante 24 horas.",
        stock: 450,
        category: 'personal-care',
        subCategory: 'Milk & Honey Gold',
        tag: 'SET',
        beautyPoints: 15,
        rating: 4.9
    },
    {
        id: 31604,
        name: "Exfoliante de Azúcar Milk & Honey Gold",
        brand: "Milk & Honey Gold",
        price: 11.99,
        regularPrice: 18.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F31604%2F31604_1.png",
        description: "Renovación total con la caricia del azúcar. Este exfoliante corporal de lujo utiliza cristales de azúcar natural para eliminar células muertas con suavidad.",
        stock: 300,
        category: 'personal-care',
        subCategory: 'Milk & Honey Gold',
        tag: 'OFERTA',
        beautyPoints: 12,
        rating: 4.8
    },
    {
        id: 46272,
        name: "Jabón Líquido Magnolia Milk & Honey Gold",
        brand: "Milk & Honey Gold",
        price: 8.49,
        regularPrice: 12.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46272%2F46272_1.png",
        description: "La elegancia floral de la magnolia se une a la nutrición clásica de Milk & Honey. Limpia suavemente sin resecar las manos.",
        stock: 250,
        category: 'personal-care',
        subCategory: 'Milk & Honey Gold',
        tag: 'OFERTA',
        beautyPoints: 8
    },
    {
        id: 31603,
        name: "Acondicionador para Cabello Brillante Milk & Honey",
        brand: "Milk & Honey Gold",
        price: 9.99,
        regularPrice: 15.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F31603%2F31603_1.png",
        description: "Acondicionador nutritivo que deja el cabello suave, manejable y con un brillo radiante.",
        stock: 150,
        category: 'hair',
        subCategory: 'Milk & Honey Gold',
        beautyPoints: 10
    },

    // --- LÍNEA ONCOLOUR (8 PRODUCTOS) ---
    {
        id: 38784,
        name: "Barra de Labios Matte OnColour - Red Velvet",
        brand: "OnColour",
        price: 3.49,
        regularPrice: 9.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F38784%2F38784_1.png",
        description: "Color intenso que define tu actitud. El labial mate de OnColour ofrece una pigmentación vibrante con un acabado aterciopelado cómodo.",
        stock: 600,
        category: 'makeup',
        subCategory: 'OnColour',
        tag: 'OFERTA',
        beautyPoints: 4,
        rating: 4.7
    },
    {
        id: 38805,
        name: "Máscara de Pestañas Multi-Lash Black OnColour",
        brand: "OnColour",
        price: 4.49,
        regularPrice: 11.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F38805%2F38805_1.png",
        description: "Mirada panorámica al alcance de tu mano. Esta máscara versátil eleva, alarga y da volumen a cada pestaña.",
        stock: 550,
        category: 'makeup',
        subCategory: 'OnColour',
        tag: 'OFERTA',
        beautyPoints: 5
    },
    {
        id: 39338,
        name: "Esmalte de Uñas Gloss OnColour - Pink Satin",
        brand: "OnColour",
        price: 2.99,
        regularPrice: 6.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F39338%2F39338_1.png",
        description: "Brillo espejo y color vibrante. Los esmaltes OnColour están diseñados con la tecnología Colour Coverage.",
        stock: 900,
        category: 'makeup',
        subCategory: 'OnColour',
        tag: 'OFERTA',
        beautyPoints: 3
    },
    {
        id: 38800,
        name: "Lápiz de Ojos Dúo OnColour - Black & White",
        brand: "OnColour",
        price: 3.99,
        regularPrice: 8.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F38800%2F38800_1.png",
        description: "Doble definición para tus ojos. Un lado negro para profundidad y otro blanco para iluminar la mirada.",
        stock: 400,
        category: 'makeup',
        subCategory: 'OnColour',
        beautyPoints: 4
    },

    // --- LÍNEA GIORDANI GOLD (5 PRODUCTOS) ---
    {
        id: 38497,
        name: "Perfume Giordani Gold Essenza - Origen",
        brand: "Giordani Gold",
        price: 34.99,
        regularPrice: 58.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F38497%2F38497_1.png",
        description: "La joya de la corona de la perfumería europea. Creado en torno a la nota exclusiva de Flor de Azahar Essenza.",
        stock: 120,
        category: 'perfume',
        subCategory: 'Giordani Gold',
        tag: 'SET',
        beautyPoints: 40,
        rating: 5.0
    },
    {
        id: 32047,
        name: "Base de Maquillaje Giordani Gold Age Defying",
        brand: "Giordani Gold",
        price: 19.99,
        regularPrice: 32.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F32047%2F32047_1.png",
        description: "Más que maquillaje, es tratamiento. Esta base perfeccionadora está enriquecida con extracto de trufa blanca.",
        stock: 180,
        category: 'makeup',
        subCategory: 'Giordani Gold',
        tag: 'OFERTA',
        beautyPoints: 25
    },

    // --- LÍNEA NOVAGE+ (6 PRODUCTOS) ---
    {
        id: 41030,
        name: "Limpiador Comfort Oil-to-Milk Novage+",
        brand: "Novage+",
        price: 24.99,
        regularPrice: 35.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F41030%2F41030_1.png",
        description: "Ciencia avanzada para una limpieza impecable. Este limpiador transformador elimina impurezas con suavidad extrema.",
        stock: 140,
        category: 'skincare',
        subCategory: 'Novage+',
        tag: 'PASO 1',
        beautyPoints: 30,
        rating: 4.9
    },
    {
        id: 41032,
        name: "Sérum Anti-Imperfecciones & Envejecimiento Novage+",
        brand: "Novage+",
        price: 44.99,
        regularPrice: 65.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F41032%2F41032_1.png",
        description: "Potencia biorregeneradora para tu rostro. Reduce poros, imperfecciones y arrugas simultáneamente.",
        stock: 90,
        category: 'skincare',
        subCategory: 'Novage+',
        tag: 'PASO 3',
        beautyPoints: 50
    },

    // --- ACCESORIOS (REGALOS) ---
    {
        id: 46727,
        name: "Bolsa de Regalo Oriflame Turquesa",
        brand: "Oriflame",
        price: 1.99,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46727%2F46727_1.png",
        description: "El envoltorio perfecto para tus detalles de belleza. Elegante acabado en turquesa con logo dorado.",
        stock: 1000,
        category: 'accessories',
        subCategory: 'Oriflame'
    }
];
