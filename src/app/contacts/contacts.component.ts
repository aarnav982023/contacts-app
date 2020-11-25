import { MatDialog } from '@angular/material/dialog';
import { ContactsService } from './contacts.service';
import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ThemeService } from '../theme.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  contacts: Contact[];
  addContactLoading: boolean = false;
  constructor(
    private contactsService: ContactsService,
    private dialog: MatDialog,
    private themeService: ThemeService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.contactsService.contacts.subscribe((newContacts) => {
      this.contacts = Object.values(newContacts);
    });
    this.contactsService.getAllContacts();
  }

  getContactInfoRouterLink = (contact: Contact) => {
    return ['/contact', contact.id];
  };

  contactsExist = () => {
    return this.contacts && this.contacts.length;
  };

  openContactDialog = () => {
    this.dialog.open(AddContactComponent, {
      data: { mode: 'Add', action: this.addContact },
      panelClass: this.themeService.getClass(),
    });
  };

  addContact = (newContact) => {
    this.addContactLoading = true;
    this.contactsService.addContact(newContact).subscribe(
      (res: Record<string, Contact>) => {
        this.contactsService.contacts.next(res);
        this._snackBar.open('Contact added!', null, {
          duration: 2000,
        });
      },
      (err) => {
        this._snackBar.open('Could not add Contact!', null, {
          duration: 2000,
        });
      },
      () => {
        this.addContactLoading = false;
      }
    );
  };
}
