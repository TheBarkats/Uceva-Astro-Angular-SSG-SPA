import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesPage } from './categories.page';

describe('CategoriesPage', () => {
  let component: CategoriesPage;
  let fixture: ComponentFixture<CategoriesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesPage],
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
});
