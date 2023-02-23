import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

age=26;

public phone:number=7287975182;
public name:string="Madhukar"
public isIndian:boolean= true;


public mobile:number= 91;

submit(){
  alert("submitted successfully");
}

test(){
  alert("double clicked");
}

enter(){
  alert("mouse entered");
}

leave(){
  alert("mouse leaved");
}

key(){
  alert("key pressed"); 
}






}
