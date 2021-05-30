import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Colour } from '../models/colour';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColourService {

  apiURL = "https://localhost:44346/api/colours/getall"

  constructor(private httpClient : HttpClient) { }

  getColours():Observable<ListResponseModel<Colour>>{
    return this.httpClient.get<ListResponseModel<Colour>>(this.apiURL);
}
}
