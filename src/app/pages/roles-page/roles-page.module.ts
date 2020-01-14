import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './roles-page.routing';
import { SharedModule } from '../../shared/shared.module';
import {RolesPageComponent} from "./roles-page.component";
import {NgxPaginationModule} from "ngx-pagination";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        routing,
        NgxPaginationModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
      RolesPageComponent
    ]
})
export class RolesPageModule { }
