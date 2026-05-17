import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-top-menu',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.css'
})
export class TopMenuComponent {
  protected readonly dashboardService = inject(DashboardService);

  // State to manage settings/profile dropdown visibility
  showProfileDropdown = false;

  toggleProfileDropdown() {
    this.showProfileDropdown = !this.showProfileDropdown;
  }

  closeDropdown() {
    this.showProfileDropdown = false;
  }

  selectSettings() {
    this.dashboardService.setActiveTab('Settings');
    this.closeDropdown();
  }
}
