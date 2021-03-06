import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UpdateproductPage } from './updateproduct.page';
import { MaterialModule } from '../material.module';

const routes: Routes = [
  {
    path: '',
    component: UpdateproductPage
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
  declarations: [UpdateproductPage]
})
export class UpdateproductPageModule {}
