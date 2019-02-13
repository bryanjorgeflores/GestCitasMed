import { Component } from '@angular/core';
import { FilterPacientes } from 'src/personalized/filter.pacientes.personalized';
import { Router } from '@angular/router';
import { AlertPersonalized } from 'src/personalized/alert.personalized';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pacientes: any;
  filtroPaciente: string = 'Espera';
  constructor(
    private alertPersonalized: AlertPersonalized,
    private filterPacientes: FilterPacientes,
    private router: Router
  ) {
    this.pacientes = this.filterPacientes.getPacientesEsperaOrden();
  }
  irAChequeo(paciente: any) {
    this.router.navigate(['/chequeo', paciente]);
  }
  // irARegistroPaciente() {
  //   this.router.navigate(['/registropaciente']);
  // }

  llamarPaciente(paciente: any) {
    this.alertPersonalized.alertAcept(
      'Llamando', 
      `Paciente: ${paciente.nombre}`, 
      `Numero de celular: ${paciente.celular}`, 
      ['Continuar']
    );
  }

  getTodoPacientes() {
    this.pacientes = this.filterPacientes.getAllPacientes();
  }
  getRetrasoPacientes() {
    this.pacientes = this.filterPacientes.getPacientesRetrasoOrden();
  }
  getEsperaPacientes() {
    this.pacientes = this.filterPacientes.getPacientesEsperaOrden();
  }
}
