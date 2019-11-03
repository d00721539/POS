import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { MaterialModule } from '../material.module';

import { GlobalcheckedoutlistPage } from './globalcheckedoutlist.page';

const routes: Routes = [
  {
    path: '',
    component: GlobalcheckedoutlistPage
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
  declarations: [GlobalcheckedoutlistPage]
})
export class GlobalcheckedoutlistPageModule {}
