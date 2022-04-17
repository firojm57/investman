import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { keys } from 'src/app/shared/utils/constants';
import { MenuModel, navigationConstants } from '../../util/navigation.util';

@Component({
  selector: 'investman-app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  menuModels: MenuModel[] = [];
  selectedMenuName: string = navigationConstants.dashboard;
  sidebarVisible: boolean = false;

  constructor(private location: Location,
    private dataService: DataService) {
      this.menuModels.push(new MenuModel(navigationConstants.dashboard, "bx bxs-dashboard", keys.menuDashboard));
      this.menuModels.push(new MenuModel(navigationConstants.earning, "bx bxs-wallet", keys.menuEarning));
      this.menuModels.push(new MenuModel(navigationConstants.saving, "bx bxs-heart", keys.menuSaving));
      this.menuModels.push(new MenuModel(navigationConstants.investment, "bx bxs-briefcase-alt", keys.menuInvestment));
      this.menuModels.push(new MenuModel(navigationConstants.reports, "bx bxs-report", keys.menuReports));
    }

  ngOnInit(): void {
    if(this.location.path()) {
      this.selectedMenuName = this.location.path().split("/")[1];
      this.dataService.setSelectedMenuName(this.menuModels.filter(menu => menu.name == this.selectedMenuName)[0].labelKey);
    }

    this.dataService.getSidebarVisible().subscribe((toggle: boolean) => {
      this.sidebarVisible = toggle;
    });
  }

  onSideMenuClick(menuName: string) {
    this.selectedMenuName = menuName;
    this.dataService.setSidebarVisible(false);
    this.dataService.setSelectedMenuName(this.menuModels.filter(menu => menu.name == this.selectedMenuName)[0].labelKey);
  }

  onCloseClick() {
    this.dataService.setSidebarVisible(false);
  }
}
