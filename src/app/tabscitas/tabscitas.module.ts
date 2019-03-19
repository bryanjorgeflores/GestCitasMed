import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabscitasPage } from './tabscitas.page';

const routes: Routes = [
  {
    path: '',
    component: TabscitasPage,
    children: [
      {
        path: 'proximo',
        loadChildren: './proximo/proximo.module#ProximoPageModule'
      },
      {
        path: 'posterior',
        loadChildren: './posterior/posterior.module#PosteriorPageModule'
      },
      {
        path: 'anterior',
        loadChildren: './anterior/anterior.module#AnteriorPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/proximo',
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
  declarations: [TabscitasPage]
})
export class TabscitasPageModule {}
