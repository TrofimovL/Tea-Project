import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import {MainComponent} from "./main/main.component";
import {CatalogComponent} from "./catalog/catalog.component";
import {ProductComponent} from "./product/product.component";
import {OrderComponent} from "./order/order.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    MainComponent,
    CatalogComponent,
    ProductComponent,
    OrderComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    SharedModule,
    FeatureRoutingModule,
    NgOptimizedImage,
    ReactiveFormsModule,
  ],
  exports: [
    FeatureRoutingModule
  ]
})
export class FeatureModule { }
