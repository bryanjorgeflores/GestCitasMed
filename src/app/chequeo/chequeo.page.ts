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
  constructor(
    private route: ActivatedRoute,
    private filterData: FilterData,
    public activatedRoute: ActivatedRoute,
    private getDataService: GetDataService,
    public router: Router
    ) {
      // this.paciente = this.filterData.getPaciente(this.route.snapshot.paramMap.get('paciente'));
      // console.log(this.paciente);
      // this.citas = this.paciente.citas;
   }

  ngOnInit() {
    let idCitas = this.activatedRoute.snapshot.paramMap.get('idcitas');
    localStorage.setItem('idcitas', idCitas);
    this.getDataService.getCitas(idCitas).subscribe((sesiones: Array<Object>) => {
      this.sesiones = sesiones;
    });
  }
  goToSesion(sesion: any) {
    localStorage.setItem('indexsesion', sesion.numero);
    this.router.navigate(['/solicitud'], sesion.numero);
  }
}
