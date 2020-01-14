import { Routes, RouterModule } from '@angular/router';
import { RolesPageComponent } from './roles-page.component';

const childRoutes: Routes = [
    {
        path: '',
        component: RolesPageComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
