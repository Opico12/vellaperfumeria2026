
import type { Product } from './types';

export const getImg = (id: number | string) => `https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F${id}%2F${id}_1.png`;

// --- CATÁLOGO MAESTRO INTEGRAL VELLAPERFUMERIA 2026 ---
// Incluye TODAS las referencias dictadas sin límites de visualización.
export const allProducts: Product[] = ([
    // --- ICONOS DE TRATAMIENTO: DIAMOND CELLULAR & ROYAL VELVET ---
    { id: 13659, name: "Crema Antienvejecimiento Diamond Cellular", brand: "Diamond Cellular", price: 39.99, imageUrl: getImg(13659), category: "skincare", stock: 100, description: "Tratamiento de lujo con auténtico polvo de diamante para una piel radiante." },
    { id: 18437, name: "Tratamiento Restaurador de Noche Diamond Cellular", brand: "Diamond Cellular", price: 39.99, imageUrl: getImg(18437), category: "skincare", stock: 100 },
    { id: 21339, name: "Solución Micelar Diamond Cellular", brand: "Diamond Cellular", price: 19.99, imageUrl: getImg(21339), category: "skincare", stock: 100 },
    { id: 481017, name: "Crema de Noche Reafirmante Regal Velvet Edición Especial", brand: "Royal Velvet", price: 23.99, imageUrl: getImg(481017), category: "skincare", stock: 100, tag: "OFERTA" },
    { id: 47005, name: "Crema de Día Reafirmante Royal Velvet SPF 20", brand: "Royal Velvet", price: 43.00, imageUrl: getImg(47005), category: "skincare", stock: 100 },
    { id: 47007, name: "Contorno de Ojos Reafirmante Royal Velvet", brand: "Royal Velvet", price: 30.00, imageUrl: getImg(47007), category: "skincare", stock: 100 },

    // --- NOVAGE+ & PRO-COLLAGEN ---
    { id: 42263, name: "Bruma Facial Micro Essence Pro-Collagen Novage+", brand: "Novage+", price: 21.99, imageUrl: getImg(42263), category: "skincare", stock: 100 },
    { id: 42444, name: "Sérum de Hidratación Intensa Pro-Collagen Novage+", brand: "Novage+", price: 49.00, imageUrl: getImg(42444), category: "skincare", stock: 100 },
    { id: 42253, name: "Mascarilla Revitalizante Intensiva Nocturna Novage+", brand: "Novage+", price: 29.99, imageUrl: getImg(42253), category: "skincare", stock: 100 },
    { id: 47104, name: "Peeling Pro-Collagen Novage+ (AHA 6%)", brand: "Novage+", price: 34.99, imageUrl: getImg(47104), category: "skincare", stock: 100 },
    { id: 45248, name: "Sérum Eclat Novage+", brand: "Novage+", price: 49.00, imageUrl: getImg(45248), category: "skincare", stock: 100 },
    { id: 45243, name: "Crema Hidratante Ligera Eclat Novage+", brand: "Novage+", price: 36.99, imageUrl: getImg(45243), category: "skincare", stock: 100 },
    { id: 45245, name: "Crema Hidratante Rica Eclat Novage+", brand: "Novage+", price: 36.99, imageUrl: getImg(45245), category: "skincare", stock: 100 },

    // --- OPTIMALS LINEA COMPLETA ---
    { id: 46543, name: "Limpiador Foaming Gel Optimals", brand: "Optimals", price: 11.99, imageUrl: getImg(46543), category: "skincare", stock: 100 },
    { id: 46900, name: "Limpiador Soft Cream Optimals", brand: "Optimals", price: 11.99, imageUrl: getImg(46900), category: "skincare", stock: 100 },
    { id: 45292, name: "Multiproducto SPF 50 Daily Glow Optimals", brand: "Optimals", price: 16.99, imageUrl: getImg(45292), category: "skincare", stock: 100 },
    { id: 45284, name: "Crema Hidratante Ligera Hydra Radiance Optimals", brand: "Optimals", price: 14.99, imageUrl: getImg(45284), category: "skincare", stock: 100 },
    { id: 45285, name: "Crema Hidratante Rica Hydra Radiance Optimals", brand: "Optimals", price: 14.99, imageUrl: getImg(45285), category: "skincare", stock: 100 },
    { id: 47437, name: "Parches Faciales de Gel Hydra Radiance Optimals", brand: "Optimals", price: 3.99, imageUrl: getImg(47437), category: "skincare", stock: 100 },
    { id: 45326, name: "Crema Hidratante SPF 25 BeYoutiful Optimals", brand: "Optimals", price: 15.99, imageUrl: getImg(45326), category: "skincare", stock: 100 },
    { id: 45291, name: "Contorno de Ojos y Labios Optimals", brand: "Optimals", price: 12.99, imageUrl: getImg(45291), category: "skincare", stock: 100 },

    // --- FRAGANCIAS DE IMPACTO ---
    { id: 46060, name: "Perfume All or Nothing Amplified", brand: "Exclusive", price: 46.06, regularPrice: 62.99, imageUrl: getImg(46060), category: "perfume", stock: 100, tag: "NOVEDAD" },
    { id: 47020, name: "Crema Corporal Perfumada All or Nothing Amplified", brand: "Exclusive", price: 9.99, imageUrl: getImg(47020), category: "personal-care", stock: 100 },
    { id: 46047, name: "Eau de Parfum Love Potion Cherry On Top", brand: "Love Potion", price: 25.99, imageUrl: getImg(46047), category: "perfume", stock: 100 },
    { id: 46979, name: "Crema de Manos Love Potion Cherry On Top", brand: "Love Potion", price: 7.99, imageUrl: getImg(46979), category: "personal-care", stock: 100 },
    { id: 47511, name: "Perfume Giordani Gold Essenza", brand: "Giordani Gold", price: 47.51, imageUrl: getImg(47511), category: "perfume", stock: 100 },
    { id: 47011, name: "Crema Corporal Perfumada Giordani Gold Essenza", brand: "Giordani Gold", price: 9.99, imageUrl: getImg(47011), category: "personal-care", stock: 100 },
    { id: 42806, name: "Bruma Corporal Giordani Gold Essenza", brand: "Giordani Gold", price: 7.99, imageUrl: getImg(42806), category: "personal-care", stock: 100 },
    { id: 48079, name: "Lote Giordani Gold Essenza (Perfume + Bruma + Caja)", brand: "Giordani Gold", price: 48.99, imageUrl: getImg(48079), category: "perfume", tag: "SET", stock: 100 },
    { id: 46052, name: "Eau de Parfum Tender", brand: "Scents", price: 29.99, imageUrl: getImg(46052), category: "perfume", stock: 100 },
    { id: 47718, name: "O Sweet Marshmallow 47718", brand: "Scents", price: 17.99, imageUrl: getImg(47718), category: "perfume", stock: 100, tag: "NOVEDAD" },
    { id: 42520, name: "Brick Aura", brand: "Joyce", price: 15.99, imageUrl: getImg(42520), category: "perfume", stock: 100 },
    { id: 42508, name: "Joyce Turquoise", brand: "Joyce", price: 15.99, imageUrl: getImg(42508), category: "perfume", stock: 100 },
    { id: 37766, name: "Eau de Toilette Joyce Rose", brand: "Joyce", price: 15.99, imageUrl: getImg(37766), category: "perfume", stock: 100 },
    { id: 42499, name: "Eau de Toilette Classique Weekend", brand: "Eclat", price: 26.99, imageUrl: getImg(42499), category: "perfume", stock: 100 },
    { id: 47499, name: "Eau de Toilette Elvie Midnight Magic", brand: "Elvie", price: 22.99, imageUrl: getImg(47499), category: "perfume", stock: 100 },
    { id: 38497, name: "Eau de Parfum Divine Idol", brand: "Divine", price: 26.99, imageUrl: getImg(38497), category: "perfume", stock: 100 },

    // --- FRAGANCIAS HOMBRE ---
    { id: 45967, name: "Perfume Giordani Gold Man Elixir", brand: "Giordani Gold", price: 45.99, imageUrl: getImg(45967), category: "men", stock: 100 },
    { id: 46064, name: "Nordic Waters Infinite Blue para él", brand: "Nordic Waters", price: 29.99, imageUrl: getImg(46064), category: "men", stock: 100 },
    { id: 42490, name: "Eau de Toilette Ascendant", brand: "Ascendant", price: 26.99, imageUrl: getImg(42490), category: "men", stock: 100 },
    { id: 30058, name: "Eau de Toilette Citrus Tonic", brand: "Men Collection", price: 19.99, imageUrl: getImg(30058), category: "men", stock: 100 },
    { id: 42151, name: "Eau de Toilette Dark Wood Men Collection", brand: "Men Collection", price: 19.99, imageUrl: getImg(42151), category: "men", stock: 100 },
    { id: 46795, name: "Eau de Toilette Class Home Weekend Azure", brand: "Eclat", price: 26.99, imageUrl: getImg(46795), category: "men", stock: 100 },
    { id: 35651, name: "Eau de Toilette Class Yours", brand: "Scents", price: 22.99, imageUrl: getImg(35651), category: "men", stock: 100 },
    { id: 47502, name: "Eau de Parfum Mister Giordani Aqua", brand: "Giordani Gold", price: 29.99, imageUrl: getImg(47502), category: "men", stock: 100 },

    // --- MAQUILLAJE ETERNAL GLOW GIORDANI GOLD ---
    { id: 42101, name: "Eternal Glow GG - Vainilla Neutral", brand: "Giordani Gold", price: 19.99, imageUrl: getImg(42101), category: "makeup", stock: 100 },
    { id: 42102, name: "Eternal Glow GG - Vainilla Neutral (Ref 42102)", brand: "Giordani Gold", price: 19.99, imageUrl: getImg(42102), category: "makeup", stock: 100 },
    { id: 42103, name: "Eternal Glow GG - Porcelana Warm", brand: "Giordani Gold", price: 19.99, imageUrl: getImg(42103), category: "makeup", stock: 100 },
    { id: 42105, name: "Eternal Glow GG - Marble Neutral", brand: "Giordani Gold", price: 19.99, imageUrl: getImg(42105), category: "makeup", stock: 100 },
    { id: 42106, name: "Eternal Glow GG - Light Beige Neutral", brand: "Giordani Gold", price: 19.99, imageUrl: getImg(42106), category: "makeup", stock: 100 },
    { id: 42107, name: "Eternal Glow GG - Leggy Bodhi Neutral", brand: "Giordani Gold", price: 19.99, imageUrl: getImg(42107), category: "makeup", stock: 100 },
    { id: 43243, name: "Maquillaje Eternal Glow SPF 25 - Vainilla Neutral", brand: "Giordani Gold", price: 21.99, imageUrl: getImg(43243), category: "makeup", stock: 100 },
    { id: 43244, name: "Maquillaje Eternal Glow SPF 25 - Porcelana Warm", brand: "Giordani Gold", price: 21.99, imageUrl: getImg(43244), category: "makeup", stock: 100 },
    { id: 43245, name: "Maquillaje Eternal Glow SPF 25 - Light Beige Neutral", brand: "Giordani Gold", price: 21.99, imageUrl: getImg(43245), category: "makeup", stock: 100 },
    { id: 43246, name: "Maquillaje Eternal Glow SPF 25 - Soft Sand", brand: "Giordani Gold", price: 21.99, imageUrl: getImg(43246), category: "makeup", stock: 100 },
    { id: 43247, name: "Maquillaje Eternal Glow SPF 25 - Icy Neutral", brand: "Giordani Gold", price: 21.99, imageUrl: getImg(43247), category: "makeup", stock: 100 },
    { id: 43248, name: "Maquillaje Eternal Glow SPF 25 - Natural Base", brand: "Giordani Gold", price: 21.99, imageUrl: getImg(43248), category: "makeup", stock: 100 },
    { id: 43249, name: "Maquillaje Eternal Glow SPF 25 - Base One", brand: "Giordani Gold", price: 21.99, imageUrl: getImg(43249), category: "makeup", stock: 100 },

    // --- MAQUILLAJE THE ONE ---
    { id: 43295, name: "Barra de Labios Colour Stylist Super Pout", brand: "THE ONE", price: 9.99, imageUrl: getImg(43295), category: "makeup", stock: 100 },
    { id: 46928, name: "Sombra de Ojos Colour Unlimited", brand: "THE ONE", price: 7.99, imageUrl: getImg(46928), category: "makeup", stock: 100 },
    { id: 48650, name: "Máscara Winter Wonderland Lash Waterproof", brand: "THE ONE", price: 9.99, imageUrl: getImg(48650), category: "makeup", stock: 100 },
    { id: 38863, name: "Barra de Labios Ultra-Glossy - Crepping Rose", brand: "THE ONE", price: 7.99, imageUrl: getImg(38863), category: "makeup", stock: 100 },
    { id: 38870, name: "Barra de Labios Ultra-Glossy - Cherry Cruise", brand: "THE ONE", price: 7.99, imageUrl: getImg(38870), category: "makeup", stock: 100 },

    // --- SETS & OFERTAS ---
    { id: 36152, name: "Crema Universal con Aceite de Frambuesa", brand: "Oriflame", price: 7.99, imageUrl: getImg(36152), category: "personal-care", stock: 100 },
    { id: 47439, name: "Crema Universal con Ciruela Dulce", brand: "Oriflame", price: 7.99, imageUrl: getImg(47439), category: "personal-care", stock: 100 },
    { id: 154741, name: "Lote Crema Universal + Barra de Labios", brand: "Varios", price: 14.99, imageUrl: getImg(36152), category: "makeup", tag: "SET", stock: 100 },

    // --- HERRAMIENTAS EXCLUSIVE ---
    { id: 47422, name: "Revitalizador de Ojos Oriflame Exclusive", brand: "Accesorios", price: 8.99, imageUrl: getImg(47422), category: "accessories", stock: 100 },
    { id: 48918, name: "Masajeador Facial Arctic Ritual", brand: "Accesorios", price: 19.99, imageUrl: getImg(48918), category: "accessories", stock: 100 },
    { id: 47419, name: "Brocha de Crema Hidratante y Sérum Exclusive", brand: "Accesorios", price: 7.99, imageUrl: getImg(47419), category: "accessories", stock: 100 },
    { id: 47420, name: "Espátula Mascarilla Oriflame Exclusive", brand: "Accesorios", price: 6.29, imageUrl: getImg(47420), category: "accessories", stock: 100 },
    { id: 47524, name: "Banda para el pelo skincare", brand: "Accesorios", price: 4.99, imageUrl: getImg(47524), category: "accessories", stock: 100 },
    { id: 47517, name: "Limpiador facial de silicona", brand: "Accesorios", price: 5.99, imageUrl: getImg(47517), category: "accessories", stock: 100 },

    // --- REGALOS & FESTIVE ---
    { id: 48954, name: "Reloj Glitters of Love", brand: "Accesorios", price: 34.99, imageUrl: getImg(48954), category: "accessories", stock: 50 },
    { id: 48952, name: "Joyas Pearl Glitters of Love", brand: "Accesorios", price: 19.99, imageUrl: getImg(48952), category: "accessories", stock: 50 },
    { id: 48953, name: "Set Pendientes Glitters of Love (4 pares)", brand: "Accesorios", price: 12.99, imageUrl: getImg(48953), category: "accessories", stock: 50 },
    { id: 48975, name: "Bolsa sobre de regalo Festive", brand: "Accesorios", price: 3.99, imageUrl: getImg(48975), category: "accessories", stock: 1000 },
    { id: 48977, name: "Sobre de regalo Festive", brand: "Accesorios", price: 2.99, imageUrl: getImg(48977), category: "accessories", stock: 1000 },
    { id: 48970, name: "Caja de regalo Festive", brand: "Accesorios", price: 10.00, imageUrl: getImg(48970), category: "accessories", stock: 1000 },
    { id: 48908, name: "Neceser Sugar & Spice Edition", brand: "Accesorios", price: 10.99, regularPrice: 12.99, imageUrl: getImg(48908), category: "accessories", stock: 500, tag: "OFERTA" }
] as Product[]).sort((a,b) => a.id - b.id);
