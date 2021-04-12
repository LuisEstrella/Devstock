import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockcontentComponent } from './components/stockcontent/stockcontent.component';
import { DevmainComponent } from './main/devmain/devmain.component';

const routes: Routes = [
  {path:'', component: DevmainComponent},
  {path:'stock', component: StockcontentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
