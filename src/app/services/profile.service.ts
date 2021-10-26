import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private authService: AuthService) {}

  //given id fetch user profile from auth serivce

  getProfile() {
    return this.authService.getProfile();
  }

  //update user profile

  updateProfile(profile: any) {
    return this.authService.updateProfile(profile);
  }
}
