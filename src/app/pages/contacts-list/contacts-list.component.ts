import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from '../../components/contact/contact.component';
import { ContainerComponent } from '../../components/container/container.component';
import { DividerComponent } from '../../components/divider/divider.component';
import { HeaderComponent } from '../../components/header/header.component';
import contactsList from '../../agenda.json';
import { RouterLink } from '@angular/router';

interface Contact {
  id: number;
  name: string;
  phone: string;
}

@Component({
  selector: 'bn-contacts-list',
  standalone: true,
  imports: [
    ContainerComponent,
    HeaderComponent,
    DividerComponent,
    ContactComponent,
    FormsModule,
    RouterLink,
  ],
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.css',
})
export class ContactsListComponent {
  alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
  contacts: Contact[] = contactsList;
  filterByText: string = '';

  private removeAccents(text: string): string {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  filterContactsByText(): Contact[] {
    if (!this.filterByText) return this.contacts;

    const filteredContacts = this.contacts.filter((contact) =>
      this.removeAccents(contact.name)
        .toLowerCase()
        .includes(this.removeAccents(this.filterByText).toLowerCase())
    );

    return filteredContacts;
  }

  filterContactsByInitial(letter: string): Contact[] {
    const filteredContacts = this.filterContactsByText().filter((contact) =>
      this.removeAccents(contact.name)
        .toLowerCase()
        .startsWith(this.removeAccents(letter))
    );

    return filteredContacts;
  }
}
