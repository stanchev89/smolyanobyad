import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';
import {FoodModule} from './food/food.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {UserService} from './user/user.service';
import {FoodService} from './food/food.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {ConfirmDialogComponent} from './core/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    FoodModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [UserService, FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }