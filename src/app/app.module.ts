import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductAddComponent } from './components/product/product-add/product-add.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { SupplierListComponent } from './components/supplier/supplier-list/supplier-list.component';
import { SupplierAddComponent } from './components/supplier/supplier-add/supplier-add.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductAddComponent,
    ProductListComponent,
    SupplierListComponent,
    SupplierAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
