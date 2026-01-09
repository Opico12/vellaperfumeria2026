
import type { Product } from './types';

const getImg = (id: number) => `https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F${id}%2F${id}_1.png`;

export const allProducts: Product[] = [
    // --- CUIDADO FACIAL (NOVAGE+) - PRECIO CORREGIDO 44€ ---
    { 
        id: 41034, 
        name: "Crema de Día Novage+ Multi-Active SPF 30 Rich", 
        brand: "Novage+", 
        price: 44.00, 
        imageUrl: getImg(41034), 
        description: "Crema de día nutritiva avanzada que fortalece la barrera cutánea y combate múltiples signos del envejecimiento con SPF 30. Textura rica para pieles secas.", 
        stock: 50, 
        category: 'skincare', 
        subCategory: 'Novage+' 
    },
    { 
        id: 41037, 
        name: "Crema de Noche Novage+ Multi-Active Rich", 
        brand: "Novage+", 
        price: 44.00, 
        imageUrl: getImg(41037), 
        description: "Reparación nocturna intensiva formulada para pieles normales a secas. Restaura la firmeza y luminosidad mientras duermes con Bio CeramidesPro.", 
        stock: 45, 
        category: 'skincare', 
        subCategory: 'Novage+' 
    },
    { 
        id: 41038, 
        name: "Crema de Noche Novage+ Multi-Active Light", 
        brand: "Novage+", 
        price: 44.00, 
        imageUrl: getImg(41038), 
        description: "Tratamiento nocturno de textura ligera diseñado para pieles mixtas o grasas. Reparación bio-activa sin sensación de pesadez.", 
        stock: 40, 
        category: 'skincare', 
        subCategory: 'Novage+' 
    },
    { id: 41030, name: "Limpiador en Gel Novage+ Refresh", brand: "Novage+", price: 32.00, imageUrl: getImg(41030), description: "Limpieza bio-nutritiva profunda que preserva la hidratación natural de la piel.", stock: 50, category: 'skincare', subCategory: 'Novage+' },
    { id: 41031, name: "Contorno de Ojos Novage+ Lift + Firm", brand: "Novage+", price: 38.00, imageUrl: getImg(41031), description: "Efecto tensor avanzado para elevar el párpado y reducir bolsas.", stock: 40, category: 'skincare', subCategory: 'Novage+' },
    { id: 41035, name: "Sérum Novage+ Wrinkle Smooth", brand: "Novage+", price: 52.00, imageUrl: getImg(41035), description: "Reduce drásticamente las arrugas con tecnología Bio CollagenPro.", stock: 25, category: 'skincare', subCategory: 'Novage+' },

    // --- CUIDADO FACIAL (OPTIMALS - IMAGEN SOLICITADA) ---
    { 
        id: 42580, 
        name: "Optimals Hydra Radiance Day Cream Light", 
        brand: "Optimals", 
        price: 18.00, 
        imageUrl: getImg(42580), 
        description: "Crema de día hidratante de textura ligera con MoistureLockIn Technology y PolluProtect. Formulada con algas verde-marrones y Vitamina C para una piel radiante.", 
        stock: 60, 
        category: 'skincare', 
        subCategory: 'Optimals' 
    },
    
    // --- TENDER CARE COLLECTION - PRECIO CORREGIDO 12€ ---
    { 
        id: 1276, 
        name: "Tender Care Clásica", 
        brand: "Oriflame", 
        price: 12.00, 
        imageUrl: getImg(1276), 
        description: "El bálsamo universal original desde 1970. Con cera de abeja natural y Vitamina E para suavizar cualquier zona seca del cuerpo.", 
        stock: 1000, 
        category: 'skincare', 
        subCategory: 'Oriflame' 
    },
    { 
        id: 34878, 
        name: "Tender Care Arándano Azul", 
        brand: "Oriflame", 
        price: 12.00, 
        imageUrl: getImg(34878), 
        description: "Bálsamo protector con aceite de semilla de arándano azul natural. Hidratación profunda con un aroma frutal exquisito.", 
        stock: 300, 
        category: 'skincare', 
        subCategory: 'Oriflame' 
    },
    { 
        id: 42589, // Cambiado el ID para no chocar con Optimals si fuera necesario, aunque Oriflame usa IDs únicos
        name: "Tender Care Fresa", 
        brand: "Oriflame", 
        price: 12.00, 
        imageUrl: getImg(42589), 
        description: "Cuidado icónico con el dulce aroma de la fresa. Protege y calma labios, cutículas y zonas ásperas al instante.", 
        stock: 250, 
        category: 'skincare', 
        subCategory: 'Oriflame' 
    },

    // --- FRAGANCIAS (26 PRODUCTOS MÍNIMO) ---
    { id: 38550, name: "All or Nothing Parfum", brand: "Oriflame", price: 60.00, imageUrl: getImg(38550), description: "Lujo máximo, exclusividad y estela eterna. Fragancia única que se adapta a tu piel.", stock: 20, category: 'perfume' },
    { id: 42502, name: "Giordani Gold Essenza Parfum", brand: "Oriflame", price: 54.00, imageUrl: getImg(42502), description: "Oro líquido con corazón de Flor de Azahar. La fragancia más icónica de Oriflame.", stock: 15, category: 'perfume' },
    { id: 46801, name: "Divine Dark Velvet EdP", brand: "Oriflame", price: 29.99, imageUrl: getImg(46801), description: "Fragancia nocturna, seductora y elegante con notas de iris negro.", stock: 50, category: 'perfume' },
    { id: 33955, name: "Possess The Secret Man EdP", brand: "Oriflame", price: 42.00, imageUrl: getImg(33955), description: "El secreto de la fuerza masculina con notas de hielo.", stock: 30, category: 'perfume' },
    { id: 33654, name: "Possess The Secret Her EdP", brand: "Oriflame", price: 42.00, imageUrl: getImg(33654), description: "Poderosa fragancia femenina inspirada en la manzana de oro.", stock: 30, category: 'perfume' },
    { id: 33957, name: "Eclat Style Parfum", brand: "Oriflame", price: 48.00, imageUrl: getImg(33957), description: "La cima de la elegancia masculina parisina con cuero De Laire.", stock: 25, category: 'perfume' },
    { id: 42786, name: "Love Potion Ruby EdP", brand: "Oriflame", price: 38.00, imageUrl: getImg(42786), description: "Explora tus deseos con chocolate Ruby y bayas rojas.", stock: 25, category: 'perfume' },
    { id: 42828, name: "Nordic Waters Her EdP", brand: "Oriflame", price: 38.00, imageUrl: getImg(42828), description: "Frescura oceánica pura capturada en un frasco.", stock: 40, category: 'perfume' },
    { id: 42811, name: "Nordic Waters Him EdP", brand: "Oriflame", price: 38.00, imageUrl: getImg(42811), description: "Siente el poder del mar con notas acuáticas revitalizantes.", stock: 40, category: 'perfume' },
    { id: 31293, name: "Eclat Femme EdT", brand: "Oriflame", price: 34.00, imageUrl: getImg(31293), description: "Sofisticación atemporal con flores de Jazmín.", stock: 40, category: 'perfume' },
    { id: 35532, name: "So Fever Together Her EdP", brand: "Oriflame", price: 36.00, imageUrl: getImg(35532), description: "Pasión compartida con notas de pimiento dulce.", stock: 35, category: 'perfume' },
    { id: 35531, name: "So Fever Together Him EdT", brand: "Oriflame", price: 36.00, imageUrl: getImg(35531), description: "Magnetismo irresistible con aceite de Bergamota.", stock: 35, category: 'perfume' },
    { id: 32538, name: "Infinita Eau de Parfum", brand: "Oriflame", price: 38.00, imageUrl: getImg(32538), description: "Fragancia que celebra la feminidad moderna con jazmín Grandiflorum.", stock: 35, category: 'perfume' },
    { id: 38531, name: "Signature Generation Him EdT", brand: "Oriflame", price: 40.00, imageUrl: getImg(38531), description: "Un legado de frescura masculina con maderas preciosas.", stock: 30, category: 'perfume' },
    { id: 38540, name: "Signature Generation Her EdT", brand: "Oriflame", price: 40.00, imageUrl: getImg(38540), description: "Floral amaderado que une generaciones.", stock: 30, category: 'perfume' },
    { id: 32235, name: "Elvie EdT", brand: "Oriflame", price: 28.00, imageUrl: getImg(32235), description: "La pureza de la naturaleza sueca con lirio de los valles.", stock: 50, category: 'perfume' },
    { id: 31099, name: "Love Potion EdP Original", brand: "Oriflame", price: 38.00, imageUrl: getImg(31099), description: "Afrodisíaco cóctel de chocolate, jengibre y flor de cacao.", stock: 40, category: 'perfume' },
    { id: 32504, name: "Giordani Gold White Original EdP", brand: "Oriflame", price: 42.00, imageUrl: getImg(32504), description: "La alegría de vivir con notas de pachulí y jazmín.", stock: 30, category: 'perfume' },
    { id: 33964, name: "Live In Colour EdP", brand: "Oriflame", price: 32.00, imageUrl: getImg(33964), description: "Explosión de colores florales para tu día a día.", stock: 40, category: 'perfume' },
    { id: 33959, name: "Amber Elixir Crystal EdP", brand: "Oriflame", price: 36.00, imageUrl: getImg(33959), description: "Sumérgete en el misterio del ámbar con notas marinas.", stock: 35, category: 'perfume' },
    { id: 11367, name: "Amber Elixir EdP Clásico", brand: "Oriflame", price: 36.00, imageUrl: getImg(11367), description: "Calidez oriental con ámbar, heliotropo y mandarina.", stock: 45, category: 'perfume' },
    { id: 32150, name: "Giordani Gold Original EdP", brand: "Oriflame", price: 42.00, imageUrl: getImg(32150), description: "Elegancia pura con flor de azahar blanca.", stock: 40, category: 'perfume' },
    { id: 31630, name: "Happydisiac Woman EdT", brand: "Oriflame", price: 26.00, imageUrl: getImg(31630), description: "Tu dosis diaria de felicidad con fresa salvaje.", stock: 55, category: 'perfume' },
    { id: 33413, name: "The Babes Crazy Kiwi EdT", brand: "Oriflame", price: 20.00, imageUrl: getImg(33413), description: "Divertida y audaz con kiwi y fresia.", stock: 60, category: 'perfume' },
    { id: 33958, name: "Love Potion Tempting EdT", brand: "Oriflame", price: 24.00, imageUrl: getImg(33958), description: "Tentación dulce con miel y orquídea.", stock: 70, category: 'perfume' },
    { id: 38521, name: "Venture Power EdT", brand: "Oriflame", price: 26.00, imageUrl: getImg(38521), description: "Para el hombre urbano que no teme al riesgo.", stock: 50, category: 'perfume' },

    // --- CUIDADO PREMIUM CAPILAR (ELEO - ACEITE SOLICITADO) ---
    { 
        id: 38601, 
        name: "Aceite Protector Eleo con Extracto de Camelia", 
        brand: "Oriflame", 
        price: 14.00, 
        imageUrl: getImg(38601), 
        description: "Aceite capilar de lujo con Golden Elixir. Nutre profundamente y protege el cabello seco y dañado. Acabado brillante y sedoso.", 
        stock: 120, 
        category: 'hair', 
        subCategory: 'Oriflame' 
    },
    { 
        id: 38600, 
        name: "Aceite Nutritivo Eleo Night Elixir", 
        brand: "Oriflame", 
        price: 18.00, 
        imageUrl: getImg(38600), 
        description: "Reparación capilar nocturna avanzada. Transforma tu cabello mientras duermes.", 
        stock: 80, 
        category: 'hair', 
        subCategory: 'Oriflame' 
    },

    // --- OTROS PRODUCTOS ---
    { id: 31614, name: "Exfoliante de Azúcar Milk & Honey Gold", brand: "Milk & Honey Gold", price: 14.00, imageUrl: getImg(31614), description: "El legendario exfoliante orgánico con partículas de azúcar y extractos naturales de leche y miel.", stock: 100, category: 'personal-care', subCategory: 'Milk & Honey Gold' },
    { id: 38742, name: "Labial OnColour Nude Beige", brand: "OnColour", price: 7.00, imageUrl: getImg(38742), description: "Color cremoso vibrante esencial.", stock: 50, category: 'makeup', subCategory: 'OnColour' },
    { id: 40672, name: "Base Everlasting Sync SPF 30", brand: "THE ONE", price: 23.00, imageUrl: getImg(40672), description: "Base inteligente adaptada al clima.", stock: 80, category: 'makeup', subCategory: 'THE ONE' },
    { id: 42125, name: "Máscara Wonder Lash 5 en 1 Waterproof", brand: "THE ONE", price: 17.00, imageUrl: getImg(42125), description: "La icónica máscara ahora resistente al agua.", stock: 100, category: 'makeup', subCategory: 'THE ONE' }
];
