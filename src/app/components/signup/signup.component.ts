import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public signUpForm = new FormGroup({});
  public user: any;
  public isFormSubmitted: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
    this.signUpForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      name: new FormControl(null, [Validators.required]),
    });
  }

  public onReset() {
    this.signUpForm.reset();
  }

  public onSubmit() {
    this.isFormSubmitted = true;
    // registerUser on the authService if exists set error message

    const name = this.signUpForm.get('name')?.value;
    const email = this.signUpForm.get('email')?.value;
    const phone = this.signUpForm.get('phone')?.value;
    const password = this.signUpForm.get('password')?.value;

    const registered = this.authService.registerUser(
      email,
      password,
      phone,
      name
    );
    if (registered) {
      alert('User registered successfully! redirecting to login page');

      //set Timeout to redirect to login page
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 500);
    }
    // else set error message and reset the form
    else {
      //alert already exists and redirect to login page

      alert('User already exists! redirecting to login page');
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 500);

      this.onReset();
    }
    this.user = this.signUpForm.value;
  }

  public get userFormControl() {
    return this.signUpForm.controls;
  }
  ngOnInit(): void {}
}
