import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailService } from 'src/app/services/car-detail.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  apiURL = "https://localhost:44346"
  imageURL = "https://localhost:44346"

  car : Car 
  carDetails : Car[] = []
  carId : number
  carImage : CarImage
  carImages : CarImage[] = []
  dataLoaded =false
  constructor(private carDetailService : CarDetailService,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.getCarDetailsByCarId(params["carId"])
      this.getCarImagesByCarId(params["carId"])
      this.carId = params["carId"]
      
    })
    
    
  }

  getCarDetailsByCarId(carId : number){
    this.carDetailService.getCarDetailsByCarId(carId).subscribe(response=>{
      this.carDetails=response.data
      this.dataLoaded = response.success;
    })

  }

  getCarImagesByCarId(carId : number){
    this.carDetailService.getCarImagesByCarId(carId).subscribe(response=>{
      this.carImages = response.data;
      this.dataLoaded = response.success;
    })
    
  }

  

  

}
