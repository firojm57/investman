import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StatusModel, UserLoginModel } from 'src/app/model';
import { HttpUtils } from 'src/app/shared/utils/utilities';
import { apiConstants } from 'src/app/shared/utils/constants';
import { UrlInformationService } from '../url/url-information.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private url: UrlInformationService) { }

  getLoginStatus(userModel: UserLoginModel): Observable<StatusModel> {
    return this.http.post<StatusModel>(this.url.getLoginStatusUrl(), userModel);
  }
}
