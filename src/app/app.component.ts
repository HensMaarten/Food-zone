import { Component } from '@angular/core';
import {AuthService} from './services/auth.service';
import {ConnectionService} from './services/connection.service';
import {Share} from '@capacitor/share';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  // the share plugin doesn't work on all browsers so if the user is using an incompatible browser the share button will
  // be hidden
  showShareButton: boolean;
  constructor(public auth: AuthService, public connectionService: ConnectionService) {
    this.showShareButton = !navigator.userAgent.toString().toLowerCase().includes('firefox');
  }

  async share(){
    await Share.share({
      title: 'Food Zone',
      text: 'Check out the progressive web app',
      url: 'https://cook-fusion.web.app/'
    });
  }
}
