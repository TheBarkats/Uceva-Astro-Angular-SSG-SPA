import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { TeamPage } from './team.page';

describe('TeamPage', () => {
  let component: TeamPage;
  let fixture: ComponentFixture<TeamPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamPage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have team members', () => {
    expect(component.teamMembers.length).toBe(4);
  });

  it('should have team roles', () => {
    expect(component.teamRoles.length).toBe(5);
  });

  it('should have correct badge class for each role', () => {
    const testRole = component.teamRoles[0];
    const badgeClass = component.getBadgeClass(testRole.badgeType);
    expect(badgeClass).toBeTruthy();
    expect(badgeClass).toContain('badge-');
  });

  it('should return correct badge class for primary badge type', () => {
    const badgeClass = component.getBadgeClass('primary');
    expect(badgeClass).toBe('badge-primary');
  });

  it('should return correct badge class for success badge type', () => {
    const badgeClass = component.getBadgeClass('success');
    expect(badgeClass).toBe('badge-success');
  });

  it('should return correct badge class for danger badge type', () => {
    const badgeClass = component.getBadgeClass('danger');
    expect(badgeClass).toBe('badge-danger');
  });

  it('should return correct badge class for all role types', () => {
    component.teamRoles.forEach(role => {
      const badgeClass = component.getBadgeClass(role.badgeType);
      expect(badgeClass).toBeTruthy();
      expect(badgeClass).toMatch(/^badge-/);
    });
  });

  it('should have team members with all required properties', () => {
    component.teamMembers.forEach(member => {
      expect(member.id).toBeDefined();
      expect(member.name).toBeDefined();
      expect(member.role).toBeDefined();
      expect(member.expertise).toBeDefined();
      expect(member.bio).toBeDefined();
      expect(member.emoji).toBeDefined();
    });
  });
});
