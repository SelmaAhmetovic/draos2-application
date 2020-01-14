import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './categories-page.routing';
import { SharedModule } from '../../shared/shared.module';
import {CategoriesPageComponent} from "./categories-page.component";
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
      CategoriesPageComponent
    ]
})
export class CategoriesPageModule { }
