import { Injectable } from "@angular/core";
import { UsersService } from "src/services/user.service";

@Injectable() 

export class FilterPacientes {
  users: any;
  fechaHoy: number = 130;
  pacientesEspera: any;
  constructor(
    private usersService: UsersService
  ) { 
    this.users = this.usersService.getUsers();  this.pacientesEspera = this.users.pacientes.filter((paciente: any) => {
    let fechaCita = paciente.citas.findIndex((cita: any) => {
      paciente.citaUltima = cita.fecha;
      return cita.fecha >= this.fechaHoy;
    });
    return fechaCita > -1;
    });
  }
  getPacienteEspera() {
    return this.pacientesEspera;
  }
  getPacienteEsperaOrder() {
    this.pacientesEspera.sort((a: any, b: any) => {
      return a.citaUltima - b.citaUltima;
    });
    return this.pacientesEspera;
  }
  getPaciente(id) {
    let pacienteSeleccionado = this.users.pacientes.find((paciente) => {
      return paciente.id == id;
    });
    return pacienteSeleccionado;
  }
}
// Cuidado con el async porque no genera los filtros adecuados.
