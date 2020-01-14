import { Routes, RouterModule } from '@angular/router';
import { CategoriesPageComponent } from './categories-page.component';

const childRoutes: Routes = [
    {
        path: '',
        component: CategoriesPageComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
