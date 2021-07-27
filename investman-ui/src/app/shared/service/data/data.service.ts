import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private toggleMobileMenu: EventEmitter<boolean> = new EventEmitter();

  setCollapseMobileMenu(toggle: boolean) {
    this.toggleMobileMenu.emit(toggle);
  }

  getCollapseMobileMenu(): EventEmitter<boolean> {
    return this.toggleMobileMenu;
  }

}
