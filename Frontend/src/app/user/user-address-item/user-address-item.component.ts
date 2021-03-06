import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDialogComponent} from '../../core/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-user-address-item',
  templateUrl: './user-address-item.component.html',
  styleUrls: ['./user-address-item.component.css']
})
export class UserAddressItemComponent {
  @Input() item;
  @Output() deleteRequest = new EventEmitter<any>();

  constructor(private dialog: MatDialog) { }
  deleteItem(): void {
      const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
        data: {title: 'Потвърждение',
          message: 'Сигурни ли сте, че искате да изтриете адреса?',
        }
      });
      confirmDialog.afterClosed().subscribe(result => {
        if (result === 'true') {
          this.deleteRequest.emit(this.item);
        }
      });
  }

}