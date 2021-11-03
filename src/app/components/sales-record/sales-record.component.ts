import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from 'src/app/common/custom-validator';
import { Bill } from 'src/app/models/bill';
import { BillService } from 'src/app/services/bill.service';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-sales-record',
  templateUrl: './sales-record.component.html',
  styleUrls: ['./sales-record.component.css']
})
export class SalesRecordComponent implements OnInit {

  billWithlastId : number;

  /*
  @Output()
  lastIdBill: EventEmitter<Bill> = new EventEmitter<Bill>();
  @Output()
  dateBill: EventEmitter<Date> = new EventEmitter<Date>();*/

  constructor(private productService: ProductService, private billService: BillService) { }

  ngOnInit(): void {
    this.billService.getLastId()
      .then(response => {
        console.log(response);
        this.billWithlastId = response.id + 1;
      })
      .catch(error => console.log(error));
  }

  dateForm = new FormGroup({
    date: new FormControl('', [ Validators.required])
  });

  get date() { return this.dateForm.get('date'); }

  onClick() {
    
      BillService.lastId = this.billWithlastId;
      BillService.currentlyDate = this.date.value;
  }

}
