import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-tabscitas',
  templateUrl: './tabscitas.page.html',
  styleUrls: ['./tabscitas.page.scss'],
})
export class TabscitasPage implements OnInit {

  constructor(private screenOrientation: ScreenOrientation,
    public platform:Platform) { }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.screenOrientation.unlock();
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  });
  }

}
