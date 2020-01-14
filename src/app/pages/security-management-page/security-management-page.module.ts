import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './security-management-page.routing';
import { SharedModule } from '../../shared/shared.module';
import {SecurityManagementPageComponent} from "./security-management-page.component";
import {NgxPaginationModule} from "ngx-pagination";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        routing,
        NgxPaginationModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        MDBBootstrapModule,
        MatCheckboxModule
    ],
    declarations: [
      SecurityManagementPageComponent
    ]
})
export class SecurityManagementPageModule { }
