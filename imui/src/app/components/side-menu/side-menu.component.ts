import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
  protected readonly dashboardService = inject(DashboardService);

  // Compact navItems with Overview as default landing tab
  protected readonly navItems = [
    { name: 'Overview', tab: 'Overview', icon: 'icon-home', translationKey: 'NAV.OVERVIEW' },
    { name: 'Investments', tab: 'Investments', icon: 'icon-investments', translationKey: 'NAV.INVESTMENTS' },
    { name: 'Cash Flow', tab: 'Cash Flow', icon: 'icon-cashflow', translationKey: 'NAV.CASH_FLOW' },
    { name: 'Expenses', tab: 'Expenses', icon: 'icon-expenses', translationKey: 'NAV.EXPENSES' },
    { name: 'Performance', tab: 'Performance', icon: 'icon-performance', translationKey: 'NAV.PERFORMANCE' },
    { name: 'Balance', tab: 'Balance', icon: 'icon-assets', translationKey: 'NAV.BALANCE' },
    { name: 'Goals', tab: 'Goals', icon: 'icon-goals', translationKey: 'NAV.GOALS' }
  ];

  selectTab(tabName: string) {
    this.dashboardService.setActiveTab(tabName);
  }

  isActive(tabName: string): boolean {
    return this.dashboardService.activeTab() === tabName;
  }

  getDesktopIconClass(tabName: string): string {
    const active = this.isActive(tabName);
    if (active) {
      // Clean, solid circular highlight matching the theme's high-contrast primary text
      return 'bg-text-primary text-card shadow-sm scale-105';
    }
    // Minimalist transparent background with text color transition
    return 'bg-transparent text-text-secondary hover:text-text-primary';
  }
}
