import { NgModule } from '@angular/core';
import { RouterModule, Routes , Router} from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';

const routes: Routes = [
  {path:"cars",component:CarComponent},
  {path:"brands",component:BrandComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
