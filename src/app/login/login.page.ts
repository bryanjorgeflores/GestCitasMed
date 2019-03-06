import { Component, OnInit } from '@angular/core';
import { AlertPersonalized } from 'src/personalized/alert.personalized';
import { Router } from '@angular/router';
import { FilterData } from 'src/personalized/filter.data.personalized';
import { GetDataService } from 'src/services/getdata.service';
import { Sucursal } from 'src/interfaces/models/sucursal.model';


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
  sucursales: Array<Sucursal>;
  dniDoctor: string = '';

  constructor(
    private alertPersonalized: AlertPersonalized,
    public router: Router,
    private getDataService: GetDataService,
    private filterData: FilterData
    
  ) { 
    
    
  }

  ngOnInit() {
    this.getDataService.getSucursales().subscribe((data) => {
      this.sucursales = data;
    }, err => {
      console.log(err);
    });
  }

  ingresar() {
    // this.sucursal = this.filterData.getSucursalByIndex(Number(this.idSucursal));

    // this.doctor = this.sucursal.doctores.find((doctor: any, index: number) => {
    //   this.indexDoctor = index;
    //   return doctor.id === this.idDoctor;
    // });
    this.getDataService.getDoctor(this.dniDoctor).subscribe(doctor => {
      console.log(doctor);
      if (doctor && this.passwordDoctor == doctor.password) {
        this.urlData = `${doctor._id}-${this.dniDoctor}-${doctor.sucursal}`;
        localStorage.setItem('urldata', this.urlData);
        console.log(doctor);
          if (doctor.password == doctor.dni) {
            this.router.navigate(['/datos', this.urlData]);
              console.log(this.urlData);
          } else {
            this.router.navigate(['/list', this.urlData]);
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
  
}
