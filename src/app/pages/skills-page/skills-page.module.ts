import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './skills-page.routing';
import { SharedModule } from '../../shared/shared.module';
import {SkillsPageComponent} from "./skills-page.component";
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
      SkillsPageComponent
    ]
})
export class SkillsPageModule { }
