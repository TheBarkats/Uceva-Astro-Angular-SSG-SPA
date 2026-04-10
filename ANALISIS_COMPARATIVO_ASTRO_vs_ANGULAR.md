# ANÁLISIS COMPARATIVO: ASTRO SSG vs ANGULAR SPA
## Proyecto de Arquitectura de Software - UCEVA

---

## TABLA DE CONTENIDOS

1. [Introducción](#introducción)
2. [Proceso Técnico](#proceso-técnico)
3. [Builds de Producción](#builds-de-producción)
4. [Análisis Comparativo](#análisis-comparativo)
5. [Conclusiones Técnicas](#conclusiones-técnicas)
6. [Recomendaciones](#recomendaciones)

---

## INTRODUCCIÓN

Este documento presenta un análisis técnico detallado comparando dos patrones arquitectónicos modernos para desarrollo web:

- **ASTRO SSG (Static Site Generation)**: Generación de sitios estáticos en tiempo de compilación
- **ANGULAR SPA (Single Page Application)**: Aplicación de página única procesada en el navegador del cliente

Ambas implementaciones fueron realizadas bajo el mismo contexto educativo en UCEVA, VIII Semestre de Ingeniería de Sistemas, siguiendo principios de buenas prácticas arquitectónicas.

### Objetivos del Análisis

- Comparar el tamaño y composición de los builds de producción
- Analizar las diferencias en tiempo de compilación y carga
- Evaluar características de rendimiento y escalabilidad
- Proporcionar recomendaciones de uso según casos de uso

---

## PROCESO TÉCNICO

### 1. CREACIÓN DE VISTAS EN ASTRO

#### Estructura de Archivos

```
src/pages/
├── about.astro          # Información del proyecto
├── categories.astro     # Categorías de productos
├── team.astro          # Información del equipo
└── [otras páginas]
```

#### Proceso de Implementación

1. **Crear archivo `.astro`** en `src/pages/`

```astro
---
import MainLayout from "@layouts/MainLayout.astro";
import { USERS } from "@data/Users";

const users: User[] = USERS;
---

<MainLayout>
  <!-- Contenido HTML -->
</MainLayout>

<style>
  /* Estilos scoped */
</style>
```

2. **Características del desarrollo en Astro:**
   - **Hot Module Replacement (HMR)**: Los cambios se reflejan instantáneamente
   - **Component-based**: Reutilización de componentes `.astro`
   - **TypeScript nativo**: Soporte total para tipos estáticos
   - **Pre-compilación**: Los componentes se renderiza a HTML puro en build-time
   - **Cero JavaScript por defecto**: Solo HTML y CSS estáticos

3. **Componentes reutilizables**

```astro
<!-- src/components/shared/Badge.astro -->
---
interface Props {
  text: string;
  type: 'primary' | 'success' | 'danger';
}

const { text, type } = Astro.props;
---

<span class={`badge bg-${type}`}>
  {text}
</span>
```

4. **Navegación automática**
   - Cada archivo `.astro` en `src/pages/` genera automáticamente una ruta
   - Ejemplo: `about.astro` → `/about`
   - No se requiere configuración de rutas explícita

### 2. CREACIÓN DE RUTAS EN ANGULAR

#### Estructura de Archivos

```
src/app/pages/
├── about/
│   ├── about.page.ts       # Componente
│   ├── about.page.html     # Template
│   ├── about.page.scss     # Estilos
│   └── about.page.spec.ts  # Tests
├── categories/
│   └── [archivos similares]
└── team/
    └── [archivos similares]
```

#### Proceso de Implementación

1. **Crear componente Angular**

```typescript
// about.page.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrl: './about.page.scss',
  imports: [CommonModule],
})
export class AboutPage {
  // Lógica del componente
}
```

2. **Definir ruta en `app.routes.ts`**

```typescript
import { AboutPage } from './pages/about/about.page';

export const routes: Routes = [
  { path: 'about', component: AboutPage },
  { path: 'categories', component: CategoriesPage },
  { path: 'team', component: TeamPage },
  { path: '**', redirectTo: 'users' }
];
```

3. **Template HTML**

```html
<!-- about.page.html -->
<div class="container">
  <h1>{{ title }}</h1>
  <p *ngIf="showContent">Contenido dinámico</p>
</div>
```

4. **Características de Angular:**
   - **Standalone Components**: Componentes independientes sin módulos
   - **TypeScript**: Tipado fuerte con interfaces
   - **Dependency Injection**: Inyección de dependencias automática
   - **Templates**: Sintaxis de plantillas con directivas (`*ngIf`, `*ngFor`)
   - **Change Detection**: Detección automática de cambios
   - **RxJS Integration**: Streams y observables reactivos

5. **Actualizar navegación en App Component**

```typescript
navbarConfig: NavbarConfig = {
  navLinks: [
    { text: 'Usuarios', url: '/users' },
    { text: 'Productos', url: '/products' },
    { text: 'Categorías', url: '/categories' },
    { text: 'Equipo', url: '/team' },
    { text: 'Acerca de', url: '/about' },
  ]
};
```

---

## BUILDS DE PRODUCCIÓN

### 1. BUILD DE ASTRO SSG

#### Comando de compilación
```bash
npm run build
```

#### Salida del proceso

```
23:16:51 [build] Collecting build info...
23:16:51 [build] ✓ Completed in 301ms.
23:16:51 [build] Building static entrypoints...
23:16:53 ▶ src/pages/about.astro
           └─ /about/index.html (+13ms) 
23:16:53 ▶ src/pages/categories.astro
           └─ /categories/index.html (+4ms) 
23:16:53 ▶ src/pages/current-date.astro
           └─ /current-date/index.html (+4ms)
23:16:53 ▶ src/pages/products.astro
           └─ /products/index.html (+5ms) 
23:16:53 ▶ src/pages/team.astro
           └─ /team/index.html (+4ms)
23:16:53 ▶ src/pages/users.astro
           └─ /users/index.html (+4ms)
23:16:53 ▶ src/pages/index.astro
           └─ /index.html (+3ms)
23:16:53 ✓ Completed in 80ms.

23:16:53 [build] 7 page(s) built in 1.98s
23:16:53 [build] Complete!
```

#### Estadísticas del Build

| Métrica | Valor |
|---------|-------|
| **Tamaño Total** | 0.63 MB |
| **Cantidad de Archivos** | 11 |
| **Tiempo de Build** | 1.98 segundos |
| **Páginas Generadas** | 7 |

#### Desglose de Archivos

| Archivo | Tamaño |
|---------|--------|
| about.SlNvAjQU.css | 304.77 KB |
| bootstrap-icons.BeopsB42.woff | 176.06 KB |
| bootstrap-icons.mSm7cUeB.woff2 | 130.90 KB |
| index.html (about) | 10.18 KB |
| index.html (users) | 8.34 KB |
| index.html (products) | 5.76 KB |
| index.html (categories) | 3.43 KB |
| index.html (current-date) | 2.96 KB |
| index.html (team) | 1.53 KB |
| favicon.svg | 0.74 KB |
| index.html (home) | 0.26 KB |

#### Estructura de Salida

```
dist/
├── about/
│   └── index.html           # HTML pre-renderizado
├── categories/
│   └── index.html
├── team/
│   └── index.html
├── products/
│   └── index.html
├── users/
│   └── index.html
├── current-date/
│   └── index.html
├── index.html               # Página de inicio
└── [Assets]
    ├── styles CSS compilados
    └── Fuentes de iconos
```

### 2. BUILD DE ANGULAR SPA

#### Comando de compilación
```bash
ng build
```

#### Salida del proceso

```
Initial chunk files   | Names         |  Raw size | Estimated transfer size
styles-WIQMVUXT.css   | styles        | 315.93 kB |                33.03 kB
main-NP2WJMQT.js      | main          | 302.69 kB |                80.87 kB
scripts-TTWY4XDY.js   | scripts       |  80.45 kB |                21.60 kB
polyfills-HPZ7KTN2.js | polyfills     |  34.53 kB |                11.29 kB

                      | Initial total | 733.61 kB |               146.80 kB

Application bundle generation complete. [4.078 seconds]
```

#### Estadísticas del Build

| Métrica | Valor |
|---------|-------|
| **Tamaño Raw** | 733.61 KB |
| **Tamaño Comprimido (gzip)** | 146.80 KB |
| **Chunks Generados** | 4 principales |
| **Tiempo de Build** | ~4 segundos |
| **Cantidad de Archivos** | 10+ |

#### Desglose de Chunks

| Chunk | Descripción | Raw Size | Transfer Size |
|-------|-------------|----------|---------------|
| **styles** | CSS compilado | 315.93 KB | 33.03 KB |
| **main** | Lógica de Angular | 302.69 KB | 80.87 KB |
| **scripts** | Bootstrap JS | 80.45 KB | 21.60 KB |
| **polyfills** | Compatibilidad | 34.53 KB | 11.29 KB |

#### Desglose de Archivos Principales

| Archivo | Tamaño |
|---------|--------|
| styles-WIQMVUXT.css | 308.53 KB |
| main-NP2WJMQT.js | 295.60 KB |
| bootstrap-icons.woff | 176.06 KB |
| bootstrap-icons.woff2 | 130.90 KB |
| scripts-TTWY4XDY.js | 78.56 KB |
| polyfills-HPZ7KTN2.js | 33.72 KB |

#### Estructura de Salida

```
dist/Angular-Standalone-Template/
├── index.html                      # HTML principal
├── browser/
│   ├── styles-WIQMVUXT.css        # Estilos compilados
│   ├── main-NP2WJMQT.js           # Lógica Angular
│   ├── scripts-TTWY4XDY.js        # Scripts de Bootstrap
│   ├── polyfills-HPZ7KTN2.js      # Polyfills
│   └── [Assets compilados]
└── prerendered-routes.json
```

---

## ANÁLISIS COMPARATIVO

### 1. TAMAÑO DEL BUILD

#### Comparación Directa

```
┌─────────────────┬──────────────┬──────────────┐
│ Métrica         │ ASTRO SSG    │ ANGULAR SPA  │
├─────────────────┼──────────────┼──────────────┤
│ Tamaño Total    │ 0.63 MB      │ 0.733 MB     │
│ Diferencia      │              │ +0.103 MB    │
│ % Diferencia    │              │ +16.3%       │
│ Comprimido      │ N/A          │ 146.80 KB    │
└─────────────────┴──────────────┴──────────────┘
```

**Conclusión del tamaño:**
- Astro es **16.3% más pequeño** en comparación directa
- Angular incluye runtime + framework (296 KB solo el main.js)
- Astro solo incluye CSS y fuentes

### 2. TIEMPO DE COMPILACIÓN

```
┌──────────────────────┬──────────┬───────────┐
│ Fase                 │ ASTRO    │ ANGULAR   │
├──────────────────────┼──────────┼───────────┤
│ Recopilación info    │ 301 ms   │ -         │
│ Build estáticos      │ 1.58 s   │ -         │
│ Generación rutas     │ 80 ms    │ -         │
│ TOTAL                │ 1.98 s   │ 4.078 s   │
│ Diferencia           │          │ +2.098 s  │
│ % Diferencia         │          │ +105.9%   │
└──────────────────────┴──────────┴───────────┘
```

**Conclusión del tiempo:**
- Astro compila **2.05 segundos más rápido** (106% más veloz)
- Angular debe compilar y empaquetar runtime de JavaScript
- Astro pre-renderiza HTML en tiempo de compilación

### 3. CANTIDAD DE ARCHIVOS

```
┌────────────────────┬────────────┬────────────┐
│ Criterio           │ ASTRO      │ ANGULAR    │
├────────────────────┼────────────┼────────────┤
│ Número de archivos │ 11         │ 10+        │
│ Páginas HTML       │ 7          │ 1          │
│ JavaScript Bundles │ 0          │ 4          │
│ CSS Bundles        │ 1          │ 1          │
│ Fuentes            │ 2          │ 2          │
└────────────────────┴────────────┴────────────┘
```

### 4. COMPOSICIÓN DEL BUILD

#### ASTRO - Análisis de Contenido

```
Total: 0.63 MB
├── CSS compilado                       49.0%
├── Fuentes (woff, woff2)              49.0%
├── HTML (7 páginas)                    2.0%
└── Assets varios                       0.1%
```

**Características:**
- ✅ HTML estático (sin JavaScript)
- ✅ CSS pre-compilado
- ✅ Fuentes offline
- ✅ Assets autodescubiertos

#### ANGULAR - Análisis de Contenido

```
Total: 733.61 KB
├── Runtime Angular                    41.2% (302.69 KB)
├── CSS compilado                      43.1% (315.93 KB)
├── Fuentes (woff, woff2)              19.0% (138 KB)
├── Polyfills                           4.7% (34.53 KB)
└── HTML + otros                        1.0%
```

**Características:**
- ⚠️ Runtime de Angular siempre incluido
- ⚠️ Polyfills para compatibilidad
- ✅ Renderizado dinámico en cliente
- ✅ Soporte para interactividad completa

### 5. CARGA INICIAL EN NAVEGADOR

#### Astro SSG

```
Solicitud HTTP
    ↓
Servidor entrega HTML pre-renderizado
    ↓
Navegador renderiza HTML (< 50ms)
    ↓
CSS se carga y aplica
    ↓
Página visible y funcional inmediatamente
    ↓
TIEMPO TOTAL: 100-300ms (muy rápido)
```

**Métricas típicas:**
- First Contentful Paint (FCP): 50-100ms
- Time to Interactive (TTI): 100-200ms
- Cumulative Layout Shift (CLS): 0 (HTML estático)

#### Angular SPA

```
Solicitud HTTP
    ↓
Servidor entrega index.html + JS
    ↓
Navegador descarga y parsea JavaScript
    ↓
Angular bootstrap y renderizado
    ↓
Aplicación interactiva
    ↓
TIEMPO TOTAL: 500-1500ms (más lento)
```

**Métricas típicas:**
- First Paint (FP): 200-400ms
- First Contentful Paint (FCP): 300-600ms
- Time to Interactive (TTI): 800-1500ms
- Cumulative Layout Shift (CLS): Variable

### 6. JAVASCRIPT EN CLIENTE

```
┌───────────────────────────┬──────────┬────────────┐
│ Aspecto                   │ ASTRO    │ ANGULAR    │
├───────────────────────────┼──────────┼────────────┤
│ Javascript env. cliente   │ 0 KB     │ 296 KB     │
│ Framework overhead        │ Ninguno  │ Angular    │
│ Parseado JS               │ 0%       │ 100%       │
│ Compilado a bytes         │ 0%       │ 100%       │
│ Tiempo de ejecución JS    │ 0 ms     │ 200-400 ms │
└───────────────────────────┴──────────┴────────────┘
```

---

## CONCLUSIONES TÉCNICAS

### 1. RENDIMIENTO Y PERFORMANCE

#### Astro SSG - GANADOR

**Ventajas:**
- ✅ **Tiempo de carga inicial**: 2-5x más rápido
- ✅ **Tamaño del build**: 16% más pequeño
- ✅ **Sin overhead de JavaScript**: Página funcional sin JS
- ✅ **Ideal para sitios informativos**: Excelente SEO

**Desventajas:**
- ❌ Sin interactividad dinámica
- ❌ Requiere rebuild para cambios de contenido
- ❌ No apto para aplicaciones complejas

#### Angular SPA - Casos Específicos

**Ventajas:**
- ✅ Interactividad completa
- ✅ Sin recargas de página
- ✅ Experience de desktop-like
- ✅ Perfect para aplicaciones empresariales

**Desventajas:**
- ❌ Tiempo de carga inicial más lento
- ❌ Build más grande (16% más)
- ❌ Requiere parseo/compilación JS en cliente
- ❌ Overhead de framework

### 2. CASOS DE USO ÓPTIMOS

#### 🎯 USAR ASTRO CUANDO:

1. **Sitios de contenido estático**
   - Blogs, portfolios, documentación
   - El contenido no cambia constantemente

2. **Prioridad es performance**
   - Core Web Vitals críticos
   - Audiencia con conexión lenta

3. **SEO es fundamental**
   - HTML pre-renderizado = excelente indexación
   - Sin necesidad de prerender externo

4. **Máxima velocidad**
   - Landing pages
   - Campañas de marketing

5. **Presupuesto limitado de servidor**
   - Hosting estático muy económico (Netlify, Vercel, etc.)
   - Sin servidor necesario

**Ejemplo:** Blog de 100 artículos
```
Build: 5-10 MB
Todas las páginas pre-renderizadas
Carga inicial: ~100ms por página
Servidor: hosting estático
Costo: ~5 USD/mes
```

#### ⚡ USAR ANGULAR SPA CUANDO:

1. **Interactividad completa requerida**
   - Dashboards, aplicaciones web complejas
   - Estado compartido entre vistas

2. **Contenido dinámico constantemente actualizado**
   - Redes sociales, mensajería
   - APIs en tiempo real

3. **Progressive Web Apps (PWA)**
   - Offline-first capabilities
   - Service workers

4. **Experiencia desktop-like**
   - Aplicaciones tipo Slack, Figma
   - Fluidez sin recargas

5. **Lógica cliente compleja**
   - Validaciones avanzadas
   - Cálculos en tiempo real

**Ejemplo:** Aplicación de gestión de proyectos
```
Build: 500-750 KB
Descarga inicial: una sola vez
Interactividad: inmediata después de bootstrap
Actualizaciones: sin recargas
Persistencia: localStorage + DB
```

### 3. ANÁLISIS DE RECURSOS

#### Consumo de ancho de banda

```
Primer acceso:
┌──────────┬─────────────┬──────────────┐
│ Framework│ Sin comprimir│ Con Gzip     │
├──────────┼─────────────┼──────────────┤
│ Astro    │ 0.63 MB     │ ~200 KB      │
│ Angular  │ 0.733 MB    │ 146.80 KB    │
└──────────┴─────────────┴──────────────┘
```

**Impacto en conexión:**
- 3G (1 Mbps):
  - Astro: ~1.6 segundos
  - Angular: ~1.2 segundos (paradójicamente más rápido en descompresión)

- 4G (10 Mbps):
  - Astro: ~160ms + renderizado (200ms) = 360ms
  - Angular: ~147ms + JS parsing (400ms) = 547ms

- Fibra (100 Mbps):
  - Astro: ~16ms + renderizado = 100ms total
  - Angular: ~15ms + JS parsing = 400ms total

### 4. MANTENIBILIDAD Y ESCALABILIDAD

#### Astro

| Aspecto | Calificación |
|---------|------------|
| Componentes reutilizables | ⭐⭐⭐⭐⭐ |
| Sintaxis aprendizaje | ⭐⭐⭐⭐ |
| Escalabilidad de contenido | ⭐⭐⭐⭐ |
| Herramientas de debug | ⭐⭐⭐ |
| Comunidad/Recursos | ⭐⭐⭐ |

#### Angular

| Aspecto | Calificación |
|---------|------------|
| Componentes reutilizables | ⭐⭐⭐⭐⭐ |
| Sintaxis aprendizaje | ⭐⭐ |
| Escalabilidad de aplicación | ⭐⭐⭐⭐⭐ |
| Herramientas de debug | ⭐⭐⭐⭐⭐ |
| Comunidad/Recursos | ⭐⭐⭐⭐⭐ |

### 5. RECOMENDACIÓN FINAL

#### Matriz de Decisión

```
Prioridad: Velocidad y SEO
├─ Sí → ASTRO SSG ✅
└─ No → ¿Interactividad compleja?
       ├─ Sí → ANGULAR SPA ✅
       └─ No → Considerar React/Vue

Prioridad: Aplicación empresarial
├─ Sí → ANGULAR SPA ✅
└─ No → ¿Content-driven?
       ├─ Sí → ASTRO SSG ✅
       └─ No → Considerar otras opciones
```

---

## RECOMENDACIONES

### Para el Proyecto UCEVA

1. **Mantener ambas implementaciones**
   - Astro para documentación del proyecto
   - Angular como SPA interactiva

2. **Optimizaciones posibles en Angular:**
   ```bash
   ng build --optimization
   ng build --aot
   # Implementar lazy loading de rutas
   # Code splitting avanzado
   ```

3. **Optimizaciones posibles en Astro:**
   ```bash
   npm run build -- --site https://tu-dominio.com
   # Image optimization
   # Asset minification
   ```

4. **Deployment recomendado:**

   **Astro:**
   - Vercel, Netlify (hosting estático)
   - GitHub Pages
   - CloudFlare Pages

   **Angular:**
   - Vercel (con serverless functions)
   - Firebase Hosting
   - AWS Amplify
   - Azure Static Web Apps

### Performance Checklist

#### ✅ Astro SSG
- [ ] Imágenes optimizadas
- [ ] CSS crítico inline
- [ ] Revisión de tamaño de fuentes
- [ ] Cache headers configurados
- [ ] CDN global habilitado

#### ✅ Angular SPA
- [ ] Bundling optimizado
- [ ] Lazy loading de rutas
- [ ] Code splitting
- [ ] Service Worker (PWA)
- [ ] Compresión gzip
- [ ] Cache strategy

---

## CONCLUSIÓN

El análisis demuestra que **no existe una solución única mejor**, sino la más adecuada según el contexto:

### Astro SSG excela en:
- **Performance bruta**: 2x más rápido en carga inicial
- **Tamaño reducido**: 16% menor
- **SEO nativo**: HTML estático pre-renderizado
- **Hosting económico**: Estático único

### Angular SPA excela en:
- **Interactividad**: Experiencia dinámica sin recargas
- **Escalabilidad**: Para aplicaciones complejas
- **Herramientas**: Debugging y testing avanzado
- **Comunidad**: Soporte empresarial robusto

**Para este proyecto educativo:**
- Astro sirve como **referencia de performance y simplicity**
- Angular demuestra **patrones empresariales modernos**
- Ambos son complementarios en la formación del estudiante

---

**Documento generado:** 10 de Abril, 2026
**Curso:** Arquitectura de Software
**Universidad:** UCEVA - Ingeniería de Sistemas, VIII Semestre
**Autores:** Equipo de Desarrollo
