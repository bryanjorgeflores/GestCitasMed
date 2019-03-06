import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.page.html',
  styleUrls: ['./solicitud.page.scss'],
})
export class SolicitudPage implements OnInit {
  urlData: string = '';
  constructor(
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.urlData = this.activatedRoute.snapshot.paramMap.get('datos')
  }

}
