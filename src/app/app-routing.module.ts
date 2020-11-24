import { MessageComponent } from './contacts/message/message.component';
import { ContactInfoComponent } from './contacts/contact-info/contact-info.component';
import { SentMessagesComponent } from './sent-messages/sent-messages.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ContactsComponent,
  },
  { path: 'contact/:id', component: ContactInfoComponent },
  { path: 'send-message/:id', component: MessageComponent },
  {
    path: 'sent-messages',
    component: SentMessagesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
