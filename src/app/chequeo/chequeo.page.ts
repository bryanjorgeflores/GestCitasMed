import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilterPacientes } from 'src/personalized/filter.pacientes.personalized';

@Component({
  selector: 'app-chequeo',
  templateUrl: './chequeo.page.html',
  styleUrls: ['./chequeo.page.scss'],
})
export class ChequeoPage implements OnInit {
  paciente: any;
  citas: any;
  constructor(
    private route: ActivatedRoute,
    private filterPaciente: FilterPacientes
    ) {
      this.route.params.subscribe((data) => {
        this.paciente = data;
        console.log(this.paciente);
      });
      this.paciente = this.filterPaciente.getPaciente(this.paciente.id);
      this.citas = this.paciente.citas;
   }

  ngOnInit() {
  }

}
