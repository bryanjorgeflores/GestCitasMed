import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
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
    path: 'chequeo', 
    loadChildren: './chequeo/chequeo.module#ChequeoPageModule'
  },
  { path: 'registropaciente', 
    loadChildren: './registropaciente/registropaciente.module#RegistropacientePageModule' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
