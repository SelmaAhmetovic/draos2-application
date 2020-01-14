import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './training-management-page.routing';
import { SharedModule } from '../../shared/shared.module';
import {TrainingManagementPageComponent} from "./training-management-page.component";
import {NgxPaginationModule} from "ngx-pagination";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        routing,
        NgxPaginationModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
      TrainingManagementPageComponent
    ]
})
export class TrainingManagementPageModule { }
