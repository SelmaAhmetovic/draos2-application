import { Routes, RouterModule } from '@angular/router';
import { SkillsPageComponent } from './skills-page.component';

const childRoutes: Routes = [
    {
        path: '',
        component: SkillsPageComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
