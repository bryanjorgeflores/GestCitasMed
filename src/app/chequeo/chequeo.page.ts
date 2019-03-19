import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterData } from 'src/personalized/filter.data.personalized';
import { GetDataService } from 'src/services/getdata.service';
import { Citas } from 'src/interfaces/models/citas.model';
import { Paciente } from 'src/interfaces/models/paciente.model';

@Component({
  selector: 'app-chequeo',
  templateUrl: './chequeo.page.html',
  styleUrls: ['./chequeo.page.scss'],
})
export class ChequeoPage implements OnInit {
  sesiones: Array<Object>;
  paciente: Paciente;
  idCitas: string = '';
  constructor(
    private route: ActivatedRoute,
    private filterData: FilterData,
    public activatedRoute: ActivatedRoute,
    private getDataService: GetDataService,
    public router: Router
    ) {
   }

  ngOnInit() {
    this.idCitas = this.activatedRoute.snapshot.paramMap.get('idcitas');
    localStorage.setItem('idcitas', this.idCitas);
    this.getDataService.getCitas(this.idCitas).subscribe((sesiones: Array<Object>) => {
      this.sesiones = sesiones;
    });
  }
  goToSesion(sesion: any) {
    localStorage.setItem('indexsesion', sesion.numero);
    this.router.navigate(['/solicitud'], sesion.numero);
  }
}
