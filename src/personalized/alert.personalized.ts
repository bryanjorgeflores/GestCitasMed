import { Injectable } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Injectable()

export class AlertPersonalized {
  constructor(
    private alertCtrl: AlertController
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
}