import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AboutPage } from './about.page';

describe('AboutPage', () => {
  let component: AboutPage;
  let fixture: ComponentFixture<AboutPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutPage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have objectives', () => {
    expect(component.objectives.length).toBeGreaterThan(0);
  });

  it('should have technologies', () => {
    expect(component.technologies.length).toBeGreaterThan(0);
  });

  it('should have all objectives with title and description', () => {
    component.objectives.forEach(obj => {
      expect(obj.title).toBeDefined();
      expect(obj.description).toBeDefined();
      expect(obj.title.length).toBeGreaterThan(0);
      expect(obj.description.length).toBeGreaterThan(0);
    });
  });

  it('should have all technologies with category and items', () => {
    component.technologies.forEach(tech => {
      expect(tech.category).toBeDefined();
      expect(tech.items).toBeDefined();
      expect(Array.isArray(tech.items)).toBe(true);
      expect(tech.items.length).toBeGreaterThan(0);
      expect(tech.category.length).toBeGreaterThan(0);
    });
  });

  it('should include known technology categories', () => {
    const categories = component.technologies.map((tech) => tech.category);
    expect(categories).toContain('Frontend Frameworks');
    expect(categories).toContain('Estilos y Componentes');
    expect(categories).toContain('Herramientas');
  });

  it('should have technology items as non-empty strings', () => {
    component.technologies.forEach(tech => {
      tech.items.forEach((item) => {
        expect(item).toBeDefined();
        expect(item.length).toBeGreaterThan(0);
      });
    });
  });
});
