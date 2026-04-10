import { Routes } from '@angular/router';
import { DatePage } from './pages/date/date.page';
import { ProductsPage } from './pages/products/products.page';
import { UsersPage } from './pages/users/users.page';
import { AboutPage } from './pages/about/about.page';
import { CategoriesPage } from './pages/categories/categories.page';
import { TeamPage } from './pages/team/team.page';

/**
 * Definición de las rutas principales de la aplicación.
 *
 * @remarks
 * Este archivo contiene la configuración de enrutamiento
 * utilizada por Angular Router para mapear las URLs
 * a los componentes correspondientes.
 *
 * Incluye:
 * - Rutas de navegación principales
 * - Rutas de información general (about, categories, team)
 * - Redirección por defecto para rutas no existentes
 *
 * @see {@link UsersPage}
 * @see {@link ProductsPage}
 * @see {@link AboutPage}
 * @see {@link CategoriesPage}
 * @see {@link TeamPage}
 */
export const routes: Routes = [

  /**
   * Ruta de usuarios.
   *
   * @remarks
   * Renderiza el componente `UsersPage`, encargado
   * de mostrar y gestionar el listado de usuarios.
   */
  { path: 'users', component: UsersPage },

  /**
   * Ruta de productos.
   *
   * @remarks
   * Renderiza el componente `ProductsPage`, encargado
   * de mostrar y gestionar el listado de productos.
   */
  { path: 'products', component: ProductsPage },

  /**
   * Ruta de la fecha.
   *
   * @remarks
   * Renderiza el componente `DatePage`, encargado
   * de mostrar la fecha actual del sistema.
   */
  { path: 'date', component: DatePage },

  /**
   * Ruta de información "Acerca de".
   *
   * @remarks
   * Renderiza el componente `AboutPage`, encargado
   * de mostrar información general sobre la aplicación y su arquitectura.
   */
  { path: 'about', component: AboutPage },

  /**
   * Ruta de categorías de productos.
   *
   * @remarks
   * Renderiza el componente `CategoriesPage`, encargado
   * de mostrar las categorías disponibles de productos.
   */
  { path: 'categories', component: CategoriesPage },

  /**
   * Ruta del equipo de desarrollo.
   *
   * @remarks
   * Renderiza el componente `TeamPage`, encargado
   * de mostrar información sobre el equipo y sus roles.
   */
  { path: 'team', component: TeamPage },

  /**
   * Ruta comodín.
   *
   * @remarks
   * Captura cualquier ruta no definida y redirige
   * automáticamente a la ruta de usuarios.
   */
  { path: '**', redirectTo: 'users' },
];