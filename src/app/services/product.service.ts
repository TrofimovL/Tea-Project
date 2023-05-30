import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {ProductType} from "../types/product.type";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public static searchInput: string = '';

  public static subjectSearchInput: Subject<string>;


  constructor(private http: HttpClient) {
    ProductService.subjectSearchInput = new Subject<string>();
  }

  getProducts(filter:string = ''):Observable<ProductType[]>{
    return this.http.get<ProductType[]>('https://testologia.site/tea' + (filter ? ('?search=' + filter) : ''))
  }






}
