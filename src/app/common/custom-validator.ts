import { AbstractControl, AsyncValidatorFn, ValidatorFn } from "@angular/forms";
import { ProductService } from "../services/product.service";

export class CustomValidator {

    static forbiddenWords(regExp : RegExp): ValidatorFn {

        return(control: AbstractControl): {[key:string]: any} | null => {
            const forbidden = regExp.test(control.value);

            return forbidden ? { 'lettersOnly': {value: control.value}} : null;
        };

    }
    
    static lettersOnly(): ValidatorFn {
        let regExp: RegExp = /^[a-zA-Z\s]*$/;

        return(control: AbstractControl): {[key:string]: any} | null => {
            const lettersOnly = regExp.test(control.value);

            return !lettersOnly ? { 'lettersOnly': {value: control.value}} : null;
        };

    }

    static scanNumberExists(productService: ProductService) : AsyncValidatorFn {
        return (control : AbstractControl) : Promise<{[key:string]: any} | null> => {
            if(control.value == '') {
                return null!;
            } else {
                return productService.getByScan(control.value)
                    .then(response => {
                        return response ? { 'ScanNumberExists': { value: control.value}} : null;
                    })
            }

        }
    }

}


