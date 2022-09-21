import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';   //add FormsModule here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { LoginComponent } from './login/login.component';
import { ShowemployeesComponent } from './showemployees/showemployees.component';
import { ExpPipe } from './exp.pipe';
import { GenderPipe } from './gender.pipe';
import { StudentComponent } from './student/student.component';
import { AgePipe } from './age.pipe';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { BookingComponent } from './booking/booking.component';

import { RouterModule, Routes } from '@angular/router';
import { TeslaComponent } from './tesla/tesla.component';
import { BmwComponent } from './bmw/bmw.component';
import { BugattiComponent } from './bugatti/bugatti.component';
import { PorscheComponent } from './porsche/porsche.component';
import { MercedesComponent } from './mercedes/mercedes.component';
import { LamboComponent } from './lambo/lambo.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    LoginComponent,
    ShowemployeesComponent,
    ExpPipe,
    GenderPipe,
    StudentComponent,
    AgePipe,
    HeaderComponent,
    RegisterComponent,
    ProductsComponent,
    BookingComponent,
    TeslaComponent,
    BmwComponent,
    BugattiComponent,
    PorscheComponent,
    MercedesComponent,
    LamboComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,            
    RouterModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
