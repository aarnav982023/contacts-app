import { AppMaterialModule } from './app-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactInfoComponent } from './contacts/contact-info/contact-info.component';
import { MessageComponent } from './contacts/message/message.component';
import { SentMessagesComponent } from './sent-messages/sent-messages.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactInfoComponent,
    MessageComponent,
    SentMessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
