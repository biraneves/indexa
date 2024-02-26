import { Injectable } from '@angular/core';
import { Contact } from '../components/contact/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private contacts: Contact[] = [
    { id: 1, name: 'Ana', phone: '29 278869420', email: 'email@email.com' },
  ];

  constructor() {
    const contactsLocalStorageString = localStorage.getItem('contacts');
    const contactsLocalStorage = contactsLocalStorageString
      ? JSON.parse(contactsLocalStorageString)
      : null;

    if (contactsLocalStorage) this.contacts = contactsLocalStorage;

    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }

  getContacts() {
    return this.contacts;
  }

  saveContact(contact: Contact) {
    this.contacts.push(contact);
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }
}
