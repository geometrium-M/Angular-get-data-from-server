import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  title = 'Angular project'

 
 
  loading = false

  //products$: Observable<IProduct[]> 

  //products: IProduct[] = []
  
  term = ''

  constructor (
    public productsService: ProductsService,
    public modalService: ModalService
    ) {

  }

  ngOnInit(): void {
    this.loading = true
    this.productsService.getAll().subscribe( ( )=> 
      this.loading = false
    ) 

    /*this.loading = true
    this.products$ = this.productsService.getAll().pipe( 
      tap(()=> this.loading = false)
    )*/
   
    
    
  }

}
