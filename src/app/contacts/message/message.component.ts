import { MatSnackBar } from '@angular/material/snack-bar';
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
  randomOTP: string;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private contactService: ContactsService,
    private router: Router,
    private _snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.generateOTP();
    this.messageForm = this.fb.group({
      message: [`Hi. Your OTP is: ${this.randomOTP}`, Validators.required],
    });
    this.route.params.subscribe((params) => {
      this.contact = this.contactService.getContactFromId(params.id);
    });
  }

  backToContacts = () => {
    this.router.navigate(['']);
  };

  sendMessage = () => {
    if (!this.messageForm.valid) return;
    const message = this.messageForm.get('message').value;
    this.contactService
      .sendMessage(this.contact.id, message, this.randomOTP)
      .subscribe(
        (res) => {
          console.log(res);
          this.openSnackBar('Message sent!', null);
        },
        (err) => {
          console.log(err);
          this.openSnackBar('Some error occured!', null);
        }
      );
  };

  openSnackBar = (message: string, action: string) => {
    this._snackbar.open(message, action, {
      duration: 2000,
    });
  };

  generateOTP = () => {
    this.randomOTP = Math.floor(100000 + Math.random() * 900000).toString();
  };
}
