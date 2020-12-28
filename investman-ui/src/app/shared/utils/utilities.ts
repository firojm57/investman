import { HttpParams } from "@angular/common/http";

export class HttpUtils {
    static appendIfPresent(params: HttpParams, key: string, value: any): HttpParams {
        if(value) {
            params = params.append(key, value);
        }
        return params;
    }
}