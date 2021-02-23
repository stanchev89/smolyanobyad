import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import {RouterModule} from "@angular/router";
import {AboutComponent} from "./about/about.component";
import { TermsComponent } from './terms/terms.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ContactsComponent } from './contacts/contacts.component';
import { NewsComponent } from './news/news.component';
import { FooterComponent } from './footer/footer.component'



@NgModule({
  declarations: [NavigationComponent, AboutComponent, TermsComponent, ContactsComponent, NewsComponent, FooterComponent],
  exports: [
    NavigationComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ]
})
export class CoreModule { }
