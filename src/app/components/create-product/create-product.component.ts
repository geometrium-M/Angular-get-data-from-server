import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';



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
 

 

  constructor() { }

  ngOnInit(): void {
    this.nameControl = new FormControl('initial', [
      Validators.required, Validators.minLength(5)
    ]);
    this.nameControl.errors;
    this.nameControl.valueChanges.subscribe((value)=> console.log(value))
    this.nameControl.statusChanges.subscribe((status)=> console.log(status))    
  }




  submit() {
    console.log(this.form.value)
  }

  

}
