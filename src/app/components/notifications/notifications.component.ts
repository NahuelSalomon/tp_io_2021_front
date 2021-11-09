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

    return p.avgDemand* (p.supplier.reviewPeriod * p.supplier.leadTime) + 0.11 * (Math.sqrt((p.supplier.reviewPeriod * p.supplier.leadTime) * p.disDemand)) - p.stock;
  }

  quantityToOrderQ (p : Product) : number{

    return Math.sqrt((2 * p.avgDemand * 365 * p.costOfPreparing) / p.storageCost);
  }

}
