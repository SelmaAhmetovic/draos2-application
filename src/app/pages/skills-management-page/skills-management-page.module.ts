import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './skills-management-page.routing';
import { SharedModule } from '../../shared/shared.module';
import {SkillsManagementPageComponent} from "./skills-management-page.component";
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
        ReactiveFormsModule
    ],
    declarations: [
      SkillsManagementPageComponent
    ]
})
export class SkillsManagementPageModule { }
