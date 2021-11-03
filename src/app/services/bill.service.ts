import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bill } from '../models/bill';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  static lastId: number = null;
  static currentlyDate: Date = null;

  constructor(private http : HttpClient) {
  }

  getAll() : Promise<any> {
    return this.http.get("/api/bill/").toPromise();
  }

  getLastId() : Promise<any> {
    return this.http.get("/api/bill/lastId").toPromise();
  }

  add(bill: Bill) : Promise<any> {

    const httpOptions = {
     headers : new HttpHeaders({
       'Content-Type' : 'application/json'
     })
   };

   return this.http.post("/api/bill/", bill, httpOptions).toPromise(); 
 }


}
