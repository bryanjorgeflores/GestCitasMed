import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Doctor } from "src/interfaces/models/doctor.model";
import { URL } from "../personalized/config/variables.config"
import { Sucursal } from "src/interfaces/models/sucursal.model";
import { Paciente } from "src/interfaces/models/paciente.model";
import { Citas } from "src/interfaces/models/citas.model";

@Injectable()

export class GetDataService {
  constructor(
    public http: HttpClient
  ) {
  }
  getSucursales(): Observable<Array<Sucursal>> {
    return this.http.get<Array<Sucursal>>(`${URL}/sucursales`);
  }
  getDoctoresBySucursal(idSucursal: string): Observable<Array<Doctor>> {
    return this.http.get<Array<Doctor>>(`${URL}/pacientes/${idSucursal}`);
  }
  getDoctor(dni: string): Observable<Doctor> {
    return this.http.get<Doctor>(`${URL}/doctor/${dni}`);
  }
  getPacientesBySucursal(idSucursal: string): Observable<Array<Paciente>> {
    return this.http.get<Array<Paciente>>(`${URL}/pacientes/${idSucursal}`);
  }

  getPacientesBySucursalAndType(idSucursal: string, tipo: string): Observable<Array<Paciente>> {
    return this.http.get<Array<Paciente>>(`${URL}/pacientes/${idSucursal}/${tipo}`);
  }
  getPaciente(id: string): Observable<Paciente> {
    return this.http.get<Paciente>(`${URL}/paciente/${id}`);
  }
  getPacienteByDNI(dni: string): Observable<Paciente> {
    return this.http.get<Paciente>(`${URL}/paciente/dni/${dni}`);
  }
  getCitas(id: string): Observable<Array<Object>> {
    return this.http.get<Array<Object>>(`${URL}/citas/${id}`);
  }
  getCitasByPaciente(idPaciente: string): Observable<Array<Object>> {
    return this.http.get<Array<Object>>(`${URL}/paciente/citas/${idPaciente}`);
  }
  getCita(id: string, index: number): Observable<Object>{
    return this.http.get<Object>(`${URL}/cita/${id}/${index}`);
  }
  getDNI(dni: string): Observable<Object>{
    return this.http.get<Object>(`${URL}/dni/${dni}`);
  }

}









