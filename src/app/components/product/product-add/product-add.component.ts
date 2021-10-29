import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from 'src/app/common/custom-validator';
import { Supplier } from 'src/app/models/supplier';
import { ProductService } from 'src/app/services/product.service';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  constructor(private productService: ProductService,private supplierService: SupplierService) { }

  productForm = new FormGroup({
    supplier: new FormControl('', [ Validators.required]),
    model: new FormControl('', [ Validators.required, CustomValidator.lettersOnly()]),
    scanNumber: new FormControl('', [ Validators.required ]),
    stock: new FormControl('', [ Validators.required]),
    costUnit: new FormControl('', [ Validators.required]),
    levelService: new FormControl('', [ Validators.required])
  });

  get supplier() { return this.productForm.get('supplier'); }
  get model() { return this.productForm.get('model'); }
  get scanNumber() { return this.productForm.get('scanNumber'); }
  get stock() { return this.productForm.get('stock'); }
  get costUnit() { return this.productForm.get('costUnit'); }
  get levelService() { return this.productForm.get('levelService'); }


  supplierList : Array<Supplier>;

  ngOnInit(): void {
    this.supplierService.getAll()
      .then(response => {
        this.supplierList = response;
      })
      .catch(error=>console.log(error));
  }

  onSubmit() {
    

  }

}
