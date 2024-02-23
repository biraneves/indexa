import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/header/header.component';
import { DividerComponent } from './components/divider/divider.component';
import { ContactComponent } from './components/contact/contact.component';
import contactsList from './agenda.json';

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
  ],
})
export class AppComponent {
  alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
  contacts: Contact[] = contactsList;

  filterContactsByInitial(letter: string): Contact[] {
    const filteredContacts = this.contacts.filter((contact) =>
      contact.name.toLowerCase().startsWith(letter)
    );

    return filteredContacts;
  }
}
