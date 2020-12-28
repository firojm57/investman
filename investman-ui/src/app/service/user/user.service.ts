import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StatusModel } from 'src/app/model';
import { HttpUtils } from 'src/app/shared/utils/utilities';
import { apiConstants } from 'src/app/shared/utils/constants';
import { UrlInformationService } from '../url/url-information.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private url: UrlInformationService) { }

  getLoginStatus(userId: string, password: string): Observable<StatusModel> {
    let params = new HttpParams();
    params = HttpUtils.appendIfPresent(params, apiConstants.userId, userId);
    params = HttpUtils.appendIfPresent(params, apiConstants.password, password);
    return this.http.get<StatusModel>(this.url.getLoginStatusUrl(), { params: params });
  }
}
