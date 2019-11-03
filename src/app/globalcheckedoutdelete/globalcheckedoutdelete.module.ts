import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GlobalcheckedoutdeletePage } from './globalcheckedoutdelete.page';

const routes: Routes = [
  {
    path: '',
    component: GlobalcheckedoutdeletePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GlobalcheckedoutdeletePage]
})
export class GlobalcheckedoutdeletePageModule {}
