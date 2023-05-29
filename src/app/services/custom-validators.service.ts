import { Injectable } from '@angular/core';
import {AbstractControl, ValidationErrors} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorsService {

  static onlyLettersValidator(control: AbstractControl):ValidationErrors | null{
    const result: boolean = /^[a-zA-Zа-яА-Я]+$/.test(control.value);
    return result ? null : {letters: {value: control.value}};
  }

  static phoneNumberValidator(control: AbstractControl): ValidationErrors | null{
    const result: boolean= /^\+?[0-9]{11}$/.test(control.value);
    return result ? null : {phone: {value: control.value}};
  }

  static addressValidator(control: AbstractControl): ValidationErrors | null{
    const result: boolean = /^[0-9a-zA-Zа-яА-Я\s\\\/\-]+$/.test(control.value);
    return result ? null : {address: {value: control.value}};
  }

}
