import { Injectable } from "@angular/core";
import { UsersService } from "src/services/user.service";

@Injectable() 

export class FilterPacientes {
  users: any;
  fechaHoy: number = 130;
  pacientesEspera: any;
  pacientesRetraso: any;
  constructor(
    private usersService: UsersService
  ) { 
    this.users = this.usersService.getUsers();  
    this.pacientesEspera = this.users.pacientes.filter((paciente: any) => {
      let fechaCita = paciente.citas.findIndex((cita: any) => {
        paciente.citaUltima = cita.fecha;
        return cita.fecha >= this.fechaHoy;
      });
      return fechaCita > -1;
    });
    this.pacientesRetraso = this.users.pacientes.filter((paciente: any) => {
      let fechaCita = paciente.citas.findIndex((cita: any) => {
        paciente.citaUltima = cita.fecha;
        return cita.fecha < this.fechaHoy;
      });
      return fechaCita > -1;
    });
  }
  getPacientesEspera() {
    return this.pacientesEspera;
  }
  getPacientesRetraso() {
    return this.pacientesEspera;
  }
  getPacientesEsperaOrden() {
    this.pacientesEspera.sort((a: any, b: any) => a.citaUltima - b.citaUltima);
    return this.pacientesEspera;
  }
  getPacientesRetrasoOrden() {
    this.pacientesRetraso.sort((a:any, b: any) => a.citaUltima - b.citaUltima);
    return this.pacientesRetraso;
  }
  getPaciente(id: any) {
    let pacienteSeleccionado = this.users.pacientes.find((paciente: any) => paciente.id == id);
    return pacienteSeleccionado;
  }
  getAllPacientes() {
    return this.users.pacientes;
  }
}
// Cuidado con el async porque no genera los filtros adecuados.Esto es debido a que torna la funciona de forma asincrona cuando deberia ser obligatorio que pase primero por el.
