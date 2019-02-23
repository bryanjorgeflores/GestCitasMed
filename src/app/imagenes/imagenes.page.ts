import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.page.html',
  styleUrls: ['./imagenes.page.scss'],
})
export class ImagenesPage implements OnInit {
  src: any = '';
  constructor(
    private route: ActivatedRoute
  ) { 
    this.src = this.route.snapshot.paramMap.get('src');
  }
    
  ngOnInit(
  ) {
  }

}
