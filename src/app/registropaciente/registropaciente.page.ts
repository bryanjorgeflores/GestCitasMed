import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { GetDataService } from 'src/services/getdata.service';
import { Paciente } from 'src/interfaces/models/paciente.model';
import { AlertPersonalized } from 'src/personalized/alert.personalized';
import { PostDataService } from 'src/services/postdata.service';

@Component({
  selector: 'app-registropaciente',
  templateUrl: './registropaciente.page.html',
  styleUrls: ['./registropaciente.page.scss'],
})
export class RegistropacientePage implements OnInit {
  nombresPaciente: string = '';
  dniPaciente: string = '';
  telefonoPaciente: string = '';
  tipoPaciente: string = '';
  fechaHoy: number = 130;
  paciente: Paciente = {
    dni: '',
    nombres: '',
    edad: 0,
    telefono: '',
    tipo: localStorage.getItem('tipopaciente'),
    fecharegistro: new Date(Date.now()),
    sucursal: localStorage.getItem('idsucursal'),
    ultimodoctor: localStorage.getItem('iddoctor'),
    citaproxima: 0,
    citas: ''
  }
  constructor(
    public alertCtrl: AlertController,
    private alertPersonalized: AlertPersonalized,
    private getDataService: GetDataService,
    private postDataService: PostDataService,
    public router: Router
  ) { }

  ngOnInit() {
    this.tipoPaciente = localStorage.getItem('tipopaciente');
  }

  getPaciente() {
    this.getDataService.getPacienteByDNI(this.paciente.dni).subscribe((paciente: Paciente) => { 
      if (paciente) {
        this.alertPersonalized.toastDegradable('Paciente Encontrado, Redireccionando a las Sesiones de Cita', 4);
        this.router.navigate(['/chequeo', paciente.citas]);
      }
      this.getDataService.getDNI(this.paciente.dni).subscribe((data: any) => {
        this.paciente.nombres = data.nombres;
      })
    })
  }

  registrarPaciente() {
    this.postDataService.postPaciente(this.paciente).subscribe((data: any) => {
        this.router.navigate(['/chequeo', data])
      })
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
