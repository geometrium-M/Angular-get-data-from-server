import { NgModule } from '@angular/core';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { RouterModule } from '@angular/router';


const routes = [
  {path: '', component: ProductPageComponent},
  {path: 'about', component: AboutPageComponent}
]


@NgModule({
  imports: 
  [RouterModule.forRoot(routes)],
  exports: 
  [RouterModule]
})
export class AppRoutingModule { }
