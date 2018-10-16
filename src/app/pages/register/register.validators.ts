import { AbstractControl } from '@angular/forms';

export class RegisterValidators {
  static checkPassword( control: AbstractControl ) {
    const regexPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;
    const isValid = regexPassword.test( control.value );
    return isValid ? null : { invalidPassword: true };
  }
}
