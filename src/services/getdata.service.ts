import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Doctor } from "src/interfaces/models/doctor.model";
import { URL } from "../personalized/config/variables.config"
import { Sucursal } from "src/interfaces/models/sucursal.model";
import { Paciente } from "src/interfaces/models/paciente.model";
import { Cita } from "src/interfaces/models/cita.model";

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

  getPacienteBySucursalAndType(idSucursal: string, tipo: string): Observable<Array<Paciente>> {
    return this.http.get<Array<Paciente>>(`${URL}/pacientes/${idSucursal}/${tipo}`)
  }

  getPaciente(id: string): Observable<Paciente> {
    return this.http.get<Paciente>(`${URL}/paciente/${id}`);
  }

  getCitas(idPaciente: string): Observable<Array<Cita>> {
    return this.http.get<Array<Cita>>(`${URL}/citas/${idPaciente}`);
  }

  getCita(id: string): Observable<Cita> {
    return this.http.get<Cita>(`${URL}/cita/${id}`);
  }

  getDNI(dni: string): Observable<string>{
    return this.http.get<string>(`${URL}/dni/${dni}`);
  }












  // sucursales: any = [
  //   { id:1, 
  //     nombre: 'Sucursal1', 
  //     direccion: 'direccion1', 
  //     encargado: 'encargado sucursal 1', 
  //     doctores: [
  //       { 
  //         id: 'dni1', 
  //         password: 'dni1', 
  //         nombres: 'doctor1', 
  //         edad: 30, 
  //         apellidos: 'apdoctor1', 
  //         telefono: '999999901', 
  //         sucursal: 1 
  //       },
  //       { 
  //         id: 'dni2', 
  //         password: 'dni2', 
  //         nombres: 'doctor2', 
  //         edad: 35, 
  //         apellidos: 'apdoctor2', 
  //         telefono: '999999902', 
  //         sucursal: 1 
  //       }
  //     ],
  //     pacientes: [
  //       { 
  //         id: 'dni11',
  //         nombres: 'paciente11', 
  //         apellidos: 'appaciente11', 
  //         edad: 35, 
  //         telefono: '999999912', 
  //         fecharegistro: 1, 
  //         tipo: 'Gestante', 
  //         sucursal: 1, 
  //         citas: [
  //           {
  //             id: 1,
  //             dosis: 'dosis01', 
  //             descripcion: 'descripcion de la cita realizada por tal doctor 1', 
  //             estado: true, 
  //             fechaprogramada: 14, 
  //             fechaejecutada: 16, 
  //             doctor: 'dni1', 
  //             sucursal: 1 
  //           },
  //           {
  //             id: 2,
  //             dosis: 'dosis02', 
  //             descripcion: 'descripcion de la cita realizada por tal doctor 2', 
  //             estado: true, 
  //             fechaprogramada: 14, 
  //             fechaejecutada: 16, 
  //             doctor: 'dni1', 
  //             sucursal: 1 
  //           },
  //           {
  //             id: 3,
  //             dosis: 'dosis03', 
  //             descripcion: 'descripcion de la cita realizada por tal doctor 3', 
  //             estado: true, 
  //             fechaprogramada: 14, 
  //             fechaejecutada: 16, 
  //             doctor: 'dni2', 
  //             sucursal: 1 
  //           },
  //           {
  //             id: 4,
  //             dosis: 'dosis04', 
  //             descripcion: 'descripcion de la cita realizada por tal doctor 4', 
  //             estado: true, 
  //             fechaprogramada: 14, 
  //             fechaejecutada: 16, 
  //             doctor: 'dni2', 
  //             sucursal: 1 
  //           }
  //         ]
  //       },
  //       { 
  //         id: 'dni13',
  //         nombres: 'paciente13', 
  //         apellidos: 'appaciente13', 
  //         edad: 25, 
  //         telefono: '999999914', 
  //         fecharegistro: 3, 
  //         tipo: 'Gestante', 
  //         sucursal: 1, 
  //         citas: [
  //           {
  //             id: 1,
  //             dosis: 'dosis01', 
  //             descripcion: 'descripcion de la cita realizada por tal doctor 1', 
  //             estado: true, 
  //             fechaprogramada: 14, 
  //             fechaejecutada: 16, 
  //             doctor: 'dni1', 
  //             sucursal: 1 
  //           },
  //           {
  //             id: 2,
  //             dosis: 'dosis02', 
  //             descripcion: 'descripcion de la cita realizada por tal doctor 2', 
  //             estado: true, 
  //             fechaprogramada: 14, 
  //             fechaejecutada: 16, 
  //             doctor: 'dni1', 
  //             sucursal: 1 
  //           },
  //           {
  //             id: 3,
  //             dosis: 'dosis03', 
  //             descripcion: 'descripcion de la cita realizada por tal doctor 3', 
  //             estado: true, 
  //             fechaprogramada: 14, 
  //             fechaejecutada: 16, 
  //             doctor: 'dni2', 
  //             sucursal: 1 
  //           },
  //           {
  //             id: 4,
  //             dosis: 'dosis04', 
  //             descripcion: 'descripcion de la cita realizada por tal doctor 4', 
  //             estado: true, 
  //             fechaprogramada: 14, 
  //             fechaejecutada: 16, 
  //             doctor: 'dni2', 
  //             sucursal: 1 
  //           }
  //         ]
  //       },
  //       { 
  //         id: 'dni16',
  //         nombres: 'paciente16', 
  //         apellidos: 'appaciente16', 
  //         edad: 0, 
  //         telefono: '999999917', 
  //         fecharegistro: 6, 
  //         tipo: 'Vacuna', 
  //         sucursal: 1, 
  //         citas: [
  //           {
  //             id: 1,
  //             dosis: 'dosis01', 
  //             descripcion: 'descripcion de la cita realizada por tal doctor 1', 
  //             estado: true, 
  //             fechaprogramada: 14, 
  //             fechaejecutada: 16, 
  //             doctor: 'dni1', 
  //             sucursal: 1 
  //           },
  //           {
  //             id: 2,
  //             dosis: 'dosis02', 
  //             descripcion: 'descripcion de la cita realizada por tal doctor 2', 
  //             estado: true, 
  //             fechaprogramada: 14, 
  //             fechaejecutada: 16, 
  //             doctor: 'dni1', 
  //             sucursal: 1 
  //           },
  //           {
  //             id: 3,
  //             dosis: 'dosis03', 
  //             descripcion: 'descripcion de la cita realizada por tal doctor 3', 
  //             estado: true, 
  //             fechaprogramada: 14, 
  //             fechaejecutada: 16, 
  //             doctor: 'dni2', 
  //             sucursal: 1 
  //           },
  //           {
  //             id: 4,
  //             dosis: 'dosis04', 
  //             descripcion: 'descripcion de la cita realizada por tal doctor 4', 
  //             estado: true, 
  //             fechaprogramada: 14, 
  //             fechaejecutada: 16, 
  //             doctor: 'dni2', 
  //             sucursal: 1 
  //           },
  //         ]
  //       },
  //       { 
  //         id: 'dni20',
  //         nombres: 'paciente20', 
  //         apellidos: 'appaciente20', 
  //         edad: 25, 
  //         telefono: '999999921', 
  //         fecharegistro: 10, 
  //         tipo: 'Gestante', 
  //         sucursal: 1, 
  //         citas: [
  //           {
  //             id: 1,
  //             dosis: 'dosis01', 
  //             descripcion: 'descripcion de la cita realizada por tal doctor 1', 
  //             estado: true, 
  //             fechaprogramada: 14, 
  //             fechaejecutada: 16, 
  //             doctor: 'dni1', 
  //             sucursal: 1 
  //           },
  //           {
  //             id: 2,
  //             dosis: 'dosis02', 
  //             descripcion: 'descripcion de la cita realizada por tal doctor 2', 
  //             estado: true, 
  //             fechaprogramada: 14, 
  //             fechaejecutada: 16, 
  //             doctor: 'dni1', 
  //             sucursal: 1 
  //           },
  //           {
  //             id: 3,
  //             dosis: 'dosis03', 
  //             descripcion: 'descripcion de la cita realizada por tal doctor 3', 
  //             estado: true, 
  //             fechaprogramada: 14, 
  //             fechaejecutada: 16, 
  //             doctor: 'dni2', 
  //             sucursal: 1 
  //           },
  //           {
  //             id: 4,
  //             dosis: 'dosis04', 
  //             descripcion: 'descripcion de la cita realizada por tal doctor 4', 
  //             estado: true, 
  //             fechaprogramada: 14, 
  //             fechaejecutada: 16, 
  //             doctor: 'dni2', 
  //             sucursal: 1 
  //           },
  //         ]
  //       },
  //       { 
  //         id: 'dni22',
  //         nombres: 'paciente22', 
  //         apellidos: 'appaciente22', 
  //         edad: 32, 
  //         telefono: '999999923', 
  //         fecharegistro: 12, 
  //         tipo: 'Gestante', 
  //         sucursal: 1, 
  //         citas: [
  //           {
  //             id: 1,
  //             dosis: 'dosis01', 
  //             descripcion: 'descripcion de la cita realizada por tal doctor 1', 
  //             estado: true, 
  //             fechaprogramada: 14, 
  //             fechaejecutada: 16, 
  //             doctor: 'dni1', 
  //             sucursal: 1 
  //           },
  //           {
  //             id: 2,
  //             dosis: 'dosis02', 
  //             descripcion: 'descripcion de la cita realizada por tal doctor 2', 
  //             estado: true, 
  //             fechaprogramada: 14, 
  //             fechaejecutada: 16, 
  //             doctor: 'dni1', 
  //             sucursal: 1 
  //           },
  //           {
  //             id: 3,
  //             dosis: 'dosis03', 
  //             descripcion: 'descripcion de la cita realizada por tal doctor 3', 
  //             estado: true, 
  //             fechaprogramada: 14, 
  //             fechaejecutada: 16, 
  //             doctor: 'dni2', 
  //             sucursal: 1 
  //           },
  //           {
  //             id: 4,
  //             dosis: 'dosis04', 
  //             descripcion: 'descripcion de la cita realizada por tal doctor 4', 
  //             estado: true, 
  //             fechaprogramada: 14, 
  //             fechaejecutada: 16, 
  //             doctor: 'dni2', 
  //             sucursal: 1 
  //           },
  //         ]
  //       }
  //     ]
  //   },
  //   { id:2, 
  //     nombre: 'Sucursal2', 
  //     direccion: 'direccion2', 
  //     encargado: 'encargado sucursal 2', 
  //     doctores: [
  //       { 
  //         id: 'dni3', 
  //         password: 'dni3', 
  //         nombres: 'doctor3', 
  //         edad: 29, 
  //         apellidos: 'apdoctor3', 
  //         telefono: '999999901', 
  //         sucursal: 2 
  //       },
  //       { 
  //         id: 'dni4', 
  //         password: 'dni4', 
  //         nombres: 'doctor4', 
  //         edad: 35, 
  //         apellidos: 'apdoctor4', 
  //         telefono: '999999904', 
  //         sucursal: 2 
  //       }
  //     ],
  //     pacientes: [
  //       { 
  //         id: 'dni12',
  //         nombres: 'paciente12', 
  //         apellidos: 'appaciente12', 
  //         edad: 32, 
  //         telefono: '999999913', 
  //         fecharegistro: 2, 
  //         tipo: 'Gestante', 
  //         sucursal: 2, 
  //         citas: [
  //           {
  //             id: 1,
  //             dosis: 'dosis01', 
  //             descripcion: 'descripcion de la cita realizada por tal doctor 1', 
  //             estado: true, 
  //             fechaprogramada: 14, 
  //             fechaejecutada: 16, 
  //             doctor: 'dni1', 
  //             sucursal: 1 
  //           },
  //           {
  //             id: 2,
  //             dosis: 'dosis02', 
  //             descripcion: 'descripcion de la cita realizada por tal doctor 2', 
  //             estado: true, 
  //             fechaprogramada: 14, 
  //             fechaejecutada: 16, 
  //             doctor: 'dni1', 
  //             sucursal: 1 
  //           },
  //           {
  //             id: 3,
  //             dosis: 'dosis03', 
  //             descripcion: 'descripcion de la cita realizada por tal doctor 3', 
  //             estado: true, 
  //             fechaprogramada: 14, 
  //             fechaejecutada: 16, 
  //             doctor: 'dni2', 
  //             sucursal: 1 
  //           },
  //           {
  //             id: 4,
  //             dosis: 'dosis04', 
  //             descripcion: 'descripcion de la cita realizada por tal doctor 4', 
  //             estado: true, 
  //             fechaprogramada: 14, 
  //             fechaejecutada: 16, 
  //             doctor: 'dni2', 
  //             sucursal: 1 
  //           },
  //         ]
  //       },
  //       { 
  //         id: 'dni14',
  //         nombres: 'paciente14', 
  //         apellidos: 'appaciente14', 
  //         edad: 2, 
  //         telefono: '999999915', 
  //         fecharegistro: 4, 
  //         tipo: 'Vacuna', 
  //         sucursal: 2, 
  //         citas: [
  //           {
  //             id: 1,
  //             dosis: 'dosis01', 
  //             descripcion: 'descripcion de la cita realizada por tal doctor 1', 
  //             estado: true, 
  //             fechaprogramada: 14, 
  //             fechaejecutada: 16, 
  //             doctor: 'dni1', 
  //             sucursal: 1 
  //           },
  //           {
  //             id: 2,
  //             dosis: 'dosis02', 
  //             descripcion: 'descripcion de la cita realizada por tal doctor 2', 
  //             estado: true, 
  //             fechaprogramada: 14, 
  //             fechaejecutada: 16, 
  //             doctor: 'dni1', 
  //             sucursal: 1 
  //           },
  //           {
  //             id: 3,
  //             dosis: 'dosis03', 
  //             descripcion: 'descripcion de la cita realizada por tal doctor 3', 
  //             estado: true, 
  //             fechaprogramada: 14, 
  //             fechaejecutada: 16, 
  //             doctor: 'dni2', 
  //             sucursal: 1 
  //           },
  //           {
  //             id: 4,
  //             dosis: 'dosis04', 
  //             descripcion: 'descripcion de la cita realizada por tal doctor 4', 
  //             estado: true, 
  //             fechaprogramada: 14, 
  //             fechaejecutada: 16, 
  //             doctor: 'dni2', 
  //             sucursal: 1 
  //           },
  //         ]
  //       },
  //       { 
  //         id: 'dni17',
  //         nombres: 'paciente17', 
  //         apellidos: 'appaciente17', 
  //         edad: 1, 
  //         telefono: '999999918', 
  //         fecharegistro: 7, 
  //         tipo: 'Vacuna', 
  //         sucursal: 2, 
  //         citas: [
  //           {
  //             id: 1,
  //             dosis: 'dosis01', 
  //             descripcion: 'descripcion de la cita realizada por tal doctor 1', 
  //             estado: true, 
  //             fechaprogramada: 14, 
  //             fechaejecutada: 16, 
  //             doctor: 'dni1', 
  //             sucursal: 1 
  //           },
  //           {
  //             id: 2,
  //             dosis: 'dosis02', 
  //             descripcion: 'descripcion de la cita realizada por tal doctor 2', 
  //             estado: true, 
  //             fechaprogramada: 14, 
  //             fechaejecutada: 16, 
  //             doctor: 'dni1', 
  //             sucursal: 1 
  //           },
  //           {
  //             id: 3,
  //             dosis: 'dosis03', 
  //             descripcion: 'descripcion de la cita realizada por tal doctor 3', 
  //             estado: true, 
  //             fechaprogramada: 14, 
  //             fechaejecutada: 16, 
  //             doctor: 'dni2', 
  //             sucursal: 1 
  //           },
  //           {
  //             id: 4,
  //             dosis: 'dosis04', 
  //             descripcion: 'descripcion de la cita realizada por tal doctor 4', 
  //             estado: true, 
  //             fechaprogramada: 14, 
  //             fechaejecutada: 16, 
  //             doctor: 'dni2', 
  //             sucursal: 1 
  //           },  
  //         ]
  //       },
  //       { 
  //         id: 'dni21',
  //         nombres: 'paciente21', 
  //         apellidos: 'appaciente21', 
  //         edad: 35, 
  //         telefono: '999999922', 
  //         fecharegistro: 11, 
  //         tipo: 'Gestante', 
  //         sucursal: 2, 
  //         citas: [
  //           {
  //             id: 1,
  //             dosis: 'dosis01', 
  //             descripcion: 'descripcion de la cita realizada por tal doctor 1', 
  //             estado: true, 
  //             fechaprogramada: 14, 
  //             fechaejecutada: 16, 
  //             doctor: 'dni1', 
  //             sucursal: 1 
  //           },
  //           {
  //             id: 2,
  //             dosis: 'dosis02', 
  //             descripcion: 'descripcion de la cita realizada por tal doctor 2', 
  //             estado: true, 
  //             fechaprogramada: 14, 
  //             fechaejecutada: 16, 
  //             doctor: 'dni1', 
  //             sucursal: 1 
  //           },
  //           {
  //             id: 3,
  //             dosis: 'dosis03', 
  //             descripcion: 'descripcion de la cita realizada por tal doctor 3', 
  //             estado: true, 
  //             fechaprogramada: 14, 
  //             fechaejecutada: 16, 
  //             doctor: 'dni2', 
  //             sucursal: 1 
  //           },
  //           {
  //             id: 4,
  //             dosis: 'dosis04', 
  //             descripcion: 'descripcion de la cita realizada por tal doctor 4', 
  //             estado: true, 
  //             fechaprogramada: 14, 
  //             fechaejecutada: 16, 
  //             doctor: 'dni2', 
  //             sucursal: 1 
  //           },
  //         ] 
  //       },
  //     ]
  //   },
  //   { id:3, 
  //     nombre: 'Sucursal3', 
  //     direccion: 'direccion3', 
  //     encargado: 'encargado sucursal 3', 
  //     doctores: [
  //       { 
  //         id: 'dni5', 
  //         password: 'dni5', 
  //         nombres: 'doctor5', 
  //         edad: 26, 
  //         apellidos: 'apdoctor5', 
  //         telefono: '999999905', 
  //         sucursal: 3 
  //       },
  //       { 
  //         id: 'dni6', 
  //         password: 'dni6', 
  //         nombres: 'doctor6', 
  //         edad: 23, 
  //         apellidos: 'apdoctor6', 
  //         telefono: '999999906', 
  //         sucursal: 3 
  //       }
  //     ],
  //     pacientes: [
  //       { 
  //         id: 'dni15',
  //         nombres: 'paciente15', 
  //         apellidos: 'appaciente15', 
  //         edad: 1, 
  //         telefono: '999999916', 
  //         fecharegistro: 5, 
  //         tipo: 'Vacuna', 
  //         sucursal: 3, 
  //         citas: [
  //           {
  //             id: 1,
  //             dosis: 'dosis01', 
  //             descripcion: 'descripcion de la cita realizada por tal doctor 1', 
  //             estado: true, 
  //             fechaprogramada: 14, 
  //             fechaejecutada: 16, 
  //             doctor: 'dni1', 
  //             sucursal: 1 
  //           },
  //           {
  //             id: 2,
  //             dosis: 'dosis02', 
  //             descripcion: 'descripcion de la cita realizada por tal doctor 2', 
  //             estado: true, 
  //             fechaprogramada: 14, 
  //             fechaejecutada: 16, 
  //             doctor: 'dni1', 
  //             sucursal: 1 
  //           },
  //           {
  //             id: 3,
  //             dosis: 'dosis03', 
  //             descripcion: 'descripcion de la cita realizada por tal doctor 3', 
  //             estado: true, 
  //             fechaprogramada: 14, 
  //             fechaejecutada: 16, 
  //             doctor: 'dni2', 
  //             sucursal: 1 
  //           },
  //           {
  //             id: 4,
  //             dosis: 'dosis04', 
  //             descripcion: 'descripcion de la cita realizada por tal doctor 4', 
  //             estado: true, 
  //             fechaprogramada: 14, 
  //             fechaejecutada: 16, 
  //             doctor: 'dni2', 
  //             sucursal: 1 
  //           },
  //         ]
  //       },
  //       { 
  //         id: 'dni18',
  //         nombres: 'paciente18', 
  //         apellidos: 'appaciente18', 
  //         edad: 2, 
  //         telefono: '999999919', 
  //         fecharegistro: 8, 
  //         tipo: 'Vacuna', 
  //         sucursal: 3, 
  //         citas: [
  //           {
  //             id: 1,
  //             dosis: 'dosis01', 
  //             descripcion: 'descripcion de la cita realizada por tal doctor 1', 
  //             estado: true, 
  //             fechaprogramada: 14, 
  //             fechaejecutada: 16, 
  //             doctor: 'dni1', 
  //             sucursal: 1 
  //           },
  //           {
  //             id: 2,
  //             dosis: 'dosis02', 
  //             descripcion: 'descripcion de la cita realizada por tal doctor 2', 
  //             estado: true, 
  //             fechaprogramada: 14, 
  //             fechaejecutada: 16, 
  //             doctor: 'dni1', 
  //             sucursal: 1 
  //           },
  //           {
  //             id: 3,
  //             dosis: 'dosis03', 
  //             descripcion: 'descripcion de la cita realizada por tal doctor 3', 
  //             estado: true, 
  //             fechaprogramada: 14, 
  //             fechaejecutada: 16, 
  //             doctor: 'dni2', 
  //             sucursal: 1 
  //           },
  //           {
  //             id: 4,
  //             dosis: 'dosis04', 
  //             descripcion: 'descripcion de la cita realizada por tal doctor 4', 
  //             estado: true, 
  //             fechaprogramada: 14, 
  //             fechaejecutada: 16, 
  //             doctor: 'dni2', 
  //             sucursal: 1 
  //           },
  //         ]
  //       },
  //       { 
  //         id: 'dni19',
  //         nombres: 'paciente19', 
  //         apellidos: 'appaciente19', 
  //         edad: 3, 
  //         telefono: '999999920', 
  //         fecharegistro: 9, 
  //         tipo: 'Vacuna', 
  //         sucursal: 3, 
  //         citas: [
  //           {
  //             id: 1,
  //             dosis: 'dosis01', 
  //             descripcion: 'descripcion de la cita realizada por tal doctor 1', 
  //             estado: true, 
  //             fechaprogramada: 14, 
  //             fechaejecutada: 16, 
  //             doctor: 'dni1', 
  //             sucursal: 1 
  //           },
  //           {
  //             id: 2,
  //             dosis: 'dosis02', 
  //             descripcion: 'descripcion de la cita realizada por tal doctor 2', 
  //             estado: true, 
  //             fechaprogramada: 14, 
  //             fechaejecutada: 16, 
  //             doctor: 'dni1', 
  //             sucursal: 1 
  //           },
  //           {
  //             id: 3,
  //             dosis: 'dosis03', 
  //             descripcion: 'descripcion de la cita realizada por tal doctor 3', 
  //             estado: true, 
  //             fechaprogramada: 14, 
  //             fechaejecutada: 16, 
  //             doctor: 'dni2', 
  //             sucursal: 1 
  //           },
  //           {
  //             id: 4,
  //             dosis: 'dosis04', 
  //             descripcion: 'descripcion de la cita realizada por tal doctor 4', 
  //             estado: true, 
  //             fechaprogramada: 14, 
  //             fechaejecutada: 16, 
  //             doctor: 'dni2', 
  //             sucursal: 1 
  //           },
  //         ]
  //       },
  //     ]
  //   }
  // ];


  // getAll() {
  //   return this.sucursales;
  // }

}

  // users: any = {
  //   nombre: 'DoctorA',
  //   celular: '975810578',
  //   pacientes: [
  //     {
  //       id: '1',
  //       nombre: 'Paciente1',
  //       celular: '999999999',
  //       estado: true,
  //       citas: [ 
	//         { fecha: 110, estado: 'Espera', descripcion: 'des1' }, 
	//         { fecha: 160, estado: 'Espera', descripcion: 'desc 2' }, 
	//         { fecha: 180, estado: 'Espera', descripcion: 'desc 3' }, 
	//         { fecha: 200, estado: 'Espera', descripcion: 'desc21' }
	//       ],
  //       citaUltima: 0
  //     },
  //     {
  //       id: '2',
  //       nombre: 'Paciente2',
  //       celular: '999999994',
  //       estado: false,
  //       citas: [ 
  //         { fecha: 80, estado: 'Espera', descripcion: '2' }, 
  //         { fecha: 100, estado: 'Espera', descripcion: '42' }, 
  //         { fecha: 110, estado: 'Espera', descripcion: '21' }, 
  //         { fecha: 120, estado: 'Espera', descripcion: '12' }
  //       ],
  //       citaUltima: 0
  //     },
  //     {
  //       id: '3',
  //       nombre: 'Paciente3',
  //       celular: '999949999',
  //       estado: true,
  //       citas: [ 
  //         { fecha: 90, estado: 'Espera', descripcion: '14' }, 
  //         { fecha: 130, estado: 'Espera', descripcion: '15' }, 
  //         { fecha: 150, estado: 'Espera', descripcion: '13' }, 
  //         { fecha: 300, estado: 'Espera', descripcion: '28' }
  //       ],
  //       citaUltima: 0
  //     },
  //     {
  //       id: '4',
  //       nombre: 'Paciente4',
  //       celular: '999949999',
  //       estado: true,
  //       citas: [ 
  //         { fecha: 90, estado: 'Espera', descripcion: '42' }, 
  //         { fecha: 110, estado: 'Espera', descripcion: '21' }, 
  //         { fecha: 150, estado: 'Espera', descripcion: '12' }, 
  //         { fecha: 300, estado: 'Espera', descripcion: '42' }
  //       ],
  //       citaUltima: 0
  //     },
  //     {
  //       id: '5',
  //       nombre: 'Paciente1',
  //       celular: '999999999',
  //       estado: true,
  //       citas: [ 
	//         { fecha: 110, estado: 'Espera', descripcion: '42' }, 
	//         { fecha: 160, estado: 'Espera', descripcion: '21' }, 
	//         { fecha: 180, estado: 'Espera', descripcion: '121' }, 
	//         { fecha: 200, estado: 'Espera', descripcion: '42' }
	//       ],
  //       citaUltima: 0
  //     },
  //     {
  //       id: '6',
  //       nombre: 'Paciente2',
  //       celular: '999999994',
  //       estado: false,
  //       citas: [ 
  //         { fecha: 80, estado: 'Espera', descripcion: '221' }, 
  //         { fecha: 100, estado: 'Espera', descripcion: '12' }, 
  //         { fecha: 110, estado: 'Espera', descripcion: '34' }, 
  //         { fecha: 120, estado: 'Espera', descripcion: '454' }
  //       ],
  //       citaUltima: 0
  //     },
  //     {
  //       id: '7',
  //       nombre: 'Paciente3',
  //       celular: '999949999',
  //       estado: true,
  //       citas: [ 
  //         { fecha: 90, estado: 'Espera', descripcion: '45' }, 
  //         { fecha: 130, estado: 'Espera', descripcion: '122' }, 
  //         { fecha: 150, estado: 'Espera', descripcion: '21' }, 
  //         { fecha: 300, estado: 'Espera', descripcion: '21' }
  //       ],
  //       citaUltima: 0
  //     },
  //     {
  //       id: '8',
  //       nombre: 'Paciente4',
  //       celular: '999949999',
  //       estado: true,
  //       citas: [ 
  //         { fecha: 90, estado: 'Espera', descripcion: '54' }, 
  //         { fecha: 110, estado: 'Espera', descripcion: '54' }, 
  //         { fecha: 150, estado: 'Espera', descripcion: '21' }, 
  //         { fecha: 300, estado: 'Espera', descripcion: '21' }
  //       ],
  //       citaUltima: 0
  //     },
  //     {
  //       id: '9',
  //       nombre: 'Paciente1',
  //       celular: '999999999',
  //       estado: true,
  //       citas: [ 
	//         { fecha: 110, estado: 'Espera', descripcion: '21' }, 
	//         { fecha: 160, estado: 'Espera', descripcion: '12' }, 
	//         { fecha: 180, estado: 'Espera', descripcion: '12' }, 
	//         { fecha: 200, estado: 'Espera', descripcion: '21' }
	//       ],
  //       citaUltima: 0
  //     },
  //     {
  //       id: '10',
  //       nombre: 'Paciente2',
  //       celular: '999999994',
  //       estado: false,
  //       citas: [ 
  //         { fecha: 80, estado: 'Espera', descripcion: '12' }, 
  //         { fecha: 100, estado: 'Espera', descripcion: '21' }, 
  //         { fecha: 110, estado: 'Espera', descripcion: '12' }, 
  //         { fecha: 120, estado: 'Espera', descripcion: '21' }
  //       ],
  //       citaUltima: 0
  //     },
  //     {
  //       id: '11',
  //       nombre: 'Paciente3',
  //       celular: '999949999',
  //       estado: true,
  //       citas: [ 
  //         { fecha: 90, estado: 'Espera', descripcion: '21' }, 
  //         { fecha: 130, estado: 'Espera', descripcion: '87' }, 
  //         { fecha: 150, estado: 'Espera', descripcion: '78' }, 
  //         { fecha: 300, estado: 'Espera', descripcion: '789' }
  //       ],
  //       citaUltima: 0
  //     },
  //     { id: '12', 
  //       nombre: 'Paciente4',
  //       celular: '999949999',
  //       estado: true,
  //       citas: [ 
  //         { fecha: 90, estado: 'Espera', descripcion: '54' }, 
  //         { fecha: 110, estado: 'Espera', descripcion: '521' }, 
  //         { fecha: 150, estado: 'Espera', descripcion: '21' }, 
  //         { fecha: 300, estado: 'Espera', descripcion: '5454' }
  //       ],
  //       citaUltima: 0
  //     },
  //     { id: '13',
  //       nombre: 'Paciente1',
  //       celular: '999999999',
  //       estado: true,
  //       citas: [ 
	//         { fecha: 110, estado: 'Espera', descripcion: '24d21' }, 
	//         { fecha: 160, estado: 'Espera', descripcion: '242d1' }, 
	//         { fecha: 180, estado: 'Espera', descripcion: '2421d' }, 
	//         { fecha: 200, estado: 'Espera', descripcion: '24d21' }
	//       ],
  //       citaUltima: 0
  //     },
  //     { id: '14',
  //       nombre: 'Paciente2',
  //       celular: '999999994',
  //       estado: false,
  //       citas: [ 
  //         { fecha: 80, estado: 'Espera', descripcion: '2a14' }, 
  //         { fecha: 100, estado: 'Espera', descripcion: '2s14' }, 
  //         { fecha: 110, estado: 'Espera', descripcion: '214' }, 
  //         { fecha: 120, estado: 'Espera', descripcion: '21a4' }
  //       ],
  //       citaUltima: 0
  //     },
  //     { id: '15',
  //       nombre: 'Paciente3',
  //       celular: '999949999',
  //       estado: true,
  //       citas: [ 
  //         { fecha: 90, estado: 'Espera', descripcion: '214' }, 
  //         { fecha: 130, estado: 'Espera', descripcion: '2d14' }, 
  //         { fecha: 150, estado: 'Espera', descripcion: '2d14' }, 
  //         { fecha: 300, estado: 'Espera', descripcion: '214' }
  //       ],
  //       citaUltima: 0
  //     },
  //     { id: '16',
  //       nombre: 'Paciente4',
  //       celular: '999949999',
  //       estado: true,
  //       citas: [ 
  //         { fecha: 90, estado: 'Espera', descripcion: 'a' }, 
  //         { fecha: 110, estado: 'Espera', descripcion: 'gs' }, 
  //         { fecha: 150, estado: 'Espera', descripcion: 'd' }, 
  //         { fecha: 300, estado: 'Espera', descripcion: 'a' }
  //       ],
  //       citaUltima: 0
  //     },
  //     { id: '17',
  //       nombre: 'Paciente1',
  //       celular: '999999999',
  //       estado: true,
  //       citas: [ 
	//         { fecha: 110, estado: 'Espera', descripcion: '221' }, 
	//         { fecha: 160, estado: 'Espera', descripcion: '512' }, 
	//         { fecha: 180, estado: 'Espera', descripcion: '212' }, 
	//         { fecha: 200, estado: 'Espera', descripcion: '77' }
	//       ],
  //       citaUltima: 0
  //     },
  //     { id: '18',
  //       nombre: 'Paciente2',
  //       celular: '999999994',
  //       estado: false,
  //       citas: [ 
  //         { fecha: 80, estado: 'Espera', descripcion: '512' }, 
  //         { fecha: 100, estado: 'Espera', descripcion: 'd' }, 
  //         { fecha: 110, estado: 'Espera', descripcion: 'a' }, 
  //         { fecha: 120, estado: 'Espera', descripcion: 'as' }
  //       ],
  //       citaUltima: 0
  //     },
  //     { id: '19',
  //       nombre: 'Paciente3',
  //       celular: '999949999',
  //       estado: true,
  //       citas: [ 
  //         { fecha: 90, estado: 'Espera', descripcion: 'sfsd' }, 
  //         { fecha: 130, estado: 'Espera', descripcion: '24' }, 
  //         { fecha: 150, estado: 'Espera', descripcion: '452' }, 
  //         { fecha: 300, estado: 'Espera', descripcion: '12' }
  //       ],
  //       citaUltima: 0
  //     },
  //     { id: '20',
  //       nombre: 'Paciente4',
  //       celular: '999949999',
  //       estado: true,
  //       citas: [ 
  //         { fecha: 90, estado: 'Espera', descripcion: '32' }, 
  //         { fecha: 110, estado: 'Espera', descripcion: '845hgg' }, 
  //         { fecha: 150, estado: 'Espera', descripcion: '@@' }, 
  //         { fecha: 300, estado: 'Espera', descripcion: '24@' }
  //       ],
  //       citaUltima: 0
  //     }
  //   ]
  // };




  // doctores: any = [
  //   { id: 'dni1', password: 'dni1', nombres: 'doctor1', edad: 30, apellidos: 'apdoctor1', telefono: '999999901', sucursal: 1 },
  //   { id: 'dni2', password: 'dni2', nombres: 'doctor2', edad: 35, apellidos: 'apdoctor2', telefono: '999999902', sucursal: 1 },
  //   { id: 'dni3', password: 'dni3', nombres: 'doctor3', edad: 29, apellidos: 'apdoctor3', telefono: '999999901', sucursal: 2 },
  //   { id: 'dni4', password: 'dni4', nombres: 'doctor4', edad: 35, apellidos: 'apdoctor4', telefono: '999999904', sucursal: 2 },
  //   { id: 'dni5', password: 'dni5', nombres: 'doctor5', edad: 26, apellidos: 'apdoctor5', telefono: '999999905', sucursal: 3 },
  //   { id: 'dni6', password: 'dni6', nombres: 'doctor6', edad: 23, apellidos: 'apdoctor6', telefono: '999999906', sucursal: 3 }
  // ];

  // pacientes: any = [
  //   { 
  //     id: 'dni11',
  //     nombres: 'paciente11', 
  //     apellidos: 'appaciente11', 
  //     edad: 35, 
  //     telefono: '999999912', 
  //     fecharegistro: 1, 
  //     tipo: 'Gestante', 
  //     sucursal: 1, 
  //     citas: [
  //   {
  //     id: 1,
  //     dosis: 'dosis01', 
  //     descripcion: 'descripcion de la cita realizada por tal doctor 1', 
  //     estado: true, 
  //     fechaprogramada: 14, 
  //     fechaejecutada: 16, 
  //     doctor: 'dni1', 
  //     sucursal: 1 
  //   },
  //   {
  //     id: 2,
  //     dosis: 'dosis02', 
  //     descripcion: 'descripcion de la cita realizada por tal doctor 2', 
  //     estado: true, 
  //     fechaprogramada: 14, 
  //     fechaejecutada: 16, 
  //     doctor: 'dni1', 
  //     sucursal: 1 
  //   },
  //   {
  //     id: 3,
  //     dosis: 'dosis03', 
  //     descripcion: 'descripcion de la cita realizada por tal doctor 3', 
  //     estado: true, 
  //     fechaprogramada: 14, 
  //     fechaejecutada: 16, 
  //     doctor: 'dni2', 
  //     sucursal: 1 
  //   },
  //   {
  //     id: 4,
  //     dosis: 'dosis04', 
  //     descripcion: 'descripcion de la cita realizada por tal doctor 4', 
  //     estado: true, 
  //     fechaprogramada: 14, 
  //     fechaejecutada: 16, 
  //     doctor: 'dni2', 
  //     sucursal: 1 
  //   },
  //   ]
  //   },
  //   { 
  //     id: 'dni12',
  //     nombres: 'paciente12', 
  //     apellidos: 'appaciente12', 
  //     edad: 32, 
  //     telefono: '999999913', 
  //     fecharegistro: 2, 
  //     tipo: 'Gestante', 
  //     sucursal: 2, 
  //     citas: [
  //   {
  //     id: 1,
  //     dosis: 'dosis01', 
  //     descripcion: 'descripcion de la cita realizada por tal doctor 1', 
  //     estado: true, 
  //     fechaprogramada: 14, 
  //     fechaejecutada: 16, 
  //     doctor: 'dni1', 
  //     sucursal: 1 
  //   },
  //   {
  //     id: 2,
  //     dosis: 'dosis02', 
  //     descripcion: 'descripcion de la cita realizada por tal doctor 2', 
  //     estado: true, 
  //     fechaprogramada: 14, 
  //     fechaejecutada: 16, 
  //     doctor: 'dni1', 
  //     sucursal: 1 
  //   },
  //   {
  //     id: 3,
  //     dosis: 'dosis03', 
  //     descripcion: 'descripcion de la cita realizada por tal doctor 3', 
  //     estado: true, 
  //     fechaprogramada: 14, 
  //     fechaejecutada: 16, 
  //     doctor: 'dni2', 
  //     sucursal: 1 
  //   },
  //   {
  //     id: 4,
  //     dosis: 'dosis04', 
  //     descripcion: 'descripcion de la cita realizada por tal doctor 4', 
  //     estado: true, 
  //     fechaprogramada: 14, 
  //     fechaejecutada: 16, 
  //     doctor: 'dni2', 
  //     sucursal: 1 
  //   },
  //     ]
  //   },
  //   { 
  //     id: 'dni13',
  //     nombres: 'paciente13', 
  //     apellidos: 'appaciente13', 
  //     edad: 25, 
  //     telefono: '999999914', 
  //     fecharegistro: 3, 
  //     tipo: 'Gestante', 
  //     sucursal: 1, 
  //     citas: [
  //   {
  //     id: 1,
  //     dosis: 'dosis01', 
  //     descripcion: 'descripcion de la cita realizada por tal doctor 1', 
  //     estado: true, 
  //     fechaprogramada: 14, 
  //     fechaejecutada: 16, 
  //     doctor: 'dni1', 
  //     sucursal: 1 
  //   },
  //   {
  //     id: 2,
  //     dosis: 'dosis02', 
  //     descripcion: 'descripcion de la cita realizada por tal doctor 2', 
  //     estado: true, 
  //     fechaprogramada: 14, 
  //     fechaejecutada: 16, 
  //     doctor: 'dni1', 
  //     sucursal: 1 
  //   },
  //   {
  //     id: 3,
  //     dosis: 'dosis03', 
  //     descripcion: 'descripcion de la cita realizada por tal doctor 3', 
  //     estado: true, 
  //     fechaprogramada: 14, 
  //     fechaejecutada: 16, 
  //     doctor: 'dni2', 
  //     sucursal: 1 
  //   },
  //   {
  //     id: 4,
  //     dosis: 'dosis04', 
  //     descripcion: 'descripcion de la cita realizada por tal doctor 4', 
  //     estado: true, 
  //     fechaprogramada: 14, 
  //     fechaejecutada: 16, 
  //     doctor: 'dni2', 
  //     sucursal: 1 
  //   },
  //   ]
  //   },
  //   { 
  //     id: 'dni14',
  //     nombres: 'paciente14', 
  //     apellidos: 'appaciente14', 
  //     edad: 2, 
  //     telefono: '999999915', 
  //     fecharegistro: 4, 
  //     tipo: 'Vacuna', 
  //     sucursal: 2, 
  //     citas: [
  //   {
  //     id: 1,
  //     dosis: 'dosis01', 
  //     descripcion: 'descripcion de la cita realizada por tal doctor 1', 
  //     estado: true, 
  //     fechaprogramada: 14, 
  //     fechaejecutada: 16, 
  //     doctor: 'dni1', 
  //     sucursal: 1 
  //   },
  //   {
  //     id: 2,
  //     dosis: 'dosis02', 
  //     descripcion: 'descripcion de la cita realizada por tal doctor 2', 
  //     estado: true, 
  //     fechaprogramada: 14, 
  //     fechaejecutada: 16, 
  //     doctor: 'dni1', 
  //     sucursal: 1 
  //   },
  //   {
  //     id: 3,
  //     dosis: 'dosis03', 
  //     descripcion: 'descripcion de la cita realizada por tal doctor 3', 
  //     estado: true, 
  //     fechaprogramada: 14, 
  //     fechaejecutada: 16, 
  //     doctor: 'dni2', 
  //     sucursal: 1 
  //   },
  //   {
  //     id: 4,
  //     dosis: 'dosis04', 
  //     descripcion: 'descripcion de la cita realizada por tal doctor 4', 
  //     estado: true, 
  //     fechaprogramada: 14, 
  //     fechaejecutada: 16, 
  //     doctor: 'dni2', 
  //     sucursal: 1 
  //   },
  //   ]
  //   },
  //   { 
  //     id: 'dni15',
  //     nombres: 'paciente15', 
  //     apellidos: 'appaciente15', 
  //     edad: 1, 
  //     telefono: '999999916', 
  //     fecharegistro: 5, 
  //     tipo: 'Vacuna', 
  //     sucursal: 3, 
  //     citas: [
  //   {
  //     id: 1,
  //     dosis: 'dosis01', 
  //     descripcion: 'descripcion de la cita realizada por tal doctor 1', 
  //     estado: true, 
  //     fechaprogramada: 14, 
  //     fechaejecutada: 16, 
  //     doctor: 'dni1', 
  //     sucursal: 1 
  //   },
  //   {
  //     id: 2,
  //     dosis: 'dosis02', 
  //     descripcion: 'descripcion de la cita realizada por tal doctor 2', 
  //     estado: true, 
  //     fechaprogramada: 14, 
  //     fechaejecutada: 16, 
  //     doctor: 'dni1', 
  //     sucursal: 1 
  //   },
  //   {
  //     id: 3,
  //     dosis: 'dosis03', 
  //     descripcion: 'descripcion de la cita realizada por tal doctor 3', 
  //     estado: true, 
  //     fechaprogramada: 14, 
  //     fechaejecutada: 16, 
  //     doctor: 'dni2', 
  //     sucursal: 1 
  //   },
  //   {
  //     id: 4,
  //     dosis: 'dosis04', 
  //     descripcion: 'descripcion de la cita realizada por tal doctor 4', 
  //     estado: true, 
  //     fechaprogramada: 14, 
  //     fechaejecutada: 16, 
  //     doctor: 'dni2', 
  //     sucursal: 1 
  //   },
  //   ]
  //   },
  //   { 
  //     id: 'dni16',
  //     nombres: 'paciente16', 
  //     apellidos: 'appaciente16', 
  //     edad: 0, 
  //     telefono: '999999917', 
  //     fecharegistro: 6, 
  //     tipo: 'Vacuna', 
  //     sucursal: 1, 
  //     citas: [
  //   {
  //     id: 1,
  //     dosis: 'dosis01', 
  //     descripcion: 'descripcion de la cita realizada por tal doctor 1', 
  //     estado: true, 
  //     fechaprogramada: 14, 
  //     fechaejecutada: 16, 
  //     doctor: 'dni1', 
  //     sucursal: 1 
  //   },
  //   {
  //     id: 2,
  //     dosis: 'dosis02', 
  //     descripcion: 'descripcion de la cita realizada por tal doctor 2', 
  //     estado: true, 
  //     fechaprogramada: 14, 
  //     fechaejecutada: 16, 
  //     doctor: 'dni1', 
  //     sucursal: 1 
  //   },
  //   {
  //     id: 3,
  //     dosis: 'dosis03', 
  //     descripcion: 'descripcion de la cita realizada por tal doctor 3', 
  //     estado: true, 
  //     fechaprogramada: 14, 
  //     fechaejecutada: 16, 
  //     doctor: 'dni2', 
  //     sucursal: 1 
  //   },
  //   {
  //     id: 4,
  //     dosis: 'dosis04', 
  //     descripcion: 'descripcion de la cita realizada por tal doctor 4', 
  //     estado: true, 
  //     fechaprogramada: 14, 
  //     fechaejecutada: 16, 
  //     doctor: 'dni2', 
  //     sucursal: 1 
  //   },
  //   ]
  //   },
  //   { 
  //     id: 'dni17',
  //     nombres: 'paciente17', 
  //     apellidos: 'appaciente17', 
  //     edad: 1, 
  //     telefono: '999999918', 
  //     fecharegistro: 7, 
  //     tipo: 'Vacuna', 
  //     sucursal: 2, 
  //     citas: [
  //   {
  //     id: 1,
  //     dosis: 'dosis01', 
  //     descripcion: 'descripcion de la cita realizada por tal doctor 1', 
  //     estado: true, 
  //     fechaprogramada: 14, 
  //     fechaejecutada: 16, 
  //     doctor: 'dni1', 
  //     sucursal: 1 
  //   },
  //   {
  //     id: 2,
  //     dosis: 'dosis02', 
  //     descripcion: 'descripcion de la cita realizada por tal doctor 2', 
  //     estado: true, 
  //     fechaprogramada: 14, 
  //     fechaejecutada: 16, 
  //     doctor: 'dni1', 
  //     sucursal: 1 
  //   },
  //   {
  //     id: 3,
  //     dosis: 'dosis03', 
  //     descripcion: 'descripcion de la cita realizada por tal doctor 3', 
  //     estado: true, 
  //     fechaprogramada: 14, 
  //     fechaejecutada: 16, 
  //     doctor: 'dni2', 
  //     sucursal: 1 
  //   },
  //   {
  //     id: 4,
  //     dosis: 'dosis04', 
  //     descripcion: 'descripcion de la cita realizada por tal doctor 4', 
  //     estado: true, 
  //     fechaprogramada: 14, 
  //     fechaejecutada: 16, 
  //     doctor: 'dni2', 
  //     sucursal: 1 
  //   },
  //   ]
  //   },
  //   { 
  //     id: 'dni18',
  //     nombres: 'paciente18', 
  //     apellidos: 'appaciente18', 
  //     edad: 2, 
  //     telefono: '999999919', 
  //     fecharegistro: 8, 
  //     tipo: 'Vacuna', 
  //     sucursal: 3, 
  //     citas: [
  //   {
  //     id: 1,
  //     dosis: 'dosis01', 
  //     descripcion: 'descripcion de la cita realizada por tal doctor 1', 
  //     estado: true, 
  //     fechaprogramada: 14, 
  //     fechaejecutada: 16, 
  //     doctor: 'dni1', 
  //     sucursal: 1 
  //   },
  //   {
  //     id: 2,
  //     dosis: 'dosis02', 
  //     descripcion: 'descripcion de la cita realizada por tal doctor 2', 
  //     estado: true, 
  //     fechaprogramada: 14, 
  //     fechaejecutada: 16, 
  //     doctor: 'dni1', 
  //     sucursal: 1 
  //   },
  //   {
  //     id: 3,
  //     dosis: 'dosis03', 
  //     descripcion: 'descripcion de la cita realizada por tal doctor 3', 
  //     estado: true, 
  //     fechaprogramada: 14, 
  //     fechaejecutada: 16, 
  //     doctor: 'dni2', 
  //     sucursal: 1 
  //   },
  //   {
  //     id: 4,
  //     dosis: 'dosis04', 
  //     descripcion: 'descripcion de la cita realizada por tal doctor 4', 
  //     estado: true, 
  //     fechaprogramada: 14, 
  //     fechaejecutada: 16, 
  //     doctor: 'dni2', 
  //     sucursal: 1 
  //   },
  //   ]
  //   },
  //   { 
  //     id: 'dni19',
  //     nombres: 'paciente19', 
  //     apellidos: 'appaciente19', 
  //     edad: 3, 
  //     telefono: '999999920', 
  //     fecharegistro: 9, 
  //     tipo: 'Vacuna', 
  //     sucursal: 3, 
  //     citas: [
  //   {
  //     id: 1,
  //     dosis: 'dosis01', 
  //     descripcion: 'descripcion de la cita realizada por tal doctor 1', 
  //     estado: true, 
  //     fechaprogramada: 14, 
  //     fechaejecutada: 16, 
  //     doctor: 'dni1', 
  //     sucursal: 1 
  //   },
  //   {
  //     id: 2,
  //     dosis: 'dosis02', 
  //     descripcion: 'descripcion de la cita realizada por tal doctor 2', 
  //     estado: true, 
  //     fechaprogramada: 14, 
  //     fechaejecutada: 16, 
  //     doctor: 'dni1', 
  //     sucursal: 1 
  //   },
  //   {
  //     id: 3,
  //     dosis: 'dosis03', 
  //     descripcion: 'descripcion de la cita realizada por tal doctor 3', 
  //     estado: true, 
  //     fechaprogramada: 14, 
  //     fechaejecutada: 16, 
  //     doctor: 'dni2', 
  //     sucursal: 1 
  //   },
  //   {
  //     id: 4,
  //     dosis: 'dosis04', 
  //     descripcion: 'descripcion de la cita realizada por tal doctor 4', 
  //     estado: true, 
  //     fechaprogramada: 14, 
  //     fechaejecutada: 16, 
  //     doctor: 'dni2', 
  //     sucursal: 1 
  //   },
  //   ]
  //   },
  //   { 
  //     id: 'dni20',
  //     nombres: 'paciente20', 
  //     apellidos: 'appaciente20', 
  //     edad: 25, 
  //     telefono: '999999921', 
  //     fecharegistro: 10, 
  //     tipo: 'Gestante', 
  //     sucursal: 1, 
  //     citas: [
  //   {
  //     id: 1,
  //     dosis: 'dosis01', 
  //     descripcion: 'descripcion de la cita realizada por tal doctor 1', 
  //     estado: true, 
  //     fechaprogramada: 14, 
  //     fechaejecutada: 16, 
  //     doctor: 'dni1', 
  //     sucursal: 1 
  //   },
  //   {
  //     id: 2,
  //     dosis: 'dosis02', 
  //     descripcion: 'descripcion de la cita realizada por tal doctor 2', 
  //     estado: true, 
  //     fechaprogramada: 14, 
  //     fechaejecutada: 16, 
  //     doctor: 'dni1', 
  //     sucursal: 1 
  //   },
  //   {
  //     id: 3,
  //     dosis: 'dosis03', 
  //     descripcion: 'descripcion de la cita realizada por tal doctor 3', 
  //     estado: true, 
  //     fechaprogramada: 14, 
  //     fechaejecutada: 16, 
  //     doctor: 'dni2', 
  //     sucursal: 1 
  //   },
  //   {
  //     id: 4,
  //     dosis: 'dosis04', 
  //     descripcion: 'descripcion de la cita realizada por tal doctor 4', 
  //     estado: true, 
  //     fechaprogramada: 14, 
  //     fechaejecutada: 16, 
  //     doctor: 'dni2', 
  //     sucursal: 1 
  //   },
  //   ]
  //   },
  //   { 
  //     id: 'dni21',
  //     nombres: 'paciente21', 
  //     apellidos: 'appaciente21', 
  //     edad: 35, 
  //     telefono: '999999922', 
  //     fecharegistro: 11, 
  //     tipo: 'Gestante', 
  //     sucursal: 2, 
  //     citas: [
  //   {
  //     id: 1,
  //     dosis: 'dosis01', 
  //     descripcion: 'descripcion de la cita realizada por tal doctor 1', 
  //     estado: true, 
  //     fechaprogramada: 14, 
  //     fechaejecutada: 16, 
  //     doctor: 'dni1', 
  //     sucursal: 1 
  //   },
  //   {
  //     id: 2,
  //     dosis: 'dosis02', 
  //     descripcion: 'descripcion de la cita realizada por tal doctor 2', 
  //     estado: true, 
  //     fechaprogramada: 14, 
  //     fechaejecutada: 16, 
  //     doctor: 'dni1', 
  //     sucursal: 1 
  //   },
  //   {
  //     id: 3,
  //     dosis: 'dosis03', 
  //     descripcion: 'descripcion de la cita realizada por tal doctor 3', 
  //     estado: true, 
  //     fechaprogramada: 14, 
  //     fechaejecutada: 16, 
  //     doctor: 'dni2', 
  //     sucursal: 1 
  //   },
  //   {
  //     id: 4,
  //     dosis: 'dosis04', 
  //     descripcion: 'descripcion de la cita realizada por tal doctor 4', 
  //     estado: true, 
  //     fechaprogramada: 14, 
  //     fechaejecutada: 16, 
  //     doctor: 'dni2', 
  //     sucursal: 1 
  //   },
  //   ]
  //   },
  //   { 
  //     id: 'dni22',
  //     nombres: 'paciente22', 
  //     apellidos: 'appaciente22', 
  //     edad: 32, 
  //     telefono: '999999923', 
  //     fecharegistro: 12, 
  //     tipo: 'Gestante', 
  //     sucursal: 1, 
  //     citas: [
  //   {
  //     id: 1,
  //     dosis: 'dosis01', 
  //     descripcion: 'descripcion de la cita realizada por tal doctor 1', 
  //     estado: true, 
  //     fechaprogramada: 14, 
  //     fechaejecutada: 16, 
  //     doctor: 'dni1', 
  //     sucursal: 1 
  //   },
  //   {
  //     id: 2,
  //     dosis: 'dosis02', 
  //     descripcion: 'descripcion de la cita realizada por tal doctor 2', 
  //     estado: true, 
  //     fechaprogramada: 14, 
  //     fechaejecutada: 16, 
  //     doctor: 'dni1', 
  //     sucursal: 1 
  //   },
  //   {
  //     id: 3,
  //     dosis: 'dosis03', 
  //     descripcion: 'descripcion de la cita realizada por tal doctor 3', 
  //     estado: true, 
  //     fechaprogramada: 14, 
  //     fechaejecutada: 16, 
  //     doctor: 'dni2', 
  //     sucursal: 1 
  //   },
  //   {
  //     id: 4,
  //     dosis: 'dosis04', 
  //     descripcion: 'descripcion de la cita realizada por tal doctor 4', 
  //     estado: true, 
  //     fechaprogramada: 14, 
  //     fechaejecutada: 16, 
  //     doctor: 'dni2', 
  //     sucursal: 1 
  //   },
  //   ]
  //   }
  // ];

  // citas: any = [
  //   {
  //     id: 1,
  //     dosis: 'dosis01', 
  //     descripcion: 'descripcion de la cita realizada por tal doctor 1', 
  //     estado: true, 
  //     fechaprogramada: 14, 
  //     fechaejecutada: 16, 
  //     doctor: 'dni1', 
  //     sucursal: 1 
  //   },
  //   {
  //     id: 2,
  //     dosis: 'dosis02', 
  //     descripcion: 'descripcion de la cita realizada por tal doctor 2', 
  //     estado: true, 
  //     fechaprogramada: 14, 
  //     fechaejecutada: 16, 
  //     doctor: 'dni1', 
  //     sucursal: 1 
  //   },
  //   {
  //     id: 3,
  //     dosis: 'dosis03', 
  //     descripcion: 'descripcion de la cita realizada por tal doctor 3', 
  //     estado: true, 
  //     fechaprogramada: 14, 
  //     fechaejecutada: 16, 
  //     doctor: 'dni2', 
  //     sucursal: 1 
  //   },
  //   {
  //     id: 4,
  //     dosis: 'dosis04', 
  //     descripcion: 'descripcion de la cita realizada por tal doctor 4', 
  //     estado: true, 
  //     fechaprogramada: 14, 
  //     fechaejecutada: 16, 
  //     doctor: 'dni2', 
  //     sucursal: 1 
  //   },
  // ]

  
