import { Component, OnInit } from '@angular/core';
import { AlertPersonalized } from 'src/personalized/alert.personalized';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  ingreso: string = 'Login';
  
  constructor(
    private alertPersonalized: AlertPersonalized,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ingresar() {
    this.alertPersonalized.alertAcept(
      'Éxito', 
      'Ingreso Correcto', 
      'Ingresando al Sistema de Chequeo Medico', 
      ['Aceptar']);
    this.router.navigate(['home']);
  }
  
}
