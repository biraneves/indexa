import { Routes } from '@angular/router';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';
import { ContactsListComponent } from './pages/contacts-list/contacts-list.component';

export const routes: Routes = [
  {
    path: 'form',
    component: ContactFormComponent,
  },
  {
    path: 'contacts-list',
    component: ContactsListComponent,
  },
  {
    path: '',
    redirectTo: '/contacts-list',
    pathMatch: 'full',
  },
];
