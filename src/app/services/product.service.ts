import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiURL : string = "http://localhost:8080";

  constructor(private http : HttpClient) { }

  //Para que funcione iniciar la app con "npm start" y no con "ng serve"
  getAll() : Promise<any> {
    return this.http.get("/api/product/").toPromise();
  }

  getByScan(scan: string) : Promise<any> {
    return this.http.get("/api/product/scan/"+scan).toPromise();
  }

  add(product : Product) : Promise<any> {

    const httpOptions = {
     headers : new HttpHeaders({
       'Content-Type' : 'application/json'
     })
   };

   return this.http.post("/api/product/", product, httpOptions).toPromise(); 
 }

 updateStock(scan: string, movement: number) : Promise<any>  {
  const httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };

  return this.http.put(`/api/product/scan/${scan}/stock/${movement}`, httpOptions).toPromise(); 
 }

}
