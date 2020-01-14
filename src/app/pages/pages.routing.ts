import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from "./register/register.component";

/*const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];*/


export const childRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    { path: 'register',
      component: RegisterComponent
    },
    {
        path: 'pages',
        component: PagesComponent,
        children: [
            { path: '', redirectTo: 'index', pathMatch: 'full' },
            { path: 'index', loadChildren: './index/index.module#IndexModule' },
            { path: 'editor', loadChildren: './editor/editor.module#EditorModule' },
            { path: 'icon', loadChildren: './icon/icon.module#IconModule' },
            { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
            { path: 'roles-page', loadChildren: './roles-page/roles-page.module#RolesPageModule' },
            { path: 'permissions-page', loadChildren: './permissions-page/permissions-page.module#PermissionsPageModule' },
            { path: 'categories-page', loadChildren: './categories-page/categories-page.module#CategoriesPageModule' },
            { path: 'skills-page', loadChildren: './skills-page/skills-page.module#SkillsPageModule' },
            { path: 'skills-management-page', loadChildren: './skills-management-page/skills-management-page.module#SkillsManagementPageModule' },
            { path: 'security-management-page', loadChildren: './security-management-page/security-management-page.module#SecurityManagementPageModule' },
            { path: 'training-management-page', loadChildren: './training-management-page/training-management-page.module#TrainingManagementPageModule' },
            { path: 'training-page', loadChildren: './training-page/training-page.module#TrainingPageModule' },
            { path: 'form', loadChildren: './form/form.module#FormModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'ui', loadChildren: './ui/ui.module#UIModule' },
            { path: 'table', loadChildren: './table/table.module#TableModule' },
            { path: 'menu-levels', loadChildren: './menu-levels/menu-levels.module#MenuLevelsModule' },
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
