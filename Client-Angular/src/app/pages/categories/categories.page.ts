import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import type { BadgeType } from '../../interfaces/Badge';
import type { ProductCategory } from '../../interfaces/products.interface';

interface Category {
  name: ProductCategory;
  description: string;
  emoji: string;
  badgeType: BadgeType;
  examples: string[];
}

/**
 * Componente de página de Categorías.
 *
 * Muestra información detallada sobre las categorías de productos disponibles
 * en el sistema, incluyendo descripción, ejemplos y características de cada una.
 *
 * @remarks
 * Este componente demuestra el patrón de página de contenido en Angular,
 * mostrando datos estructurados con tarjetas interactivas y tablas.
 *
 * @example
 * ```ts
 * // Importar el componente en las rutas
 * { path: 'categories', component: CategoriesPage }
 * ```
 */
@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrl: './categories.page.scss',
  imports: [CommonModule, RouterModule],
})
export class CategoriesPage {
  /**
   * Lista de categorías disponibles
   */
  categories: Category[] = [
    {
      name: 'Carnes',
      description: 'Productos cárnicos frescos y de alta calidad. Incluyendo carnes rojas, pollo y pescado.',
      emoji: '🥩',
      badgeType: 'danger',
      examples: ['Carne de res', 'Pechuga de pollo', 'Lomo', 'Filete de pescado', 'Jamón']
    },
    {
      name: 'Frutas',
      description: 'Frutas frescas seleccionadas, ricas en vitaminas y minerales. Ideales para una dieta saludable.',
      emoji: '🍎',
      badgeType: 'warning',
      examples: ['Manzana', 'Plátano', 'Naranja', 'Fresas', 'Piña']
    },
    {
      name: 'Lacteos',
      description: 'Productos lácteos de excelente calidad. Leche, quesos, yogurt y derivados.',
      emoji: '🥛',
      badgeType: 'primary',
      examples: ['Leche entera', 'Queso fresco', 'Yogurt natural', 'Butter', 'Crema']
    },
    {
      name: 'Verduras',
      description: 'Verduras y hortalizas frescas cultivadas localmente. Nutritivas y deliciosas.',
      emoji: '🥬',
      badgeType: 'success',
      examples: ['Lechuga', 'Tomate', 'Cebolla', 'Zanahoria', 'Brócoli']
    }
  ];

  /**
   * Obtiene la clase de badge correspondiente al tipo
   */
  getBadgeClass(badgeType: BadgeType): string {
    const badgeMap: Record<BadgeType, string> = {
      'primary': 'badge-primary',
      'secondary': 'badge-secondary',
      'success': 'badge-success',
      'danger': 'badge-danger',
      'warning': 'badge-warning',
      'info': 'badge-info',
      'light': 'badge-light',
      'dark': 'badge-dark'
    };
    return badgeMap[badgeType] || 'badge-primary';
  }
}
