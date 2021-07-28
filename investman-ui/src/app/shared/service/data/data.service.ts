import { EventEmitter, Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private toggleMobileMenu: EventEmitter<boolean> = new EventEmitter();
  private selectedMenuName: ReplaySubject<string> = new ReplaySubject(1);

  setCollapseMobileMenu(toggle: boolean) {
    this.toggleMobileMenu.emit(toggle);
  }

  getCollapseMobileMenu(): EventEmitter<boolean> {
    return this.toggleMobileMenu;
  }

  setSelectedMenuName(name: string) {
    this.selectedMenuName.next(name);
  }

  getSelectedMenuName(): ReplaySubject<string> {
    return this.selectedMenuName;
  }
}
