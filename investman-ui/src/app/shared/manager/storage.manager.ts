import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class LocalStorageManager {
    get(key: string): string {
        return JSON.parse(localStorage.getItem(key) || "");
    }

    set<T>(key: string, value: T) {
        if(value) {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }
}