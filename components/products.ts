
import type { Product } from './types';

/**
 * Función auxiliar para obtener imágenes por defecto o por ID.
 * Se mantiene por compatibilidad técnica con los componentes de la interfaz.
 */
export const getImg = (id: number | string) => {
    return "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80";
};

/**
 * Catálogo maestro de Bella Perfumería.
 * Actualmente vacío por solicitud del administrador del sistema.
 */
export const allProducts: Product[] = [];
