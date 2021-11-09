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

  getById(id: number) : Promise<any> {
    return this.http.get("/api/product/id/"+id).toPromise();
  }

  getSuggestedModel(id: number) : Promise<any> {
    return this.http.get("/api/product/suggestModel/"+id).toPromise();
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


 /* updateProduct(id : number, product : Product) : Promise<any>  { 
  const httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };
} */

  updateProduct(id : number, product : Product) : Promise<any>  {

    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    };


  return this.http.put("/api/product/"+id, product, httpOptions).toPromise(); 
 }

 
 recalculateParameters(product : Product) : Promise<any>  {
  
  const httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };

  return this.http.put(`/api/product/recalculation/parameters/${product.scan}`, product, httpOptions).toPromise(); 
 }

  getProductsInReviewPeriod() : Promise<any> {
    return this.http.get("/api/product/check/pmodel").toPromise();
  } 

  getProductsReachedReorderPoint() : Promise<any> {
    return this.http.get("/api/product/check/qmodel").toPromise();
  }

  getZFromBrownTable(ez : number) : Promise<any> {
    return this.http.get("/api/product/getz/" + ez).toPromise();
  }
}
