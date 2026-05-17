import { TestBed, ComponentFixture } from '@angular/core/testing';
import { SideMenuComponent } from './side-menu.component';
import { TranslateModule } from '@ngx-translate/core';
import { DashboardService } from '../../services/dashboard.service';

describe('SideMenuComponent', () => {
  let component: SideMenuComponent;
  let fixture: ComponentFixture<SideMenuComponent>;
  let dashboardService: DashboardService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideMenuComponent, TranslateModule.forRoot()],
      providers: [DashboardService]
    }).compileComponents();

    fixture = TestBed.createComponent(SideMenuComponent);
    component = fixture.componentInstance;
    dashboardService = TestBed.inject(DashboardService);
    fixture.detectChanges();
  });

  it('should create the SideMenu component', () => {
    expect(component).toBeTruthy();
  });

  it('should select correct tab on calling selectTab', () => {
    component.selectTab('Accounts');
    expect(dashboardService.activeTab()).toBe('Accounts');
  });

  it('should evaluate active tabs correctly', () => {
    dashboardService.setActiveTab('Overview');
    expect(component.isActive('Overview')).toBe(true);
    expect(component.isActive('Investments')).toBe(false);
  });
});
