import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';

import { IonicModule } from '@ionic/angular';

import { GlobalproductdeletePage } from './globalproductdelete.page';

const routes: Routes = [
  {
    path: '',
    component: GlobalproductdeletePage
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
  declarations: [GlobalproductdeletePage]
})
export class GlobalproductdeletePageModule {}
