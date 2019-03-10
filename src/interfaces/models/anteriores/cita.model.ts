export interface Cita {
  _id?: string,
  numero: number,
  tratamiento: string,
  descripcion: string,
  estado: boolean,
  fechaProgramada: number,
  fechaTratada: number,
  doctor: string,
  sucursal: string
}