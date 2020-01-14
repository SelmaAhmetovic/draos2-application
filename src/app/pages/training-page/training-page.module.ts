import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './training-page.routing';
import { SharedModule } from '../../shared/shared.module';
import {NgxPaginationModule} from "ngx-pagination";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TrainingPageComponent} from "./training-page.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        routing,
        NgxPaginationModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
      TrainingPageComponent
    ]
})
export class TrainingPageModule { }
