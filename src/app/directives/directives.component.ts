import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  public ages:number[] = [10,20,30,40];
  public names:string[] = ["madhu","vamshi","ram","gali"];
  public places:string[] = ["hyderabad","chennai","kolkata"];
  public users: any = [
    {name:'madhu',phone:7287975182, marks:23, age:15},
    {name:'vamshi',phone:9010721946, marks:55, age:19},
    {name:'prakash',phone:9550454373, marks:80, age:21}
  ]

  public products:any =[
    {name:'pen',price:'10',rating:2},
    {name:'shirt',price:'500',rating:4},
    {name:'mobile',price:'20000',rating:5},
    {name:'tv',price:'25000',rating:3}
  ]


  public today:any = new Date();


}
