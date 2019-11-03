import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GloballocaluserlistPage } from './globallocaluserlist.page';
import { MaterialModule } from '../material.module';

const routes: Routes = [
  {
    path: '',
    component: GloballocaluserlistPage
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
  declarations: [GloballocaluserlistPage]
})
export class GloballocaluserlistPageModule {}
