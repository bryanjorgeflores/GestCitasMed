import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetDataService } from 'src/services/getdata.service';
import { Citas } from 'src/interfaces/models/citas.model';
import { PutDataService } from 'src/services/putdata.service';
import { Platform } from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.page.html',
  styleUrls: ['./solicitud.page.scss'],
})
export class SolicitudPage implements OnInit {
  idCitas: string = '';
  indexSesion: number = 0;
  sesion: any = {
    numero: 0,
    tratamiento: '',
    descripcion: '',
    estado: false,
    fechaprogramada: 0,
    fechatratada: 0,
    doctor: '',
    sucursal: ''
  };

  constructor(
    public activatedRoute: ActivatedRoute,
    private getDataService: GetDataService,
    private putDataService: PutDataService,
    public router: Router,
    private screenOrientation: ScreenOrientation,
      public platform:Platform
  ) { }

  ngOnInit() {
    this.indexSesion = Number(localStorage.getItem('indexsesion'));
    this.idCitas = localStorage.getItem('idcitas')
    this.getDataService.getCita(this.idCitas, this.indexSesion).subscribe((data: any) => {
      this.sesion.numero = data.numero;
      this.sesion.tratamiento = data.tratamiento;
      this.sesion.descripcion = data.descripcion;
      this.sesion.estado = data.estado;
      this.sesion.fechaprogramada = data.fechaprogramada;
      this.sesion.fechatratada = data.fechatratada;
      this.sesion.doctor = data.doctor;
      this.sesion.sucursal = data.sucursal;
    })

      this.platform.ready().then(() => {
        this.screenOrientation.unlock();
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    });
    console.log("Se cargo");
  }
  ionViewDidEnter() {
    this.platform.ready().then(() => {
      this.screenOrientation.unlock();
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  });
  console.log("Se recargo");
}

  actualizarSesion() {
    this.putDataService.putCita(this.idCitas, this.indexSesion, this.sesion).subscribe((data: any) => {
      this.router.navigate(['/chequeo', localStorage.getItem('idcitas')]);
    });
  }
}
