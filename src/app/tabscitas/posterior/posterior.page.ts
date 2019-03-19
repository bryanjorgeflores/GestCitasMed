import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GetDataService } from 'src/services/getdata.service';
import { Paciente } from 'src/interfaces/models/paciente.model';


@Component({
  selector: 'app-posterior',
  templateUrl: './posterior.page.html',
  styleUrls: ['./posterior.page.scss'],
})
export class PosteriorPage implements OnInit {
  sesiones: Array<Object>;
  paciente: Paciente;
  idCitas: string = '';

  constructor(
    private getDataService: GetDataService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.idCitas = localStorage.getItem('idcitas');
    this.getDataService.getCitas(this.idCitas)
      .subscribe((sesiones: Array<Object>) => {
        this.sesiones = sesiones;
      })   
  }
  goToSesion(sesion: any) {
    localStorage.setItem('indexsesion', sesion.numero);
    this.router.navigateByUrl('/solicitud');
  }
}
