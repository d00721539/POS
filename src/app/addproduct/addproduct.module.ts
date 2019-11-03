import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddproductPage } from './addproduct.page';
import { MaterialModule } from '../material.module';

const routes: Routes = [
  {
    path: '',
    component: AddproductPage
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
  declarations: [AddproductPage]
})
export class AddproductPageModule {}
