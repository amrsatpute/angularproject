import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

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

  isSubmitted: boolean = false;
  ngOnInit() {
  }

  createForm() {
    this.myReactiveForm = new FormGroup({
      'userDetails' : new FormGroup({
       'username': new FormControl('', Validators.required),
       'email': new FormControl('',[Validators.required, Validators.email] ),
      }),
      'course': new FormControl('Angular'),
      'gender': new FormControl('Male'),
      'skills': new FormArray(
        [
          new FormControl('', Validators.required)
        ]
      )
    })
  }

  OnSubmit() {
    this.isSubmitted = true;
    console.log('my reactive form ', this.myReactiveForm)
  }
  OnAddSkills() {
   (<FormArray>this.myReactiveForm.get('skills')).push(new FormControl('', Validators.required));
  }
}
