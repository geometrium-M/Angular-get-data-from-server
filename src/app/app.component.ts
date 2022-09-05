import { Component } from '@angular/core';
import { IProduct } from './model/product';
import { products as data } from './data/products';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Angular project'

  products: IProduct[] = data
 
  loading: false
 
  
}
