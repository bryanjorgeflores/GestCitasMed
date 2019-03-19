import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabspacientesPage } from './tabspacientes.page';

const routes: Routes = [
  {
    path: '',
    component: TabspacientesPage,
    children: [
      {
        path: 'retraso',
        loadChildren: './retraso/retraso.module#RetrasoPageModule'
      },
      {
        path: 'espera',
        loadChildren: './espera/espera.module#EsperaPageModule'
      },
      {
        path: 'general',
        loadChildren: './general/general.module#GeneralPageModule'
      },
      {
        path: 'personal',
        loadChildren: './personal/personal.module#PersonalPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/espera',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabspacientesPage]
})
export class TabspacientesPageModule {}
