import { Injectable } from '@angular/core';
import { LocalStorageManager } from '../../manager/storage.manager';
import { keys } from '../../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class UserPreferenceService {

  constructor(private storageManager: LocalStorageManager) { }

  getLanguage(): string {
    return this.storageManager.get(keys.defaultLanguage);
  }

  setLanguage(language: string) {
    this.storageManager.set(keys.defaultLanguage, "en");
  }
}
