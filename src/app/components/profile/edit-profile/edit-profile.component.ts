import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  public user:any = [];
  constructor(private authService: AuthService) { 
    this.user = this.authService.getLoggedInUser();
  }

  ngOnInit(): void {
  }

}
