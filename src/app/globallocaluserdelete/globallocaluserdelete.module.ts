import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GloballocaluserdeletePage } from './globallocaluserdelete.page';
import { MaterialModule } from '../material.module';

const routes: Routes = [
  {
    path: '',
    component: GloballocaluserdeletePage
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
  declarations: [GloballocaluserdeletePage]
})
export class GloballocaluserdeletePageModule {}
