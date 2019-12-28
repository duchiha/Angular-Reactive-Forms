import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
    })
  }

  defaultValues(): void {
    this.signUpForm.setValue({
      firstName: 'Fire',
      lastName: 'Fist',
      email: 'fire.fist@gmail.com',
    })
  }

  emailDefaultValues(): void {
    this.signUpForm.patchValue({
      email: 'fire.fist@gmail.com',
    })
  }

  save(): void {
    console.log('Saving...');
  }

}
