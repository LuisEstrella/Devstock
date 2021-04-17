import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryComponent } from './components/inventory/summary/summary.component';

import { DevmainComponent } from './main/devmain/devmain.component';

const routes: Routes = [
  {path:'', redirectTo: '/devmain', pathMatch:'full'},
  {path:'devmain', component: DevmainComponent},
  {path:'stock', component: SummaryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
