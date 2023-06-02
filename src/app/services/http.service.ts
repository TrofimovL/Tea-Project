import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductType} from "../types/product.type";

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>('https://testologia.site/tea')
  }

  teaWithFilter(filter: string): Observable<ProductType[]> {
    return this.http.get<ProductType[]>('https://testologia.ru/tea' + (filter ? ('?search=' + filter) : ''))
  }


  teaProduct(id: number | string): Observable<ProductType> {
    return this.http.get<ProductType>(`https://testologia.site/tea?id=${id}`)
  }


  orderTea(body: Object):Observable<Object> {
    return this.http.post('https://testologia.site/order-tea', body)
  }

}
