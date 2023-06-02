import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {ProductType} from "../types/product.type";
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public subj: BehaviorSubject<string> = new BehaviorSubject<string>('');


  constructor(private httpService: HttpService) {
  }

  getProducts(): Observable<ProductType[]> {
    return this.httpService.getProducts();
  }

  getProductsWithFilter(filter: string): Observable<ProductType[]> {
    return this.httpService.teaWithFilter(filter);
  }


  getProduct(id: number | string): Observable<ProductType> {
    return this.httpService.teaProduct(id);
  }


}
