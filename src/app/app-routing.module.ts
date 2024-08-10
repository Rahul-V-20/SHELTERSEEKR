import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HotelComponent } from './hotel/hotel.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import path from 'path';

const routes: Routes = [
  { path: '', redirectTo: 'login' ,pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'home',component:HomeComponent},
  { path: 'hotels', component: HotelComponent },
  { path: 'hotel-details', component: HotelDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
