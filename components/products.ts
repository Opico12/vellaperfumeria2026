
import type { Product } from './types';

/**
 * Catálogo maestro de Bella Perfumería.
 * Actualmente vacío por requerimiento de gestión de inventario.
 */
export const allProducts: Product[] = [];

export const getImg = (id: number | string) => {
    return "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80";
};
