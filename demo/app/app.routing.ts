import { Routes, RouterModule } from '@angular/router';
import { NgxLoginComponent } from './ngx-login/component/ngx-login.component';

const appRoutes: Routes = [
    {
        path: '',
        component: NgxLoginComponent,
    },
];

export const AppRouting = RouterModule.forRoot(appRoutes);
