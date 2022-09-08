import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IProduct } from './model/product';
import { ProductsService } from './services/products.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Angular project'

 
 
  loading = false

  //products$: Observable<IProduct[]> 

  products: IProduct[] = []
  
  term = ''

  constructor (private productsService: ProductsService) {

  }

  ngOnInit(): void {
    this.loading = true
    this.productsService.getAll().subscribe(products => {
      this.products = products
      this.loading = false
    }) 

    /*this.loading = true
    this.products$ = this.productsService.getAll().pipe( 
      tap(()=> this.loading = false)
    )*/
   
    
    
  }
 
  
}
