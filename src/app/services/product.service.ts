import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

}
