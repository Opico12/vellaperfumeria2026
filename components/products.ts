
import type { Product } from './types';

export const allProducts: Product[] = [
    // --- MAQUILLAJE (30 PRODUCTOS) ---
    { 
        id: 40772, 
        name: "Perlas de Color Giordani Gold - Luminous Peach", 
        brand: "Giordani Gold", 
        price: 19.99, 
        regularPrice: 34.00, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F40772%2F40772_1.png", 
        description: "Redefine por completo el concepto de luminosidad facial con las legendarias Perlas de Color de Giordani Gold. Esta nueva generación de perlas no es solo maquillaje; es un tratamiento de lujo infundido con un Sérum de Juventud avanzado y Ácido Hialurónico puro de bajo peso molecular que trabaja mientras luces radiante. \n\nCada perla es moldeada de forma individual y artesanal por maestros artesanos en Italia, seleccionando cuidadosamente una mezcla cromática de cinco pigmentos distintos que actúan en sinergia para capturar, filtrar y reflejar la luz de manera multidimensional sobre tu piel. El tono Luminous Peach ha sido diseñado específicamente para aportar esa calidez saludable y vibrante típica de un rostro revitalizado por el sol mediterráneo, esculpiendo suavemente tus facciones sin dejar marcas.\n\nBeneficios clave: \n• Efecto lifting visual instantáneo gracias a la tecnología de reflexión de luz.\n• Hidratación continua que evita que el producto se cuartee o marque líneas de expresión.\n• Textura de seda que permite una aplicación uniforme y modulable.\n\nRitual de aplicación: Utiliza una brocha de polvos de cerdas naturales, realiza movimientos circulares sobre las perlas para recoger todos los pigmentos y aplícalo desde los pómulos hacia las sienes en forma de '3'. Sentirás como tu rostro cobra vida al instante.", 
        stock: 50, 
        category: 'makeup', 
        subCategory: 'Giordani Gold' 
    },
    { 
        id: 41147, 
        name: "Base Giordani Gold Pure Úforia", 
        brand: "Giordani Gold", 
        price: 22.99, 
        regularPrice: 38.00, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F42361%2F42361_1.png", 
        description: "Experimenta la euforia absoluta de una piel que no solo se ve perfecta, sino que se siente profundamente saludable. La Base Pure Úforia de Giordani Gold es el eslabón perdido entre el cuidado de la piel de alta gama y el maquillaje de cobertura profesional. \n\nGracias a su revolucionaria tecnología Harmony Essence, esta base crea una barrera invisible pero poderosa que sincroniza los niveles de hidratación de tu piel con el ambiente externo. Su fórmula está enriquecida con Cristales de Resplandor que minimizan la apariencia de poros y rojeces, proporcionando un acabado etéreo y luminoso que parece nacer de tu propia dermis. \n\nPor qué elegirla: \n• Cobertura modulable de media a alta con sensación de ligereza total.\n• Factor de protección solar que previene el fotoenvejecimiento diario.\n• Complejo Hydra-Active que retiene el agua en las capas profundas de la piel durante 24 horas.\n\nEs la base ideal para mujeres que no quieren elegir entre un acabado profesional y el bienestar de su piel. Su fragancia sutil y su envase de vidrio esmerilado completan una experiencia sensorial única que eleva tu rutina matutina a un momento de puro placer.", 
        stock: 40, 
        category: 'makeup', 
        subCategory: 'Giordani Gold' 
    },
    { 
        id: 38784, 
        name: "Labial Matte OnColour - Red Velvet", 
        brand: "OnColour", 
        price: 3.49, 
        regularPrice: 9.00, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F38784%2F38784_1.png", 
        description: "Rompe las reglas con el tono Red Velvet, el rojo más audaz y carismático de la colección OnColour. Este labial mate ha sido formulado para la mujer moderna que exige un color intenso que dure todo el día sin sacrificar la comodidad de sus labios. \n\nSu fórmula Creamy-Matte utiliza polímeros de alta adherencia y ceras de origen vegetal que envuelven los labios en una capa de color saturado con un acabado aterciopelado impecable. A diferencia de otros mates que resecan y cuartean la piel, OnColour contiene Vitamina E acondicionadora, lo que asegura que tus labios se mantengan suaves y flexibles incluso después de horas de uso.\n\nDetalles que marcan la diferencia:\n• Pigmentación 100% real desde la primera pasada.\n• Aplicador ergonómico que permite perfilar y rellenar con precisión quirúrgica.\n• Tono Red Velvet: El rojo clásico con subtono azulado que hace que tus dientes se vean más blancos.\n\nPerfecto para una cena especial o para darle poder a tu look de oficina diario. Es color, es actitud, es OnColour.", 
        stock: 100, 
        category: 'makeup', 
        subCategory: 'OnColour', 
        tag: 'OFERTA' 
    },

    // --- CUIDADO FACIAL ---
    { 
        id: 41030, 
        name: "Limpiador Oil-to-Milk Novage+", 
        brand: "Novage+", 
        price: 24.99, 
        regularPrice: 35.00, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F41030%2F41030_1.png", 
        description: "El primer paso hacia una piel extraordinariamente joven comienza aquí. El Limpiador Comfort Oil-to-Milk de Novage+ es una proeza de la ciencia cosmética diseñada para transformar tu limpieza diaria en una experiencia de spa de lujo. \n\nEste limpiador inteligente opera bajo el principio de 'lo semejante disuelve lo semejante'. Al aplicarlo como un aceite sedoso sobre el rostro seco, se une magnéticamente a las impurezas oleosas: exceso de sebo, maquillaje waterproof persistente y residuos de contaminación urbana. Al añadir agua, ocurre el milagro: se transforma instantáneamente en una leche rica y fluida que arrastra toda la suciedad, dejando el rostro absolutamente libre de residuos pero conservando íntegra su barrera lipídica.\n\nTecnología Bio-Activa: \nEnriquecido con el sistema Bio Lipid, que imita los aceites naturales de la piel para asegurar una limpieza sin agresión. El resultado es una piel que respira, suave al tacto y perfectamente preparada para absorber los potentes activos de tus siguientes pasos de tratamiento.\n\nEs ideal para todo tipo de pieles, especialmente aquellas que buscan un plus de confort y elasticidad desde el primer segundo de su rutina.", 
        stock: 60, 
        category: 'skincare', 
        subCategory: 'Novage+', 
        tag: 'PASO 1' 
    },
    { 
        id: 41033, 
        name: "Contorno de Ojos Lift + Firm Novage+", 
        brand: "Novage+", 
        price: 32.00, 
        regularPrice: 42.00, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F41033%2F41033_1.png", 
        description: "Recupera la arquitectura de tu mirada con el tratamiento de contorno de ojos más avanzado de Novage+. Este elixir ha sido desarrollado específicamente para tratar la zona más delicada y reveladora del rostro: el área periocular. \n\nUtilizando la tecnología patentada Bio Aspartolift, este producto actúa como un interruptor genético que reactiva la flexibilidad de los fibroblastos, las células responsables de producir colágeno y elastina. El efecto es un lifting visible y una firmeza redescubierta que abre la mirada y suaviza drásticamente la apariencia de las arrugas conocidas como 'patas de gallo'.\n\nBeneficios visibles:\n• Párpados más elevados y definidos.\n• Reducción de la coloración oscura en la zona de las ojeras.\n• Hidratación profunda que rellena las finas líneas de deshidratación.\n\nSu textura ligera se absorbe en segundos, permitiendo la aplicación inmediata de maquillaje si se desea. Sin fragancia para evitar irritaciones, es el aliado perfecto para quienes exigen resultados clínicos y una mirada radiante que no refleje el cansancio ni el paso de los años.", 
        stock: 50, 
        category: 'skincare', 
        subCategory: 'Novage+', 
        tag: 'PASO 2' 
    }
];
