import { Injectable } from '@angular/core';

interface Contact {
  id: number;
  name: string;
  phone: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private contacts: Contact[] = [
    { id: 1, name: 'Ana', phone: '29 278869420' },
    { id: 2, name: 'Antônio', phone: '38 128451235' },
    { id: 2, name: 'Ágata', phone: '38 128451235' },
    { id: 3, name: 'Bruno', phone: '95 695521583' },
    { id: 4, name: 'Beatriz', phone: '25 854986459' },
    { id: 5, name: 'Carlos', phone: '94 543197849' },
    { id: 6, name: 'Cláudia', phone: '31 176437098' },
    { id: 7, name: 'Daniel', phone: '56 613692441' },
    { id: 8, name: 'Diana', phone: '16 670764734' },
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
}
