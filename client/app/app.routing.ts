import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import {VermattiHomeComponent} from './vermatti-home/index';
//import {VermattiHeaderComponent} './vermatti-header/index'
import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'vermati-home', component: VermattiHomeComponent },
    { path: 'register', component: RegisterComponent },
  //  {path: 'vermatti-header', component: VermattiHeaderComponent},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
