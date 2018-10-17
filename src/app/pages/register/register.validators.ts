import { AbstractControl } from '@angular/forms';

export class RegisterValidators {
  static checkPassword( control: AbstractControl ) {
    const regexPassword = /^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})(?=.*[!@#$%^&*]{1})\S{6,}$/;
    const isValid = regexPassword.test( control.value );
    return isValid ? null : { invalidPassword: true };
  }
}


