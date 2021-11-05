import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from 'src/app/common/custom-validator';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add-stock',
  templateUrl: './product-add-stock.component.html',
  styleUrls: ['./product-add-stock.component.css']
})
export class ProductAddStockComponent implements OnInit {

  productList : Array<Product>;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAll()
      .then(response => {
        this.productList = response;
      })
      .catch(error => console.log(error));
  }

  productForm = new FormGroup({
    product: new FormControl('', [ Validators.required]),
    stock: new FormControl('', [ Validators.required, CustomValidator.positiveNumbersOnly()])
  });

  get product() { return this.productForm.get('product'); }
  get stock() { return this.productForm.get('stock'); }

  onSubmit() { 
    this.productService.updateStock(this.product.value.scan,this.stock.value);
    
  }

  showScanned(reading : Product){
    
    this.productForm.controls['product'].setValue(reading);
  }

}
