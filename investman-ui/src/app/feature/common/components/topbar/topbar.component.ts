import { Component, OnInit } from '@angular/core';
import { constants } from 'src/app/shared/utils/constants';

@Component({
  selector: 'investman-app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  appMode: string = constants.light;
  constants = constants
  constructor() { }

  ngOnInit(): void {
  }

  onThemeChange() {
    if(this.appMode == this.constants.dark) {
      this.appMode = this.constants.light;
      document.body.classList.remove(this.constants.dark);
      document.body.classList.add(this.constants.light);
    } else {
      this.appMode = this.constants.dark;
      document.body.classList.remove(this.constants.light);
      document.body.classList.add(this.constants.dark);
    }
  }

}
