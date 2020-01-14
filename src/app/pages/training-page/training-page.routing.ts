import { Routes, RouterModule } from '@angular/router';
import { TrainingPageComponent } from './training-page.component';

const childRoutes: Routes = [
    {
        path: '',
        component: TrainingPageComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
