import { Routes, RouterModule } from '@angular/router';
import { PermissionsPageComponent } from './permissions-page.component';

const childRoutes: Routes = [
    {
        path: '',
        component: PermissionsPageComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
