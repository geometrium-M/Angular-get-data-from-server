import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse} from '@angular/common/http'
import { IProduct } from '../model/product';
import { Observable,delay, catchError, throwError,tap } from 'rxjs';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient,
    private errorSerice: ErrorService
    ) {}

  products: IProduct[] = []
 

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products' , {
      params: new HttpParams( {
        fromObject: { limit : 5}
      })
    }).pipe( 
      delay(1000),
      tap(products => this.products = products),
      catchError(this.errorHandler.bind(this))
      )
  }

  create(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>('https://fakestoreapi.com/products', product)
    .pipe(
      tap(prod => this.products.push(prod))
    )
  }






  private errorHandler(error: HttpErrorResponse) {
    this.errorSerice.handle(error.message)

    return throwError( ()=> error.message)
  }
}












