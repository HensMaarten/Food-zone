import {Injectable} from '@angular/core';
import { Network } from '@capacitor/network';
import { AlertController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  alert: any;
  isConnected;
  constructor(public alertController: AlertController) {
    this.initialize().then();
    Network.addListener('networkStatusChange', () => {
      this.getStatus().then(
        () => {
          this.handleStatus().then();
        }
      );
    });
  };
  async initialize(){
    this.getStatus().then(
      () => {
        this.handleStatus().then();
      }
    );
  }
  async getStatus(){
     this.isConnected = await Network.getStatus();
     //await this.handleStatus();
  }
  async handleStatus(){
    if(this.isConnected.connected){
      await this.dismissAlert();
    }
    if(!this.isConnected.connected){
     await this.presentAlert();
    }
  }
  async presentAlert() {
    this.alert = await this.alertController.create({
      header: 'Error',
      message: 'This app can only be used with an active internet connection. Please reconnect to the internet',
      backdropDismiss: false,
    });
    await this.alert.present();
  }
  async dismissAlert(){
    if(this.alert != null){
      await this.alert.dismiss();
    }
  }
}
