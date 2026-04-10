import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Objective {
  title: string;
  description: string;
}

interface Technology {
  category: string;
  items: string[];
}

/**
 * Componente de página "Acerca de" (About).
 *
 * Presenta información general sobre la aplicación, sus objetivos,
 * tecnologías utilizadas y contexto educativo.
 *
 * @remarks
 * Este componente demuestra el patrón de página informativa en Angular,
 * mostrando contenido estructurado con diferentes secciones y enlace de navegación.
 * Sin datos dinámicos, enfocado en información estática del proyecto.
 *
 * @example
 * ```ts
 * // Importar el componente en las rutas
 * { path: 'about', component: AboutPage }
 * ```
 */
@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrl: './about.page.scss',
  imports: [CommonModule, RouterModule],
})
export class AboutPage {
  /**
   * Lista de objetivos principales del proyecto
   */
  objectives: Objective[] = [
    {
      title: 'Astro SSG',
      description: 'Demostrar la generación estática de sitios (Static Site Generation) con Astro'
    },
    {
      title: 'Angular SPA',
      description: 'Mostrar aplicaciones de página única (Single Page Application) con Angular'
    },
    {
      title: 'Comparación',
      description: 'Analizar las diferencias en arquitectura, rendimiento y casos de uso'
    },
    {
      title: 'Buenas Prácticas',
      description: 'Implementar patrones modernos de desarrollo web'
    }
  ];

  /**
   * Tecnologías utilizadas en el proyecto
   */
  technologies: Technology[] = [
    {
      category: 'Frontend Frameworks',
      items: ['Astro 5.16.9', 'Angular 20.3.14', 'TypeScript']
    },
    {
      category: 'Estilos y Componentes',
      items: ['Bootstrap 5.3.8', 'Bootstrap Icons', 'SCSS/CSS']
    },
    {
      category: 'Herramientas',
      items: ['RxJS', 'Jest (Testing)', 'Git']
    }
  ];
}
