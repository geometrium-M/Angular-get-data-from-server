import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';
import { ProductsService } from 'src/app/services/products.service';



@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  nameControl: FormControl;

  form = new FormGroup( {
    title: new FormControl('',[
      Validators.required,
      Validators.minLength(5)
    ])
  })

  get title() {
    return this.form.controls.title as FormControl
  }
 

 

  constructor( 
    private productService: ProductsService,
    private modalService: ModalService
    ) { }

  ngOnInit(): void {
    this.nameControl = new FormControl('initial', [
      Validators.required, Validators.minLength(5)
    ]);
    this.nameControl.errors;
    this.nameControl.valueChanges.subscribe((value)=> console.log(value))
    this.nameControl.statusChanges.subscribe((status)=> console.log(status))    
  }


  submit() {
    this.productService.create( {
      title: this.form.value.title as string,
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic',
      rating: {
        rate: 12, 
        count: 400
      }
  }).subscribe(()=> {
    this.modalService.close()
  })
  }

  

}
