import { ThemeService } from './../theme.service';
import { SentMessageService } from './sent-message.service';
import { Component, OnInit } from '@angular/core';
import { SentMessage } from './sent-message';
import { MatDialog } from '@angular/material/dialog';
import { DeleteWarnComponent } from '../dialogs/delete-warn/delete-warn.component';

@Component({
  selector: 'app-sent-messages',
  templateUrl: './sent-messages.component.html',
  styleUrls: ['./sent-messages.component.scss'],
})
export class SentMessagesComponent implements OnInit {
  clearAllLoading: boolean = false;
  sentMessages: SentMessage[];
  constructor(
    private sentMessageService: SentMessageService,
    private dialog: MatDialog,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.sentMessageService.prevMessages.subscribe((messages) => {
      this.sentMessages = messages;
    });
    this.sentMessageService.getAllPrevMessages();
  }

  openWarnDialog = () => {
    const dialogRef = this.dialog.open(DeleteWarnComponent, {
      panelClass: this.themeService.getClass(),
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.clearAllPrevMessages();
      } else {
        return;
      }
    });
  };

  clearAllPrevMessages = () => {
    this.clearAllLoading = true;
    this.sentMessageService.clearAllPrevMessages().subscribe(
      (res) => {
        this.sentMessages = [];
      },
      (err) => {},
      () => {
        this.clearAllLoading = false;
      }
    );
  };

  sentMessagesExist = () => {
    return this.sentMessages && this.sentMessages.length;
  };
}
