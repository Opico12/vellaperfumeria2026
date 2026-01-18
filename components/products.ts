
import type { Product } from './types';

/**
 * Repositorio de imágenes vibrantes para evitar el aspecto grisáceo.
 * Se utilizan fotos de alta costura con colores vivos.
 */
export const getImg = (id: number | string) => {
    const images: Record<string, string> = {
        "47718": "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80", // Seda rosa
        "48954": "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80", // Reloj lujo
        "481017": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80", // Abrigo rojo
        "47511": "https://images.unsplash.com/photo-1594932224826-94b27247313e?auto=format&fit=crop&w=800&q=80", // Traje azul vibrante
        "46060": "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80", // Boutique moda
        "35679": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80", // Vestido rojo
        "48908": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80", // Neceser seda
        "42490": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80", // Sastrería premium
        "default": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    };
    return images[id.toString()] || images.default;
};

const baseProducts: Product[] = [
    { 
        id: 47718, 
        name: "Pañuelo de Seda 'O Sweet Marshmallow' - Edición Atelier", 
        brand: "Gala Silk", 
        price: 17.99, 
        imageUrl: getImg(47718), 
        category: "accessories", 
        tag: "OFERTA",
        stock: 100,
        description: "Una pieza magistral de la tejeduría contemporánea en seda pura 100%. Su textura es una caricia etérea, diseñada para elevar cualquier conjunto de gala con un toque de distinción romántica y vibrante."
    },
    { 
        id: 481017, 
        name: "Abrigo de Terciopelo Real 'Regal Velvet' - Sastrería 40 Años", 
        brand: "Regal Velvet", 
        price: 239.99, 
        imageUrl: getImg(481017), 
        category: "skincare", 
        tag: "SET", 
        stock: 25,
        description: "Majestuosidad en terciopelo carmesí. Este abrigo encarna la precisión técnica del Atelier GALA, ofreciendo una estructura impecable y una calidez inigualable para las noches más frías de la temporada."
    },
    { 
        id: 47511, 
        name: "Traje 'Giordani Gold Essenza' - Lana Toscana Azul", 
        brand: "Giordani Gold", 
        price: 475.11, 
        imageUrl: getImg(47511), 
        category: "men", 
        stock: 15,
        description: "Lana virgen toscana en un azul eléctrico profundo. La esencia de la elegancia masculina capturada en un traje de tres piezas con acabados artesanales hechos a mano por nuestros maestros sastres."
    },
    { 
        id: 48954, 
        name: "Reloj 'Glitters of Love' - Maquinaria de Oro Rosa", 
        brand: "Atelier Accessories", 
        price: 34.99, 
        imageUrl: getImg(48954), 
        category: "accessories", 
        stock: 50,
        description: "Cronometría de lujo con incrustaciones de micro-cristales que capturan la luz. Un accesorio diseñado para brillar con luz propia en los eventos más exclusivos del año."
    },
    { 
        id: 48908, 
        name: "Neceser 'Sugar & Spice' Velvet Orquídea", 
        brand: "Accesorios Boutique", 
        price: 10.99, 
        imageUrl: getImg(48908), 
        category: "accessories", 
        tag: "OFERTA",
        stock: 150,
        description: "Organización suntuosa para sus accesorios. El terciopelo orquídea vibrante y el forro de satén negro lo convierten en el compañero ideal para sus viajes de gala."
    },
    { 
        id: 46060, 
        name: "Chaqueta 'All or Nothing' - Sastrería de Poder", 
        brand: "Exclusive Atelier", 
        price: 460.60, 
        imageUrl: getImg(46060), 
        category: "makeup", 
        stock: 10,
        description: "Declaración de audacia y estilo. Una chaqueta estructurada con detalles en raso para la mujer que busca una presencia inolvidable en el entorno corporativo o social."
    },
    { 
        id: 35679, 
        name: "Vestido de Noche 'Vibrant Passion' - Seda Roja", 
        brand: "Exclusive Atelier", 
        price: 540.00, 
        imageUrl: getImg(35679), 
        category: "makeup", 
        stock: 5,
        description: "Seda fluida y magnetismo puro. El diseño definitivo en rojo pasión para una entrada triunfal en cualquier celebración nocturna."
    },
    { 
        id: 42490, 
        name: "Traje de Negocios 'Ascendant' - Lana Estocolmo", 
        brand: "Atelier Men", 
        price: 269.90, 
        imageUrl: getImg(42490), 
        category: "men", 
        stock: 20,
        description: "Diseñado para el ritmo de la capital, el traje Ascendant combina transpirabilidad y elegancia discreta. Una pieza de corte slim que proyecta autoridad."
    }
];

// Generamos el catálogo completo hasta 200 productos Doriflamme
const generatedProducts: Product[] = [];
for (let i = 0; i < 192; i++) {
    const id = 42000 + i;
    generatedProducts.push({
        id,
        name: `Atelier Doriflamme Selection Ref. ${id}`,
        brand: "Atelier GALA",
        price: 25.00 + (i % 75),
        imageUrl: "https://images.unsplash.com/photo-1539109132314-34755219f688?auto=format&fit=crop&w=800&q=80",
        category: (i % 4 === 0 ? "men" : i % 4 === 1 ? "skincare" : i % 4 === 2 ? "makeup" : "accessories"),
        stock: 45,
        description: "Una pieza seleccionada de nuestra colección cápsula Doriflamme. Confeccionada con estándares de calidad superior y atención meticulosa al detalle."
    });
}

export const allProducts: Product[] = [...baseProducts, ...generatedProducts].sort((a,b) => a.id - b.id);
