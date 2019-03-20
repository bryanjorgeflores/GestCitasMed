import { Component, OnInit } from '@angular/core';
import { Archivo } from 'src/interfaces/archivo';
import { Tarjeta } from 'src/interfaces/tarjeta';
import { Router, ActivatedRoute } from '@angular/router';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-herramientas',
  templateUrl: './herramientas.page.html',
  styleUrls: ['./herramientas.page.scss'],
})
export class HerramientasPage implements OnInit {
  archivos : Archivo[];
  tarjetas : Tarjeta[];
  constructor(
    private router: Router,
    public activatedRoute: ActivatedRoute,
    public photoViewer: PhotoViewer,
    private file: File
  ) {

    let archivo1: Archivo = {
      nombre: 'Archivo 1',
      url: 'https://www.google.com',
      estado: true,
      aid:1
    };
    let archivo2: Archivo = {
      nombre: 'Archivo 2',
      url: 'https://www.facebook.com',
      estado:true,
      aid:2
    };
    let archivo3: Archivo = {
      nombre: 'Archivo 3',
      url: 'https://www.twitter.com',
      estado:true,
      aid:3
    };
    let archivo4: Archivo = {
      nombre: 'Archivo 4',
      url: 'https://www.instagram.com',
      estado:true,
      aid:4
    };
    let archivo5: Archivo = {
      nombre: 'Archivo 5',
      url: 'https://www.mercuriosistemico.com',
      estado:true,
      aid:5
    };
    let archivo6: Archivo = {
      nombre: 'Archivo 6',
      url: 'https://www.slipknot1.com',
      estado:true,
      aid:6
    };

    let tarjeta1: Tarjeta = {
      titulo: 'Primer Archivo',
      subtitulo: 'Descripcion',
      src:'assets/imgs_herramientas/img.png',
      estado:true
    };
    let tarjeta2: Tarjeta = {
      titulo: 'Segundo Archivo',
      subtitulo: 'Descripcion',
      src:'assets/imgs_herramientas/img.png',
      estado:true
    };
    let tarjeta3: Tarjeta = {
      titulo: 'Tercer Archivo',
      subtitulo: 'Descripcion',
      src:'assets/imgs_herramientas/img.png',
      estado:true
    };
    let tarjeta4: Tarjeta = {
      titulo: 'Cuarto Archivo',
      subtitulo: 'Descripcion',
      src:'assets/imgs_herramientas/img.png',
      estado:true
    };
    
    this.archivos = [archivo1,archivo2,archivo3,archivo4,archivo5,archivo6];
    this.tarjetas = [tarjeta1,tarjeta2,tarjeta3,tarjeta4];
  }


  ngOnInit() {
  }
  
  viewPhoto(){
    this.photoViewer.show('https://www.freakyjolly.com/wp-content/uploads/2017/08/cropped-fjlogo2.png');
  }
 
}

