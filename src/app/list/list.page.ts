import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/interfaces/models/doctor.model';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  constructor(
    public router: Router,
    public menuCtrl: MenuController
  ) {
    
  }

  ngOnInit() {
  }
  goToPacientes(tipoPaciente: string) {
    localStorage.setItem('tipopaciente', tipoPaciente);
    this.router.navigate(['/tabspacientes/espera']);
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

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
   }

}
