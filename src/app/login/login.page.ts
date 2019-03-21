import { Component, OnInit } from '@angular/core';
import { AlertPersonalized } from 'src/personalized/alert.personalized';
import { Router } from '@angular/router';
import { FilterData } from 'src/personalized/filter.data.personalized';
import { GetDataService } from 'src/services/getdata.service';
import { Sucursal } from 'src/interfaces/models/sucursal.model';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  passwordDoctor: string = '';
  doctor: any = {};
  dniDoctor: string = '';

  constructor(
    private alertPersonalized: AlertPersonalized,
    public router: Router,
    private getDataService: GetDataService,
    public menuCtrl: MenuController
  ) { 
    
    
  }

  ngOnInit() {
  }

  ingresar() {
    this.getDataService.getDoctor(this.dniDoctor).subscribe(doctor => {
      console.log(doctor);
      if (doctor && this.passwordDoctor == doctor.password) {
        this.doctor = doctor;
        localStorage.setItem('doctor', JSON.stringify(this.doctor));
        localStorage.setItem('iddoctor', this.doctor._id)
        localStorage.setItem('idsucursal', this.doctor.sucursal);
          if (doctor.password == doctor.dni) {
            this.router.navigate(['/datos']);
          } else {
            this.router.navigate(['/list']);
          }
      } else {
        this.alertPersonalized.toastDegradable(
          'Datos mal Ingresados, Intente de Nuevo por favor',
          2000
        )
      }
    }, err => {
      console.log(err);
    });

  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
   }
  
}
