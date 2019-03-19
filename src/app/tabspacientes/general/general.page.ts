import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/interfaces/models/anteriores/paciente.model';
import { AlertPersonalized } from 'src/personalized/alert.personalized';
import { GetDataService } from 'src/services/getdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general',
  templateUrl: './general.page.html',
  styleUrls: ['./general.page.scss'],
})
export class GeneralPage implements OnInit {
  idSucursal: string = '';
  pacientes: Array<any>;
  tipoPaciente: string = '';
  constructor(
    private alertPersonalized: AlertPersonalized,
    private getDataService: GetDataService,
    public router: Router
  ) { }

  ngOnInit() {
    this.idSucursal = localStorage.getItem('idsucursal');
    this.tipoPaciente = localStorage.getItem('tipopaciente');

    this.getDataService.getPacientesBySucursalAndType(this.idSucursal, this.tipoPaciente).subscribe((pacientes) => {
      this.pacientes = pacientes;
    });
  }

  goToCitas(idCita: string) {
    localStorage.setItem('idcita', idCita);
    this.router.navigateByUrl('/tabscitas/proximo');
  }

  llamarPaciente(paciente: any) {
    this.alertPersonalized.alertAcept(
      'Llamando', 
      `Paciente: ${paciente.nombre}`, 
      `Numero de celular: ${paciente.telefono}`, 
      ['Continuar']
    );
  }
}
