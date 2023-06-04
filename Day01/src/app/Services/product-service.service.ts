import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private readonly http: HttpClient) { 

  }

    //DB_URL
  private readonly DB_URL = "https://dummyjson.com/products";
  count:any;
  intervalOb = interval(1000);
  getProducts(): Observable<any> {
    return this.http.get<any>(this.DB_URL);
  }

  getProductNum(){
    return this.count;
  }
}
