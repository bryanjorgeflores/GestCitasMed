import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterData } from 'src/personalized/filter.data.personalized';
import { AlertPersonalized } from 'src/personalized/alert.personalized';
import { requisitosPassword } from 'src/personalized/config/variables.config';
import { PutDataService } from 'src/services/putdata.service';
import { GetDataService } from 'src/services/getdata.service';
import { Doctor } from 'src/interfaces/models/anteriores/doctor.model';
import { Sucursal } from 'src/interfaces/models/sucursal.model';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {
  doctor: Doctor = {
    _id: '',
    dni: '',
    password: '',
    nombres: '',
    pacientes: [''],
    telefono: '',
    sucursal: ''
  };
  sucursales: Array<Sucursal>;
  passwordRep: string = '';
  requisitos: Array<any>;

  cambiosDoctor: any = {
    nombres: '',
    telefono: '',
    password: '',
    sucursal: ''
  };  

  constructor(
    public activatedRouter: ActivatedRoute,
    public router: Router,
    private putDataService: PutDataService,
    private getDataService: GetDataService,
    private alertPersonalized: AlertPersonalized,
  ) { 
    // this.doctor = this.filterData.getDoctorByIndex(Number(this.urlData.idSucursal), this.urlData.idDoctor);
  }

  ngOnInit() {
    this.getDataService.getSucursales().subscribe((data) => {
      this.sucursales = data;
    }, err => {
      console.log(err);
    });
    this.doctor = JSON.parse(localStorage.getItem('doctor'));
    this.getDataService.getDNI(this.doctor.dni).subscribe((data: any) => {
      this.cambiosDoctor.nombres = data.nombres;
    });
    this.requisitos = requisitosPassword(this.cambiosDoctor.password, this.passwordRep);
    this.cambiosDoctor.telefono = this.doctor.telefono;
  }

  aplicarCambios() {
    this.requisitos = requisitosPassword(this.cambiosDoctor.password, this.passwordRep);
    let passwordRev = this.requisitos.findIndex(condicion => {
      return condicion.noCumple === true;
    });
    if (passwordRev === -1) {
      this.putDataService.putDoctor(this.cambiosDoctor, this.doctor._id).subscribe(() => {
        this.alertPersonalized.toastDegradable(
          'Cambios Realizados, Bienvenido alSistema',
          3000
        );
        this.router.navigate(['/list']);
      }, err => {
        console.log(err);
        this.alertPersonalized.toastDegradable(
          'Error en el Cambio',
          2000
        )
      })
        
    } else {
      this.alertPersonalized.toastDegradable(
        'Verificar la Contraseña',
        2000
      )
    }

  }

}
