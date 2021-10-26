import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { RestaurantFilterPipe } from './pipes/restaurant-filter.pipe';
import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component';
import { CriticsComponent } from './components/critics/critics.component';
import { EditProfileComponent } from './components/profile/edit-profile/edit-profile.component';
import { AddressesComponent } from './components/profile/addresses/addresses.component';
import { PaymentsComponent } from './components/profile/payments/payments.component';
import { ProfileComponent } from './components/profile/profile.component';
import { InvalidPageComponent } from './components/invalid-page/invalid-page.component';
import { CriticFilterPipe } from './components/critics/critic-filter-pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    RestaurantFilterPipe,
    CartComponent,
    OrderComponent,
    CriticsComponent,
    EditProfileComponent,
    AddressesComponent,
    PaymentsComponent,
    ProfileComponent,
    InvalidPageComponent,
    CriticFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
