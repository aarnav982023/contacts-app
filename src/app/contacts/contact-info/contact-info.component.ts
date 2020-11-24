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
  constructor(
    private contactService: ContactsService,
    private router: Router,
    private route: ActivatedRoute
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
}
