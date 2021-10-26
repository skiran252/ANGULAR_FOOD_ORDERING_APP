import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CanActivate } from '@angular/router';
import { AuthGuard } from './guards/auth-guard';
import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditProfileComponent } from './components/profile/edit-profile/edit-profile.component';
import { AddressesComponent } from './components/profile/addresses/addresses.component';
import { PaymentsComponent } from './components/profile/payments/payments.component';
import { InvalidPageComponent } from './components/invalid-page/invalid-page.component';
import { CriticsComponent } from './components/critics/critics.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'orders',
    component: OrderComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'edit',
      },
      {
        path: 'edit',
        component: EditProfileComponent,
      },
      {
        path: 'orders',
        component: OrderComponent,
      },
      {
        path: 'addresses',
        component: AddressesComponent,
      },
      {
        path: 'payments',
        component: PaymentsComponent,
      },
      {
        path: 'critics',
        component: CriticsComponent,
      },
    ],
  },
  {
    path: '**',
    component: InvalidPageComponent,
  },
];
//canActivate: [AuthGuard],
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
