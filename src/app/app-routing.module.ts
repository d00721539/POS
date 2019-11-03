import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'addproduct', loadChildren: './addproduct/addproduct.module#AddproductPageModule' },
  { path: 'businessaccountadd', loadChildren: './businessaccountadd/businessaccountadd.module#BusinessaccountaddPageModule' },
  { path: 'businessaccountdisable', loadChildren: './businessaccountdisable/businessaccountdisable.module#BusinessaccountdisablePageModule' },
  { path: 'businessaccountedit', loadChildren: './businessaccountedit/businessaccountedit.module#BusinessaccounteditPageModule' },
  { path: 'businessaccountlist', loadChildren: './businessaccountlist/businessaccountlist.module#BusinessaccountlistPageModule' },
  { path: 'checkedoutitem', loadChildren: './checkedoutitem/checkedoutitem.module#CheckedoutitemPageModule' },
  { path: 'checkedoutitembybusiness', loadChildren: './checkedoutitembybusiness/checkedoutitembybusiness.module#CheckedoutitembybusinessPageModule' },
  { path: 'checkout', loadChildren: './checkout/checkout.module#CheckoutPageModule' },
  { path: 'deleteproduct', loadChildren: './deleteproduct/deleteproduct.module#DeleteproductPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'product', loadChildren: './product/product.module#ProductPageModule' },
  { path: 'updateproduct', loadChildren: './updateproduct/updateproduct.module#UpdateproductPageModule' },
  { path: 'useradd', loadChildren: './useradd/useradd.module#UseraddPageModule' },
  { path: 'userdelete', loadChildren: './userdelete/userdelete.module#UserdeletePageModule' },
  { path: 'userlist', loadChildren: './userlist/userlist.module#UserlistPageModule' },
  { path: 'userupdate', loadChildren: './userupdate/userupdate.module#UserupdatePageModule' },
  { path: 'addproduct', loadChildren: './addproduct/addproduct.module#AddproductPageModule' },
  { path: 'globalcheckedoutdelete', loadChildren: './globalcheckedoutdelete/globalcheckedoutdelete.module#GlobalcheckedoutdeletePageModule' },
  { path: 'globalcheckedoutlist', loadChildren: './globalcheckedoutlist/globalcheckedoutlist.module#GlobalcheckedoutlistPageModule' },
  { path: 'globalcheckedoutupdate', loadChildren: './globalcheckedoutupdate/globalcheckedoutupdate.module#GlobalcheckedoutupdatePageModule' },
  { path: 'globallocaluserdelete', loadChildren: './globallocaluserdelete/globallocaluserdelete.module#GloballocaluserdeletePageModule' },
  { path: 'globallocaluserlist', loadChildren: './globallocaluserlist/globallocaluserlist.module#GloballocaluserlistPageModule' },
  { path: 'globallocaluserupdate', loadChildren: './globallocaluserupdate/globallocaluserupdate.module#GloballocaluserupdatePageModule' },
  { path: 'globalproductdelete', loadChildren: './globalproductdelete/globalproductdelete.module#GlobalproductdeletePageModule' },
  { path: 'globalproductupdate', loadChildren: './globalproductupdate/globalproductupdate.module#GlobalproductupdatePageModule' },
  { path: 'productglobal', loadChildren: './productglobal/productglobal.module#ProductglobalPageModule' },
];

@NgModule({
  declarations: [
    ],
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
