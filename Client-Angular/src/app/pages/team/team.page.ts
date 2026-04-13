import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import type { BadgeType } from '../../interfaces/Badge';

/**
 * Interfaz que representa a un miembro del equipo de desarrollo.
 *
 * Define la estructura de datos para cada profesional que forma parte del equipo,
 * incluyendo información de identificación, competencias y perfil.
 *
 * @interface TeamMember
 * @property {number} id - Identificador único del miembro del equipo
 * @property {string} name - Nombre completo del miembro
 * @property {string} role - Rol profesional que desempeña en el proyecto
 * @property {string[]} expertise - Array de especialidades técnicas y competencias
 * @property {string} bio - Descripción biográfica o responsabilidades del miembro
 * @property {string} emoji - Emoji representativo del miembro o su rol
 */
interface TeamMember {
  id: number;
  name: string;
  role: string;
  expertise: string[];
  bio: string;
  emoji: string;
}

/**
 * Interfaz que define un rol disponible en el equipo de trabajo.
 *
 * Describe las características y atributos de cada rol que puede ser desempeñado
 * en el proyecto, incluyendo su descripción y disponibilidad actual.
 *
 * @interface TeamRole
 * @property {string} role - Nombre del rol (ej: Arquitecto, Frontend, Backend)
 * @property {string} description - Descripción detallada de las responsabilidades del rol
 * @property {BadgeType} badgeType - Tipo de badge para indicar visualmente el rol
 * @property {number} count - Cantidad de miembros asignados a este rol actualmente
 */
interface TeamRole {
  role: string;
  description: string;
  badgeType: BadgeType;
  count: number;
}

/**
 * Componente de página del Equipo.
 *
 * Muestra información sobre los miembros del equipo de desarrollo,
 * sus roles, especialidades y responsabilidades en el proyecto.
 *
 * @remarks
 * Este componente demuestra el patrón de página de equipo en Angular,
 * mostrando perfiles, roles y responsabilidades de manera estructurada.
 * Incluye información institucional y distribución de roles.
 *
 * @example
 * ```ts
 * // Importar el componente en las rutas
 * { path: 'team', component: TeamPage }
 * ```
 */
@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrl: './team.page.scss',
  imports: [CommonModule, RouterModule],
})
export class TeamPage {
  /**
   * Miembros del equipo de desarrollo
   */
  teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Ingeniero del Proyecto',
      role: 'Arquitecto de Software',
      expertise: ['Astro', 'Angular', 'TypeScript', 'Arquitectura'],
      bio: 'Líder del proyecto responsable de definir la arquitectura y estructura general.',
      emoji: '👨‍💻'
    },
    {
      id: 2,
      name: 'Desarrollador Frontend',
      role: 'Especialista en Astro',
      expertise: ['Astro', 'Bootstrap', 'Componentes', 'SSG'],
      bio: 'Responsable del desarrollo de la aplicación Astro SSG y sus componentes.',
      emoji: '🚀'
    },
    {
      id: 3,
      name: 'Desarrollador Frontend',
      role: 'Especialista en Angular',
      expertise: ['Angular', 'RxJS', 'SPA', 'Testing'],
      bio: 'Especialista en la implementación de la aplicación Angular SPA con patrones modernos.',
      emoji: '⚡'
    },
    {
      id: 4,
      name: 'Ingeniero de QA',
      role: 'Aseguramiento de Calidad',
      expertise: ['Testing', 'Jest', 'Code Review', 'Documentation'],
      bio: 'Encargado de la calidad del código y las pruebas automatizadas.',
      emoji: '✅'
    }
  ];

  /**
   * Roles disponibles en el equipo
   */
  teamRoles: TeamRole[] = [
    { role: 'Arquitecto', description: 'Diseña la estructura general del proyecto', badgeType: 'danger', count: 1 },
    { role: 'Backend', description: 'Gestión de base de datos y servidores', badgeType: 'primary', count: 0 },
    { role: 'Frontend', description: 'Interfaz y experiencia del usuario', badgeType: 'success', count: 2 },
    { role: 'DevOps', description: 'Despliegue e infraestructura', badgeType: 'secondary', count: 0 },
    { role: 'QA', description: 'Pruebas y aseguramiento de calidad', badgeType: 'warning', count: 1 }
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
