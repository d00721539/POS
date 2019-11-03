import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UserupdatePage } from './userupdate.page';
import { MaterialModule } from '../material.module';

const routes: Routes = [
  {
    path: '',
    component: UserupdatePage
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
  declarations: [UserupdatePage]
})
export class UserupdatePageModule {}
