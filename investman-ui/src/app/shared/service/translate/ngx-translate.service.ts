import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import enUS from '../../../../assets/i18n/en-US.json';
import { UserPreferenceService } from '../preference/user-preference.service';

@Injectable({
  providedIn: 'root'
})
export class NgxTranslateService {

  constructor(private translateService: TranslateService,
    private userPreference: UserPreferenceService) {
      this.translateService.setTranslation(environment.defaultLanguage, enUS);
  }

  setAppLanguage(language: string) {
    language = language || this.userPreference.getLanguage() || this.translateService.getBrowserCultureLang();
    if(environment.supportedLanguages.indexOf(language) == -1) {
      language = environment.defaultLanguage;
    }
    this.translateService.use(language);
    this.userPreference.setLanguage(environment.defaultLanguage);
  }
}
