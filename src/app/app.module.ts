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
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DeleteWarnComponent } from './dialogs/delete-warn/delete-warn.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactInfoComponent,
    MessageComponent,
    SentMessagesComponent,
    DeleteWarnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
