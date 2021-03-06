import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AlertPersonalized } from 'src/personalized/alert.personalized';
import { FilterData } from 'src/personalized/filter.data.personalized';
import { GetDataService } from 'src/services/getdata.service';
import { HttpClientModule } from '@angular/common/http'
import { PutDataService } from 'src/services/putdata.service';
import { PostDataService } from 'src/services/postdata.service';

import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { File } from '@ionic-native/file/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    GetDataService,
    PutDataService,
    PostDataService, 
    AlertPersonalized,
    FilterData,
    PhotoViewer,
    File,
    ScreenOrientation
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
