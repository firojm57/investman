import { TestBed, ComponentFixture } from '@angular/core/testing';
import { DashboardViewportComponent } from './dashboard-viewport.component';
import { TranslateModule } from '@ngx-translate/core';
import { DashboardService } from '../../services/dashboard.service';

describe('DashboardViewportComponent', () => {
  let component: DashboardViewportComponent;
  let fixture: ComponentFixture<DashboardViewportComponent>;
  let dashboardService: DashboardService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardViewportComponent, TranslateModule.forRoot()],
      providers: [DashboardService]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardViewportComponent);
    component = fixture.componentInstance;
    dashboardService = TestBed.inject(DashboardService);
    fixture.detectChanges();
  });

  it('should create the DashboardViewport component', () => {
    expect(component).toBeTruthy();
  });

  it('should render wealth overview heading by default', async () => {
    fixture.detectChanges();
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toBeDefined();
  });
});
