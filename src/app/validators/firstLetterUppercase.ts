import { AbstractClassPart } from "@angular/compiler/src/output/output_ast";
import { AbstractControl, ValidatorFn } from "@angular/forms";

export function firstLetterUppercase(): ValidatorFn{
    return (control:AbstractControl) =>{
        const value = <string>control.value; // casting value of control to string
        if (!value) return;
        if(value.length === 0) return;

        const firstletter = value[0]; // the first letter of the string
        if (firstletter !== firstletter.toUpperCase()){
            return {firstLetterUppercase:{ // this ie the object that represents an error
                message: 'The first letter must be uppercase'
            }

            }

        }
        return;
    }
    
}