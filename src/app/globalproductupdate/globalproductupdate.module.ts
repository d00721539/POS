import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GlobalproductupdatePage } from './globalproductupdate.page';
import { MaterialModule } from '../material.module';

const routes: Routes = [
  {
    path: '',
    component: GlobalproductupdatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MaterialModule
  ],
  declarations: [GlobalproductupdatePage]
})
export class GlobalproductupdatePageModule {}
