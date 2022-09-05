import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { 

  }

  getAll() {
    this.http.get('https://fakestoreapi.com/products') 
  }
}
