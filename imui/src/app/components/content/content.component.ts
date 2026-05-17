import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DashboardService } from '../../services/dashboard.service';
import { DashboardViewportComponent } from '../dashboard-viewport/dashboard-viewport.component';
import { InvestmentComponent } from '../investment/investment.component';
import { BalanceComponent } from '../balance/balance.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    DashboardViewportComponent,
    InvestmentComponent,
    BalanceComponent
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  protected readonly dashboardService = inject(DashboardService);
}
