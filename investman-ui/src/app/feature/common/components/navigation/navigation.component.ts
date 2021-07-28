import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { MenuModel, navigationConstants } from './navigation.util';

@Component({
  selector: 'investman-app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  menuModels: MenuModel[] = [];
  selectedMenuName: string = navigationConstants.dashboard;
  collapseMobileMenu: boolean = true;

  constructor(private location: Location,
    private dataService: DataService) {
      this.menuModels.push(new MenuModel(navigationConstants.dashboard, "bx bxs-dashboard", "menu.dashboard"));
      this.menuModels.push(new MenuModel(navigationConstants.earning, "bx bxs-wallet", "menu.earning"));
      this.menuModels.push(new MenuModel(navigationConstants.saving, "bx bxs-heart", "menu.saving"));
      this.menuModels.push(new MenuModel(navigationConstants.investment, "bx bxs-briefcase-alt", "menu.investment"));
      this.menuModels.push(new MenuModel(navigationConstants.reports, "bx bxs-report", "menu.reports"));
    }

  ngOnInit(): void {
    if(this.location.path()) {
      this.selectedMenuName = this.location.path().split("/")[1];
      this.dataService.setSelectedMenuName(this.menuModels.filter(menu => menu.name == this.selectedMenuName)[0].labelKey);
    }

    this.dataService.getCollapseMobileMenu().subscribe((toggle: boolean) => {
      this.collapseMobileMenu = toggle;
    });
  }

  onSideMenuClick(menuName: string) {
    this.selectedMenuName = menuName;
    this.dataService.setCollapseMobileMenu(true);
    this.dataService.setSelectedMenuName(this.menuModels.filter(menu => menu.name == this.selectedMenuName)[0].labelKey);
  }
}
