import { Contact } from './contact';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  contacts = new BehaviorSubject<Record<number, Contact>>({});

  constructor() {
    const initContacts: Record<number, Contact> = {
      0: {
        id: 0,
        firstName: 'Clark',
        lastName: 'Kent',
        phoneNumber: '1234567890',
      },
      1: {
        id: 1,
        firstName: 'Tony',
        lastName: 'Stark',
        phoneNumber: '1234567890',
      },
      3: {
        id: 3,
        firstName: 'Peter',
        lastName: 'Parker',
        phoneNumber: '1234567890',
      },
    };
    this.contacts.next(initContacts);
  }

  getContactFromId = (id: number): Contact => {
    return this.contacts.getValue()[id];
  };
}
