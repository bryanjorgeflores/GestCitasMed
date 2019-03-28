import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { GetDataService } from 'src/services/getdata.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Usuario',
      url: '/datos',
      icon: 'contact'
    },
    {
      title: 'Solicitud',
      url: '/solicitud',
      icon: 'swap'
    },
    {
      title: 'Cerrar Sesión',
      url: '/login',
      icon: 'log-out'
    },
    {
      title: 'Vacunas',
      url: '/vacunas',
      icon: 'close'
    }
  ];

  showSplash=true;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public router: Router,
    public getDataService: GetDataService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.overlaysWebView(true);
      this.splashScreen.hide();
      timer(3000).subscribe(()=>this.showSplash=false)
    });
    this.getDataService.getSucursales()
      .subscribe(sucursales => {
      });
  }
  goTo(ruta: string) {
    this.router.navigate([ruta]);
  }

  
}
