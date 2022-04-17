import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { constants } from 'src/app/shared/utils/constants';

@Component({
  selector: 'investman-app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  appMode: string = constants.light;
  constants = constants;
  sidebarVisible: boolean = false;
  userAction: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getUserActionVisible().subscribe((visible: boolean) =>{
      this.userAction = visible;
    });
  }

  onThemeChange() {
    if(this.appMode == this.constants.dark || this.appMode == this.constants.sysDark) {
      this.appMode = this.constants.light;
      document.body.classList.remove(this.constants.dark);
      document.body.classList.add(this.constants.light);
    } else {
      this.appMode = this.constants.dark;
      document.body.classList.remove(this.constants.light);
      document.body.classList.add(this.constants.dark);
    }
  }

  onMenuClick() {
    this.dataService.setSidebarVisible(true);
  }

  onUserIconClick() {
    // This will inform both, the current component and user actions component
    this.dataService.setUserActionVisible(!this.userAction);
  }

}
