import { Component, OnInit } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-vacunas',
  templateUrl: './vacunas.page.html',
  styleUrls: ['./vacunas.page.scss'],
})
export class VacunasPage implements OnInit {

  constructor(private screenOrientation: ScreenOrientation,
    public platform:Platform) { }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.screenOrientation.unlock();
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  });
  }
  

}
