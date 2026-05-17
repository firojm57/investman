import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ContentComponent } from './content.component';
import { TranslateModule } from '@ngx-translate/core';
import { DashboardService } from '../../services/dashboard.service';

describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;
  let dashboardService: DashboardService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentComponent, TranslateModule.forRoot()],
      providers: [DashboardService]
    }).compileComponents();

    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    dashboardService = TestBed.inject(DashboardService);
    fixture.detectChanges();
  });

  it('should create the Content component', () => {
    expect(component).toBeTruthy();
  });

  it('should switch active viewport based on Signal state', async () => {
    dashboardService.setActiveTab('Overview');
    fixture.detectChanges();
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-dashboard-viewport')).toBeDefined();
  });
});
