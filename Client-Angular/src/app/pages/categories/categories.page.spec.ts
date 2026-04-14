import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { CategoriesPage } from './categories.page';

describe('CategoriesPage', () => {
  let component: CategoriesPage;
  let fixture: ComponentFixture<CategoriesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesPage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have categories', () => {
    expect(component.categories.length).toBe(4);
  });

  it('should display all category names', () => {
    const categoryNames = component.categories.map(c => c.name);
    expect(categoryNames).toContain('Carnes');
    expect(categoryNames).toContain('Frutas');
    expect(categoryNames).toContain('Lacteos');
    expect(categoryNames).toContain('Verduras');
  });

  it('should have category descriptions', () => {
    component.categories.forEach(category => {
      expect(category.description).toBeDefined();
      expect(category.description.length).toBeGreaterThan(0);
    });
  });

  it('should have emoji for each category', () => {
    component.categories.forEach(category => {
      expect(category.emoji).toBeDefined();
      expect(category.emoji.length).toBeGreaterThan(0);
    });
  });

  it('should have badge type for each category', () => {
    component.categories.forEach(category => {
      expect(category.badgeType).toBeDefined();
      expect(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']).toContain(category.badgeType);
    });
  });

  it('should have examples for each category', () => {
    component.categories.forEach(category => {
      expect(category.examples).toBeDefined();
      expect(Array.isArray(category.examples)).toBe(true);
      expect(category.examples.length).toBeGreaterThan(0);
    });
  });
})
