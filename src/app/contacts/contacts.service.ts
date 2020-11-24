import { Contact } from './contact';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  contacts = new BehaviorSubject<Record<number, Contact>>({});
  constructor(private http: HttpClient) {}

  getAllContacts = () => {
    return this.http.get(`${environment.SERVER_URL}/contacts`).subscribe(
      (res: Record<number, Contact>) => {
        this.contacts.next(res);
      },
      (err) => {}
    );
  };

  getContactFromId = (id: number): Contact => {
    return this.contacts.getValue()[id];
  };

  sendMessage = (id: number, message: string) => {
    return this.http.post(`${environment.SERVER_URL}/contacts/send-message`, {
      id,
      message,
    });
  };
}
