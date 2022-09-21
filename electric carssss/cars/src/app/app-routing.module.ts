import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BmwComponent } from './bmw/bmw.component';
import { BugattiComponent } from './bugatti/bugatti.component';
import { BookingComponent } from './booking/booking.component';
import { LoginComponent } from './login/login.component';
import { PorscheComponent } from './porsche/porsche.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { ShowemployeesComponent } from './showemployees/showemployees.component';
import { TeslaComponent } from './tesla/tesla.component';
import { MercedesComponent } from './mercedes/mercedes.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'showemp', canActivate:[AuthGuard], component:ShowemployeesComponent},
  {path:'products', canActivate:[AuthGuard], component:ProductsComponent},
  {path:'booking', canActivate:[AuthGuard], component:BookingComponent},
  {path:'tesla', component: TeslaComponent },
  {path: 'bmw', component: BmwComponent},
  {path: 'bugatti', component: BugattiComponent},
  {path: 'porsche', component: PorscheComponent},
  {path: 'mercedes', component: MercedesComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

