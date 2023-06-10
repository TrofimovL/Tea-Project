import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomValidatorsService} from "./services/custom-validators.service";
import {ProductService} from "./services/product.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    CustomValidatorsService,
    ProductService
  ]
})
export class CoreModule { }
