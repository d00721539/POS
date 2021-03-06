import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DeleteproductPage } from './deleteproduct.page';
import { MaterialModule } from '../material.module';

const routes: Routes = [
  {
    path: '',
    component: DeleteproductPage
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
  declarations: [DeleteproductPage]
})
export class DeleteproductPageModule {}
