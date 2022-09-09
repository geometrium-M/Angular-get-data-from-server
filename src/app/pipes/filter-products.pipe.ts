import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../model/product';


@Pipe({
  name: 'filterProducts',
  pure: false
 
})
export class FilterProductsPipe implements PipeTransform {

  transform(products: IProduct[], search: string): IProduct[] {
    return products.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
  }

}
