import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../model/product';
import { ProductsService } from '../services/products.service';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(product: IProduct[], search: string): IProduct[] {
    return product.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
  }

}
