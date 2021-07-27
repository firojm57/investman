import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { navigationConstants } from './navigation.util';

@Component({
  selector: 'investman-app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  menuNames = navigationConstants;
  selectedMenuName: string = navigationConstants.dashboard;
  collapseMobileMenu: boolean = true;

  constructor(private location: Location,
    private dataService: DataService) { }

  ngOnInit(): void {
    if(this.location.path()) {
      this.selectedMenuName = this.location.path().split("/")[1];
    }

    this.dataService.getCollapseMobileMenu().subscribe((toggle: boolean) => {
      this.collapseMobileMenu = toggle;
    });
  }

  onSideMenuClick(menuName: string) {
    this.selectedMenuName = menuName;
    this.dataService.setCollapseMobileMenu(true);
  }

  onMobileMenuClick() {
    this.collapseMobileMenu = !this.collapseMobileMenu;
    this.dataService.setCollapseMobileMenu(this.collapseMobileMenu);
  }

}
