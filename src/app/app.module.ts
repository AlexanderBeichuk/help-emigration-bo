import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import { LoginComponent } from './pages/login/login.component';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {ErrorInterceptor} from './interceptors/error.interceptor';
import {AuthenticationInterceptor} from './interceptors/authentication.interceptor';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import {VirtualScrollerModule} from 'primeng/virtualscroller';
import {ChartModule} from 'primeng/chart';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastModule,
    VirtualScrollerModule,
    ChartModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
