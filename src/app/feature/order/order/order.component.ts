import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ProductType} from "../../../../types/product.type";
import {CustomValidatorsService} from "../../../core/services/custom-validators.service";
import {ProductService} from "../../../core/services/product.service";
import {HttpClient} from "@angular/common/http";
import {Subscription, switchMap} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy{

  product: ProductType | null = null;

  private subscription: Subscription | undefined;

  isValid: boolean = true;
  errorOccurred: boolean = false;
  successfulResponse: boolean = false;

  inProcess: boolean = false;

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

  get name() {
    return this.form.get('name')
  }

  get last_name() {
    return this.form.get('last_name')
  }


  get phone() {
    return this.form.get('phone')
  }


  get country() {
    return this.form.get('country')
  }


  get zip() {
    return this.form.get('zip')
  }

  get address() {
    return this.form.get('address')
  }


  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private productService: ProductService,
              private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    $('html, body').animate({scrollTop: 0});

    this.subscription = this.activatedRoute.params
      .pipe(
        switchMap((params) => {
          return this.productService.getProduct(params['id']);
        })
      )
      .subscribe(product => {
        this.product = product;
        this.form.patchValue({
          product: this.product?.title
        })
      });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }


  formButtonClick():void {
    if (this.form.valid
    ) {
      this.sendRequest();
    } else {
      this.isValid = false;
    }
  }

  sendRequest(): void {

    this.inProcess = true;

    this.productService.sendOrder(this.form.value).subscribe({
      next: () => {
        $('html, body').animate({scrollTop: 0});

        this.isValid = true;
        this.errorOccurred = false;
        this.successfulResponse = true;
        this.inProcess = false;

        this.removeFormSmoothly();

      },
      error: () => {
        this.errorOccurred = true;
        this.successfulResponse = false;
        this.inProcess = false;

        setTimeout(() => {
          this.errorOccurred = false;
        }, 3000)
      }
    })
  }


  removeFormSmoothly():void {
    const form = $('form');
    form.addClass('successfulResponse');
    form.fadeOut(2000);
  }

}
