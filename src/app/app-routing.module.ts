import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home/:datos',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'login', 
    loadChildren: './login/login.module#LoginPageModule' 
  },
  {
    path: 'solicitud', 
    loadChildren: './solicitud/solicitud.module#SolicitudPageModule' 
  },
  {
    path: 'chequeo/:paciente', 
    loadChildren: './chequeo/chequeo.module#ChequeoPageModule'
  },
  { 
    path: 'registropaciente', 
    loadChildren: './registropaciente/registropaciente.module#RegistropacientePageModule' 
  },
  { 
    path: 'herramientas', 
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
