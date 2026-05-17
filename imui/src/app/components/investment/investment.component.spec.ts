import { TestBed, ComponentFixture } from '@angular/core/testing';
import { InvestmentComponent } from './investment.component';
import { TranslateModule } from '@ngx-translate/core';
import { DashboardService } from '../../services/dashboard.service';

describe('InvestmentComponent', () => {
  let component: InvestmentComponent;
  let fixture: ComponentFixture<InvestmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentComponent, TranslateModule.forRoot()],
      providers: [DashboardService]
    }).compileComponents();

    fixture = TestBed.createComponent(InvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the Investment component', () => {
    expect(component).toBeTruthy();
  });

  it('should render table rows for each holding', async () => {
    fixture.detectChanges();
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('tbody tr').length).toBe(4);
  });
});
