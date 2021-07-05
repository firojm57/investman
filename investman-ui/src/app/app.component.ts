import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Event, NavigationEnd, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { NgxTranslateService } from './shared/service/translate/ngx-translate.service';
import { apiConstants } from './shared/utils/constants';

@Component({
  selector: 'investman-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Investman';
  isLogin: boolean = true;

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.isLogin = event.url.endsWith(apiConstants.login);
      }
    });    
  }

  constructor(public ngxTranslateService: NgxTranslateService,
    private router: Router,
    private route: ActivatedRoute) {
      this.ngxTranslateService.setAppLanguage(environment.defaultLanguage);
  }
}
