import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-investment',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './investment.component.html',
  styleUrl: './investment.component.css'
})
export class InvestmentComponent {
  protected readonly dashboardService = inject(DashboardService);

  // High-fidelity mocked investments data
  protected readonly holdings = [
    { name: 'Apple Inc.', symbol: 'AAPL', allocation: '18%', shares: '120', price: '$178.50', value: '$21,420', return: '+12.4%', up: true },
    { name: 'Microsoft Corp.', symbol: 'MSFT', allocation: '12%', shares: '85', price: '$415.20', value: '$35,292', return: '+8.7%', up: true },
    { name: 'Vanguard S&P 500 ETF', symbol: 'VOO', allocation: '15%', shares: '110', price: '$465.10', value: '$51,161', return: '+5.3%', up: true },
    { name: 'Tesla Inc.', symbol: 'TSLA', allocation: '8%', shares: '70', price: '$175.40', value: '$12,278', return: '-4.2%', up: false }
  ];
}
