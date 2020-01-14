import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './permissions-page.routing';
import { SharedModule } from '../../shared/shared.module';
import {PermissionsPageComponent} from "./permissions-page.component";
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
      PermissionsPageComponent
    ]
})
export class PermissionsPageModule { }
