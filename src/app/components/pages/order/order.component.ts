import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ProductType} from "../../../types/product.type";
import {CustomValidatorsService} from "../../../services/custom-validators.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {

  product: ProductType | null = null;

  isValid: boolean = true;
  errorOccurred: boolean = false;
  successfulResponse: boolean = false;

  inProcess: string | null = null;


  form = this.fb.group({
    title: [''],
    firstName: ['', [Validators.required, CustomValidatorsService.onlyLettersValidator]],
    lastName: ['', [Validators.required, CustomValidatorsService.onlyLettersValidator]],
    phone: ['', [Validators.required, CustomValidatorsService.phoneNumberValidator]],
    country: ['', [Validators.required, CustomValidatorsService.onlyLettersValidator]],
    index: ['', [Validators.required]],
    address: ['', [Validators.required, CustomValidatorsService.addressValidator]],
    comment: [''],
  })

  constructor(private fb: FormBuilder, private http: HttpClient) {

    $('html, body').animate({scrollTop: 0});

    const productStr: string | null = window.localStorage.getItem("product");
    if (productStr) {
      this.product = JSON.parse(productStr);
      this.form.patchValue({
        title: this.product?.title
      })
    }

    // $('#formButton').click(()=>{
    // })

  }

  formButtonClick() {
    if (this.form.valid) {
      this.sendRequest();
    } else {
      this.isValid = false;
    }
  }


  sendRequest() {

    this.inProcess = '';

    const body = {
      name: this.form.get('firstName')?.value,
      last_name: this.form.get('lastName')?.value,
      phone: this.form.get('phone')?.value,
      country: this.form.get('country')?.value,
      zip: this.form.get('index')?.value,
      product: this.form.get('title')?.value,
      address: this.form.get('address')?.value,
      comment: this.form.get('comment')?.value,
    }

    this.http.post('https://testologia.site/order-tea', body)
      .subscribe({
        next: () => {
          this.isValid = true;
          this.errorOccurred = false;
          this.successfulResponse = true;
          this.inProcess = null;

          this.removeFormSmoothly();

        },
        error: () => {
          this.errorOccurred = true;
          this.successfulResponse = false;
          this.inProcess = null;

          setTimeout(()=>{
            this.errorOccurred = false;
          },3000)
        }
      })
  }


  removeFormSmoothly() {
    const form = $('form');
    form.addClass('successfulResponse');
    form.fadeOut(2000);

    // $('html, body').animate({scrollTop: 0}, 'fast');
  }

}
