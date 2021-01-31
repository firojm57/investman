import { Component, OnInit } from '@angular/core';
import { apiConstants } from 'src/app/shared/utils/constants';

@Component({
  selector: 'investman-app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  homeUri: string = "/" + apiConstants.home;

  constructor() { }

  ngOnInit(): void {
  }

}
