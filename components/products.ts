
import type { Product } from './types';

export const getImg = (id: number | string) => {
    // Mapeo de imágenes representativas para las referencias solicitadas
    const images: Record<string, string> = {
        "47718": "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80", // O Sweet Marshmallow
        "48908": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80", // Neceser
        "48954": "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80", // Reloj Glitters
        "481017": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80", // Regal Velvet
        "47511": "https://images.unsplash.com/photo-1594932224826-94b27247313e?auto=format&fit=crop&w=800&q=80", // GG Essenza
        "36152": "https://images.unsplash.com/photo-1617895153857-82fe79adfcd4?auto=format&fit=crop&w=800&q=80", // Crema universal
        "42490": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80", // Ascendant
        "45967": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80", // GG Man Elixir
        "35679": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80", // All or Nothing
        "46060": "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=800&q=80", // AON Amplified
        "default": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    };
    return images[id.toString()] || images.default;
};

export const allProducts: Product[] = [
    { 
        id: 47718, 
        name: "Fragancia O Sweet Marshmallow", 
        brand: "Oriflame", 
        price: 15.99, 
        imageUrl: getImg(47718), 
        category: "perfume", 
        stock: 50,
        description: "Un aroma dulce y travieso que captura la esencia de las nubes de malvavisco."
    },
    { 
        id: 47201, 
        name: "Lanzamiento Novage+ Eclat Serum", 
        brand: "Novage+", 
        price: 34.99, 
        imageUrl: getImg("default"), 
        category: "skincare", 
        tag: "NOVEDAD",
        stock: 100,
        description: "Precio de lanzamiento exclusivo Campaña 1."
    },
    { 
        id: 48908, 
        name: "Neceser Sugar & Spice Velvet", 
        brand: "Oriflame Accessories", 
        price: 10.99, 
        imageUrl: getImg(48908), 
        category: "accessories", 
        stock: 30,
        description: "Neceser de terciopelo elegante para tus esenciales de belleza."
    },
    { 
        id: 48954, 
        name: "Reloj Glitters of Love", 
        brand: "Oriflame Accessories", 
        price: 39.99, 
        imageUrl: getImg(48954), 
        category: "accessories", 
        stock: 15,
        description: "Reloj de edición especial con incrustaciones brillantes."
    },
    { 
        id: 48952, 
        name: "Joyas Pearl Glitters of Love", 
        brand: "Oriflame Accessories", 
        price: 24.99, 
        imageUrl: getImg("default"), 
        category: "accessories", 
        stock: 20
    },
    { 
        id: 48953, 
        name: "Set Pendientes Glitters of Love (4 pares)", 
        brand: "Oriflame Accessories", 
        price: 14.99, 
        imageUrl: getImg("default"), 
        category: "accessories", 
        stock: 40
    },
    { 
        id: 481017, 
        name: "Crema de Noche Reafirmante Regal Velvet", 
        brand: "Regal Velvet", 
        price: 29.99, 
        imageUrl: getImg(481017), 
        category: "skincare", 
        tag: "SET",
        stock: 25,
        description: "Edición especial reafirmante con extracto de terciopelo real."
    },
    { 
        id: 47420, 
        name: "Espátula Mascarilla Oriflame Exclusive", 
        brand: "Oriflame", 
        price: 5.99, 
        imageUrl: getImg("default"), 
        category: "accessories", 
        stock: 100
    },
    { 
        id: 36152, 
        name: "Crema Universal Frambuesa + Labial Stylist", 
        brand: "The One / Tender Care", 
        price: 14.99, 
        imageUrl: getImg(36152), 
        category: "makeup", 
        tag: "OFERTA",
        stock: 50,
        description: "Lote especial: Crema universal (36152) y barra de labios (43295)."
    },
    { 
        id: 47511, 
        name: "Lote Giordani Gold Essenza Premium", 
        brand: "Giordani Gold", 
        price: 48.99, 
        imageUrl: getImg(47511), 
        category: "perfume", 
        tag: "SET",
        stock: 20,
        description: "Incluye Perfume (47511), Bruma (42806) y caja de regalo. Código Lote: 48079."
    },
    { 
        id: 38863, 
        name: "Barra de Labios Colour Stylist - Creeping Rose", 
        brand: "The One", 
        price: 7.99, 
        imageUrl: getImg("default"), 
        category: "makeup", 
        stock: 60
    },
    { 
        id: 38870, 
        name: "Barra de Labios Colour Stylist - Cherry Cruise", 
        brand: "The One", 
        price: 7.99, 
        imageUrl: getImg("default"), 
        category: "makeup", 
        stock: 60
    },
    { 
        id: 46060, 
        name: "Perfume All or Nothing Amplified", 
        brand: "All or Nothing", 
        price: 49.99, 
        imageUrl: getImg(46060), 
        category: "perfume", 
        stock: 15
    },
    { 
        id: 35679, 
        name: "Perfume All or Nothing Original", 
        brand: "All or Nothing", 
        price: 45.99, 
        imageUrl: getImg(35679), 
        category: "perfume", 
        stock: 10
    },
    { 
        id: 42490, 
        name: "Eau de Toilette Ascendant", 
        brand: "Ascendant", 
        price: 29.99, 
        imageUrl: getImg(42490), 
        category: "men", 
        stock: 30
    },
    { 
        id: 45967, 
        name: "Perfume Giordani Gold Man Elixir", 
        brand: "Giordani Gold", 
        price: 38.99, 
        imageUrl: getImg(45967), 
        category: "men", 
        stock: 20
    },
    { 
        id: 48975, 
        name: "Bolsa sobre de regalo Festive", 
        brand: "Oriflame", 
        price: 1.99, 
        imageUrl: getImg("default"), 
        category: "accessories", 
        stock: 200
    },
    { 
        id: 48970, 
        name: "Caja de regalo Festive Grande", 
        brand: "Oriflame", 
        price: 3.50, 
        imageUrl: getImg("default"), 
        category: "accessories", 
        stock: 100
    }
];
