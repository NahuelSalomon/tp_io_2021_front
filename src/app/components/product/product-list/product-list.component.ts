import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService) { }

  productList : Array<Product>;

  ngOnInit(): void {
  
    this.productService.getAll()
    .then(response=>{
      this.productList = response;
      console.log(response);
      
    })
    .catch(error=>console.log(error));
  }

   differentSuggestedModel(product : Product) : boolean {
    if ((product.zone.toString() == "ZONE_A" || product.zone.toString() =="ZONE_B") && product.modelType.toString() == "Q_MODEL")
      return false;
    else if (product.zone.toString() == "ZONE_C" && product.modelType.toString() == "P_MODEL")
      return false;
    return true;
  }

  recalculateParameters(){
    for (const product of this.productList) {
      this.productService.recalculateParameters(product).then(response=>console.log(response)).catch(error=>console.log(error));
    }
    this.productService.getAll()
    .then(response=>{
      this.productList = response;
      console.log(response);
      
    })
    .catch(error=>console.log(error));
  }

}
