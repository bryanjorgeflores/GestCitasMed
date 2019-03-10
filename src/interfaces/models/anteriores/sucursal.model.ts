export interface Sucursal {
  _id?: string,
  nombre: string,
  direccion: string,
  encargado: string,
  doctores: [string],
  pacientes: [string]
}