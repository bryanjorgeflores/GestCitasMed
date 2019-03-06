export interface Doctor {
  _id?: string,
  dni: string,
  password: string,
  nombres: string,
  telefono: string,
  pacientes: [string],
  sucursal : string

}