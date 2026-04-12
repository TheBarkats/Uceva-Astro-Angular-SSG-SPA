import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AboutPage } from './about.page';

describe('AboutPage', () => {
  let component: AboutPage;
  let fixture: ComponentFixture<AboutPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutPage, RouterModule],
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

  it('should have all technologies with name and description', () => {
    component.technologies.forEach(tech => {
      expect(tech.name).toBeDefined();
      expect(tech.description).toBeDefined();
      expect(tech.name.length).toBeGreaterThan(0);
      expect(tech.description.length).toBeGreaterThan(0);
    });
  });

  it('should have technologies with emojis', () => {
    component.technologies.forEach(tech => {
      expect(tech.emoji).toBeDefined();
      expect(tech.emoji.length).toBeGreaterThan(0);
    });
  });
});
