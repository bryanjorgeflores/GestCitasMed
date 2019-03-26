import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/interfaces/models/doctor.model';
import { MenuController, Platform } from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  constructor(
    public router: Router,
    public menuCtrl: MenuController,
    private screenOrientation: ScreenOrientation,
    public platform:Platform
  ) {
    
  }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.screenOrientation.unlock();
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  });
  }

  ionViewDidEnter() {
    this.platform.ready().then(() => {
      this.screenOrientation.unlock();
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  });
  console.log("Se recargo");
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
