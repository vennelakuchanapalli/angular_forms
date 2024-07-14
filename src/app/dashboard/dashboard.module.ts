import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailsComponent } from './productlist/productdetails/productdetails.component';
import { AddproductComponent } from './productlist/addproduct/addproduct.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { CartlistComponent } from './productlist/cartlist/cartlist.component';
import { CartitemsComponent } from './cartitems/cartitems.component';
import { PipePipe } from '../pipe.pipe';
@NgModule({
  declarations: [
    ProductlistComponent,
    ProductdetailsComponent,
    AddproductComponent,
    CartlistComponent,
    CartitemsComponent,
    PipePipe
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class DashboardModule { }
