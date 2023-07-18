import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ReactiveFormsModule} from "@angular/forms";
import {MainModule} from "./main/main.module";
import {OrderModule} from "./order/order.module";
import {ProductsModule} from "./products/products.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    SharedModule,

    MainModule,
    OrderModule,
    ProductsModule,

    FeatureRoutingModule,
    NgOptimizedImage,
    ReactiveFormsModule,
  ],
  exports: [
    FeatureRoutingModule
  ]
})
export class FeatureModule { }
