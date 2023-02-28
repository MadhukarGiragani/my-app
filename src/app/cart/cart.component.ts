import { Component, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  public products:any =[
    {name:'pen',price:20, rating:3.8, isFreeDelivery:false},
    {name:'phone',price:20000, rating:4.1, isFreeDelivery:true},
    {name:'toy',price:500, rating:3.5, isFreeDelivery:false},
    {name:'shirt',price:999, rating:4.2, isFreeDelivery:true},
    {name:'bag',price:450, rating:4.0, isFreeDelivery:false},
    {name:'laptop',price:49000, rating:4.3, isFreeDelivery:true},
    {name:'table',price:350, rating:4.5, isFreeDelivery:false},
    {name:'tv',price:25000, rating:4.4, isFreeDelivery:true},
    {name:'clock',price:200, rating:3.0, isFreeDelivery:false},
  ];


  delete(i:number){
    this.products.splice(i,1);
  }

  count(){
    alert("cart count is "+this.products.length);
  }

  onlyfree(){
    this.products = this.products.filter((product:any)=> product.isFreeDelivery == true);
  }

  pricelh(){
    this.products = this.products.sort((a:any, b:any)=> a.price-b.price);
  }

  discount(){
    this.products = this.products.map( (product:any)=> {
      product.price = product.price/2;
      return product;
    })
  }

  charges(){
    this.products = this.products.map( (product:any)=> {
      if(product.isFreeDelivery==false){
        product.price = product.price+20;
      }
      return product;
    })
  }

  total(){
    var total = this.products.reduce( (sum:any,a:any)=>sum+a.price ,0)

    alert(total);

  }

  pricehl (){
    this.products = this.products.sort((a:any, b:any)=> b.price-a.price);
  }

  public term:string = '';

  search(){
    this.products = this.products.filter( (product:any)=> product.name.indexOf(this.term) != -1);
  }

  public product:any = {};

create(){
  this.products.unshift(this.product);
}
   

}
