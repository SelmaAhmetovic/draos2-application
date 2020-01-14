import { Routes, RouterModule } from '@angular/router';
import { SecurityManagementPageComponent } from './security-management-page.component';

const childRoutes: Routes = [
    {
        path: '',
        component: SecurityManagementPageComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
