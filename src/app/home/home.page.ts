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
  constructor(
    private alertPersonalized: AlertPersonalized,
    private filterPacientes: FilterPacientes,
    private router: Router
  ) {
    this.pacientes = this.filterPacientes.getPacienteEsperaOrder();
  }
  irAChequeo(paciente) {
    this.router.navigate(['/chequeo', paciente]);
  }
  llamarPaciente(paciente) {
    this.alertPersonalized.alertAcept('Llamando', `Paciente: ${paciente.nombre}`, `Numero de celular: ${paciente.celular}`, ['Continuar'])
  }
}
