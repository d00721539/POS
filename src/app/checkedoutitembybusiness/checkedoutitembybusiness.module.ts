import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CheckedoutitembybusinessPage } from './checkedoutitembybusiness.page';
import { MaterialModule } from '../material.module';

const routes: Routes = [
  {
    path: '',
    component: CheckedoutitembybusinessPage
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
  declarations: [CheckedoutitembybusinessPage]
})
export class CheckedoutitembybusinessPageModule {}
