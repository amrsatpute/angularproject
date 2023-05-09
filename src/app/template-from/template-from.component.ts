import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-from',
  templateUrl: './template-from.component.html',
  styleUrls: ['./template-from.component.css']
})
export class TemplateFromComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  OnSubmit(form: NgForm) {
    console.log('my template form values', form.value);
    // console.log('UserName',form.controls['userName'].value);

    // api/ saveuserData(user: User); // api endpoint
  }

}
