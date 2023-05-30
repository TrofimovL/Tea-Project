import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ProductType} from "../../../types/product.type";
import {CustomValidatorsService} from "../../../services/custom-validators.service";
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../../../services/product.service";
import {HttpService} from "../../../services/http.service";

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
    product: [''],
    name: ['', [Validators.required, CustomValidatorsService.onlyLettersValidator]],
    last_name: ['', [Validators.required, CustomValidatorsService.onlyLettersValidator]],
    phone: ['', [Validators.required, CustomValidatorsService.phoneNumberValidator]],
    country: ['', [Validators.required, CustomValidatorsService.onlyLettersValidator]],
    zip: ['', [Validators.required]],
    address: ['', [Validators.required, CustomValidatorsService.addressValidator]],
    comment: [''],
  })

  get name(){
    return this.form.get('name')
  }

  get last_name(){
    return this.form.get('last_name')
  }


  get phone(){
    return this.form.get('phone')
  }


  get country(){
    return this.form.get('country')
  }


  get zip(){
    return this.form.get('zip')
  }

  get address(){
    return this.form.get('address')
  }




  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private productService: ProductService) {

    $('html, body').animate({scrollTop: 0});

    const id = window.location.href.split('order/')[1];
    if (id) {
      this.productService.getProduct(id)?.subscribe({
        next: (product) => {
          this.product = product;
          // console.log(product)
          this.form.patchValue({
            product: this.product?.title
          })
        }
      })
    }
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

    // HttpService.orderTea(this.form.value).subscribe({
    this.http.post('https://testologia.site/order-tea', this.form.value).subscribe({
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
  }

}
