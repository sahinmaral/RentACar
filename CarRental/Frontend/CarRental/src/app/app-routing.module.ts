import { NgModule } from '@angular/core';
import { RouterModule, Routes , Router} from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarDetailComponent } from './components/car/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { ColourComponent } from './components/colour/colour.component';

const routes: Routes = [
  {path:"cars",component:CarComponent},
  {path:"brands",component:BrandComponent},
  {path:"colours",component:ColourComponent},
  {path:"cars/brands",component:CarComponent},
  {path:"cars/brands/:brandId",component:CarComponent},
  {path:"cars/colours",component:CarComponent},
  {path:"cars/colours/:colourId",component:CarComponent},
  {path:"cars/carDetails/:carId",component:CarDetailComponent},
  {path:"cars/carDetails",component:CarDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
