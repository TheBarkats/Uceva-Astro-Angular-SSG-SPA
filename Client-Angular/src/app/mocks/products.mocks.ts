import { Product } from "../interfaces/products.interface";

/**
 * Datos de prueba para productos del sistema.
 *
 * Array que contiene un conjunto de productos de ejemplo utilizados para
 * propósitos de desarrollo, testing y demostración de la aplicación.
 * Incluye productos de diferentes categorías con información de precio y clasificación.
 * No representa inventario real; son datos ficticios para pruebas.
 *
 * @constant
 * @type {Product[]}
 * @example
 * // Usar en un servicio de prueba o demostración
 * const testProducts = PRODUCTS_MOCK;
 * console.log(testProducts.length); // 2 productos de prueba
 */
export const PRODUCTS_MOCK: Product[] = [
    {
        id: 1,
        name: 'Leche entera',
        category: 'Lacteos',
        price: 4500,
    },
    {
        id: 2,
        name: 'Manzana roja',
        category: 'Frutas',
        price: 3200,
    }
];