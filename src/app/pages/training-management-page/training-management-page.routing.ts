import { Routes, RouterModule } from '@angular/router';
import { TrainingManagementPageComponent } from './training-management-page.component';

const childRoutes: Routes = [
    {
        path: '',
        component: TrainingManagementPageComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
