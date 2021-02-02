import { Component, OnInit } from '@angular/core';
import { apiConstants } from 'src/app/shared/utils/constants';
import { menuNameConstants } from './navigation.util';

@Component({
  selector: 'investman-app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  homeUri: string = "/" + apiConstants.home;
  menuNames = menuNameConstants;
  selectedMenuName: string = menuNameConstants.dashboard;

  constructor() { }

  ngOnInit(): void {
  }

  onSideMenuClick(menuName: string) {
    this.selectedMenuName = menuName;
  }

}
