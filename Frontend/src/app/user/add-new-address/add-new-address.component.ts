import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {UserService} from '../user.service';
import {IAddress} from '../../interfaces';

@Component({
  selector: 'app-add-new-address',
  templateUrl: './add-new-address.component.html',
  styleUrls: ['./add-new-address.component.css']
})
export class AddNewAddressComponent implements OnInit {

  constructor(private userService: UserService) { }
  @Output() addedNewAddres = new EventEmitter<void>();
  @Input() backBtn;
  @Output() backBtnClicked = new EventEmitter<void>();

  ngOnInit(): void {
  }


  addNewAddress(data): void{
    const priceMap = {
      smolyan: 0.5,
      raikovo: 1.5,
      ustovo: 1.5,
      kaptaja: 1.5
    };
    const newAddress: IAddress = {
      location: data.newAddress,
      delivery: priceMap[data.region]
    };
    this.userService.addUserAddress(newAddress);
    this.addedNewAddres.emit();
  }

  back(): void {
    this.backBtnClicked.emit();
  }

}