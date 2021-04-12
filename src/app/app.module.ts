import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockcontentComponent } from './components/inventory/stockcontent/stockcontent.component';
import { DevmainComponent } from './main/devmain/devmain.component';
import { ProductComponent } from './components/inventory/product/product.component';
import { FooterComponent } from './main/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    StockcontentComponent,
    DevmainComponent,
    ProductComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
