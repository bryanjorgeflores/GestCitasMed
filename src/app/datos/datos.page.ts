import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterData } from 'src/personalized/filter.data.personalized';
import { AlertPersonalized } from 'src/personalized/alert.personalized';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {
  doctor: any = {};
  dniDoctor: string = '';
  nombresDoctor: string = '';
  apellidosDoctor: string = '';
  passwordDoctor: string = '';
  passwordRepDoctor: string = '';
  telefonoDoctor: string = '';
  apellidoDoctor: string = '';
  passwordRev: number = 0;
  requisitos: any [] = [
    { mensaje: 'Contraseña no Vacía', noCumple: this.passwordDoctor == '' },
    { mensaje: 'Longitud entre 6 y 20', noCumple: this.passwordDoctor.length < 6 || this.passwordDoctor.length >= 20 },
    { mensaje: 'Por lo menos un caracter especial o símbolo', noCumple: this.passwordDoctor.search(/[\W_]+/) == -1 },
    { mensaje: 'Por lo menos un caracter Mayúscula', noCumple: this.passwordDoctor.search(/[A-Z]+/) == -1 },
    { mensaje: 'Por lo menos un caracter minúscula', noCumple: this.passwordDoctor.search(/[a-z]+/) == -1 },
    { mensaje: 'Por lo menos un caracter número', noCumple: this.passwordDoctor.search(/[0-9]+/) == -1 },
    { mensaje: 'Ambas contraseña coinciden', noCumple: this.passwordDoctor != this.passwordRepDoctor },
  ];
  urlData: string = '';

  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private filterData:FilterData,
    private alertPersonalized: AlertPersonalized,
  ) { 
    this.urlData = this.activatedRouter.snapshot.paramMap.get('datos');
    console.log(this.urlData, 'hola');
    
    // this.doctor = this.filterData.getDoctorByIndex(Number(this.urlData.idSucursal), this.urlData.idDoctor);
  }

  ngOnInit() {
    
  }

  aplicarCambios() {
    this.requisitos = [
      { mensaje: 'Contraseña no Vacía', noCumple: this.passwordDoctor == '' },
      { mensaje: 'Longitud entre 6 y 20', noCumple: this.passwordDoctor.length < 6 || this.passwordDoctor.length >= 20 },
      { mensaje: 'Por lo menos un caracter especial o símbolo', noCumple: this.passwordDoctor.search(/[\W_]+/) == -1 },
      { mensaje: 'Por lo menos un caracter Mayúscula', noCumple: this.passwordDoctor.search(/[A-Z]+/) == -1 },
      { mensaje: 'Por lo menos un caracter minúscula', noCumple: this.passwordDoctor.search(/[a-z]+/) == -1 },
      { mensaje: 'Por lo menos un caracter número', noCumple: this.passwordDoctor.search(/[0-9]+/) == -1 },
      { mensaje: 'Ambas contraseña coinciden', noCumple: this.passwordDoctor != this.passwordRepDoctor },
    ];
    this.passwordRev = this.requisitos.findIndex(condicion => {
      return condicion.noCumple === true;
    });
    if (this.passwordRev === -1) {
        this.router.navigate(['/home', this.urlData]);
        this.alertPersonalized.toastDegradable(
        'Cambios Realizados Bienvenido al Sistema',
        3000
        );
        this.passwordRev = 0;
    } else {
      this.alertPersonalized.toastDegradable(
        'Verificar la Contraseña',
        2000
      )
    }

  }

}
