import { TestBed, ComponentFixture } from '@angular/core/testing';
import { TopMenuComponent } from './top-menu.component';
import { TranslateModule } from '@ngx-translate/core';
import { DashboardService } from '../../services/dashboard.service';

describe('TopMenuComponent', () => {
  let component: TopMenuComponent;
  let fixture: ComponentFixture<TopMenuComponent>;
  let dashboardService: DashboardService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopMenuComponent, TranslateModule.forRoot()],
      providers: [DashboardService]
    }).compileComponents();

    fixture = TestBed.createComponent(TopMenuComponent);
    component = fixture.componentInstance;
    dashboardService = TestBed.inject(DashboardService);
    fixture.detectChanges();
  });

  it('should create the TopMenu component', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle profile dropdown state', () => {
    expect(component.showProfileDropdown).toBe(false);
    component.toggleProfileDropdown();
    expect(component.showProfileDropdown).toBe(true);
    component.closeDropdown();
    expect(component.showProfileDropdown).toBe(false);
  });

  it('should activate Settings tab and close dropdown on selectSettings', () => {
    component.showProfileDropdown = true;
    component.selectSettings();
    expect(dashboardService.activeTab()).toBe('Settings');
    expect(component.showProfileDropdown).toBe(false);
  });
});
