import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { ContentComponent } from './components/content/content.component';
import { DashboardService } from './services/dashboard.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    TopMenuComponent,
    SideMenuComponent,
    ContentComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private translate = inject(TranslateService);
  protected readonly dashboardService = inject(DashboardService);

  constructor() {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
