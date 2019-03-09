import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilterData } from 'src/personalized/filter.data.personalized';
import { GetDataService } from 'src/services/getdata.service';
import { Cita } from 'src/interfaces/models/cita.model';
import { Paciente } from 'src/interfaces/models/paciente.model';

@Component({
  selector: 'app-chequeo',
  templateUrl: './chequeo.page.html',
  styleUrls: ['./chequeo.page.scss'],
})
export class ChequeoPage implements OnInit {
  citas: Array<Cita>;
  paciente: Paciente;
  constructor(
    private route: ActivatedRoute,
    private filterData: FilterData,
    public activatedRoute: ActivatedRoute,
    private getDataService: GetDataService
    ) {
      // this.paciente = this.filterData.getPaciente(this.route.snapshot.paramMap.get('paciente'));
      // console.log(this.paciente);
      // this.citas = this.paciente.citas;
   }

  ngOnInit() {
    let idPaciente = this.activatedRoute.snapshot.paramMap.get('paciente');
    this.getDataService.getCitas(idPaciente).subscribe((citas: Array<Cita>) => {
      this.citas = citas;
    });
    console.log(this.citas);
  }

}
