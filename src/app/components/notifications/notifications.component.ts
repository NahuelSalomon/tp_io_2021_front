import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  toOrderP : Array<Product> = new Array();
  toOrderQ : Array<Product> = new Array();
  
  constructor(private productService : ProductService) { }

  ngOnInit(): void {

    this.productService.getProductsInReviewPeriod()
      .then(response=> this.toOrderP = response)
      .catch(error=> console.log(error));

    this.productService.getProductsReachedReorderPoint()
      .then(response=> this.toOrderQ = response)
      .catch(error=> console.log(error));
  }

  quantityToOrderP (p : Product) : number{

    /* let oTL = Math.sqrt((p.supplier.reviewPeriod * p.supplier.leadTime) * p.disDemand);
    if (oTL == 0)
      oTL = 1;
    let ez = (p.avgDemand * p.supplier.reviewPeriod * (1-p.serviceLevel)) / oTL;
    let z = 0;    
    console.log(oTL);
    console.log(ez);
    this.productService.getZFromBrownTable(ez)
      .then(response=> z = response)
      .catch(error=> console.log(error));

    return p.avgDemand* (p.supplier.reviewPeriod * p.supplier.leadTime) + z * oTL - p.stock; */
    return 111;
  }

  quantityToOrderQ (p : Product) : number{

    return Math.sqrt((2 * p.avgDemand * 365 * p.costOfPreparing) / p.storageCost);
  }

}
