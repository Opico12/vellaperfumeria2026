
import type { Product } from './types';

export const getImg = (id: number | string) => {
    const images: Record<string, string> = {
        "47718": "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80", 
        "48908": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80", 
        "48954": "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80", 
        "481017": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80", 
        "47511": "https://images.unsplash.com/photo-1594932224826-94b27247313e?auto=format&fit=crop&w=800&q=80", 
        "36152": "https://images.unsplash.com/photo-1617895153857-82fe79adfcd4?auto=format&fit=crop&w=800&q=80", 
        "42490": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80", 
        "46060": "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=800&q=80", 
        "35679": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
        "42499": "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80",
        "default": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    };
    return images[id.toString()] || images.default;
};

export const allProducts: Product[] = [
    { 
        id: 47718, 
        name: "O Sweet Marshmallow - Eau de Toilette", 
        brand: "Oriflame", 
        price: 15.99, 
        imageUrl: getImg(47718), 
        category: "perfume", 
        stock: 50,
        description: "Un aroma dulce y travieso que captura la esencia de las nubes de malvavisco. Dulzura irresistible para el día a día."
    },
    { 
        id: 48908, 
        name: "Neceser Sugar & Spice Velvet Orquídea", 
        brand: "Bella Accesorios", 
        price: 10.99, 
        imageUrl: getImg(48908), 
        category: "accessories", 
        stock: 100,
        description: "Neceser de terciopelo premium en tono orquídea. Perfecto para organizar tu belleza con estilo."
    },
    { 
        id: 48954, 
        name: "Reloj Glitters of Love", 
        brand: "Oriflame Jewelry", 
        price: 39.99, 
        imageUrl: getImg(48954), 
        category: "accessories", 
        stock: 25,
        description: "Elegancia atemporal con detalles brillantes. Maquinaria de alta precisión y diseño exclusivo."
    },
    { 
        id: 48952, 
        name: "Joyas Pearl Glitters of Love", 
        brand: "Oriflame Jewelry", 
        price: 24.99, 
        imageUrl: getImg("default"), 
        category: "accessories", 
        stock: 30
    },
    { 
        id: 48953, 
        name: "Set 4 Pares Pendientes Glitters of Love", 
        brand: "Oriflame Jewelry", 
        price: 14.99, 
        imageUrl: getImg("default"), 
        category: "accessories", 
        stock: 45
    },
    { 
        id: 481017, 
        name: "Crema de Noche Reafirmante Regal Velvet", 
        brand: "Regal Velvet", 
        price: 23.99, 
        imageUrl: getImg(481017), 
        category: "skincare", 
        tag: "SET",
        stock: 20,
        description: "Edición Especial Reafirmante. Nutrición profunda y efecto tensor inmediato para una piel real."
    },
    { 
        id: 36152, 
        name: "Lote Especial: Crema Universal Frambuesa + Labial Stylist", 
        brand: "Bella Lotes", 
        price: 14.99, 
        imageUrl: getImg(36152), 
        category: "makeup", 
        tag: "OFERTA",
        stock: 60,
        description: "Incluye Crema Universal Frambuesa (36152) y Barra de Labios Colour Stylist (43295). El dúo perfecto."
    },
    { 
        id: 48079, 
        name: "Lote Giordani Gold Essenza: Perfume + Bruma + Caja", 
        brand: "Giordani Gold", 
        price: 48.99, 
        imageUrl: getImg(47511), 
        category: "perfume", 
        tag: "SET",
        stock: 15,
        description: "El máximo lujo. Incluye Perfume Essenza (47511), Bruma Corporal (42806) y Caja de Regalo Premium."
    },
    { 
        id: 46060, 
        name: "Perfume All or Nothing Amplified", 
        brand: "All or Nothing", 
        price: 46.60, 
        imageUrl: getImg(46060), 
        category: "perfume", 
        stock: 20,
        description: "Intensidad sin límites. Un aroma magnético para la mujer que no acepta un no por respuesta."
    },
    { 
        id: 35679, 
        name: "Perfume All or Nothing Original", 
        brand: "All or Nothing", 
        price: 45.99, 
        imageUrl: getImg(35679), 
        category: "perfume", 
        stock: 12
    },
    { 
        id: 42490, 
        name: "Eau de Toilette Ascendant", 
        brand: "Ascendant", 
        price: 29.99, 
        imageUrl: getImg(42490), 
        category: "men", 
        stock: 40,
        description: "Poder y magnetismo masculino. La fragancia del hombre que lidera con carisma."
    },
    { 
        id: 42499, 
        name: "Eau de Toilette Classique Weekend", 
        brand: "Oriflame", 
        price: 26.99, 
        imageUrl: getImg(42499), 
        category: "perfume", 
        stock: 35
    },
    { 
        id: 48975, 
        name: "Bolsa sobre de regalo Festive", 
        brand: "Bella Packaging", 
        price: 3.99, 
        imageUrl: getImg("default"), 
        category: "accessories", 
        stock: 200
    },
    { 
        id: 48977, 
        name: "Sobre de regalo Festive", 
        brand: "Bella Packaging", 
        price: 2.99, 
        imageUrl: getImg("default"), 
        category: "accessories", 
        stock: 200
    },
    { 
        id: 48970, 
        name: "Caja de regalo Festive", 
        brand: "Bella Packaging", 
        price: 4.50, 
        imageUrl: getImg("default"), 
        category: "accessories", 
        stock: 100
    },
    { 
        id: 38863, 
        name: "Labial The One Ultra Brillante - Crepping Rose", 
        brand: "The One", 
        price: 7.99, 
        imageUrl: getImg("default"), 
        category: "makeup", 
        stock: 50
    },
    { 
        id: 48650, 
        name: "Máscara Winter Wonderland Lash Waterproof", 
        brand: "The One", 
        price: 9.99, 
        imageUrl: getImg("default"), 
        category: "makeup", 
        stock: 80
    },
    { 
        id: 42520, 
        name: "Brick Aura Eau de Toilette", 
        brand: "Oriflame", 
        price: 22.99, 
        imageUrl: getImg("default"), 
        category: "perfume", 
        stock: 45
    }
];
