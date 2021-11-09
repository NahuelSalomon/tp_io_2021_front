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

  formatDate(entry : Date) : string{

    let date = new Date(entry);
    let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    let month = date.getMonth() <  10 ? "0" + date.getMonth() : date.getMonth();

    return day.toString() + "/" + month.toString() + "/" + date.getFullYear();
  }

}
