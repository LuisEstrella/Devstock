import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockcontentComponent } from './components/inventory/stockcontent/stockcontent.component';
import { DevmainComponent } from './main/devmain/devmain.component';
import { ProductComponent } from './components/inventory/product/product.component';
import { FooterComponent } from './main/footer/footer.component';
import { HeaderComponent } from './main/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    StockcontentComponent,
    DevmainComponent,
    ProductComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
