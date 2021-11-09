import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef  } from '@angular/core';
import Quagga from 'quagga';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-scan',
  templateUrl: './product-scan.component.html',
  styleUrls: ['./product-scan.component.css']
})

export class ProductScanComponent implements OnInit{

  errorMessage: string;
  notFound : boolean;
  @Output()
  reading = new EventEmitter<Product>();

  constructor(private productService : ProductService) {
    //this.notFound = false;
  }
 
  ngOnInit() {

    Quagga.init({   //Inicialización de quagga, módulo para leer códigos de barra
        inputStream: {
          constraints: {
            facingMode: 'environment' // restrict camera type
          },
          area: { // defines rectangle of the detection
            top: '40%',    // top offset
            right: '0%',  // right offset
            left: '0%',   // left offset
            bottom: '40%'  // bottom offset
          },
        },
        decoder: {
          readers: ['ean_reader'] // restrict code types
        },
      },
      (err: any) => {
        if (err) {
          this.errorMessage = `QuaggaJS could not be initialized, err: ${err}`;
        } else {
          Quagga.start();
          Quagga.onDetected((res : any) => {
            this.productService.getByScan(res.codeResult.code)
            .then(response =>{
              if(response == null){
                this.notFound = true;
              }else{
                this.reading.emit(response);
                document.getElementById('scanModal').click();
              }
            })
            .catch(error=>{
              console.log(error)})
          })
        }
      });
  }






}
