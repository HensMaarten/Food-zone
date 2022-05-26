import {Injectable} from '@angular/core';
import { LoadingController } from '@ionic/angular';
import {ConnectionService} from './connection.service';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
   constructor(public loadingController: LoadingController, public connectionService: ConnectionService) {
   }

  async createLoader() {
    this.loadingController.create({
    }).then((response) => {
        response.present();
    });
  }

  dismissLoader() {
    this.loadingController.dismiss().then();
  }
}
