import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm = new FormGroup({});
  public user: any = {};
  public isFormSubmitted: boolean = false;
  closeResult = '';
  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  public initializeForm() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(12),
        ],
      ],
    });
  }

  public get userFormControl() {
    return this.loginForm.controls;
  }

  public onReset() {
    this.loginForm.reset();
  }

  public onSubmit() {
    this.isFormSubmitted = true;
    
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    // try to login check response if successfull or user does not exist or password is invalid
    const response = this.authService.authenticateUser(email, password);
    switch (response) {
      case 'SUCCESS':
        
        // alert sucess and redirect to home page
        alert('Login Successful');

        this.router.navigate(['/home']);
        break;
      case 'DOES_NOT_EXIST':
        // alert not registerd and redirect to signup page
        alert('User does not exist');
        this.router.navigate(['/signup']);
        break;
      case 'PASSWORD_INCORRECT':
        // alert password is invalid and redirect to login page
        alert('Password is invalid');
        break;

      default:
        break;
    }




    this.user = this.loginForm.value;
  }

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      this.closeResult = reason;
      return `with: ${reason}`;
    }
  }

  ngOnInit(): void {
    this.initializeForm();
  }
}
