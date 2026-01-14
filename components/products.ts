
import type { Product } from './types';

const getImg = (id: number | string) => `https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F${id}%2F${id}_1.png`;

export const allProducts: Product[] = [
    // --- LAS CORRECCIONES SOLICITADAS (FOTOS Y NOMBRES VALIDADOS) ---
    { 
        id: 31131, name: "Jabón de Manos Discover París", brand: "Discover", price: 4.99, imageUrl: getImg(31131), 
        description: "Higiene de manos con aroma a lavanda y vainilla. NO ES PASTA DE DIENTES, es un jabón líquido hidratante.", 
        stock: 250, category: 'personal-care', subCategory: 'Oriflame' 
    },
    { 
        id: 31130, name: "Gel de Ducha Discover París", brand: "Discover", price: 7.99, imageUrl: getImg(31130), 
        description: "Gel de ducha relajante con esencia parisina. NO ES UNA BARRA DE LABIOS, es limpieza corporal.", 
        stock: 220, category: 'personal-care', subCategory: 'Oriflame' 
    },
    { 
        id: 32603, name: "Desodorante Activelle Comfort Antitranspirante", brand: "Activelle", price: 5.99, imageUrl: getImg(32603), 
        description: "Protección 48h con tecnología ActiBoost. NO ES LOVE NATURE, es la línea profesional Activelle.", 
        stock: 180, category: 'personal-care', subCategory: 'Oriflame' 
    },
    { 
        id: 31276, name: "Jabón en Barra Discover Miami", brand: "Discover", price: 3.99, imageUrl: getImg(31276), 
        description: "Barra de jabón refrescante con aroma cítrico. NO ES HAIR X, es higiene corporal Discover.", 
        stock: 240, category: 'personal-care', subCategory: 'Oriflame' 
    },
    { 
        id: 44961, name: "Champú Duologi Purificante", brand: "Duologi", price: 11.99, imageUrl: getImg(44961), 
        description: "Específico para cuero cabelludo graso. Limpia profundamente sin resecar la fibra.", 
        stock: 85, category: 'hair', subCategory: 'Duologi' 
    },
    { 
        id: 44962, name: "Acondicionador Duologi Cremoso", brand: "Duologi", price: 11.99, imageUrl: getImg(44962), 
        description: "Nutrición intensa para cabellos medios y gruesos. Textura rica y fundente.", 
        stock: 80, category: 'hair', subCategory: 'Duologi' 
    },
    { 
        id: 44965, name: "Sérum Cuero Cabelludo Duologi Anti-caída", brand: "Duologi", price: 14.99, imageUrl: getImg(44965), 
        description: "Tratamiento tónico para fortalecer las raíces y estimular el crecimiento.", 
        stock: 40, category: 'hair', subCategory: 'Duologi' 
    },
    { 
        id: 38585, name: "Champú Eleo Luxury con Aceites Preciosos", brand: "Eleo", price: 14.99, imageUrl: getImg(38585), 
        description: "Limpieza suntuosa con aceites de Argán, Rosas y Bardana para un brillo de seda.", 
        stock: 60, category: 'hair', subCategory: 'Oriflame' 
    },
    { 
        id: 31614, name: "Aceite Exfoliante de Azúcar Milk & Honey Gold", brand: "Milk & Honey Gold", price: 14.99, regularPrice: 22.00, imageUrl: getImg(31614), 
        description: "Exfoliante de base oleosa que nutre mientras elimina células muertas con cristales de azúcar.", 
        stock: 100, category: 'personal-care', subCategory: 'Milk & Honey Gold' 
    },
    { 
        id: 31602, name: "Crema para Manos y Cuerpo Milk & Honey Gold", brand: "Milk & Honey Gold", price: 12.99, imageUrl: getImg(31602), 
        description: "La icónica crema hidratante de Oriflame con extractos de leche y miel.", 
        stock: 150, category: 'personal-care', subCategory: 'Milk & Honey Gold' 
    },
    { 
        id: 41035, name: "Sérum Novage+ Wrinkle Smooth", brand: "Novage+", price: 42.00, regularPrice: 58.00, imageUrl: getImg(41035), 
        description: "Sérum antiedad concentrado con tecnologías Bio Activating. NO ES LIMPIADORA.", 
        stock: 30, category: 'skincare', subCategory: 'Novage+' 
    },

    // --- CUIDADO FACIAL (27 PRODUCTOS: NOVAGE+, OPTIMALS, DIAMOND, ROYAL VELVET) ---
    { id: 41032, name: "Limpiadora Novage+ Refresh en Gel", brand: "Novage+", price: 24.00, imageUrl: getImg(41032), description: "Limpieza facial avanzada sin jabón.", stock: 60, category: 'skincare' },
    { id: 41030, name: "Crema de Día Novage+ Multi-Active SPF 30", brand: "Novage+", price: 48.00, imageUrl: getImg(41030), description: "Protección total diaria.", stock: 40, category: 'skincare' },
    { id: 41029, name: "Crema de Noche Novage+ Multi-Active Rich", brand: "Novage+", price: 48.00, imageUrl: getImg(41029), description: "Nutrición nocturna profunda.", stock: 40, category: 'skincare' },
    { id: 41036, name: "Contorno de Ojos Novage+ Wrinkle Smooth", brand: "Novage+", price: 32.00, imageUrl: getImg(41036), description: "Reduce patas de gallo.", stock: 45, category: 'skincare' },
    { id: 41037, name: "Contorno de Ojos Novage+ Lift & Firm", brand: "Novage+", price: 32.00, imageUrl: getImg(41037), description: "Efecto tensor párpados.", stock: 35, category: 'skincare' },
    { id: 41038, name: "Sérum Novage+ Bright Intense", brand: "Novage+", price: 42.00, imageUrl: getImg(41038), description: "Contra las manchas.", stock: 30, category: 'skincare' },
    { id: 41039, name: "Sérum Novage+ Blemish + Age Defy", brand: "Novage+", price: 42.00, imageUrl: getImg(41039), description: "Piel adulta con imperfecciones.", stock: 25, category: 'skincare' },
    { id: 41040, name: "Crema de Noche Novage+ Rejuvenation", brand: "Novage+", price: 48.00, imageUrl: getImg(41040), description: "Reparación intensiva.", stock: 20, category: 'skincare' },
    { id: 41031, name: "Peeling Renovador Novage+", brand: "Novage+", price: 34.00, imageUrl: getImg(41031), description: "Exfoliante químico suave.", stock: 50, category: 'skincare' },
    { id: 44309, name: "Limpiadora Optimals Hydra Radiance", brand: "Optimals", price: 14.00, imageUrl: getImg(44309), description: "Hidratación equilibrada.", stock: 80, category: 'skincare' },
    { id: 44310, name: "Tónico Optimals Hydra Radiance", brand: "Optimals", price: 14.00, imageUrl: getImg(44310), description: "Equilibrio facial.", stock: 70, category: 'skincare' },
    { id: 44312, name: "Sérum Optimals Hydra Radiance", brand: "Optimals", price: 21.00, imageUrl: getImg(44312), description: "Extra de frescor.", stock: 60, category: 'skincare' },
    { id: 44313, name: "Crema de Día Optimals Hydra Radiance", brand: "Optimals", price: 22.00, imageUrl: getImg(44313), description: "Piel radiante 24h.", stock: 55, category: 'skincare' },
    { id: 31394, name: "Crema de Día Royal Velvet Firmeza SPF 15", brand: "Royal Velvet", price: 28.00, imageUrl: getImg(31394), description: "Con Infusión de Iris Negro.", stock: 40, category: 'skincare' },
    { id: 31395, name: "Crema de Noche Royal Velvet Reparadora", brand: "Royal Velvet", price: 28.00, imageUrl: getImg(31395), description: "Nutrición reafirmante.", stock: 40, category: 'skincare' },
    { id: 31396, name: "Contorno de Ojos Royal Velvet", brand: "Royal Velvet", price: 18.00, imageUrl: getImg(31396), description: "Cuidado párpados.", stock: 35, category: 'skincare' },
    { id: 32628, name: "Sérum Diamond Cellular Night", brand: "Diamond Cellular", price: 38.00, imageUrl: getImg(32628), description: "Tratamiento de noche.", stock: 20, category: 'skincare' },
    { id: 32629, name: "Crema Diamond Cellular Anti-Age", brand: "Diamond Cellular", price: 42.00, imageUrl: getImg(32629), description: "Polvo de diamante real.", stock: 25, category: 'skincare' },
    { id: 32630, name: "Contorno Ojos Diamond Cellular", brand: "Diamond Cellular", price: 28.00, imageUrl: getImg(32630), description: "Luminosidad ocular.", stock: 30, category: 'skincare' },
    { id: 32631, name: "Agua Micelar Diamond Cellular", brand: "Diamond Cellular", price: 22.00, imageUrl: getImg(32631), description: "Limpieza de lujo.", stock: 50, category: 'skincare' },
    { id: 42548, name: "Limpiadora Love Nature Aloe y Coco", brand: "Love Nature", price: 9.00, imageUrl: getImg(42548), description: "Piel normal.", stock: 90, category: 'skincare' },
    { id: 42549, name: "Tónico Love Nature Aloe Vera", brand: "Love Nature", price: 9.00, imageUrl: getImg(42549), description: "Frescor botánico.", stock: 85, category: 'skincare' },
    { id: 42551, name: "Limpiadora Love Nature Árbol del Té", brand: "Love Nature", price: 9.00, imageUrl: getImg(42551), description: "Piel con granitos.", stock: 100, category: 'skincare' },
    { id: 42552, name: "Tónico Love Nature Árbol del Té", brand: "Love Nature", price: 9.00, imageUrl: getImg(42552), description: "Cierra poros.", stock: 95, category: 'skincare' },
    { id: 42580, name: "Crema Facial Love Nature Avena", brand: "Love Nature", price: 10.00, imageUrl: getImg(42580), description: "Piel sensible.", stock: 80, category: 'skincare' },
    { id: 42581, name: "Exfoliante Love Nature Albaricoque", brand: "Love Nature", price: 8.00, imageUrl: getImg(42581), description: "Brillo instantáneo.", stock: 110, category: 'skincare' },
    { id: 42582, name: "Mascarilla Love Nature Albaricoque", brand: "Love Nature", price: 8.00, imageUrl: getImg(42582), description: "Vitamina C natural.", stock: 100, category: 'skincare' },

    // --- CUIDADO PERSONAL (28 PRODUCTOS: HIGIENE, CUERPO, PIES, MANOS) ---
    { id: 31603, name: "Jabón Líquido Milk & Honey Gold", brand: "Milk & Honey Gold", price: 8.99, imageUrl: getImg(31603), description: "Higiene nutritiva premium.", stock: 130, category: 'personal-care' },
    { id: 31613, name: "Jabón en Barra Milk & Honey Gold", brand: "Milk & Honey Gold", price: 4.99, imageUrl: getImg(31613), description: "Suavidad tradicional.", stock: 200, category: 'personal-care' },
    { id: 38383, name: "Limpiadora Íntima Feminelle Refreshing", brand: "Feminelle", price: 8.99, imageUrl: getImg(38383), description: "Con extracto de Grosella.", stock: 100, category: 'personal-care' },
    { id: 38384, name: "Limpiadora Íntima Feminelle Comfort", brand: "Feminelle", price: 8.99, imageUrl: getImg(38384), description: "Con Caléndula.", stock: 90, category: 'personal-care' },
    { id: 34504, name: "Limpiadora Íntima Feminelle Gentle", brand: "Feminelle", price: 8.99, imageUrl: getImg(34504), description: "Pieles sensibles.", stock: 80, category: 'personal-care' },
    { id: 34498, name: "Limpiadora Íntima Feminelle Protective", brand: "Feminelle", price: 8.99, imageUrl: getImg(34498), description: "Con Arándano.", stock: 100, category: 'personal-care' },
    { id: 20557, name: "Feet Up Crema Talones Agrietados", brand: "Feet Up", price: 11.00, imageUrl: getImg(20557), description: "Reparación 7 días.", stock: 140, category: 'personal-care' },
    { id: 20563, name: "Feet Up Spray Refrescante", brand: "Feet Up", price: 9.00, imageUrl: getImg(20563), description: "Efecto hielo mentolado.", stock: 160, category: 'personal-care' },
    { id: 32373, name: "Feet Up Exfoliante Pies", brand: "Feet Up", price: 9.00, imageUrl: getImg(32373), description: "Elimina durezas.", stock: 120, category: 'personal-care' },
    { id: 32370, name: "Feet Up Crema Calmante", brand: "Feet Up", price: 9.00, imageUrl: getImg(32370), description: "Con Lavanda.", stock: 130, category: 'personal-care' },
    { id: 33028, name: "Feet Up Mascarilla Nocturna", brand: "Feet Up", price: 11.00, imageUrl: getImg(33028), description: "Tratamiento intensivo noche.", stock: 90, category: 'personal-care' },
    { id: 32372, name: "Feet Up Lima de Pies", brand: "Feet Up", price: 4.99, imageUrl: getImg(32372), description: "Herramienta ergonómica.", stock: 120, category: 'personal-care' },
    { id: 32604, name: "Activelle Invisible Desodorante", brand: "Activelle", price: 5.99, imageUrl: getImg(32604), description: "No mancha la ropa.", stock: 200, category: 'personal-care' },
    { id: 31275, name: "Gel de Ducha Discover Miami", brand: "Discover", price: 7.99, imageUrl: getImg(31275), description: "Cítricos energizantes.", stock: 210, category: 'personal-care' },
    { id: 32616, name: "Jabón en Barra Love Nature Fresa", brand: "Love Nature", price: 3.99, imageUrl: getImg(32616), description: "Exfoliante frutal.", stock: 150, category: 'personal-care' },
    { id: 41295, name: "Aceite Love Nature Almendras", brand: "Love Nature", price: 12.99, imageUrl: getImg(41295), description: "Multiuso cuerpo/cabello.", stock: 90, category: 'personal-care' },
    { id: 41335, name: "Crema de Manos SoftCaress Protectora", brand: "SoftCaress", price: 6.99, imageUrl: getImg(41335), description: "Escudo invisible.", stock: 200, category: 'personal-care' },
    { id: 41334, name: "Crema de Manos SoftCaress Nutritiva", brand: "SoftCaress", price: 6.99, imageUrl: getImg(41334), description: "Con Aceite de Macadamia.", stock: 200, category: 'personal-care' },
    { id: 33984, name: "Be Happy Shower Gel", brand: "Oriflame", price: 8.00, imageUrl: getImg(33984), description: "Con aceites esenciales.", stock: 150, category: 'personal-care' },
    { id: 34044, name: "Jabón en Barra Love Nature Coco", brand: "Love Nature", price: 3.99, imageUrl: getImg(34044), description: "Cremoso.", stock: 300, category: 'personal-care' },
    { id: 41280, name: "Crema Corporal Anti-estrías Optimals", brand: "Optimals", price: 21.00, imageUrl: getImg(41280), description: "Mejora la elasticidad.", stock: 45, category: 'personal-care' },
    { id: 31604, name: "Jabón de Manos Milk & Honey Repuesto", brand: "Milk & Honey Gold", price: 7.99, imageUrl: getImg(31604), description: "Eco-bolsa 300ml.", stock: 150, category: 'personal-care' },
    { id: 31605, name: "Crema de Manos Milk & Honey Travel", brand: "Milk & Honey Gold", price: 5.99, imageUrl: getImg(31605), description: "30ml para bolso.", stock: 180, category: 'personal-care' },
    { id: 41511, name: "Loción Corporal Love Nature Frambuesa", brand: "Love Nature", price: 10.99, imageUrl: getImg(41511), description: "Vigorizante.", stock: 100, category: 'personal-care' },
    { id: 34048, name: "Exfoliante Corporal Love Nature Menta", brand: "Love Nature", price: 11.00, imageUrl: getImg(34048), description: "Refresco total.", stock: 80, category: 'personal-care' },
    { id: 34092, name: "Jabón Líquido Aloe Vera Love Nature", brand: "Love Nature", price: 9.99, imageUrl: getImg(34092), description: "Hidratación constante.", stock: 130, category: 'personal-care' },
    { id: 34039, name: "Gel de Ducha Love Nature Coco", brand: "Love Nature", price: 9.00, imageUrl: getImg(34039), description: "Aceite de coco orgánico.", stock: 120, category: 'personal-care' },
    { id: 34040, name: "Loción Corporal Love Nature Coco", brand: "Love Nature", price: 10.99, imageUrl: getImg(34040), description: "Nutrición tropical.", stock: 110, category: 'personal-care' },

    // --- CUIDADO CAPILAR ADICIONAL (27 PRODUCTOS) ---
    { id: 38597, name: "Mascarilla Eleo Oil Infused", brand: "Eleo", price: 18.99, imageUrl: getImg(38597), description: "Reparación profunda con aceites.", stock: 45, category: 'hair', subCategory: 'Oriflame' },
    { id: 38600, name: "Aceite de Noche Eleo", brand: "Eleo", price: 17.99, imageUrl: getImg(38600), description: "Nutrición mientras duermes.", stock: 35, category: 'hair', subCategory: 'Oriflame' },
    { id: 38601, name: "Aceite Protector Eleo", brand: "Eleo", price: 17.99, imageUrl: getImg(38601), description: "Sella las puntas y da brillo.", stock: 50, category: 'hair', subCategory: 'Oriflame' },
    { id: 41354, name: "Champú Love Nature Ortiga y Limón", brand: "Love Nature", price: 8.99, imageUrl: getImg(41354), description: "Para cabello graso.", stock: 110, category: 'hair', subCategory: 'Love Nature' },
    { id: 41359, name: "Champú Love Nature Trigo y Coco", brand: "Love Nature", price: 8.99, imageUrl: getImg(41359), description: "Cabello seco.", stock: 120, category: 'hair', subCategory: 'Love Nature' },
    { id: 41360, name: "Acondicionador Love Nature Trigo y Coco", brand: "Love Nature", price: 8.99, imageUrl: getImg(41360), description: "Suavidad vegetal.", stock: 100, category: 'hair', subCategory: 'Love Nature' },
    { id: 41353, name: "Champú Anticaspa Love Nature Árbol Té", brand: "Love Nature", price: 8.99, imageUrl: getImg(41353), description: "Control purificante.", stock: 95, category: 'hair', subCategory: 'Love Nature' },
    { id: 35910, name: "Champú HairX Gloss & Shine", brand: "HairX", price: 10.99, imageUrl: getImg(35910), description: "Brillo diamante.", stock: 70, category: 'hair', subCategory: 'Oriflame' },
    { id: 35911, name: "Acondicionador HairX Gloss & Shine", brand: "HairX", price: 10.99, imageUrl: getImg(35911), description: "Luminosidad.", stock: 75, category: 'hair', subCategory: 'Oriflame' },
    { id: 32875, name: "Spray Protector Calor HairX", brand: "HairX", price: 9.99, imageUrl: getImg(32875), description: "Hasta 220ºC.", stock: 85, category: 'hair', subCategory: 'Oriflame' },
    { id: 32907, name: "Champú Seco HairX Volume Lift", brand: "HairX", price: 10.99, imageUrl: getImg(32907), description: "Volumen al instante.", stock: 50, category: 'hair', subCategory: 'Oriflame' },
    { id: 35904, name: "Champú HairX Ultimate Repair", brand: "HairX", price: 10.99, imageUrl: getImg(35904), description: "Repara daños.", stock: 65, category: 'hair', subCategory: 'Oriflame' },
    { id: 35905, name: "Acondicionador HairX Ultimate Repair", brand: "HairX", price: 10.99, imageUrl: getImg(35905), description: "Nutrición diaria.", stock: 60, category: 'hair', subCategory: 'Oriflame' },
    { id: 35906, name: "Mascarilla HairX Ultimate Repair", brand: "HairX", price: 14.99, imageUrl: getImg(35906), description: "Cura intensiva.", stock: 40, category: 'hair', subCategory: 'Oriflame' },
    { id: 41355, name: "Acondicionador Love Nature Ortiga", brand: "Love Nature", price: 8.99, imageUrl: getImg(41355), description: "Ligereza.", stock: 90, category: 'hair', subCategory: 'Love Nature' },
    { id: 41362, name: "Aceite Caliente Love Nature Trigo", brand: "Love Nature", price: 2.99, imageUrl: getImg(41362), description: "Tratamiento térmico.", stock: 200, category: 'hair', subCategory: 'Love Nature' },
    { id: 34931, name: "Peine Púas Anchas Oriflame", brand: "Oriflame", price: 4.99, imageUrl: getImg(34931), description: "Desenreda rizos.", stock: 150, category: 'hair', subCategory: 'Oriflame' },
    { id: 34928, name: "Cepillo Madera Oriflame", brand: "Oriflame", price: 7.99, imageUrl: getImg(34928), description: "Cuidado natural.", stock: 100, category: 'hair', subCategory: 'Oriflame' },
    { id: 34930, name: "Cepillo Redondo Styling", brand: "Oriflame", price: 7.99, imageUrl: getImg(34930), description: "Moldea.", stock: 80, category: 'hair', subCategory: 'Oriflame' },
    { id: 35907, name: "Champú HairX Weather Resist", brand: "HairX", price: 10.99, imageUrl: getImg(35907), description: "Control clima.", stock: 50, category: 'hair', subCategory: 'Oriflame' },
    { id: 35908, name: "Acondicionador HairX Weather Resist", brand: "HairX", price: 10.99, imageUrl: getImg(35908), description: "Anti-frizz.", stock: 55, category: 'hair', subCategory: 'Oriflame' },
    { id: 45437, name: "Mascarilla Love Nature Banana", brand: "Love Nature", price: 3.99, imageUrl: getImg(45437), description: "Nutrición frutal.", stock: 140, category: 'hair', subCategory: 'Love Nature' },
    { id: 32908, name: "Champú HairX Dandruff Solution", brand: "HairX", price: 10.99, imageUrl: getImg(32908), description: "Anticaspa real.", stock: 50, category: 'hair', subCategory: 'Oriflame' },
    { id: 35912, name: "Champú HairX Colour Revive", brand: "HairX", price: 10.99, imageUrl: getImg(35912), description: "Protección color.", stock: 60, category: 'hair', subCategory: 'Oriflame' },
    { id: 31601, name: "Champú Milk & Honey Gold Shine", brand: "Milk & Honey Gold", price: 9.99, imageUrl: getImg(31601), description: "Brillo de miel.", stock: 80, category: 'hair' },
    { id: 31606, name: "Acondicionador Milk & Honey Gold", brand: "Milk & Honey Gold", price: 9.99, imageUrl: getImg(31606), description: "Suavidad extrema.", stock: 80, category: 'hair' },
    { id: 35913, name: "Acondicionador HairX Colour Revive", brand: "HairX", price: 10.99, imageUrl: getImg(35913), description: "Nutrición color.", stock: 55, category: 'hair', subCategory: 'Oriflame' }
];
