import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './profile.routing';
import { SharedModule } from '../../shared/shared.module';
import { ProfileComponent } from './profile.component';
import {NgxPaginationModule} from "ngx-pagination";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        NgxPaginationModule,
        NgxEchartsModule,
        FormsModule,
        MatCheckboxModule,
        ReactiveFormsModule,
        routing
    ],
    declarations: [
        ProfileComponent
    ]
})
export class ProfileModule { }


