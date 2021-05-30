import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { Car } from '../models/car';
import { CarImage } from '../models/carImage';
import { Colour } from '../models/colour';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiURL = "https://localhost:44346/api/"

  constructor(private httpClient : HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newURL = this.apiURL+"cars/getcardetails";
    return this.httpClient.get<ListResponseModel<Car>>(newURL);
  }

  getCarsByBrands(brandId : number):Observable<ListResponseModel<Car>>{
    let newURL = this.apiURL+"cars/getcarsbybrands?brandId="+brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newURL);
  }

  getCarsByColours(colourId : number):Observable<ListResponseModel<Car>>{
    let newURL = this.apiURL+"cars/getcarsbycolours?colourId="+colourId;
    return this.httpClient.get<ListResponseModel<Car>>(newURL);
  }

  getCarsByBrandsAndColours(brandId:number,colourId : number):Observable<ListResponseModel<Car>>{
    let newURL = this.apiURL+"cars/getcarsbybrandsandcolours?brandid="+brandId+"&colourId="+colourId
    return this.httpClient.get<ListResponseModel<Car>>(newURL);
  }

  getCarImagesByCarId(carId : number):Observable<ListResponseModel<CarImage>>{
    let newURL = this.apiURL+"carimages/getbycarid?carId="+carId
    return this.httpClient.get<ListResponseModel<CarImage>>(newURL);
  }
  
  
  

  

}
