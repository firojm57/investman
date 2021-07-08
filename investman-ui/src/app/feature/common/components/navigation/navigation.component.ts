import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { navigationConstants } from './navigation.util';

@Component({
  selector: 'investman-app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  menuNames = navigationConstants;
  selectedMenuName: string = navigationConstants.dashboard;

  constructor(private location: Location) { }

  ngOnInit(): void {
    if(this.location.path()) {
      this.selectedMenuName = this.location.path().split("/")[1];
    }
  }

  onSideMenuClick(menuName: string) {
    this.selectedMenuName = menuName;
  }

}
