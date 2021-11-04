import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidator } from 'src/app/common/custom-validator';
import { Supplier } from 'src/app/models/supplier';
import { SupplierService } from 'src/app/services/supplier.service';


@Component({
  selector: 'app-supplier-add',
  templateUrl: './supplier-add.component.html',
  styleUrls: ['./supplier-add.component.css']
})
export class SupplierAddComponent {

  constructor(private supplierService :SupplierService) { }

  supplierForm = new FormGroup({
    name: new FormControl('', [ Validators.required]),
    phoneNumber: new FormControl('', [ Validators.required]),
    leadTime: new FormControl('', [ Validators.required, CustomValidator.positiveNumbersOnly()]),
    reviewPeriod: new FormControl('', [ Validators.required, CustomValidator.positiveNumbersOnly()]),
    isPresale: new FormControl('true')
  });

  get name(){ return this.supplierForm.get('name'); }
  get phoneNumber(){ return this.supplierForm.get('phoneNumber'); }
  get leadTime(){ return this.supplierForm.get('leadTime'); }
  get reviewPeriod(){ return this.supplierForm.get('reviewPeriod'); }
  get isPresale(){ return this.supplierForm.get('isPresale'); }

  
  onSubmit(){

    let name :string = this.name.value;
    let phoneNumber :number = this.phoneNumber.value;
    let leadTime :number = this.leadTime.value;
    let reviewPeriod :number = this.reviewPeriod.value;
    let isPresale :boolean = this.isPresale.value;

    let supplier = new Supplier(null, name, phoneNumber, isPresale, leadTime, reviewPeriod, new Date());
    console.log(supplier);
    this.supplierService.add(supplier)
      .then(response=>console.log(response))
      .catch(error=>console.log(error))

  }

}
