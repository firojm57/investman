import { EventEmitter, Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private sidebarVisible: EventEmitter<boolean> = new EventEmitter();
  private userActionVisible: EventEmitter<boolean> = new EventEmitter();
  private selectedMenuName: ReplaySubject<string> = new ReplaySubject(1);

  setSidebarVisible(toggle: boolean) {
    this.sidebarVisible.emit(toggle);
  }

  getSidebarVisible(): EventEmitter<boolean> {
    return this.sidebarVisible;
  }

  setUserActionVisible(toggle: boolean) {
    this.userActionVisible.emit(toggle);
  }

  getUserActionVisible(): EventEmitter<boolean> {
    return this.userActionVisible;
  }

  setSelectedMenuName(name: string) {
    this.selectedMenuName.next(name);
  }

  getSelectedMenuName(): ReplaySubject<string> {
    return this.selectedMenuName;
  }
}
