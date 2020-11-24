import { ContactsService } from './contacts.service';
import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  contacts: Contact[];
  constructor(private contactsService: ContactsService) {}

  ngOnInit(): void {
    this.contactsService.contacts.subscribe((newContacts) => {
      this.contacts = Object.values(newContacts);
    });
    this.contactsService.getAllContacts();
  }

  getContactInfoRouterLink = (contact: Contact) => {
    return ['/contact', contact.id];
  };
}
