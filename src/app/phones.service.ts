import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhonesService {

  public phones:any=[
    {company:'samsung',price:20000},
    {company:'iphone',price:100000},
    {company:'redmi',price:30000},
    {company:'vivo',price:25000},
  ];
}
