import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {ProductType} from "../types/product.type";
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public static searchInput: string = '';

  public static subjectSearchInput: Subject<string>;


  constructor(private http: HttpClient) {
    ProductService.subjectSearchInput = new Subject<string>();
  }

  // getProducts():Observable<ProductType[]>{
  //   return this.http.get<ProductType[]>('https://testologia.site/tea')
  // }

  getProductsWithFilter(filter: string): Observable<ProductType[]> {
    return this.http.get<ProductType[]>('https://testologia.ru/tea' + (filter ? ('?search=' + filter) : ''))
    // return HttpService.teaWithFilter(filter)
  }


  getProduct(id: number | string | null) {

    if (id) {
      if (typeof id === 'number') {
        id = id.toString();
      }
      return this.http.get<ProductType>(`https://testologia.site/tea?id=${id}`)
      // return HttpService.teaProduct(id);
    }
    return null;
  }


}
