import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-balance',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './balance.component.html',
  styleUrl: './balance.component.css'
})
export class BalanceComponent {
  protected readonly dashboardService = inject(DashboardService);

  // Mock balance details consistent with dashboard values
  protected readonly assets = [
    { name: 'Cash & Savings', category: 'Liquid', value: 120150, change: '+1.2%', icon: 'icon-cashflow' },
    { name: 'Brokerage & Stocks', category: 'Investment', value: 452300, change: '+6.4%', icon: 'icon-investments' },
    { name: 'Real Estate Portfolio', category: 'Property', value: 1223200, change: '+0.8%', icon: 'icon-home' }
  ];

  protected readonly liabilities = [
    { name: 'Home Mortgage', category: 'Secured Debt', value: 512140, rate: '3.85%', icon: 'icon-home' },
    { name: 'Student & Car Loans', category: 'Unsecured', value: 31200, rate: '4.5%', icon: 'icon-liabilities' },
    { name: 'Credit Cards Balance', category: 'Revolving', value: 4000, rate: '14.99%', icon: 'icon-expenses' }
  ];

  getTotalAssets(): number {
    return this.assets.reduce((sum, item) => sum + item.value, 0);
  }

  getTotalLiabilities(): number {
    return this.liabilities.reduce((sum, item) => sum + item.value, 0);
  }

  getNetWorth(): number {
    return this.getTotalAssets() - this.getTotalLiabilities();
  }

  getEquityRatio(): number {
    const assets = this.getTotalAssets();
    if (assets === 0) return 0;
    return (this.getNetWorth() / assets) * 100;
  }
}
