
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  apiURL = "https://localhost:44346/api/"

  constructor(private httpClient : HttpClient) { }

  getCarDetailsByCarId(carId : number):Observable<ListResponseModel<Car>>{
    let newURL = this.apiURL+"cars/getcardetailsbycarid?carId="+carId;
    return this.httpClient.get<ListResponseModel<Car>>(newURL);
  }


  getCarImagesByCarId(carId : number):Observable<ListResponseModel<CarImage>>{
    let newURL = this.apiURL+"carimages/getbycarid?carId="+carId
    return this.httpClient.get<ListResponseModel<CarImage>>(newURL);
  }
  

}
