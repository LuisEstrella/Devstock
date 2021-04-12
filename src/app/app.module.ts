import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevmainComponent } from './main/devmain/devmain.component';
import { FooterComponent } from './main/footer/footer.component';
import { StockcontentComponent } from './components/stockcontent/stockcontent.component';
import { ProductComponent } from './components/product/product.component';
import { SubproductComponent } from './components/subproduct/subproduct.component';
import { ResumeComponent } from './components/resume/resume.component';


@NgModule({
  declarations: [
    AppComponent,
    DevmainComponent,
    FooterComponent,
    StockcontentComponent,
    ProductComponent,
    SubproductComponent,
    ResumeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
