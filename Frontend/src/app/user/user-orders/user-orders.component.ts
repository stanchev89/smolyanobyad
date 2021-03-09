import {Component, OnInit} from '@angular/core';
import {tap,map} from 'rxjs/operators';
import {UserService} from '../user.service';
import {IOrder} from '../../interfaces/order';
import {Observable} from 'rxjs';
import {IUser} from '../../interfaces';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent implements OnInit{
  user$ = this.userService.userData$;
  orders$: Observable<any> = this.user$.pipe(map(user => user.orders));
  page = 1;
  pageSize = 5;
  collectionSize: number;
  constructor(private userService: UserService) {
  }
  ngOnInit(): void {
    this.refreshOrders();
  }

  refreshOrders(): void {
    this.orders$ = this.user$.pipe(map(user => {
        this.collectionSize = user.orders.length;
        return user.orders.map((order, i) => ({id: i + 1, ...order}))
        .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    }));
  }

}