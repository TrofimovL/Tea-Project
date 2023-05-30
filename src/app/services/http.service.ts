import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductType} from "../types/product.type";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  static http: HttpClient;

  constructor() {
  }

  static getProducts():Observable<ProductType[]>{
    return this.http.get<ProductType[]>('https://testologia.site/tea')
  }

  static teaWithFilter(filter: string): Observable<ProductType[]> {
    return this.http.get<ProductType[]>('https://testologia.ru/tea' + (filter ? ('?search=' + filter) : ''))
  }


  static teaProduct(id: string) {
      return this.http.get<ProductType>(`https://testologia.site/tea?id=${id}`)
  }


  static orderTea(body: Object) {
    return this.http.post('https://testologia.site/order-tea', body)
  }

}
