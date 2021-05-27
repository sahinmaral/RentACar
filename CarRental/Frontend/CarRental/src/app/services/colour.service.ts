import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColourResponseModel } from '../models/colourResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColourService {

  apiURL = "https://localhost:44346/api/colours/getall"

  constructor(private httpClient : HttpClient) { }

  getCars():Observable<ColourResponseModel>{
    return this.httpClient.get<ColourResponseModel>(this.apiURL);
}
}
