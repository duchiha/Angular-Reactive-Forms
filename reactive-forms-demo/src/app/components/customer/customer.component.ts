import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
signUpForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
           firstName:new FormControl(),
         lastName: new FormControl(),
         email: new FormControl(),
         sendCatalog: new FormControl(true),
    })
  }

  save():void{
    console.log('Saving...');
  }

}
