import {Component, Output, EventEmitter} from '@angular/core';
import {UserService} from '../user.service';
import {IAddress} from '../../interfaces';

@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.css']
})
export class UserAddressComponent {
  user$ = this.userService.userData$;
  editMode = false;

  constructor(private userService: UserService) { }

  deleteAddress(item: IAddress): void {
    this.userService.deleteUserAddress(item);
  }

  toggleEditMode(): void{
    this.editMode = !this.editMode;
  }
}