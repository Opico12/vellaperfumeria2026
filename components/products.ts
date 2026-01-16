
import type { Product } from './types';

export const getImg = (id: number | string) => `https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F${id}%2F${id}_1.png`;

export const allProducts: Product[] = [
    // --- CUIDADO FACIAL (NOVAGE+ & OPTIMALS) ---
    {
        id: 41037,
        name: "Sérum Novage+ Bright Intense Bio-Activating",
        brand: "Novage+",
        price: 49.00,
        regularPrice: 64.00,
        imageUrl: getImg(41037),
        category: "skincare",
        stock: 50,
        description: "Potente sérum que reduce la hiperpigmentación y unifica el tono de la piel mediante tecnología bioactiva."
    },
    {
        id: 41029,
        name: "Gel Limpiador Novage+ Refresh Bio-Lipid System",
        brand: "Novage+",
        price: 23.87,
        regularPrice: 30.00,
        imageUrl: getImg(41029),
        category: "skincare",
        stock: 100,
        description: "Limpiador suave que protege la barrera cutánea mientras elimina impurezas."
    },
    {
        id: 13659,
        name: "Crema Antienvejecimiento Diamond Cellular",
        brand: "Diamond Cellular",
        price: 43.89,
        imageUrl: getImg(13659),
        category: "skincare",
        stock: 40,
        description: "Tratamiento de lujo con polvo de diamante real para una piel radiante."
    },

    // --- CUERPO Y BAÑO (CORRECCIONES SOLICITADAS) ---
    {
        id: 31602,
        name: "Crema para Manos y Cuerpo Milk & Honey Gold",
        brand: "Milk & Honey Gold",
        price: 19.00,
        regularPrice: 24.00,
        imageUrl: getImg(31602),
        category: "personal-care",
        stock: 500,
        description: "Hidratación legendaria con extractos orgánicos de leche y miel. Textura suntuosa."
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
        description: "Exfoliante premium con cristales de azúcar que suavizan y nutren la piel."
    },
    {
        id: 32635,
        name: "Crema de Manos Hidratante con Aceite de Árnica",
        brand: "Oriflame",
        price: 3.99,
        regularPrice: 11.00,
        imageUrl: getImg(32635),
        category: "personal-care",
        tag: "OFERTA",
        stock: 150,
        description: "Alivio inmediato y protección para manos expuestas y secas."
    },
    {
        id: 31115,
        name: "Jabón Líquido Purificante Beautanicals",
        brand: "Beautanicals",
        price: 15.00,
        regularPrice: 19.00,
        imageUrl: getImg(31115),
        category: "personal-care",
        stock: 80,
        description: "Limpieza botánica pura con minerales esenciales y extracto de madreselva."
    },
    {
        id: 42521,
        name: "Desodorante Roll-On North for Men Subzero",
        brand: "North for Men",
        price: 5.99,
        imageUrl: getImg(42521),
        category: "men",
        stock: 100,
        description: "Frescura ártica extrema y protección 72h para el hombre activo."
    },
    {
        id: 31119,
        name: "Eau de Toilette Elvie",
        brand: "Elvie",
        price: 24.99,
        regularPrice: 41.00,
        imageUrl: getImg(31119),
        category: "perfume",
        stock: 45,
        description: "Fragancia icónica con notas de muguete, flores blancas y almizcle blanco."
    },

    // --- ACCESORIOS (CORRECCIONES SOLICITADAS) ---
    {
        id: 31315,
        name: "Pendientes Classic Pearl",
        brand: "Accessories",
        price: 9.99,
        imageUrl: getImg(31315),
        category: "accessories",
        stock: 20,
        description: "Elegantes pendientes de perla de diseño atemporal."
    },
    {
        id: 31324,
        name: "Reloj Minimalista para Ella",
        brand: "Accessories",
        price: 29.99,
        imageUrl: getImg(31324),
        category: "accessories",
        stock: 15,
        description: "Reloj de pulsera con acabado metálico y diseño sueco moderno."
    },

    // --- PERFUMERÍA (VOLARE Y OTROS) ---
    {
        id: 31493,
        name: "Eau de Parfum Volare Forever",
        brand: "Volare",
        price: 22.00,
        regularPrice: 43.00,
        imageUrl: getImg(31493),
        category: "perfume",
        tag: "OFERTA",
        stock: 60,
        description: "Aroma de rosas blancas y almendras dulces. La feminidad eterna."
    },
    {
        id: 31495,
        name: "Eau de Parfum Volare",
        brand: "Volare",
        price: 22.00,
        regularPrice: 43.00,
        imageUrl: getImg(31495),
        category: "perfume",
        stock: 55,
        description: "El perfume icónico de la rosa. Elegancia romántica y sofisiticada."
    },

    // --- MAQUILLAJE (CORRECCIONES) ---
    {
        id: 31625,
        name: "Barra de Labios The ONE Colour Stylist",
        brand: "The ONE",
        price: 11.00,
        imageUrl: getImg(31625),
        category: "makeup",
        stock: 90,
        description: "Color intenso y cremosidad total para tus labios."
    },
    {
        id: 42119,
        name: "Máscara de Pestañas WonderLash 5-en-1 HD",
        brand: "The ONE",
        price: 13.00,
        imageUrl: getImg(42119),
        category: "makeup",
        stock: 200,
        description: "Nuestra máscara más vendida ahora con definición de alta fidelidad."
    },

    // --- CUIDADO PERSONAL EXTRA ---
    {
        id: 31673,
        name: "Pasta de Dientes Optifresh Menta Refrescante",
        brand: "Optifresh",
        price: 4.99,
        imageUrl: getImg(31673),
        category: "personal-care",
        stock: 300,
        description: "Protección total y aliento fresco duradero con sabor a menta natural."
    },
    {
        id: 46990,
        name: "Mascarilla Facial Sandía Love Nature (Sobre)",
        brand: "Love Nature",
        price: 2.30,
        imageUrl: getImg(46990),
        category: "skincare",
        tag: "OFERTA",
        stock: 1000,
        description: "Mascarilla refrescante de sandía orgánica. Hidratación instantánea."
    }
];
