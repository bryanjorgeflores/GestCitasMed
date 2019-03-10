import { Component } from '@angular/core';
import { FilterData } from 'src/personalized/filter.data.personalized';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertPersonalized } from 'src/personalized/alert.personalized';
import { GetDataService } from 'src/services/getdata.service';
import { Paciente } from 'src/interfaces/models/paciente.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  idSucursal: string = '';
  pacientes: Array<Paciente>;
  tipoPaciente: string = '';

  constructor(
    private alertPersonalized: AlertPersonalized,
    private getDataService: GetDataService
  ) {  
    // this.pacientes = this.filterPacientes.getPacientesEsperaOrden();
  }
  
  // irARegistroPaciente() {
  //   this.router.navigate(['/registropaciente']);
  // }
  ngOnInit() {
    this.idSucursal = localStorage.getItem('idsucursal');
    this.tipoPaciente = localStorage.getItem('tipopaciente');

    this.getDataService.getPacientesBySucursalAndType(this.idSucursal, this.tipoPaciente).subscribe((pacientes: Array<Paciente>) => {
      this.pacientes = pacientes;
    });
  }
  llamarPaciente(paciente: any) {
    this.alertPersonalized.alertAcept(
      'Llamando', 
      `Paciente: ${paciente.nombre}`, 
      `Numero de celular: ${paciente.telefono}`, 
      ['Continuar']
    );
  }

  // getTodoPacientes() {
  //   this.pacientes = this.filterPacientes.getAllPacientes();
  // }
  // getRetrasoPacientes() {
  //   this.pacientes = this.filterPacientes.getPacientesRetrasoOrden();
  // }
  // getEsperaPacientes() {
  //   this.pacientes = this.filterPacientes.getPacientesEsperaOrden();
  // }
}
