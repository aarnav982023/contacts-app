import { environment } from './../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SentMessage } from './sent-message';

@Injectable({
  providedIn: 'root',
})
export class SentMessageService {
  prevMessages = new BehaviorSubject<SentMessage[]>([]);

  constructor(private http: HttpClient) {}

  getAllPrevMessages = () => {
    this.http
      .get(`${environment.SERVER_URL}/prev-messages`)
      .subscribe((res: SentMessage[]) => {
        this.prevMessages.next(res);
      });
  };
}
