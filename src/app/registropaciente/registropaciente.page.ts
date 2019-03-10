import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registropaciente',
  templateUrl: './registropaciente.page.html',
  styleUrls: ['./registropaciente.page.scss'],
})
export class RegistropacientePage implements OnInit {
  nombrePaciente: string = '';
  celularPaciente: string = '';
  tipoPaciente: string = '';
  fechaHoy: number = 130;
  constructor(
    private alertCtrl: AlertController,
  ) { }

  ngOnInit() {
    this.tipoPaciente = localStorage.getItem('tipopaciente');
  }
  async abrirDiasCita() {
    const alert = await this.alertCtrl.create({
        header: 'Dias de las Citas',
        inputs: [
          {
            name: 'name1',
            type: 'text',
            value: `${this.fechaHoy + 30}`,
            placeholder: 'Cita 1'
          },
          {
            name: 'name2',
            type: 'number',
            id: 'name2-id',
            value: `${this.fechaHoy + 60}`,
            placeholder: 'Cita 2'
          },

          // input date with min & max
          {
            name: 'name4',
            type: 'date',
            min: '2019-02-01',
            max: '2019-04-12'
          },
          // input date without min nor max
          {
            name: 'name5',
            type: 'date'
          },
          {
            name: 'name6',
            type: 'number',
            min: -5,
            max: 10
          },
          {
            name: 'name7',
            type: 'number'
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }, {
            text: 'Continue',
            handler: () => {
              console.log('Confirm Ok');
            }
          }
        ]
      });
  
      await alert.present();
    }

}
