import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list/init',
    pathMatch: 'full'
  },
  {
    path: 'home/:datos',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list/:datos',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'login/:datos', 
    loadChildren: './login/login.module#LoginPageModule' 
  },
  {
    path: 'solicitud/:cita', 
    loadChildren: './solicitud/solicitud.module#SolicitudPageModule' 
  },
  {
    path: 'chequeo/:paciente', 
    loadChildren: './chequeo/chequeo.module#ChequeoPageModule'
  },
  { 
    path: 'registropaciente/:datos', 
    loadChildren: './registropaciente/registropaciente.module#RegistropacientePageModule' 
  },
  { 
    path: 'herramientas/:datos', 
    loadChildren: './herramientas/herramientas.module#HerramientasPageModule'
  },
  { 
    path: 'imagenes/:src', 
    loadChildren: './imagenes/imagenes.module#ImagenesPageModule' 
  },
  { 
    path: 'datos/:datos', 
    loadChildren: './datos/datos.module#DatosPageModule' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
