import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse} from '@angular/common/http'
import { IProduct } from '../model/product';
import { Observable,delay, catchError, throwError } from 'rxjs';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient,
    private errorSerice: ErrorService
    ) { 

  }

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products' , {
      params: new HttpParams( {
        fromObject: { limit : 5}
      })
    }).pipe( 
      delay(1000),
      catchError(this.errorHandler.bind(this))
      )

  }
  private errorHandler(error: HttpErrorResponse) {
    this.errorSerice.handle(error.message)

    return throwError( ()=> error.message)
  }
}
