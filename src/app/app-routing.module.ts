import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'home',
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
    path: 'chequeo/:idcitas', 
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
    path: 'datos', 
    loadChildren: './datos/datos.module#DatosPageModule' 
  },
  { 
    path: 'tabspacientes', 
    loadChildren: './tabspacientes/tabspacientes.module#TabspacientesPageModule' 
  },
  { 
    path: 'tabscitas', 
    loadChildren: './tabscitas/tabscitas.module#TabscitasPageModule' 
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
