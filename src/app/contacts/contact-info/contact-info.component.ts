import { AddContactComponent } from './../add-contact/add-contact.component';
import { ThemeService } from './../../theme.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeleteWarnComponent } from './../../dialogs/delete-warn/delete-warn.component';
import { MatDialog } from '@angular/material/dialog';
import { ContactsService } from './../contacts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss'],
})
export class ContactInfoComponent implements OnInit {
  contact: Contact;
  editContactLoading: boolean = false;
  constructor(
    private contactService: ContactsService,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.contact = this.contactService.getContactFromId(params.id);
    });
  }

  backToContacts = () => {
    this.router.navigate(['']);
  };

  navigateToSendMessage = () => {
    if (!this.contact) return;
    this.router.navigate(['send-message', this.contact.id]);
  };

  openWarningDialog = () => {
    const dialogRef = this.dialog.open(DeleteWarnComponent, {
      data: {
        message: `Are you sure you want to delete contact ${this.contact.firstName} ${this.contact.lastName} ?`,
      },
      panelClass: this.themeService.getClass(),
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.contactService.deleteContact(this.contact.id).subscribe(
          (res) => {
            this.backToContacts();
          },
          (err) => {
            this._snackBar.open('Could not delete contact!', null, {
              duration: 2000,
            });
          }
        );
      } else {
        return;
      }
    });
  };

  openEditDialog = () => {
    this.dialog.open(AddContactComponent, {
      data: { mode: 'Edit', action: this.editContact, contact: this.contact },
      panelClass: this.themeService.getClass(),
    });
  };

  editContact = (updatedContact) => {
    this.editContactLoading = true;
    this.contactService.editContact(updatedContact).subscribe(
      (res: Contact) => {
        this.contact = res;
        this._snackBar.open('Contact edited!', null, {
          duration: 2000,
        });
      },
      (err) => {
        this._snackBar.open('Could not edit Contact!', null, {
          duration: 2000,
        });
      },
      () => {
        this.editContactLoading = false;
      }
    );
  };
}
