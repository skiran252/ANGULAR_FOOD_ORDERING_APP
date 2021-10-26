import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLoggedIn: boolean = false;

  public loginStatusChange = new Subject<boolean>();

  //array of users who are valid

  public currentUser: any;
  public validUsers = [
    {
      email: 'admin@admin.com',
      password: 'admin123',
      phoneno: '1234567890',
      name: 'admin',
    },
    {
      email: 'user',
      password: 'user',
      phoneno: '1234567890',
      name: 'user',
    },
  ];

  constructor() {
    // check if this array exists in localstorage then replace the array with the one in localstorage else set the array to the one in localstorage
    if (localStorage.getItem('validUsers')) {
      this.validUsers = JSON.parse(localStorage.getItem('validUsers') || '{}');
    } else {
      localStorage.setItem('validUsers', JSON.stringify(this.validUsers));
    }
  }

  // function to authenticate user basd on email and password having phoneno and name

  public authenticateUser(email: string, password: string): string {
    // check if user doent exist return "DOES_NOT_EXIST" else check if password is correct return "PASSWORD_INCORRECT" else return "SUCCESS"

    for (let user of this.validUsers) {
      if (user.email === email) {
        if (user.password === password) {
          this.currentUser = user;
          this.isLoggedIn = true;
          this.loginStatusChange.next(true);
          return 'SUCCESS';
        } else {
          return 'PASSWORD_INCORRECT';
        }
      }
    }
    return 'DOES_NOT_EXIST';
  }

  // check if a user is already registered else add email, password, phoneno and name

  public registerUser(
    email: string,
    password: string,
    phoneno: string,
    name: string
  ): boolean {
    for (let user of this.validUsers) {
      if (user.email === email) {
        return false;
      }
    }
    this.validUsers.push({
      email: email,
      password: password,
      phoneno: phoneno,
      name: name,
    });
    localStorage.setItem('validUsers', JSON.stringify(this.validUsers));
    return true;

  }

  // function to deauthenticate user and set isLoggedIn to false

  public deauthenticateUser(): void {
    this.loginStatusChange.next(false);
    this.isLoggedIn = false;
    this.currentUser = null;
  }

  // function to check if user is logged in

  public isUserLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  //get currently logged in user

  public getLoggedInUser(): any {
    return this.currentUser;
  }

  getProfile() {
    return this.currentUser;
  }
  updateProfile(user: any) {
    //find indexr of this user in the array
    let index = this.validUsers.findIndex((x) => x.email === user.email);
    //update the user
    this.validUsers[index] = user;
  }
}
