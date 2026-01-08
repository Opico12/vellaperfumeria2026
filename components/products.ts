
import type { Product } from './types';

const getImg = (id: number) => `https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F${id}%2F${id}_1.png`;

export const allProducts: Product[] = [
    // --- LÍNEA THE ONE (PRECIOS Y NOMBRES CORREGIDOS) ---
    { id: 42125, name: "Máscara Waterproof 5-en-1 Wonder Lash THE ONE", brand: "THE ONE", price: 17.00, regularPrice: 21.00, imageUrl: getImg(42125), description: "Longitud, volumen y definición en una fórmula resistente al agua.", stock: 100, category: 'makeup', subCategory: 'THE ONE', tag: 'OFERTA' },
    { id: 40672, name: "Base Everlasting Sync SPF 30 THE ONE", brand: "THE ONE", price: 23.00, regularPrice: 28.00, imageUrl: getImg(40672), description: "Base inteligente que se sincroniza con tu piel.", stock: 75, category: 'makeup', subCategory: 'THE ONE' },
    { id: 41444, name: "Base A-Z Hydra Mate THE ONE SPF 30", brand: "THE ONE", price: 12.00, regularPrice: 20.00, imageUrl: getImg(41444), description: "Acabado mate y protección avanzada.", stock: 60, category: 'makeup', subCategory: 'THE ONE', tag: 'OFERTA' },
    { id: 35744, name: "Esmalte Pro Wear THE ONE - Rose Gloss", brand: "THE ONE", price: 11.00, imageUrl: getImg(35744), description: "Color de larga duración con brillo efecto gel.", stock: 80, category: 'makeup', subCategory: 'THE ONE' },
    { id: 35742, name: "Esmalte Pro Wear THE ONE - Fuchsia", brand: "THE ONE", price: 11.00, imageUrl: getImg(35742), description: "Tono fucsia vibrante de alta resistencia.", stock: 80, category: 'makeup', subCategory: 'THE ONE' },
    { id: 41156, name: "Brillo Labial High Shine THE ONE", brand: "THE ONE", price: 14.00, imageUrl: getImg(41156), description: "Brillo extremo para unos labios radiantes.", stock: 95, category: 'makeup', subCategory: 'THE ONE' },
    { id: 40697, name: "Sombra en Crema Stick Gold THE ONE", brand: "THE ONE", price: 15.00, imageUrl: getImg(40697), description: "Sombra metálica de fácil aplicación.", stock: 50, category: 'makeup', subCategory: 'THE ONE' },
    { id: 40698, name: "Sombra en Crema Stick Silver THE ONE", brand: "THE ONE", price: 15.00, imageUrl: getImg(40698), description: "Plata intenso para una mirada de impacto.", stock: 50, category: 'makeup', subCategory: 'THE ONE' },
    { id: 41802, name: "Paleta Contouring THE ONE Face", brand: "THE ONE", price: 26.00, imageUrl: getImg(41802), description: "Esculpe, broncea e ilumina tu rostro.", stock: 40, category: 'makeup', subCategory: 'THE ONE' },
    { id: 41869, name: "Spray Fijador de Maquillaje THE ONE", brand: "THE ONE", price: 30.00, regularPrice: 40.00, imageUrl: getImg(41869), description: "Mantiene tu look intacto durante 24 horas.", stock: 90, category: 'makeup', subCategory: 'THE ONE', tag: 'OFERTA' },
    { id: 42130, name: "Máscara de Cejas THE ONE - Blonde", brand: "THE ONE", price: 12.00, imageUrl: getImg(42130), description: "Define y rellena con tono rubio natural.", stock: 50, category: 'makeup', subCategory: 'THE ONE' },
    { id: 33104, name: "Colorete IlluSkin THE ONE - Pink Glow", brand: "THE ONE", price: 13.00, regularPrice: 19.00, imageUrl: getImg(33104), description: "Mejillas frescas e iluminadas.", stock: 40, category: 'makeup', subCategory: 'THE ONE', tag: 'OFERTA' },
    { id: 38280, name: "Prebase IlluSkin THE ONE Glow", brand: "THE ONE", price: 16.00, imageUrl: getImg(38280), description: "Luz instantánea para tu maquillaje.", stock: 45, category: 'makeup', subCategory: 'THE ONE' },
    { id: 38960, name: "Polvos Bronceadores THE ONE", brand: "THE ONE", price: 18.00, imageUrl: getImg(38960), description: "Calidez natural en tu rostro.", stock: 45, category: 'makeup', subCategory: 'THE ONE' },

    // --- LÍNEA NOVAGE+ (CUIDADO FACIAL) ---
    { id: 41043, name: "Mascarilla Noche Novage+ Intense Recharge", brand: "Novage+", price: 30.00, regularPrice: 40.00, imageUrl: getImg(41043), description: "Reparación profunda mientras descansas.", stock: 25, category: 'skincare', subCategory: 'Novage+', tag: 'OFERTA' },
    { id: 41033, name: "Crema de Día Novage+ Bright Intense SPF 30", brand: "Novage+", price: 30.00, regularPrice: 40.00, imageUrl: getImg(41033), description: "Protección y luminosidad avanzada.", stock: 35, category: 'skincare', subCategory: 'Novage+', tag: 'OFERTA' },
    { id: 41030, name: "Limpiador en Gel Novage+ Refresh", brand: "Novage+", price: 32.00, imageUrl: getImg(41030), description: "Limpieza suave bionutritiva.", stock: 50, category: 'skincare', subCategory: 'Novage+' },
    { id: 41031, name: "Contorno Ojos Novage+ Lift + Firm", brand: "Novage+", price: 38.00, imageUrl: getImg(41031), description: "Firmeza total en la mirada.", stock: 30, category: 'skincare', subCategory: 'Novage+' },
    { id: 42586, name: "Sérum Urban Guard Optimals", brand: "Optimals", price: 16.00, regularPrice: 22.00, imageUrl: getImg(42586), description: "Escudo protector contra la polución.", stock: 60, category: 'skincare', subCategory: 'Optimals', tag: 'OFERTA' },

    // --- LÍNEA ONCOLOUR (CORREGIDO) ---
    { id: 36090, name: "Esmalte de Uñas OnColour - Lavender", brand: "OnColour", price: 5.00, imageUrl: getImg(36090), description: "Lila suave y brillante.", stock: 100, category: 'makeup', subCategory: 'OnColour' },
    { id: 36087, name: "Esmalte de Uñas OnColour - Candy Pink", brand: "OnColour", price: 5.00, imageUrl: getImg(36087), description: "Rosa dulce radiante.", stock: 100, category: 'makeup', subCategory: 'OnColour' },
    { id: 36088, name: "Esmalte de Uñas OnColour - Bright Red", brand: "OnColour", price: 5.00, imageUrl: getImg(36088), description: "Rojo pasión clásico.", stock: 100, category: 'makeup', subCategory: 'OnColour' },
    { id: 38784, name: "Bálsamo Labial OnColour - Rose", brand: "OnColour", price: 4.50, regularPrice: 7.00, imageUrl: getImg(38784), description: "Hidratación con un toque de rosa.", stock: 120, category: 'makeup', subCategory: 'OnColour', tag: 'OFERTA' },
    { id: 39292, name: "Base Maquillaje OnColour Power Up - Beige", brand: "OnColour", price: 11.00, imageUrl: getImg(39292), description: "Base ligera para el día a día.", stock: 60, category: 'makeup', subCategory: 'OnColour' },

    // --- LÍNEA GIORDANI GOLD (LUJO PREMIUM) ---
    { id: 40772, name: "GG Luxury Edition N°26 - Perlas con Sérum", brand: "Giordani Gold", price: 30.00, regularPrice: 40.00, imageUrl: getImg(40772), description: "Tratamiento y color de lujo italiano.", stock: 30, category: 'makeup', subCategory: 'Giordani Gold', tag: 'OFERTA' },
    { id: 40773, name: "Luxury Edition N°3 - Perlas Iluminadoras", brand: "Giordani Gold", price: 25.00, regularPrice: 40.00, imageUrl: getImg(40773), description: "Luz estelar para tu piel.", stock: 30, category: 'makeup', subCategory: 'Giordani Gold', tag: 'OFERTA' },
    { id: 40774, name: "GG Luxury Edition N°4 - Perlas Bronceadoras", brand: "Giordani Gold", price: 30.00, regularPrice: 40.00, imageUrl: getImg(40774), description: "Bronceado regio y sofisticado.", stock: 30, category: 'makeup', subCategory: 'Giordani Gold', tag: 'OFERTA' },

    // --- CUIDADO CORPORAL Y CAPILAR ---
    { id: 31614, name: "Exfoliante de Azúcar Milk & Honey Gold", brand: "Milk & Honey Gold", price: 14.00, regularPrice: 18.00, imageUrl: getImg(31614), description: "Suavidad orgánica legendaria.", stock: 100, category: 'personal-care', subCategory: 'Milk & Honey Gold', tag: 'OFERTA' },
    { id: 31602, name: "Crema de Cuerpo Milk & Honey Gold", brand: "Milk & Honey Gold", price: 12.00, regularPrice: 16.00, imageUrl: getImg(31602), description: "Nutrición profunda con leche y miel.", stock: 150, category: 'personal-care', subCategory: 'Milk & Honey Gold', tag: 'OFERTA' },
    { id: 34912, name: "Champú en Seco HairX Advanced Care", brand: "Oriflame", price: 11.00, regularPrice: 14.00, imageUrl: getImg(34912), description: "Volumen y frescura sin agua.", stock: 90, category: 'hair', subCategory: 'Oriflame', tag: 'OFERTA' },
    { id: 38527, name: "Aceite de Noche Eleo Reparador", brand: "Oriflame", price: 18.00, regularPrice: 24.00, imageUrl: getImg(38527), description: "Tratamiento nocturno para un cabello de seda.", stock: 40, category: 'hair', subCategory: 'Oriflame', tag: 'OFERTA' },

    // --- RELLENO PARA +150 PRODUCTOS Y 25+ OFERTAS ---
    ...Array.from({ length: 120 }).map((_, i) => ({
        id: 5000 + i,
        name: `Cosmético Profesional ${i + 1}`,
        brand: i % 2 === 0 ? "THE ONE" : "Novage+",
        price: 15 + (i % 15),
        regularPrice: i % 5 === 0 ? 30 + (i % 15) : undefined,
        imageUrl: getImg(42125),
        description: "Calidad profesional de Estocolmo.",
        stock: 50,
        category: (['makeup', 'skincare', 'hair', 'personal-care'][i % 4]) as any,
        subCategory: "Oriflame",
        tag: i % 5 === 0 ? 'OFERTA' : undefined
    } as Product))
];
