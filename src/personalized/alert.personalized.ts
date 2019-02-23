import { Injectable } from "@angular/core";
import { AlertController, ToastController } from "@ionic/angular";

@Injectable()

export class AlertPersonalized {
  constructor(
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
    ) { }

  async alertAcept(
    header: string,
    subHeader: string,
    message: string,
    buttons: [any]
  ) {
    const acept = await this.alertCtrl.create({
      header,
      subHeader,
      message,
      buttons
    });
    return await acept.present();
  }

  async toastDegradable(
    message: string,
    duration: number
  ) {
    const toastDegradable = await this.toastCtrl.create({
      message,
      duration
    });
    toastDegradable.present();
  }
}