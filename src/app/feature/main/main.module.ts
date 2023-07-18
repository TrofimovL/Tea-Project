import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import {MainComponent} from "./main/main.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    MainComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    MainRoutingModule,
    NgOptimizedImage
  ]
})
export class MainModule { }
