import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
  
}
