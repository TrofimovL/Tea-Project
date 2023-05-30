import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/pages/main/main.component';
import { CardComponent } from './components/common/card/card.component';
import { CatalogComponent } from './components/pages/catalog/catalog.component';
import { ProductComponent } from './components/pages/product/product.component';
import { OrderComponent } from './components/pages/order/order.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import {NgOptimizedImage} from "@angular/common";
import {ProductService} from "./services/product.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { MaxWordsPipe } from './pipes/max-words.pipe';

// declare var $: any;
import * as $ from "jquery";
import { NotFoundComponent } from './components/pages/not-found/not-found.component'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CardComponent,
    CatalogComponent,
    ProductComponent,
    OrderComponent,
    HeaderComponent,
    FooterComponent,
    MaxWordsPipe,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    // FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
