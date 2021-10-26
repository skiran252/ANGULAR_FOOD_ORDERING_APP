import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public isLoggedIn: boolean = false;
  public loggedInUser: any;
  public userSubscription: Subscription = new Subscription();

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.userSubscription = this.authService.loginStatusChange.subscribe(
      (status: boolean) => {
        this.isLoggedIn = status;
        if (this.isLoggedIn) {
          this.loggedInUser = this.authService.getLoggedInUser();
        }
      }
    );
  }
  onLogout() {
    this.authService.deauthenticateUser();
    this.router.navigate(['/login']);
  }
  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
