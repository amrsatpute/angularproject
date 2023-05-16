import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  genders = [
    { id : '1', value: 'Male'},
    { id: '2', value: 'Female'}
  ]
  myReactiveForm: FormGroup;
  constructor() {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.myReactiveForm = new FormGroup({
      'username': new FormControl(''),
      'email': new FormControl(''),
      'course': new FormControl(''),
      'gender': new FormControl('')
    })
  }

  OnSubmit() {
    console.log('my reactive form ', this.myReactiveForm)
  }
}
