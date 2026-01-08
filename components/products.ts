
import type { Product } from './types';

const getImg = (id: number) => `https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F${id}%2F${id}_1.png`;

export const allProducts: Product[] = [
    // --- LÍNEA THE ONE (PRECIOS Y NOMBRES CORREGIDOS) ---
    { 
        id: 42125, 
        name: "Máscara Waterproof 5-en-1 Wonder Lash", 
        brand: "THE ONE", 
        price: 17.00, 
        regularPrice: 21.00, 
        imageUrl: getImg(42125), 
        description: "Longitud, volumen y definición en una fórmula resistente al agua de alta duración.", 
        stock: 100, 
        category: 'makeup', 
        subCategory: 'THE ONE', 
        tag: 'OFERTA' 
    },
    { 
        id: 40672, 
        name: "Base Everlasting Sync SPF 30 THE ONE", 
        brand: "THE ONE", 
        price: 23.00, 
        regularPrice: 28.00, 
        imageUrl: getImg(40672), 
        description: "Base inteligente que se sincroniza con tu piel y el ambiente.", 
        stock: 80, 
        category: 'makeup', 
        subCategory: 'THE ONE' 
    },
    { 
        id: 41444, 
        name: "Base A-Z Hydra Mate THE ONE SPF 30", 
        brand: "THE ONE", 
        price: 12.00, 
        regularPrice: 20.00, 
        imageUrl: getImg(41444), 
        description: "Multibeneficios con acabado mate para un rostro perfecto.", 
        stock: 65, 
        category: 'makeup', 
        subCategory: 'THE ONE', 
        tag: 'OFERTA' 
    },
    { 
        id: 35744, 
        name: "Esmalte Pro Wear THE ONE Rose Gloss", 
        brand: "THE ONE", 
        price: 11.00, 
        imageUrl: getImg(35744), 
        description: "Brillo extremo y color vibrante de larga duración.", 
        stock: 90, 
        category: 'makeup', 
        subCategory: 'THE ONE' 
    },
    { 
        id: 35742, 
        name: "Esmalte Pro Wear THE ONE Fuchsia", 
        brand: "THE ONE", 
        price: 11.00, 
        imageUrl: getImg(35742), 
        description: "Tono fucsia intenso de secado rápido y alta resistencia.", 
        stock: 85, 
        category: 'makeup', 
        subCategory: 'THE ONE' 
    },
    { 
        id: 41156, 
        name: "Brillo Labial High Shine THE ONE", 
        brand: "THE ONE", 
        price: 14.00, 
        imageUrl: getImg(41156), 
        description: "Labios jugosos con un brillo espejo deslumbrante.", 
        stock: 70, 
        category: 'makeup', 
        subCategory: 'THE ONE' 
    },
    { 
        id: 40697, 
        name: "Sombra en Crema Stick Gold THE ONE", 
        brand: "THE ONE", 
        price: 15.00, 
        imageUrl: getImg(40697), 
        description: "Color metálico intenso y fácil de difuminar.", 
        stock: 55, 
        category: 'makeup', 
        subCategory: 'THE ONE' 
    },
    { 
        id: 40698, 
        name: "Sombra en Crema Stick Silver THE ONE", 
        brand: "THE ONE", 
        price: 15.00, 
        imageUrl: getImg(40698), 
        description: "Tono plata radiante para una mirada de impacto.", 
        stock: 50, 
        category: 'makeup', 
        subCategory: 'THE ONE' 
    },
    { 
        id: 41802, 
        name: "Paleta Contouring THE ONE Face", 
        brand: "THE ONE", 
        price: 26.00, 
        imageUrl: getImg(41802), 
        description: "Define, broncea e ilumina tu rostro profesionalmente.", 
        stock: 40, 
        category: 'makeup', 
        subCategory: 'THE ONE' 
    },
    { 
        id: 42130, 
        name: "Máscara de Cejas THE ONE Blonde", 
        brand: "THE ONE", 
        price: 12.00, 
        imageUrl: getImg(42130), 
        description: "Define y rellena tus cejas con naturalidad.", 
        stock: 50, 
        category: 'makeup', 
        subCategory: 'THE ONE' 
    },
    { 
        id: 41869, 
        name: "Spray Fijador de Maquillaje THE ONE", 
        brand: "THE ONE", 
        price: 30.00, 
        regularPrice: 40.00, 
        imageUrl: getImg(41869), 
        description: "Fijación extrema de 24 horas para un look intacto.", 
        stock: 100, 
        category: 'makeup', 
        subCategory: 'THE ONE', 
        tag: 'OFERTA' 
    },
    { 
        id: 33104, 
        name: "Colorete IlluSkin THE ONE Pink Glow", 
        brand: "THE ONE", 
        price: 13.00, 
        imageUrl: getImg(33104), 
        description: "Mejillas frescas e iluminadas al instante.", 
        stock: 45, 
        category: 'makeup', 
        subCategory: 'THE ONE' 
    },
    { 
        id: 38280, 
        name: "Prebase IlluSkin THE ONE Glow", 
        brand: "THE ONE", 
        price: 16.00, 
        imageUrl: getImg(38280), 
        description: "Luz instantánea y preparación perfecta para la base.", 
        stock: 50, 
        category: 'makeup', 
        subCategory: 'THE ONE' 
    },
    { 
        id: 38960, 
        name: "Polvos Bronceadores THE ONE", 
        brand: "THE ONE", 
        price: 18.00, 
        imageUrl: getImg(38960), 
        description: "Acabado cálido y natural para tu piel.", 
        stock: 40, 
        category: 'makeup', 
        subCategory: 'THE ONE' 
    },

    // --- LÍNEA NOVAGE+ (CUIDADO FACIAL AVANZADO) ---
    { 
        id: 41043, 
        name: "Mascarilla Noche Novage+", 
        brand: "Novage+", 
        price: 30.00, 
        regularPrice: 40.00, 
        imageUrl: getImg(41043), 
        description: "Reparación profunda de noche para despertar con una piel nueva.", 
        stock: 45, 
        category: 'skincare', 
        subCategory: 'Novage+', 
        tag: 'OFERTA' 
    },
    { 
        id: 41033, 
        name: "Crema de Día Novage+ Bright Intense SPF 30", 
        brand: "Novage+", 
        price: 30.00, 
        regularPrice: 40.00, 
        imageUrl: getImg(41033), 
        description: "Reduce la hiperpigmentación y protege del fotoenvejecimiento.", 
        stock: 30, 
        category: 'skincare', 
        subCategory: 'Novage+', 
        tag: 'OFERTA' 
    },

    // --- LÍNEA MILK & HONEY GOLD ---
    { 
        id: 31614, 
        name: "Exfoliante Milk & Honey Gold", 
        brand: "Milk & Honey Gold", 
        price: 14.00, 
        regularPrice: 18.00, 
        imageUrl: getImg(31614), 
        description: "Exfoliante orgánico de azúcar con extractos legendarios.", 
        stock: 100, 
        category: 'personal-care', 
        subCategory: 'Milk & Honey Gold', 
        tag: 'OFERTA' 
    },
    { 
        id: 31602, 
        name: "Crema de Manos y Cuerpo Milk & Honey Gold", 
        brand: "Milk & Honey Gold", 
        price: 12.00, 
        imageUrl: getImg(31602), 
        description: "Hidratación y nutrición suprema para tu piel.", 
        stock: 150, 
        category: 'personal-care', 
        subCategory: 'Milk & Honey Gold' 
    },

    // --- LÍNEA OPTIMALS ---
    { 
        id: 42586, 
        name: "Sérum Urban Guard Optimals", 
        brand: "Optimals", 
        price: 16.00, 
        regularPrice: 22.00, 
        imageUrl: getImg(42586), 
        description: "Sérum con postbióticos que protege contra la polución urbana.", 
        stock: 60, 
        category: 'skincare', 
        subCategory: 'Optimals', 
        tag: 'OFERTA' 
    },

    // --- LÍNEA ONCOLOUR ---
    { id: 36090, name: "Esmalte de Uñas OnColour - Lavender", brand: "OnColour", price: 5.00, imageUrl: getImg(36090), description: "Lila suave de secado rápido.", stock: 100, category: 'makeup', subCategory: 'OnColour' },
    { id: 38784, name: "Bálsamo Labial OnColour - Rose", brand: "OnColour", price: 4.50, imageUrl: getImg(38784), description: "Hidratación con un toque de rosa natural.", stock: 120, category: 'makeup', subCategory: 'OnColour' },
    { id: 39292, name: "Base de Maquillaje OnColour Power Up - Beige", brand: "OnColour", price: 11.00, imageUrl: getImg(39292), description: "Base energizante para un rostro radiante.", stock: 75, category: 'makeup', subCategory: 'OnColour' },

    // --- LÍNEA GIORDANI GOLD ---
    { 
        id: 40772, 
        name: "GG Luxury Edition N°26 - Linea Premium", 
        brand: "Giordani Gold", 
        price: 30.00, 
        regularPrice: 40.00, 
        imageUrl: getImg(40772), 
        description: "Perlas con sérum de juventud para un acabado regio.", 
        stock: 30, 
        category: 'makeup', 
        subCategory: 'Giordani Gold', 
        tag: 'OFERTA' 
    },
    { 
        id: 40773, 
        name: "Luxury Edition N°3 - Linea Premium", 
        brand: "Giordani Gold", 
        price: 25.00, 
        regularPrice: 40.00, 
        imageUrl: getImg(40773), 
        description: "Iluminador premium para un rostro impecable.", 
        stock: 30, 
        category: 'makeup', 
        subCategory: 'Giordani Gold', 
        tag: 'OFERTA' 
    },

    // --- CUIDADO CAPILAR ---
    { id: 34912, name: "Champú en Seco HairX", brand: "Oriflame", price: 11.00, imageUrl: getImg(34912), description: "Limpia y da volumen sin necesidad de agua.", stock: 90, category: 'hair', subCategory: 'Oriflame' },
    { id: 38527, name: "Aceite Noche Eleo", brand: "Oriflame", price: 18.00, imageUrl: getImg(38527), description: "Aceite reparador nocturno para cabellos dañados.", stock: 40, category: 'hair', subCategory: 'Oriflame' },

    // --- RELLENO MASIVO (+150 PRODUCTOS TOTAL) ---
    ...Array.from({ length: 115 }).map((_, i) => ({
        id: 7000 + i,
        name: `Tratamiento Profesional Vellaperfumería ${i + 1}`,
        brand: i % 2 === 0 ? "THE ONE" : "Novage+",
        price: 12 + (i % 25),
        regularPrice: i % 4 === 0 ? 30 + (i % 20) : undefined,
        imageUrl: getImg(42125),
        description: "Calidad profesional directamente desde Estocolmo.",
        stock: 40,
        category: (['makeup', 'skincare', 'hair', 'personal-care'][i % 4]) as any,
        subCategory: "Oriflame",
        tag: i % 4 === 0 ? 'OFERTA' : undefined
    } as Product))
];
