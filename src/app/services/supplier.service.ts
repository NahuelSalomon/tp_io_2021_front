import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Supplier } from '../models/supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private apiURL : string = "http://localhost:8080";

  constructor(private http : HttpClient) { }

  getAll() : Promise<any> {
    return this.http.get("/api/supplier/").toPromise();
  }

  getById(id: number) : Promise<any> {
    return this.http.get("/api/supplier/"+id).toPromise();
  }

  add(supplier :Supplier) : Promise<any> {

    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    };
    return this.http.post("/api/supplier/", supplier, httpOptions).toPromise();
  }
  
}
