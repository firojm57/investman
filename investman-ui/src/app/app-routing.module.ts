import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './feature/dashboard/components/navigation/navigation.component';
import { LoginComponent } from './feature/signup/components/login/login.component';
import { apiConstants } from './shared/utils/constants';

const routes: Routes = [{
    path: apiConstants.login,
    component: LoginComponent
  }, {
    path: apiConstants.home,
    component: NavigationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
