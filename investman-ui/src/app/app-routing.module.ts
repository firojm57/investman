import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './feature/dashboard/dashboard.component';
import { LoginComponent } from './feature/user/components/login/login.component';
import { apiConstants } from './shared/utils/constants';

const routes: Routes = [{
    path: apiConstants.login,
    component: LoginComponent
  }, {
    path: apiConstants.home,
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
