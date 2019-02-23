import { Component, OnInit } from '@angular/core';
import { AlertPersonalized } from 'src/personalized/alert.personalized';
import { Router } from '@angular/router';
import { FilterData } from 'src/personalized/filter.data.personalized';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  idDoctor: string = '';
  passwordDoctor: string = '';
  indexDoctor: number = 0;
  idSucursal: string = '';
  doctor: any = {};
  sucursal: any = {};
  urlData: string = '';
  alertaLogin: string = '';

  constructor(
    private alertPersonalized: AlertPersonalized,
    private router: Router,
    private filterData: FilterData,
    private navCtrl: NavController
  ) { 
    
    
  }

  ngOnInit() {
  }

  ingresar() {
    this.sucursal = this.filterData.getSucursalByIndex(Number(this.idSucursal));

    this.doctor = this.sucursal.doctores.find((doctor: any, index: number) => {
      this.indexDoctor = index;
      return doctor.id === this.idDoctor;
    });
    this.urlData = `${this.idSucursal}-${this.idDoctor}-${this.indexDoctor}`;
    console.log(this.doctor);

    if (this.doctor && this.passwordDoctor === this.doctor.password) {
      if (this.passwordDoctor == this.doctor.id) {
        this.router.navigate(['/datos', this.urlData]);
          console.log(this.urlData);
      } else {
        this.router.navigate(['/home', this.urlData]);
      }
    } else {
      this.alertPersonalized.toastDegradable(
        'Datos mal Ingresados, Intente de Nuevo por favor',
        2000
      )
    }
    
  }
  
}
