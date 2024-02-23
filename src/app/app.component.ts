import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/header/header.component';
import { DividerComponent } from './components/divider/divider.component';
import { ContactComponent } from './components/contact/contact.component';
import contactsList from './agenda.json';
import { FormsModule } from '@angular/forms';

interface Contact {
  id: number;
  name: string;
  phone: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    ContainerComponent,
    HeaderComponent,
    DividerComponent,
    ContactComponent,
    FormsModule,
  ],
})
export class AppComponent {
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
