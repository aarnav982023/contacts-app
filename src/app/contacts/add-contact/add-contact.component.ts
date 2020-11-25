import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contact } from '../contact';
import { ElementFinder } from 'protractor';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss'],
})
export class AddContactComponent implements OnInit {
  contactForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddContactComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { mode: string; action: Function; contact: Contact }
  ) {}

  ngOnInit(): void {
    if (this.data.mode === 'Edit') {
      this.contactForm = this.fb.group({
        id: [this.data.contact.id, Validators.required],
        firstName: [this.data.contact.firstName, Validators.required],
        lastName: [this.data.contact.lastName, Validators.required],
        phoneNumber: [
          this.data.contact.phoneNumber,
          [Validators.pattern('[+][0-9]{12}')],
        ],
      });
    } else {
      this.contactForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        phoneNumber: ['', [Validators.pattern('[+][0-9]{12}')]],
      });
    }
  }

  performAction = () => {
    if (!this.contactForm.valid) return;
    this.data.action(this.contactForm.value);
    this.dialogRef.close();
  };
}
