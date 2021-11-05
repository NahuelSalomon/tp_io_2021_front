import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomValidator } from 'src/app/common/custom-validator';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  constructor(private productService :ProductService, private route :ActivatedRoute, public router: Router) { }

  product : Product;
  suggestedModel : string;

  productEditForm = new FormGroup({
    supplier: new FormControl({value:'', disabled: true}),
    model: new FormControl('', [ Validators.required]),
    scanNumber: new FormControl({value: '', disabled: true}),
    stock: new FormControl('', [ Validators.required, CustomValidator.positiveNumbersOnly()]),
    costUnit: new FormControl('', [ Validators.required, CustomValidator.positiveNumbersOnly()]),
    levelService: new FormControl('', [ Validators.required]),
    costOfPreparing : new FormControl('', [ Validators.required, CustomValidator.positiveNumbersOnly()]),
    storageCost : new FormControl('', [ Validators.required, CustomValidator.positiveNumbersOnly()]),
    description : new FormControl('', [ Validators.required]),
    modelType : new FormControl('', [ Validators.required])
  });

  get supplier() { return this.productEditForm.get('supplier'); }
  get model() { return this.productEditForm.get('model'); }
  get scanNumber() { return this.productEditForm.get('scanNumber'); }
  get stock() { return this.productEditForm.get('stock'); }
  get costUnit() { return this.productEditForm.get('costUnit'); }
  get levelService() { return this.productEditForm.get('levelService'); }
  get costOfPreparing() { return this.productEditForm.get('costOfPreparing'); }
  get storageCost() { return this.productEditForm.get('storageCost'); }
  get description() { return this.productEditForm.get('description'); }
  get modelType() {return this.productEditForm.get('modelType')}


  ngOnInit(): void {
    let productId = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getById(productId)
      .then(response=> {

        this.product = response;
        
        this.productEditForm.setValue({
          supplier: this.product.supplier.name,
          model: this.product.model,
          scanNumber: this.product.scan,
          stock: this.product.stock,
          levelService: this.product.serviceLevel,
          costUnit: this.product.costUnit,
          costOfPreparing: this.product.costOfPreparing,
          storageCost: this.product.storageCost,
          description : this.product.description,
          modelType : this.product.modelType
        });
      })
      .catch(error=>console.log(error))

    this.productService.getSuggestedModel(productId)
      .then(response=> {
        if (response == "Q_MODEL")
          this.suggestedModel = "Q Model";
        else
          this.suggestedModel = "P Model"; 
      })
      .catch(error=>console.log(error));

      console.log()
  }


   onSubmit(){

    let model: string = this.model.value;
    let description: string = this.description.value;
    let costUnit: number = this.costUnit.value;
    let costOfPreparing: number = this.costOfPreparing.value;
    let storageCost: number = this.storageCost.value;
    let stock: number = this.stock.value;
    let serviceLevel: number = this.levelService.value;
    let modelType: number = this.modelType.value;
    this.product.model = model;
    this.product.description = description;
    this.product.costUnit = costUnit;
    this.product.costOfPreparing = costOfPreparing;
    this.product.storageCost = storageCost;
    this.product.stock = stock;
    this.product.serviceLevel = serviceLevel;
    this.product.modelType = modelType;
    
    console.log(this.product);
    

    this.productService.updateProduct(this.product.id, this.product)
      .then(response=>{ 
        console.log(response)   
        this.router.navigate(['product/list']);
      })
      .catch(error=>console.log(error));
  }

}
