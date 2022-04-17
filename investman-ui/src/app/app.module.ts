import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './feature/user/components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BasicAuthInterceptor } from './shared/interceptor/basic-auth-interceptor';
import { NavigationComponent } from './feature/common/components/navigation/navigation.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TopbarComponent } from './feature/common/components/topbar/topbar.component';
import { DashboardMainComponent } from './feature/dashboard/components/dashboard-main.component';
import { InvestmentMainComponent } from './feature/investment/components/investment-main.component';
import { EarningMainComponent } from './feature/earning/components/earning-main.component';
import { SavingMainComponent } from './feature/saving/components/saving-main.component';
import { ReportsMainComponent } from './feature/reports/components/reports-main.component';
import { UserActionComponent } from './feature/user/components/user-action/user-action.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    DashboardMainComponent,
    TopbarComponent,
    InvestmentMainComponent,
    EarningMainComponent,
    SavingMainComponent,
    ReportsMainComponent,
    UserActionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,

    // Translation configuration
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function translateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}