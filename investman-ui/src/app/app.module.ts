import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './feature/signup/components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BasicAuthInterceptor } from './shared/interceptor/basic-auth-interceptor';
import { DashboardComponent } from './feature/dashboard/dashboard.component';
import { NavigationComponent } from './feature/common/component/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
