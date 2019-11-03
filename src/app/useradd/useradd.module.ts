import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UseraddPage } from './useradd.page';
import { MaterialModule } from '../material.module';

const routes: Routes = [
  {
    path: '',
    component: UseraddPage
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
  declarations: [UseraddPage]
})
export class UseraddPageModule {}
