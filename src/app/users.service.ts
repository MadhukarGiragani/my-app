import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _HttpClient:HttpClient) { }

  getUsers():Observable<any>{
    return this._HttpClient.get("https://62abe711bd0e5d29af16f450.mockapi.io/users");
  }
}
