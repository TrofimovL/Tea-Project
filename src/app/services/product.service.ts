import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductType} from "../types/product.type";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(filter:string = ''):Observable<ProductType[]>{
    return this.http.get<ProductType[]>('https://testologia.site/tea' + (filter ? ('?search=' + filter) : ''))
  }





}
