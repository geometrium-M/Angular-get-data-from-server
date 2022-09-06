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

  //products: IProduct[] = []
 
  loading = false

  products$: Observable<IProduct[]> 
  
  term = ''

  constructor (private productsService: ProductsService) {

  }

  ngOnInit(): void {
    this.loading = true
    this.products$ = this.productsService.getAll().pipe( 
      tap(()=> this.loading = false)
    )
   
    /*this.productsService.getAll().subscribe(products => {
      this.products = products
      this.loading = false
    })*/
    
  }
 
  
}
