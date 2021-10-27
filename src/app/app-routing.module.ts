import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBillComponent } from './components/add-bill/add-bill.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ProductAddComponent } from './components/product/product-add/product-add.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { SalesRecordComponent } from './components/sales-record/sales-record.component';
import { SupplierAddComponent } from './components/supplier/supplier-add/supplier-add.component';
import { SupplierListComponent } from './components/supplier/supplier-list/supplier-list.component';

const routes: Routes = [
  {path: "product/list", component: ProductListComponent},
  {path: "product/add", component: ProductAddComponent},
  {path: "supplier/list", component: SupplierListComponent},
  {path: "supplier/add", component: SupplierAddComponent},
  {path: "salesRecord", component: SalesRecordComponent},
  {path: "bill/add", component: AddBillComponent},
  {path: "notifications", component: NotificationsComponent},
  {path:"", redirectTo: "/notifications", pathMatch:"full"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
