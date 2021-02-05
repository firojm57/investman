import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './feature/user/components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BasicAuthInterceptor } from './shared/interceptor/basic-auth-interceptor';
import { DashboardComponent } from './feature/dashboard/dashboard.component';
import { NavigationComponent } from './feature/common/components/navigation/navigation.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TopbarComponent } from './feature/common/components/topbar/topbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    DashboardComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

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