
import type { Product } from './types';

/**
 * Función auxiliar para obtener imágenes por defecto o específicas.
 * Se mantiene por si se desea repoblar el catálogo en el futuro.
 */
export const getImg = (id: number | string) => {
    const images: Record<string, string> = {
        "default": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    };
    return images[id.toString()] || images.default;
};

/**
 * Catálogo maestro de productos. 
 * Actualmente vacío por requerimiento.
 */
export const allProducts: Product[] = [];
