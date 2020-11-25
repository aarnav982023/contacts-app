import { SentMessageService } from './sent-message.service';
import { Component, OnInit } from '@angular/core';
import { SentMessage } from './sent-message';

@Component({
  selector: 'app-sent-messages',
  templateUrl: './sent-messages.component.html',
  styleUrls: ['./sent-messages.component.scss'],
})
export class SentMessagesComponent implements OnInit {
  sentMessages: SentMessage[];
  constructor(private sentMessageService: SentMessageService) {}

  ngOnInit(): void {
    this.sentMessageService.prevMessages.subscribe((messages) => {
      this.sentMessages = messages;
    });
    this.sentMessageService.getAllPrevMessages();
  }
}
