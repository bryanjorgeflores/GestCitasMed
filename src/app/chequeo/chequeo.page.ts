import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilterData } from 'src/personalized/filter.data.personalized';

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
    private filterData: FilterData
    ) {
      // this.paciente = this.filterData.getPaciente(this.route.snapshot.paramMap.get('paciente'));
      // console.log(this.paciente);
      // this.citas = this.paciente.citas;
   }

  ngOnInit() {
  }

}
