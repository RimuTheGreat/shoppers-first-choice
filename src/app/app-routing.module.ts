import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { SharedModule } from './shared/shared.module';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

const appRoutes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },

  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: UserRegistrationComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [SharedModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class appRoutingModule { }