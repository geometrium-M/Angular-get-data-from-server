import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http'
import { IProduct } from '../model/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { 

  }

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products' , {
      params: new HttpParams( {
        fromObject: { limit : 5}
      })
    }) 
  }
}
