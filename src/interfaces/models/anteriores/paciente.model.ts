export interface Paciente {
  _id?: string,
  dni: string,
  nombres: string,
  edad: number,
  telefono: string,
  tipo: string,
  fecharegistro: Date,
  sucursal: string,
  ultimodoctor: string,
  citas: [string]
}