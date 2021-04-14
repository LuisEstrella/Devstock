import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevmainComponent } from './main/devmain/devmain.component';
import { FooterComponent } from './main/footer/footer.component';


import { HeaderComponent } from './main/header/header.component';
import { SummaryComponent } from './components/inventory/summary/summary.component';
import { ProductsComponent } from './components/inventory/products/products.component';
import { CategoryComponent } from './components/inventory/category/category.component';
import { CategoryListComponent } from './components/inventory/summary/category-list/category-list.component';



@NgModule({
  declarations: [
    AppComponent,
    DevmainComponent,
    FooterComponent,
    HeaderComponent,
    SummaryComponent,
    ProductsComponent,
    CategoryComponent,
    CategoryListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
