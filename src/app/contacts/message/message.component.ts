import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  contact: Contact;
  messageForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private contactService: ContactsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.messageForm = this.fb.group({
      message: ['Hi. Your OTP is: 123456', Validators.required],
    });
    this.route.params.subscribe((params) => {
      this.contact = this.contactService.getContactFromId(params.id);
    });
  }

  backToContacts = () => {
    this.router.navigate(['']);
  };
}
