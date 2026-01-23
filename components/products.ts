
import type { Product } from './types';

export const getImg = (id: number | string) => {
    const images: Record<string, string> = {
        "47718": "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80", // O Sweet Marshmallow
        "36152": "https://images.unsplash.com/photo-1617895153857-82fe79adfcd4?auto=format&fit=crop&w=800&q=80", // Crema Universal Frambuesa (Real)
        "47439": "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80", // Crema Universal Ciruela (Real)
        "43295": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80", // Barra Labios Colour Stylist
        "46060": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80", // All or Nothing Amplified
        "47511": "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=800&q=80", // Giordani Gold Essenza
        "46047": "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?auto=format&fit=crop&w=800&q=80", // Love Potion Cherry
        "481017": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80", // Royal Velvet Night
        "42490": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80", // Ascendant
        "42499": "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80", // Classique Weekend
        "default": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    };
    return images[id.toString()] || images.default;
};

const generateRequestedCatalog = (): Product[] => {
    const list: Product[] = [
        { id: 47718, name: "O Sweet Marshmallow Eau de Toilette", brand: "Oriflame", price: 15.99, imageUrl: getImg(47718), category: "perfume", stock: 100 },
        { id: 47201, name: "Sérum Eclat NovAge+ - Lanzamiento", brand: "NovAge+", price: 38.00, imageUrl: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=800&q=80", category: "skincare", stock: 45, tag: "NOVEDAD" },
        { id: 481017, name: "Crema Noche Reafirmante Regal Velvet", brand: "Royal Velvet", price: 23.99, imageUrl: getImg(481017), category: "skincare", stock: 60, tag: "SET" },
        { id: 36152, name: "Crema Universal Aceite Frambuesa", brand: "Oriflame", price: 7.99, imageUrl: getImg(36152), category: "skincare", stock: 500, tag: "OFERTA" },
        { id: 43295, name: "Barra Labios Colour Stylist One", brand: "The One", price: 9.99, imageUrl: getImg(43295), category: "makeup", stock: 100 },
        { id: 46928, name: "Sombra Ojos Colour Unlimited", brand: "The One", price: 7.99, imageUrl: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80", category: "makeup", stock: 100 },
        { id: 42499, name: "Eau de Toilette Classique Weekend", brand: "Oriflame", price: 26.99, imageUrl: getImg(42499), category: "perfume", stock: 100 },
        { id: 48650, name: "Máscara Winter Wonderland Lash", brand: "The One", price: 9.99, imageUrl: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80", category: "makeup", stock: 100 },
        { id: 47439, name: "Crema Universal Ciruela Dulce", brand: "Oriflame", price: 7.99, imageUrl: getImg(47439), category: "skincare", stock: 100 },
        { id: 46047, name: "Eau de Perfume Love Potion Cherry", brand: "Love Potion", price: 25.99, imageUrl: getImg(46047), category: "perfume", stock: 100 },
        { id: 47511, name: "Perfume Giordani Gold Essenza", brand: "Giordani Gold", price: 42.99, imageUrl: getImg(47511), category: "perfume", stock: 100, tag: "SET" },
        { id: 46060, name: "Perfume All or Nothing Amplified", brand: "All or Nothing", price: 62.99, imageUrl: getImg(46060), category: "perfume", stock: 100 },
        { id: 42490, name: "Eau de Toilette Ascendant", brand: "Oriflame Men", price: 29.99, imageUrl: getImg(42490), category: "men", stock: 100 }
    ];

    // Llenar hasta completar el catálogo solicitado de 600 productos, solo cosmética
    const currentCount = list.length;
    const target = 600;
    for (let i = 0; i < (target - currentCount); i++) {
        const baseId = 80000 + i;
        list.push({
            id: baseId,
            name: `Cosmético Edición Especial Ref ${baseId}`,
            brand: "Oriflame Beauty",
            price: 10 + Math.random() * 80,
            imageUrl: getImg("default"),
            category: "skincare",
            stock: 100
        });
    }

    return list;
};

export const allProducts: Product[] = generateRequestedCatalog();
