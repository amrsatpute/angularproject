import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userDetailsForm: FormGroup;
  accountDetailsForm: FormGroup;
  //username validation- symbol not allowed in username
  notAllowedNames = ['`!@#$%^&*()_+?'];
  genders = [
    { id: '1', value: 'Male' },
    { id: '2', value: 'Female' }
  ];
  //checkbox validation
  isCheckboxChecked: boolean = false;
  //country validation with country code
  countries: { name: string; code: string }[] = [
    { name: 'USA', code: '+1' },
    { name: 'Canada', code: '+1' },
    { name: 'UK', code: '+44' },
    { name: 'Australia', code: '+61' },
    { name: 'India', code: '+91' }
  ];
  constructor() { }
  ngOnInit(): void {
    this.userDetailsForm = new FormGroup({
      fullName: new FormControl('', Validators.required),
      birthdate: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      countryCode: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{1,4}$')
      ]),
      phone: new FormControl('', Validators.required),
      bio: new FormControl('', Validators.required),
      termsAndConditions: new FormControl(false, Validators.requiredTrue)
    });

    this.accountDetailsForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      confirmpassword: new FormControl('', Validators.required)
    }, { validators: this.passwordMatchValidator });
  }

  //user name validation
  validateUsername(control: AbstractControl): ValidationErrors | null {
    const username = control.value;
    const pattern = /^[a-zA-Z0-9]+$/;

    if (username && !pattern.test(username)) {
      return { pattern: true };
    }

    return null;
  }
  //checkbox validation - only enable submit button when checkbox is checked
  updateSubmitButtonStatus(checked: boolean): void {
    this.isCheckboxChecked = checked;
  }

  onSubmit(): void {

  }
  //passward confirmation validation
  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password').value;
    const confirmPassword = control.get('confirmpassword').value;

    if (password !== confirmPassword) {
      return { passwordMismatch: true };
    }

    return null;
  }

}

}
