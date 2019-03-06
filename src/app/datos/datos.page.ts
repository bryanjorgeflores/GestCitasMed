import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterData } from 'src/personalized/filter.data.personalized';
import { AlertPersonalized } from 'src/personalized/alert.personalized';
import { requisitosPassword } from 'src/personalized/config/variables.config';
import { PutDataService } from 'src/services/putdata.service';
import { GetDataService } from 'src/services/getdata.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {
  doctor: any = {};
  dniDoctor: string = '';
  passwordRep: string = '';
  idDoctor: string = '';
  requisitos: Array<any>;
  urlData: string = '';
  cambiosDoctor: any = {
    nombres: '',
    telefono: '123',
    password: '456'
  }
  

  constructor(
    public activatedRouter: ActivatedRoute,
    public router: Router,
    private putDataService: PutDataService,
    private getDataService: GetDataService,
    private filterData:FilterData,
    private alertPersonalized: AlertPersonalized,
  ) { 
    // this.doctor = this.filterData.getDoctorByIndex(Number(this.urlData.idSucursal), this.urlData.idDoctor);
  }

  ngOnInit() {
    this.urlData = this.activatedRouter.snapshot.paramMap.get('datos');
    this.idDoctor = this.urlData.split('-')[0];
    this.dniDoctor = this.urlData.split('-')[1];
    this.getDataService.getDNI(this.dniDoctor).subscribe((data: any) => {
      this.cambiosDoctor.nombres = data.nombres;
    })
    this.requisitos = requisitosPassword(this.cambiosDoctor.password, this.passwordRep);
  }

  aplicarCambios() {
    this.requisitos = requisitosPassword(this.cambiosDoctor.password, this.passwordRep);
    let passwordRev = this.requisitos.findIndex(condicion => {
      return condicion.noCumple === true;
    });
    if (passwordRev === -1) {
        this.putDataService.putDoctor(this.cambiosDoctor, this.idDoctor).subscribe(data => {
            this.router.navigate(['/home', this.urlData]);
            this.alertPersonalized.toastDegradable(
            'Cambios Realizados, Bienvenido al Sistema',
            3000
            );
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
