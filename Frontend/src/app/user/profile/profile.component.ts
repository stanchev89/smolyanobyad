import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user$ = this.userService.user$;
  mode = 'profileInfo';

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  toggleMode(changeTo): void {
    this.mode = changeTo;
  }

}