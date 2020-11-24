import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'contacts-app';
  links: any = [
    { route: '/', title: 'Contacts'},
    { route: '/sent-messages', title: 'Sent Messages'},
  ];
}
