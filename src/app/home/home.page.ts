import { Component } from '@angular/core';
import { FilterData } from 'src/personalized/filter.data.personalized';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertPersonalized } from 'src/personalized/alert.personalized';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  urlData: string = '';

  pacientes: any;
  filtroPaciente: string = 'Espera';

  constructor(
    private alertPersonalized: AlertPersonalized,
    private filterPacientes: FilterData,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.urlData = this.activatedRoute.snapshot.paramMap.get('datos');
    console.log(this.urlData);
    // this.pacientes = this.filterPacientes.getPacientesEsperaOrden();
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
