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
  goToPacientesVacuna() {
    localStorage.setItem('tipopaciente', 'vacuna');
    this.router.navigate(['/home']);
  }
  goToPacientesEmbarazo() {
    localStorage.setItem('tipopaciente', 'embarazo');
    this.router.navigate(['/home']);
  }
  goToPacientesCred() {
    localStorage.setItem('tipopaciente', 'cred');
    this.router.navigate(['/home']);
  }


}
