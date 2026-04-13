import { User } from "../interfaces/users.interface";

/**
 * Datos de prueba para usuarios del sistema.
 *
 * Array que contiene un conjunto de usuarios de ejemplo utilizados para
 * propósitos de desarrollo, testing y demostración de la aplicación.
 * No representa datos reales; son datos ficticios para pruebas.
 *
 * @constant
 * @type {User[]}
 * @example
 * // Usar en un servicio de prueba
 * const testUsers = USERS_MOCK;
 * console.log(testUsers.length); // 2 usuarios de prueba
 */
export const USERS_MOCK: User[] = [
    {
        id: 1,
        name: 'Carlos',
        lastName: 'Ramírez',
        age: 22,
        email: 'carlos.ramirez@example.com',
        engineering: 'Sistemas',
    },
    {
        id: 2,
        name: 'Ana',
        lastName: 'Gómez',
        age: 24,
        email: 'ana.gomez@example.com',
        engineering: 'Industrial',
    }
];