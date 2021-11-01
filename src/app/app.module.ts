import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductAddComponent } from './components/product/product-add/product-add.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { SupplierListComponent } from './components/supplier/supplier-list/supplier-list.component';
import { SupplierAddComponent } from './components/supplier/supplier-add/supplier-add.component';
import { SalesRecordComponent } from './components/sales-record/sales-record.component';
import { AddBillComponent } from './components/add-bill/add-bill.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ProductAddStockComponent } from './components/product/product-add-stock/product-add-stock.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductAddComponent,
    ProductListComponent,
    SupplierListComponent,
    SupplierAddComponent,
    SalesRecordComponent,
    AddBillComponent,
    NotificationsComponent,
    ProductAddStockComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
