import { AbstractControl, AsyncValidatorFn, ValidatorFn } from "@angular/forms";
import { ProductService } from "../services/product.service";

export class CustomValidator {

    static forbiddenWords(regExp : RegExp): ValidatorFn {

        return(control: AbstractControl): {[key:string]: any} | null => {
            const forbidden = regExp.test(control.value);

            return forbidden ? { 'forbidden': {value: control.value}} : null;
        };

    }
    
    static lettersOnly(): ValidatorFn {
        let regExp: RegExp = /^[a-zA-Z\s]*$/;

        return(control: AbstractControl): {[key:string]: any} | null => {
            const lettersOnly = regExp.test(control.value);

            return !lettersOnly ? { 'lettersOnly': {value: control.value}} : null;
        };

    }

    static positiveNumbersOnly(): ValidatorFn {
        let regExp: RegExp = /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)(?:[eE][+-]?[0-9]+)*$/;

        return(control: AbstractControl): {[key:string]: any} | null => {
            const positiveNumbersOnly = regExp.test(control.value);
            /* let positiveNumbersOnly = false;
            if(Number.isInteger(control.value)) {
                if(control.value > 0) {
                    positiveNumbersOnly = true;
                }
            } */

            return !positiveNumbersOnly ? { 'positiveNumbersOnly': {value: control.value}} : null;
        };

    }

    static scanNumberExists(productService: ProductService) : AsyncValidatorFn {
        
        return (control : AbstractControl) : Promise<{ [key: string]: any } | null> => {
            if(control.value == '') {
                return null!;
            } else {
                return productService.getByScan(control.value)
                    .then(response => {
                        return response ? { 'scanNumberExists': { value: control.value}} : null;
                    })
            }

        };
    }
    /*
        static emailExists(studentService: StudentAsyncService): AsyncValidatorFn {       
        return (control: AbstractControl): Promise<{ [key: string]: any } | null> => {
          if (control.value == '') {
            return null;
          }
          else {
            return studentService.getByEmail(control.value)
                .then(response => {
                    return response ? { 'emailExists': { value: control.value } } : null;
                })
          }                  
        };
      }
    */

}


