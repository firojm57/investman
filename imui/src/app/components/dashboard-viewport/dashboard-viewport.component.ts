import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard-viewport',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './dashboard-viewport.component.html',
  styleUrl: './dashboard-viewport.component.css'
})
export class DashboardViewportComponent {
  protected readonly dashboardService = inject(DashboardService);
}
