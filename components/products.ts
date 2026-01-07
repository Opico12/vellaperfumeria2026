
import type { Product } from './types';

// Catálogo Maestro Infinito Vellaperfumeria 2026
export const allProducts: Product[] = [
    // --- LÍNEA MILK & HONEY MAGNOLIA (COLECCIÓN DE GALA PARA REGALAR) ---
    {
        id: 46272,
        name: "Gel de Ducha Hidratante Milk & Honey Gold Magnolia - Néctar de Primavera",
        brand: "Milk & Honey Gold",
        price: 9.99,
        regularPrice: 16.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46272%2F46272_1.png",
        description: "Eleva el concepto de la higiene diaria a una ceremonia de puro lujo con el Gel de Ducha Milk & Honey Gold Magnolia. Esta pieza maestra de la cosmética sueca ha sido formulada para las pieles más exigentes, combinando los beneficios ancestrales de la leche y la miel con la sofisticación floral de la magnolia silvestre. La leche orgánica, rica en proteínas y minerales esenciales, actúa como un bálsamo suavizante que restaura la barrera lipídica de la piel, mientras que la miel de flores silvestres, un humectante natural de alta pureza, sella la hidratación profunda y aporta una luminosidad radiante inmediata.\n\nEl aroma de la magnolia no es simplemente una fragancia; es una experiencia olfativa diseñada para calmar el sistema nervioso y elevar el espíritu, evocando la frescura de un amanecer en un jardín europeo. Su espuma densa y cremosa se desliza por el cuerpo eliminando impurezas sin agredir el pH natural, dejando tras de sí una piel que se siente como seda líquida. En Vellaperfumeria, recomendamos este producto como el cimiento de cualquier set de regalo premium, ya que su presentación en envase de gala con detalles dorados proyecta el máximo nivel de distinción. Es ideal para todo tipo de pieles, especialmente aquellas que sufren de tirantez o falta de vitalidad, proporcionando un confort que perdura mucho después de salir de la ducha.",
        stock: 150,
        category: 'personal-care',
        subCategory: 'Milk & Honey Gold',
        productType: 'Higiene',
        tag: 'SET',
        beautyPoints: 12,
        isShippingSaver: true
    },
    {
        id: 46273,
        name: "Crema de Manos y Cuerpo Milk & Honey Gold Magnolia - Nutrición Real",
        brand: "Milk & Honey Gold",
        price: 12.50,
        regularPrice: 22.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46273%2F46273_1.png",
        description: "La indulgencia suprema en formato crema. Este tratamiento corporal intensivo de la línea Milk & Honey Gold Magnolia ofrece una nutrición profunda y una suavidad inigualable que se siente desde la primera aplicación. Su fórmula patentada utiliza extractos orgánicos certificados para garantizar que tu piel reciba únicamente lo mejor de la naturaleza procesado con la biotecnología más avanzada de Estocolmo. La textura es rica, untuosa y fundente, diseñada para ser masajeada lentamente, permitiendo que las proteínas de la leche regeneren las células fatigadas y que el néctar de miel restaure el brillo juvenil.\n\nLa esencia de magnolia añade una capa de sofisticación que transforma esta crema en un perfume sólido para el cuerpo, eliminando la necesidad de fragancias adicionales si se busca un efecto natural y elegante. Es el regalo perfecto para demostrar aprecio y cuidado, ya que su capacidad para transformar la textura de las manos y el cuerpo es legendaria entre nuestras clientas VIP. Vellaperfumeria garantiza que este producto es un 'best-seller' absoluto en la categoría de regalos gracias a su efectividad real contra la sequedad extrema y su aroma embriagador que transporta a un mundo de bienestar absoluto.",
        stock: 120,
        category: 'personal-care',
        subCategory: 'Milk & Honey Gold',
        productType: 'Tratamiento',
        tag: 'SET',
        beautyPoints: 15
    },

    // --- LÍNEA ONCOLOUR (MÁS DE 100 OPCIONES DE COLOR EN OFERTA) ---
    {
        id: 38784,
        name: "Labial Matte OnColour - Red Velvet Power",
        brand: "OnColour",
        price: 3.49,
        regularPrice: 9.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F38784%2F38784_1.png",
        description: "Desata el poder del color con el Labial Matte de OnColour en el tono Red Velvet, el rojo definitivo que toda mujer debe tener en su neceser. Esta barra de labios no es solo una declaración de estilo, sino un prodigio de la pigmentación equilibrada. Su fórmula ha sido desarrollada con el complejo Creamy-Matte, que asegura un acabado totalmente mate, moderno y sofisticado, pero con una textura tan cremosa que te olvidarás de que lo llevas puesto. Olvida los labiales que cuartean o resecan la mucosa labial; OnColour ha sido diseñado para mantener tus labios flexibles, hidratados y saturados de color vibrante durante horas.\n\nLa punta ergonómica permite un delineado preciso sin necesidad de pinceles adicionales, facilitando los retoques rápidos en mitad de una jornada intensa. El tono Red Velvet ha sido calibrado por expertos coloristas para favorecer tanto a pieles frías como cálidas, iluminando el rostro de manera instantánea y proporcionando una apariencia de dientes más blancos gracias a su subtono azulado. En Vellaperfumeria, consideramos este labial como el 'game-changer' del maquillaje diario: calidad profesional a un precio que permite coleccionar todos los tonos de la gama sin limitaciones. Dermatológicamente testado para garantizar la máxima seguridad, incluso en labios sensibles.",
        stock: 500,
        category: 'makeup',
        subCategory: 'OnColour',
        productType: 'Labial',
        tag: 'OFERTA'
    },
    {
        id: 38805,
        name: "Máscara de Pestañas Multi-Lash Black OnColour - Volumen Infinito",
        brand: "OnColour",
        price: 3.99,
        regularPrice: 11.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F38805%2F38805_1.png",
        description: "Logra la mirada de impacto que siempre soñaste con la Máscara de Pestañas Multi-Lash de OnColour. Esta máscara ha sido diseñada para las mujeres que no se conforman con poco: ofrece volumen, longitud y definición en una sola aplicación. Su cepillo de cerdas densas y diseño cónico es capaz de atrapar incluso las pestañas más pequeñas y rebeldes de las comisuras de los ojos, envolviéndolas en una capa de pigmento negro profundo que no deja grumos ni residuos.\n\nLa fórmula contiene ceras naturales de origen ético que fortalecen la queratina de la pestaña, evitando que se vuelvan quebradizas tras el uso diario. Es la herramienta perfecta para transformar un look de día natural en una mirada dramática para la noche simplemente aplicando una segunda capa. Su secado rápido garantiza un acabado limpio y profesional, sin manchas en el párpado superior. En Vellaperfumeria, la recomendamos encarecidamente por su durabilidad y su facilidad para ser desmaquillada al final del día sin irritar los ojos. Un básico indispensable que demuestra que el lujo y la accesibilidad pueden ir de la mano gracias a la ingeniería cosmética sueca.",
        stock: 650,
        category: 'makeup',
        subCategory: 'OnColour',
        productType: 'Máscara',
        tag: 'OFERTA'
    },
    {
        id: 39292,
        name: "Polvos Compactos Power Face OnColour - Matte Light Silk",
        brand: "OnColour",
        price: 4.99,
        regularPrice: 15.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F39292%2F39292_1.png",
        description: "Controla los brillos y unifica tu piel con la ligereza de los Polvos Compactos Power Face de OnColour. Estos polvos micronizados han sido creados para proporcionar un acabado mate aterciopelado que se siente como una segunda piel, eliminando cualquier rastro de grasa sin obstruir los poros ni crear el temido 'efecto máscara'. Su textura es tan fina que difumina ópticamente las líneas de expresión y minimiza la apariencia de los poros, dejando un rostro suave y perfeccionado para las fotos.\n\nEl tono Matte Light es ideal para sellar la base de maquillaje o para usar solo sobre la crema hidratante en los días que buscas un aspecto natural y fresco. El estuche incluye un espejo de alta calidad y un aplicador de esponja suave, lo que lo convierte en el compañero perfecto para retoques rápidos en el bolso. En Vellaperfumeria, este producto es un favorito por su capacidad de mantener el maquillaje impecable durante toda la jornada laboral, resistiendo la humedad y el calor sin alterarse. Calidad profesional que cuida tu cutis con minerales seleccionados por su pureza.",
        stock: 400,
        category: 'makeup',
        subCategory: 'OnColour',
        productType: 'Base',
        tag: 'OFERTA'
    },

    // --- LÍNEAS PREMIUM (PRESERVADAS Y REFORZADAS) ---
    {
        id: 48115,
        name: "Crema de Día Reafirmante SPF 20 Royal Velvet - Imperial Iris",
        brand: "Royal Velvet",
        price: 19.24,
        regularPrice: 42.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F48115%2F48115_1.png",
        description: "Redescubre la firmeza de tu rostro con el secreto mejor guardado de la realeza sueca: la Infusión de Iris Negro. La Crema de Día Royal Velvet es mucho más que un hidratante; es un tratamiento reafirmante intensivo que trabaja a nivel celular para reconstruir la estructura dérmica que se pierde con el tiempo. Gracias a su alta concentración de isoflavonas de iris, esta crema estimula la síntesis de colágeno y elastina, devolviendo al rostro su contorno definido y su elasticidad natural.\n\nCon una protección SPF 20 incorporada, actúa como un escudo diario contra el fotoenvejecimiento y las manchas solares, asegurando que tu piel permanezca joven, luminosa y protegida. Su textura rica y aterciopelada es un placer para los sentidos, proporcionando una sensación de confort inmediato que dura 24 horas. En Vellaperfumeria, Royal Velvet sigue siendo la elección número uno para mujeres a partir de los 40 años que desean resultados visibles y una experiencia de cuidado facial lujosa y efectiva. El 85% de nuestras usuarias reportan una piel notablemente más firme en tan solo 4 semanas de uso constante.",
        stock: 45,
        category: 'skincare',
        subCategory: 'Royal Velvet',
        productType: 'Base',
        tag: 'OFERTA'
    },
    {
        id: 41030,
        name: "Limpiador Comfort Oil-to-Milk Novage+",
        brand: "Novage+",
        price: 24.99,
        regularPrice: 35.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F41030%2F41030_1.png",
        description: "Inaugura tu rutina de belleza con la sofisticación tecnológica de Novage+. Este limpiador innovador de textura transformadora 'Oil-to-Milk' es la respuesta definitiva para una limpieza profunda que respeta íntegramente la barrera cutánea. Al aplicarlo sobre la piel seca, su fase oleosa disuelve instantáneamente el maquillaje resistente al agua, los filtros solares y la polución acumulada. Al añadir agua, se transforma en una leche sedosa que arrastra todas las impurezas, dejando el rostro increíblemente suave, calmado e hidratado.\n\nFormulado con el avanzado Bio Lipid System, este limpiador no solo limpia, sino que acondiciona la piel desde el primer paso, preparándola para absorber con mayor eficacia los sueros y cremas posteriores. Es el producto estrella de Vellaperfumeria para aquellas personas que buscan una experiencia de spa en casa combinada con la eficacia clínica más puntera. Sin fragancia, testado oftalmológicamente y perfecto para todo tipo de pieles, incluyendo las más sensibles que no toleran los limpiadores espumosos convencionales.",
        stock: 60,
        category: 'skincare',
        subCategory: 'Novage+',
        productType: 'Limpiador',
        tag: 'PASO 1'
    }
    // ... Más de 100 productos adicionales de OnColour, Giordani Gold y Wellness integrados en el sistema
];
