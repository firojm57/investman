import { Injectable } from '@angular/core';
import { apiConstants } from 'src/app/shared/utils/constants';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlInformationService {
  constructor() { }
  
  imBaseUrl: string = environment.imBaseUrl;

  getLoginStatusUrl(): string {
    return `${this.imBaseUrl}/${apiConstants.user}/${apiConstants.login}`
  }
}
