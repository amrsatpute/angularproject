import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-from01',
  templateUrl: './template-from01.component.html',
  styleUrls: ['./template-from01.component.css']
})
export class TemplateFrom01Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmitTemplateBased(form: NgForm) {
    console.log('my template form values', form.value);
    // console.log('UserName',form.controls['userName'].value);

    // api/ saveuserData(user: User); // api endpoint
  }

}



