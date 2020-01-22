import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './pages.routing';

import { LayoutModule } from '../shared/layout.module';
import { SharedModule } from '../shared/shared.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* components */
import { PagesComponent } from './pages.component';
import {SkillsManagementDataService} from "./skills-management-page/skillsManagementData.service";
import {SkillsDataService} from "./skills-page/skillsData.service";
import {AlertService} from '../shared/services';
import {DeleteModalComponent} from '../shared/modals/delete-modal/delete-modal.component';
import {AddItemModalComponent} from '../shared/modals/add-item-modal/add-item-modal.component';
/*import { LoginComponent } from './login/login.component';
import {RegisterComponent} from "./register/register.component";*/

@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        SharedModule,
        routing,
        MatCheckboxModule,
        ReactiveFormsModule,
    ],
    declarations: [
        PagesComponent
    ],
    entryComponents: [
      DeleteModalComponent,
      AddItemModalComponent
    ],
    providers: [
      SkillsManagementDataService,
      SkillsDataService,
      AlertService
    ]
})
export class PagesModule { }
