import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from 'src/app/common/custom-validator';
import { Product } from 'src/app/models/product';
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
    model: new FormControl('', [ Validators.required]),
    scanNumber: new FormControl('', [Validators.required], [CustomValidator.scanNumberExists(this.productService)] ),
    stock: new FormControl('', [ Validators.required, CustomValidator.positiveNumbersOnly()]),
    costUnit: new FormControl('', [ Validators.required, CustomValidator.positiveNumbersOnly()]),
    levelService: new FormControl('', [ Validators.required]),
    costOfPreparing : new FormControl('', [ Validators.required, CustomValidator.positiveNumbersOnly()]),
    storageCost : new FormControl('', [ Validators.required, CustomValidator.positiveNumbersOnly()]),
    description : new FormControl('', [ Validators.required])
  });

  get supplier() { return this.productForm.get('supplier'); }
  get model() { return this.productForm.get('model'); }
  get scanNumber() { return this.productForm.get('scanNumber'); }
  get stock() { return this.productForm.get('stock'); }
  get costUnit() { return this.productForm.get('costUnit'); }
  get levelService() { return this.productForm.get('levelService'); }
  get costOfPreparing() { return this.productForm.get('costOfPreparing'); }
  get storageCost() { return this.productForm.get('storageCost'); }
  get description() { return this.productForm.get('description'); }





  supplierList : Array<Supplier>;

  ngOnInit(): void {
    this.supplierService.getAll()
      .then(response => {
        this.supplierList = response;
      })
      .catch(error=>console.log(error));
  }

  onSubmit() {

    let scan: string = this.scanNumber.value;
    let model: string = this.model.value;
    let description: string = this.description.value;
    let costUnit: number = this.costUnit.value;
    let costOfPreparing: number = this.costOfPreparing.value;
    let storageCost: number = this.storageCost.value;
    let stock: number = this.storageCost.value;
    let serviceLevel: number = this.levelService.value;
    let supplierId: number = this.supplier.value;
    let supplier: Supplier = new Supplier();
    this.supplierService.getById(supplierId)
      .then(response=>{
        supplier = response;
        let product = new Product(null, scan, model, description, supplier, costUnit, costOfPreparing, storageCost, stock, 0, serviceLevel, 0, 0, 0, 0);
        this.productService.add(product)
          .then(response=>console.log(response))
          .catch(error=>console.log(error))
      })
      .catch(error=>console.error(error));        
  }

}
