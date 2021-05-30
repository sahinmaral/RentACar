import { Component, OnInit, Output } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import {HttpClient} from '@angular/common/http'
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands : Brand[] = []
  dataLoaded = false;
  currentBrand : Brand;
  brand : Brand;
  

  constructor(private brandService : BrandService) { 
  }

  ngOnInit(): void {
      this.getBrands();
  }

  getBrands(){
      this.brandService.getBrands().subscribe(response=>{
        this.brands = response.data;
        this.dataLoaded = response.success;
      })
  }


  setCurrentBrand(brand:Brand){
    this.currentBrand = brand;
    
  }

  getCurrentBrandClass(brand:Brand){
    if(brand == this.currentBrand)
    return "list-group-item list-group-item-action active"
    else
      return "list-group-item list-group-item-action"
  }

  getAllBrandClass(brand:Brand){
    if(brand != this.currentBrand)
    return "list-group-item list-group-item-action"
    else
      return "list-group-item list-group-item-action active"
  }

}
