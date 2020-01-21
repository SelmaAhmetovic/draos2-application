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
import {RegisterComponent} from './pages/register';
import {LoginComponent} from "./pages/login/login.component";
import {JwtInterceptor} from './shared/helpers';
import {ErrorInterceptor} from './shared/helpers';
import {fakeBackendProvider} from './shared/helpers';
import {AlertComponent} from './pages/alert';
import {ToastrModule} from 'ngx-toastr';



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
    ToastrModule.forRoot(),
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
