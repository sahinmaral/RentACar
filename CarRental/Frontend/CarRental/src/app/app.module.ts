import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { RentalComponent } from './components/rental/rental.component';
import { BrandComponent } from './components/brand/brand.component';
import { CustomerComponent } from './components/customer/customer.component';
import { NaviComponent } from './components/navi/navi.component';
import { RouterModule, Routes , Route} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ColourComponent } from './components/colour/colour.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    RentalComponent,
    BrandComponent,
    CustomerComponent,
    NaviComponent,
    ColourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:"cars",component:CarComponent},
      {path:"brands",component:BrandComponent},
      {path:"customers",component:CustomerComponent},
      {path:"colours",component:ColourComponent},
      {path:"rentals",component:RentalComponent}
    ]),
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export const routingComponents = []
