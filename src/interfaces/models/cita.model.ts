export interface Cita {
  _id?: string,
  number: number,
  tratamiento: string,
  descripcion: string,
  estado: boolean,
  fechaprogramada: Date,
  fechaejecutada: Date,
  doctor: string,
  sucursal: string
}