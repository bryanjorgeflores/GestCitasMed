import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Paciente } from "src/interfaces/models/anteriores/paciente.model";
import { URL } from "src/personalized/config/variables.config";
import { Observable } from "rxjs";
import { Citas } from "src/interfaces/models/citas.model";

@Injectable()

export class PostDataService {
  constructor(
    public http: HttpClient
  ) {
  }

  postPaciente(paciente: any): Observable<any> {
    return this.http.post(`${URL}/paciente`, paciente);
  }
  postCitasVacia(idPaciente: string): Observable<any> {
    return this.http.post(`${URL}/citas/${idPaciente}`, []);
  }
}