import { Routes, RouterModule } from '@angular/router';
import { NgxLoginComponent } from '../../src/ngx-login.component';

const appRoutes: Routes = [
    {
        path: '',
        component: NgxLoginComponent,
    },
];

export const AppRouting = RouterModule.forRoot(appRoutes);
