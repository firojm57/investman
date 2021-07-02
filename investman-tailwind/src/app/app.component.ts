import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NgxTranslateService } from './shared/service/translate/ngx-translate.service';

@Component({
  selector: 'investman-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Investman';

  constructor(public ngxTranslateService: NgxTranslateService) {
    this.ngxTranslateService.setAppLanguage(environment.defaultLanguage);
  }
}
