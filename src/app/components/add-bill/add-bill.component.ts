import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidator } from 'src/app/common/custom-validator';
import { Bill } from 'src/app/models/bill';
import { Product } from 'src/app/models/product';
import { Sale } from 'src/app/models/sale';
import { BillService } from 'src/app/services/bill.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.css']
})
export class AddBillComponent implements OnInit {

  productList : Array<Product>;
  saleList: Array<Sale> = new Array;
  total: number = 0;
  lastId: number;
  date: Date;

  constructor(private productService: ProductService, private billService: BillService, public router: Router) { }

  ngOnInit(): void {
    
    if(BillService.lastId == null && BillService.currentlyDate == null) {
      this.router.navigate(['../salesRecord']);
    }
    else{
      this.lastId = BillService.lastId;
      this.date = BillService.currentlyDate;
    }

    this.productService.getAll()
      .then(response => {
        this.productList = response;
      })
      .catch(error => console.log(error))
  }

  productForm = new FormGroup({
    product: new FormControl('', [ Validators.required]),
    quantity: new FormControl(1, [ Validators.required, CustomValidator.positiveNumbersOnly()])
  });

  get product() { return this.productForm.get('product'); }
  get quantity() { return this.productForm.get('quantity'); }

  onSubmitAddToBill() {
    let subtotal = this.product.value.costUnit * this.quantity.value;
    let sale : Sale = new Sale(null, this.product.value, this.quantity.value, subtotal, null);
    this.saleList.push(sale);
    
    this.total = this.total + subtotal;
  }

  onButtonDelete(saleToDelete: Sale) {
    let i = this.saleList.indexOf(saleToDelete);
    this.saleList.splice(i,1);
    this.total = this.total - saleToDelete.subtotal;
  }

  onClickFinishBill() {
    let bill : Bill = new Bill(null,this.saleList,this.date,this.total);
    this.billService.add(bill)
    .then(response=> {
      BillService.lastId = null;
      BillService.currentlyDate = null;
      console.log(response);
      this.router.navigate(['../salesRecord']);
    })
    .catch(error=>console.log(error));
  }

}


