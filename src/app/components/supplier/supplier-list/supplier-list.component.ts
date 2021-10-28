import { Component, OnInit } from '@angular/core';
import { Supplier } from 'src/app/models/supplier';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent implements OnInit {

  supplierList : Array<Supplier>;

  constructor(private supplierService : SupplierService) { }

  ngOnInit(): void {
    
    this.supplierService.getAll()
      .then(response => {
          this.supplierList = response;
      })
      .catch(error => console.log(error));

  }

}
