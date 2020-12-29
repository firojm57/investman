import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class BasicAuthInterceptor implements HttpInterceptor {
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let user = "user";
        let password = "pass";
        let authdata = window.btoa(user + ":" + password);

        request = request.clone({
            setHeaders: {
                Authorization: `Basic ${authdata}`
            }
        });

        return next.handle(request);
    }

}