import { Component, OnInit } from '@angular/core';
import { Colour } from 'src/app/models/colour';
import { ColourService } from 'src/app/services/colour.service';

@Component({
  selector: 'app-colour',
  templateUrl: './colour.component.html',
  styleUrls: ['./colour.component.css']
})
export class ColourComponent implements OnInit {

  colours : Colour[] = []
  dataLoaded = false
  currentColour : Colour
  colour : Colour

  constructor(private colourService : ColourService) { }

  ngOnInit(): void {
    this.getColours()
  }

  getColours(){
    this.colourService.getColours().subscribe(response =>{
      this.colours = response.data;
      this.dataLoaded = response.success;
    })
  }

  setCurrentColour(colour : Colour){
    this.currentColour = colour;
  }
  
  getCurrentColourClass(colour:Colour){
    if(colour == this.currentColour)
    return "list-group-item list-group-item-action active"
    else
      return "list-group-item list-group-item-action"
  }

  getAllColourClass(colour:Colour){
    if(colour != this.currentColour)
    return "list-group-item list-group-item-action"
    else
      return "list-group-item list-group-item-action active"
  }

}
