
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { Colour } from 'src/app/models/colour';
import { CarService } from 'src/app/services/car.service';
import { BrandComponent } from '../brand/brand.component';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor(
    private carService : CarService,
    private activatedRoute : ActivatedRoute
    ) { }

  dataLoaded = false;
  cars : Car[] = []
  colours : Colour[] = []
  brands : Brand[] = []
  currentBrand : Brand
  brand : Brand
  car : Car
  currentCar : Car
  carImages : CarImage[]
  carId : number
  brandId : number
  colourId : number

  ngOnInit(): void {

      this.activatedRoute.params.subscribe(params=>{
        if(params["brandId"]) this.getCarsByBrands(params["brandId"])
        if(params["colourId"]) this.getCarsByColours(params["colourId"])
        else this.getCars()   
      })    
    
       
  }

  getCars(){
    this.carService.getCars().subscribe(response =>{
      this.cars = response.data;
      this.dataLoaded = response.success;
    });
  }

  getCarsByBrands(brandId : number){
    this.carService.getCarsByBrands(brandId).subscribe(response=>{
      this.cars = response.data;
      this.dataLoaded = response.success;
    });
  }

  getCarsByBrandsAndColours(brandId : number,colourId : number){
    this.carService.getCarsByBrandsAndColours(brandId,colourId).subscribe(response=>{
      this.cars = response.data;
      this.dataLoaded = response.success;
    });
  }

  setBrandAndColourValues(brandId:number,colourId:number){
    this.brandId = brandId
    this.colourId = colourId
    console.log(brandId,colourId)
  }


  getCarsByColours(colourId : number){
    this.carService.getCarsByColours(colourId).subscribe(response=>{
      this.cars = response.data;
      this.dataLoaded = response.success;
    });
  }

  setCurrentCar(car : Car){
    this.currentCar = car
  }

  getCurrentCarClass(car : Car){
    if(car == this.currentCar)
    return "table-success"
    else
    return ""
  }

  setCurrentBrand(brand:Brand){
    this.currentBrand = brand
    console.log(brand.brandName)
  }

  getCarImagesByCarId(carId : number){
    this.carService.getCarImagesByCarId(carId).subscribe(response=>{
      this.carImages = response.data;
      this.dataLoaded = response.success;
    })
  }



}
