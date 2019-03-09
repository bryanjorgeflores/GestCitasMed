import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from 'src/services/getdata.service';
import { Cita } from 'src/interfaces/models/cita.model';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.page.html',
  styleUrls: ['./solicitud.page.scss'],
})
export class SolicitudPage implements OnInit {
  idCita: string = '';
  cita: Cita = {
    numero: 0,
    tratamiento: '',
    descripcion: '',
    estado: false,
    fechaProgramada: 0,
    fechaTratada: 0,
    doctor: '',
    sucursal: ''
  };
  urlData: string = '';
  constructor(
    public activatedRoute: ActivatedRoute,
    private getDataService: GetDataService
  ) { }

  ngOnInit() {
    this.idCita = this.activatedRoute.snapshot.paramMap.get('cita');
    this.getDataService.getCita(this.idCita).subscribe((cita: any) => {
      this.cita.numero = cita.numero;
      this.cita.tratamiento = cita.tratamiento;
      this.cita.descripcion = cita.descripcion;
      this.cita.estado = cita.estado;
      this.cita.fechaProgramada = cita.fechaProgramada;
      this.cita.fechaTratada = cita.fechaTratada;
      this.cita.doctor = cita.doctor;
      this.cita.sucursal = cita.sucursal;
    });
  }

}
