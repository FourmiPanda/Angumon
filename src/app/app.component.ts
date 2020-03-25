import { Component } from '@angular/core';
import {AuthentService} from './services/authent.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private authentService: AuthentService) {
  }
  logout() {
    console.log('logout method called in AppComponent');
    this.authentService.logout();
  }
}
