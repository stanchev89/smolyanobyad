import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnDestroy {
  user$ = this.userService.user$;
  editProfileInfo = false;
  showUserAddress = false;
  showUserOrders = false;

  constructor(private userService: UserService) {
  }

  toggleEditProfile(): void {
    this.editProfileInfo = !this.editProfileInfo;
  }

  toggleUserAddress(): void{
    this.showUserAddress = !this.showUserAddress;
  }

  toggleUserOrders(): void {
    this.showUserOrders = !this.showUserOrders;
  }

  editProfile(data): void {
    this.userService.editUserData(data);
    this.toggleEditProfile();
  }

  ngOnDestroy(): void {
    this.editProfileInfo = false;
    this.showUserOrders = false;
    this.showUserAddress = false;
  }
}