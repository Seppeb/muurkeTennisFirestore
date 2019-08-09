import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminComponent} from './admin.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {VerfyEmailComponent} from './verfy-email/verfy-email.component';
import {GuardAdminGuard} from './guard-admin.guard';

const routes: Routes = [
  {path: '', component: AdminComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'register-user', component: SignUpComponent, canActivate: [GuardAdminGuard]},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent},
  { path: 'verifiy-email-address', component: VerfyEmailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
