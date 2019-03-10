import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from 'src/services/getdata.service';
import { Citas } from 'src/interfaces/models/citas.model';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.page.html',
  styleUrls: ['./solicitud.page.scss'],
})
export class SolicitudPage implements OnInit {
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
    private getDataService: GetDataService
  ) { }

  ngOnInit() {
    this.indexSesion = Number(localStorage.getItem('indexsesion'));
    let idCitas = localStorage.getItem('idcitas')
    this.getDataService.getCita(idCitas, this.indexSesion).subscribe((data: any) => {
      this.sesion.numero = data.numero;
      this.sesion.tratamiento = data.tratamiento;
      this.sesion.descripcion = data.descripcion;
      this.sesion.estado = data.estado;
      this.sesion.fechaprogramada = data.fechaprogramada;
      this.sesion.fechatratada = data.fechatratada;
      this.sesion.doctor = data.doctor;
      this.sesion.sucursal = data.sucursal;
    })
  }
}
