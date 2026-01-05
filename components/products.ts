
import type { Product } from './types';

export const allProducts: Product[] = [
    // --- CAJAS Y LOTES DE REGALO (EL "COFRE" DE CREMAS) ---
    {
        id: 47000,
        name: "Caja Regalo Colección Cremas Universales",
        brand: "Tender Care",
        price: 19.99,
        regularPrice: 35.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47000%2F47000_1.png",
        description: "El regalo icónico: Una caja de lujo que contiene cuatro variedades de nuestra mítica Crema Universal (Original, Grosella, Manzana y Rosa).",
        stock: 150,
        category: 'accessories',
        productType: 'Caja Regalo',
        tag: 'SET'
    },
    {
        id: 48001,
        name: "Cofre de Lujo Divine Exclusive",
        brand: "Divine",
        price: 49.99,
        regularPrice: 85.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F38497%2FES%2F38497_1.png",
        description: "Set exclusivo: Parfum Divine Exclusive con cristales de Swarovski + Crema Corporal perfumada en estuche de regalo.",
        stock: 40,
        category: 'perfume',
        productType: 'Cofre',
        tag: 'SET'
    },
    {
        id: 48003,
        name: "Cofre Possess The Secret Woman",
        brand: "Possess",
        price: 42.99,
        regularPrice: 68.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46642%2F46642_1.png",
        description: "Inspirado en la diosa Idunn. Incluye Eau de Parfum y Spray Corporal en caja decorativa.",
        stock: 30,
        category: 'perfume',
        productType: 'Cofre',
        tag: 'SET'
    },

    // --- JOYERÍA NORRSKEN Y ACCESORIOS NAVIDAD ---
    {
        id: 46123,
        name: "Collar Golden Elegance Norrsken",
        brand: "Norrsken",
        price: 29.99,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46123%2F46123_1.png",
        description: "Joyería artesanal con piedras semipreciosas naturales y baño de oro de 14K.",
        stock: 25,
        category: 'accessories',
        productType: 'Collar',
        tag: 'SET'
    },
    {
        id: 46124,
        name: "Pendientes Midnight Sparkle Norrsken",
        brand: "Norrsken",
        price: 24.99,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46124%2F46124_1.png",
        description: "Cristales tallados a mano con acabado en plata de ley. Elegancia sueca pura.",
        stock: 35,
        category: 'accessories',
        productType: 'Pendientes',
        tag: 'NOVEDAD'
    },
    {
        id: 45458,
        name: "Reloj Classy Chic Norrsken",
        brand: "Norrsken",
        price: 39.99,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F45458%2F45458_1.png",
        description: "Reloj de edición limitada con maquinaria japonesa y detalles en oro rosa.",
        stock: 12,
        category: 'accessories',
        productType: 'Reloj'
    },
    {
        id: 46001,
        name: "Calcetines Térmicos Soft Cloud",
        brand: "Accessories",
        price: 7.99,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46001%2F46001_1.png",
        description: "Máxima calidez. Calcetines con forro de borreguito y diseño invernal.",
        stock: 100,
        category: 'accessories',
        productType: 'Calcetines',
        tag: 'SET'
    },

    // --- PERFUMES DE ESENCIA ROJA (LOVE POTION) ---
    {
        id: 36151,
        name: "Love Potion Eau de Parfum (Esencia Roja)",
        brand: "Love Potion",
        price: 24.99,
        regularPrice: 42.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F36151%2F36151_1.png",
        description: "La esencia de la seducción: Notas de jengibre, chocolate negro y flor de cacao en un frasco rojo icónico.",
        stock: 45,
        category: 'perfume',
        subCategory: 'Love Potion',
        tag: 'OFERTA'
    },
    {
        id: 40771,
        name: "Love Potion Blossom Kiss (Edición Roja)",
        brand: "Love Potion",
        price: 21.99,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F40771%2F40771_1.png",
        description: "Un beso aterciopelado con notas de higo maduro y vainilla suave.",
        stock: 30,
        category: 'perfume',
        subCategory: 'Love Potion'
    },

    // --- COLECCIÓN AMBER ELIXIR ---
    {
        id: 46642,
        name: "Amber Elixir Eau de Parfum",
        brand: "Amber Elixir",
        price: 24.99,
        regularPrice: 41.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46642%2F46642_1.png",
        description: "Inspirado en la calidez del ámbar báltico, con notas de mandarina y heliotropo.",
        stock: 20,
        category: 'perfume',
        subCategory: 'Amber Elixir'
    },
    {
        id: 42865,
        name: "Amber Elixir Crystal Parfum",
        brand: "Amber Elixir",
        price: 29.99,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F42865%2F42865_1.png",
        description: "Una variante fresca y lujosa con acordes marinos y ámbar blanco.",
        stock: 15,
        category: 'perfume',
        subCategory: 'Amber Elixir'
    },

    // --- MAQUILLAJE ---
    {
        id: 40657,
        name: "Perlas Iluminadoras Giordani Gold",
        brand: "Giordani Gold",
        price: 19.99,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F40657%2F40657_1.png",
        description: "Dúo de maquillaje Jordani Golds: Iluminación y bronceado en perlas artesanales.",
        stock: 50,
        category: 'makeup',
        subCategory: 'Giordani Gold'
    },
    {
        id: 38810,
        name: "Sombra de Ojos OnColour Stick",
        brand: "OnColour",
        price: 6.99,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F38810%2F38810_1.png",
        description: "Maquillaje de un color: Aplicación rápida y pigmentación intensa.",
        stock: 120,
        category: 'makeup',
        subCategory: 'OnColour'
    }
];
