import { Routes, RouterModule } from '@angular/router';
import { SkillsManagementPageComponent } from './skills-management-page.component';

const childRoutes: Routes = [
    {
        path: '',
        component: SkillsManagementPageComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
