import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/interfaces/models/doctor.model';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  constructor(
    public router: Router
  ) {
    
  }

  ngOnInit() {
  }
  goToPacientes(tipoPaciente: string) {
    localStorage.setItem('tipopaciente', tipoPaciente);
    this.router.navigate(['/home']);
  }

  goToRegistroPaciente(tipoPaciente: string) {
    localStorage.setItem('tipopaciente', tipoPaciente);
    this.router.navigate(['/registropaciente'])
  }


  // goToPacientesEmbarazo() {
  //   localStorage.setItem('tipopaciente', 'embarazo');
  //   this.router.navigate(['/home']);
  // }
  // goToPacientesCred() {
  //   localStorage.setItem('tipopaciente', 'cred');
  //   this.router.navigate(['/home']);
  // }


}
