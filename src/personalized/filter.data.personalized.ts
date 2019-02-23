import { Injectable } from "@angular/core";
import { DataService } from "src/services/data.service";

@Injectable() 

export class FilterData {
  sucursales: any[];
  doctoresTodo: any[];
  pacientesTodo: any[];
  constructor(
    private dataService: DataService
  ) {
    this.sucursales = this.dataService.getAll();

  }

  getSucursales() {
    return this.sucursales;
  }
  getSucursal(id: number) {
    let sucursal = this.sucursales.find((sucursal: any) => {
      return sucursal.id === id;
    });
    return sucursal;
  }
  getPaciente(indexSucursal: number, idPaciente: number) {
    let paciente = this.sucursales[indexSucursal].pacientes.find((paciente: any) => {
      return paciente.id === idPaciente;
    });
    return paciente;
  }
  getCita(indexSucursal: number, indexPaciente: number, idCita: number) {
    let cita = this.sucursales[indexSucursal].pacientes[indexPaciente].citas.find((cita: any) => {
      return cita.id === idCita;
    });
    return cita;
  }

  getDoctoresTodo() {
    return this.doctoresTodo;
  }

  getPacientesTodo() {
    return this.pacientesTodo;
  }

  getSucursalByIndex(id: number) {
    return this.sucursales[id];
  }
  getDoctorByIndex(indexSucursal: number, indexDoctor: number) {
    return this.sucursales[indexSucursal].doctores[indexDoctor];
  }
  getPacienteByIndex(indexSucursal: number, indexPaciente: number) {
    return this.sucursales[indexSucursal].pacientes[indexPaciente];
  }
  getCitaByIndex(indexSucursal: number, indexPaciente: number, indexCita: number) {
    return this.sucursales[indexSucursal].pacientes[indexPaciente].citas[indexCita];
  }

}
// Cuidado con el async porque no genera los filtros adecuados.Esto es debido a que torna la funciona de forma asincrona cuando deberia ser obligatorio que pase primero por el.

  // users: any;
  // fechaHoy: number = 130;
  // pacientesEspera: any;
  // pacientesRetraso: any;
  // constructor(
  //   private dataService: DataService
  // ) { 
  //   this.users = this.usersService.getUsers();  
  //   this.pacientesEspera = this.users.pacientes.filter((paciente: any) => {
  //     let fechaCita = paciente.citas.findIndex((cita: any) => {
  //       paciente.citaUltima = cita.fecha;
  //       return cita.fecha >= this.fechaHoy;
  //     });
  //     return fechaCita > -1;
  //   });
  //   this.pacientesRetraso = this.users.pacientes.filter((paciente: any) => {
  //     let fechaCita = paciente.citas.findIndex((cita: any) => {
  //       paciente.citaUltima = cita.fecha;
  //       return cita.fecha < this.fechaHoy;
  //     });
  //     return fechaCita > -1;
  //   });
  // }
  // getPacientesEspera() {
  //   return this.pacientesEspera;
  // }
  // getPacientesRetraso() {
  //   return this.pacientesEspera;
  // }
  // getPacientesEsperaOrden() {
  //   this.pacientesEspera.sort((a: any, b: any) => a.citaUltima - b.citaUltima);
  //   return this.pacientesEspera;
  // }
  // getPacientesRetrasoOrden() {
  //   this.pacientesRetraso.sort((a:any, b: any) => a.citaUltima - b.citaUltima);
  //   return this.pacientesRetraso;
  // }
  // getPaciente(id: any) {
  //   let pacienteSeleccionado = this.users.pacientes.find((paciente: any) => paciente.id == id);
  //   return pacienteSeleccionado;
  // }
  // getAllPacientes() {
  //   return this.users.pacientes;
  // }