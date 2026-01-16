
import type { Product } from './types';

export const getImg = (id: number | string) => `https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F${id}%2F${id}_1.png`;

// --- CATÁLOGO REAL BASADO EN TUS CÓDIGOS ---
export const allProducts: Product[] = [
    // --- FRAGANCIAS ---
    { 
        id: 47718, 
        name: "Perfume All or Nothing Amplifies Exclusive Edition", 
        brand: "Oriflame Estocolmo", 
        price: 17.99, 
        regularPrice: 62.99,
        imageUrl: getImg(47718), 
        category: "perfume", 
        stock: 50, 
        tag: "OFERTA",
        description: "Una esencia magistral diseñada para amplificar tu presencia. Esta fragancia combina notas de nardo y ámbar rojo para una distinción premium. Edición especial de lanzamiento con una fijación ultra prolongada." 
    },
    { 
        id: 46047, 
        name: "Eau de Parfum Love Potion Cherry on Top", 
        brand: "Love Potion", 
        price: 25.99, 
        regularPrice: 46.00,
        imageUrl: getImg(46047), 
        category: "perfume", 
        stock: 35, 
        description: "Un aroma dulce e irresistible de cereza negra, rematado con notas de chocolate y vainilla. El capricho perfecto para abrir los corazones y captar miradas." 
    },
    { 
        id: 31292, 
        name: "Eau de Toilette Eclat Femme Weekends", 
        brand: "Eclat", 
        price: 26.99, 
        regularPrice: 42.49,
        imageUrl: getImg(31292), 
        category: "perfume", 
        stock: 20, 
        description: "Elegancia natural y radiante. Notas de melocotón blanco y bergamota que te transportan a un fin de semana de lujo en la Riviera Francesa." 
    },
    { 
        id: 47499, 
        name: "Eau de Toilette Elvie Midnight Magic", 
        brand: "Elvie", 
        price: 22.99, 
        regularPrice: 38.00,
        imageUrl: getImg(47499), 
        category: "perfume", 
        stock: 40, 
        description: "Embellece tus días más aburridos con la magia de medianoche. Un aroma místico con notas de rosa negra y ámbar." 
    },

    // --- COSMÉTICA Y CUIDADO ---
    { 
        id: 46974, 
        name: "Jabón en Barra True Hours Moments", 
        brand: "True Hours", 
        price: 3.49, 
        imageUrl: getImg(46974), 
        category: "personal-care", 
        stock: 120, 
        description: "Limpieza suave y delicada con una fragancia que evoca los momentos de paz. Piel limpia, fresca y suavemente perfumada." 
    },
    { 
        id: 47201, 
        name: "Crema de Manos True Hours Moments", 
        brand: "True Hours", 
        price: 6.99, 
        imageUrl: getImg(47201), 
        category: "personal-care", 
        stock: 85, 
        description: "Nutrición intensa para manos que inspiran belleza. Fórmula de rápida absorción que restaura la barrera cutánea inmediatamente." 
    },
    { 
        id: 36152, 
        name: "Crema Universal Tender Care con Aceite de Frambuesa", 
        brand: "Tender Care", 
        price: 7.99, 
        imageUrl: getImg(36152), 
        category: "skincare", 
        stock: 300, 
        description: "Fórmula 99% de ingredientes naturales. Protege y suaviza las zonas secas o agrietadas de tu piel con el aroma dulce de la frambuesa." 
    },
    { 
        id: 42806, 
        name: "Crema de Manos Hidratante Cherry", 
        brand: "Love Nature", 
        price: 7.99, 
        imageUrl: getImg(42806), 
        category: "personal-care", 
        stock: 90, 
        description: "Hidratación frutal con extractos de cereza dulce. Deja tus manos aterciopeladas y con un brillo natural saludable." 
    },

    // --- TRATAMIENTO REAL VELVET ---
    { 
        id: 47005, 
        name: "Crema de Día Reafirmante Royal Velvet SPF 20", 
        brand: "Royal Velvet", 
        price: 43.00, 
        imageUrl: getImg(47005), 
        category: "skincare", 
        stock: 25, 
        description: "Fortalece y reafirma la estructura de la piel a partir de los 40 años. Infundida con la exclusiva Infusión de Iris Negro." 
    },
    { 
        id: 47007, 
        name: "Contorno de Ojos Reafirmante Royal Velvet", 
        brand: "Royal Velvet", 
        price: 30.00, 
        imageUrl: getImg(47007), 
        category: "skincare", 
        stock: 30, 
        description: "Suaviza el área del contorno de ojos, reduciendo bolsas y líneas de expresión. Mirada más joven y descansada." 
    },
    { 
        id: 48117, 
        name: "Crema de Noche Reafirmante Royal Velvet Special Edition", 
        brand: "Royal Velvet", 
        price: 23.99, 
        regularPrice: 40.00,
        imageUrl: getImg(48117), 
        category: "skincare", 
        stock: 15, 
        description: "Nutrición nocturna intensa para regenerar la piel mientras duermes. Edición especial con mayor concentración de activos reafirmantes." 
    },

    // --- MAQUILLAJE THE ONE ---
    { 
        id: 48650, 
        name: "Máscara de Pestañas Winter Wanderlust Waterproof THE ONE", 
        brand: "THE ONE", 
        price: 9.99, 
        imageUrl: getImg(48650), 
        category: "makeup", 
        stock: 65, 
        description: "Cautiva a través de múltiples sentidos. Volumen extremo y resistencia total al agua para una mirada que no conoce límites." 
    },
    { 
        id: 46929, 
        name: "Paleta de Sombras Color Unlimited THE ONE", 
        brand: "THE ONE", 
        price: 15.99, 
        imageUrl: getImg(46929), 
        category: "makeup", 
        stock: 45, 
        variants: {
            "Tono": [
                { value: "Matte Burgundy", colorCode: "#5e1919", id: 46929 },
                { value: "Warm Taupe", colorCode: "#a38e83", id: 46926 },
                { value: "Satin Rose", colorCode: "#d4a3b1", id: 46922 },
                { value: "Deep Ebony", colorCode: "#1a1a1a", id: 46918 }
            ]
        },
        description: "Alta pigmentación y duración ilimitada. Crea looks desde lo más natural hasta el drama más profundo del borgoña mate." 
    },
    { 
        id: 43295, 
        name: "Labial Color Stylist Ultimate THE ONE", 
        brand: "THE ONE", 
        price: 9.99, 
        imageUrl: getImg(43295), 
        category: "makeup", 
        stock: 110, 
        variants: {
            "Shade": [
                { value: "Amber Nude", colorCode: "#b87c6b", id: 43295 },
                { value: "Cherry Crush", colorCode: "#8a1a2e", id: 43298 },
                { value: "Velvet Red", colorCode: "#a11d1d", id: 43302 }
            ]
        },
        description: "5 beneficios en 1. Color intenso, cobertura total y cuidado labial en cada pasada. Elige tu tono ideal." 
    },

    // --- ACCESORIOS Y REGALOS ---
    { 
        id: 48908, 
        name: "Set de 4 Pares de Pendientes Glitters of Love", 
        brand: "Accesorios Oriflame", 
        price: 11.99, 
        imageUrl: getImg(48908), 
        category: "accessories", 
        stock: 40, 
        description: "Colección exclusiva de cuatro pares de pendientes que celebran el amor y el brillo. El set más versátil para cualquier ocasión festiva." 
    },
    { 
        id: 48954, 
        name: "Reloj Glitters of Love - Edición Limitada", 
        brand: "Accesorios Oriflame", 
        price: 10.99, 
        regularPrice: 35.00,
        imageUrl: getImg(48954), 
        category: "accessories", 
        stock: 12, 
        description: "Añade un toque de brilla a tus citas con este reloj de diseño exclusivo inspirado en la elegancia del amor." 
    },
    { 
        id: 48953, 
        name: "Necessaire Sugar Spice Especial", 
        brand: "Accesorios Oriflame", 
        price: 10.99, 
        imageUrl: getImg(48953), 
        category: "accessories", 
        stock: 150, 
        tag: "OFERTA",
        description: "OFERTA EXCLUSIVA: Consigue tu Necessaire Sugar Spice por solo 10.99€ por cada 20€ de compra en este catálogo. El complemento ideal para tus cosméticos." 
    },
    { 
        id: 48975, 
        name: "Bolsa de Regalo Festive - Grande", 
        brand: "Vellaperfumeria", 
        price: 3.99, 
        imageUrl: getImg(48975), 
        category: "accessories", 
        stock: 500, 
        description: "Haz que tu regalo sea inolvidable con nuestra bolsa grande de diseño festivo exclusivo." 
    },
    { 
        id: 48970, 
        name: "Caja de Regalo Premium Festive", 
        brand: "Vellaperfumeria", 
        price: 10.00, 
        imageUrl: getImg(48970), 
        category: "accessories", 
        stock: 200, 
        description: "El envoltorio definitivo. Una caja rígida de alta calidad para proteger y presentar tus mejores deseos." 
    }
];
