import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamPage } from './team.page';

describe('TeamPage', () => {
  let component: TeamPage;
  let fixture: ComponentFixture<TeamPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamPage],
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
});
