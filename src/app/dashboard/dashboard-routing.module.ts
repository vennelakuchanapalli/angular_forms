import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { AddproductComponent } from './productlist/addproduct/addproduct.component';
import { ProductdetailsComponent } from './productlist/productdetails/productdetails.component';
// import { CartlistComponent } from './productlist/cartlist/cartlist.component';
import { CartitemsComponent } from './cartitems/cartitems.component';
const routes: Routes = [
{
  path: 'productlist', component: ProductlistComponent,
  children: [
    { path: 'addproduct', component: AddproductComponent },
    { path: ':id', component: ProductdetailsComponent },
    // { path: 'dashboard/productlist/cartlist', component: CartlistComponent }   
  ]
},
{path:'cartitems',component:CartitemsComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
