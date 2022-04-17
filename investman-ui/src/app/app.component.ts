import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DataService } from './shared/service/data/data.service';
import { NgxTranslateService } from './shared/service/translate/ngx-translate.service';
import { apiConstants, constants } from './shared/utils/constants';

@Component({
  selector: 'investman-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Investman';
  isLogin: boolean = false;
  sidebarVisible: boolean = false;

  constructor(public ngxTranslateService: NgxTranslateService,
    private router: Router,
    private dataService: DataService) {
      this.ngxTranslateService.setAppLanguage(environment.defaultLanguage);
  }

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.isLogin = !event.url || event.url == '/' || event.url.endsWith(apiConstants.login);
      }
    });
  }

  onClickOverlay() {
    this.dataService.setSidebarVisible(false);
  }
}
