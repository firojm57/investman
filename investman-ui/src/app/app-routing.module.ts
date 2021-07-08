import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { navigationConstants } from './feature/common/components/navigation/navigation.util';
import { DashboardMainComponent } from './feature/dashboard/components/dashboard-main.component';
import { EarningMainComponent } from './feature/earning/components/earning-main.component';
import { InvestmentMainComponent } from './feature/investment/components/investment-main.component';
import { ReportsMainComponent } from './feature/reports/components/reports-main.component';
import { SavingMainComponent } from './feature/saving/components/saving-main.component';
import { LoginComponent } from './feature/user/components/login/login.component';
import { apiConstants } from './shared/utils/constants';

const routes: Routes = [{
    path: apiConstants.login,
    component: LoginComponent
  }, {
    path: navigationConstants.dashboard,
    component: DashboardMainComponent
  }, {
    path: navigationConstants.saving,
    component: SavingMainComponent
  }, {
    path: navigationConstants.earning,
    component: EarningMainComponent
  }, {
    path: navigationConstants.investment,
    component: InvestmentMainComponent
  }, {
    path: navigationConstants.reports,
    component: ReportsMainComponent
  }, {
    path: '',
    redirectTo: apiConstants.login,
    pathMatch: "full"
  }, {
    path: '**',
    redirectTo: apiConstants.login
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
