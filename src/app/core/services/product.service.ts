import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {ProductType} from "../../../types/product.type";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public subj: BehaviorSubject<string> = new BehaviorSubject<string>('');


  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>('https://testologia.site/tea')
  }

  getProductsWithFilter(filter: string): Observable<ProductType[]> {
    return this.http.get<ProductType[]>('https://testologia.ru/tea' + (filter ? ('?search=' + filter) : ''))
  }


  getProduct(id: string): Observable<ProductType> {
    return this.http.get<ProductType>(`https://testologia.site/tea?id=${id}`)
  }

  sendOrder(formBody: any):Observable<Object>{
    return this.http.post('https://testologia.site/order-tea', formBody);
  }


}
