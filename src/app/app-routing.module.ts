import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthgaurdService } from './authgaurd.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'', loadChildren: ()=> import('./register/register.module').then(m => m.RegisterModule)},
  {path:'register', loadChildren: ()=> import('./register/register.module').then(m => m.RegisterModule)},
  {path:'dashboard', loadChildren: ()=> import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
