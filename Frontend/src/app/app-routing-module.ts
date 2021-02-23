import { Routes, RouterModule } from '@angular/router';
import {MenuComponent} from './food/menu/menu.component';
import {AboutComponent} from "./core/about/about.component";
import {TermsComponent} from "./core/terms/terms.component";
import {NewsComponent} from "./core/news/news.component";
import {ContactsComponent} from "./core/contacts/contacts.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MenuComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'terms',
    component: TermsComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  }
];
export const AppRoutingModule = RouterModule.forRoot(routes);
