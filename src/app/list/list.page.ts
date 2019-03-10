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

  // private selectedItem: any;
  // private icons = [
  //   'flask',
  //   'wifi',
  //   'beer',
  //   'football',
  //   'basketball',
  //   'paper-plane',
  //   'american-football',
  //   'boat',
  //   'bluetooth',
  //   'build'
  // ];
  // public items: Array<{ title: string; note: string; icon: string }> = [];
  // constructor() {
  //   for (let i = 1; i < 11; i++) {
  //     this.items.push({
  //       title: 'Item ' + i,
  //       note: 'This is item #' + i,
  //       icon: this.icons[Math.floor(Math.random() * this.icons.length)]
  //     });
  //   }
  // }

  // ngOnInit() {
  // }
  // // add back when alpha.4 is out
  // // navigate(item) {
  // //   this.router.navigate(['/list', JSON.stringify(item)]);
  // // }
