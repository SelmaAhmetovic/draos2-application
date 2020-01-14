import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpModule } from '@angular/http'
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {RegisterComponent} from "./pages/register/register.component";
import {LoginComponent} from "./pages/login/login.component";
import {JwtInterceptor} from "./shared/helpers/jwt.interceptor";
import {ErrorInterceptor} from "./shared/helpers/error.interceptor";
import {fakeBackendProvider} from "./shared/helpers/fake-backend";
import {AlertComponent} from "./pages/alert/alert.component";



@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    PagesModule,
    NgbModule.forRoot(),
    routing,
    MDBBootstrapModule,
    HttpClientModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
