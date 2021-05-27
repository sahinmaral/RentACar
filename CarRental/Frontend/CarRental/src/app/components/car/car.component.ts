
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor(private carService : CarService) { }

  dataLoaded = false;
  cars : Car[] = []

  ngOnInit(): void {
    this.getCars();
  }

  getCars(){
    this.carService.getCars().subscribe(response =>{
      this.cars = response.data;
      this.dataLoaded = response.success;
    });
}

}
