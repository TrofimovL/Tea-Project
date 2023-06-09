import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {ProductType} from "../../../types/product.type";
import {Router} from "@angular/router";
import {Subscription, switchMap, tap} from "rxjs";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit, OnDestroy {

  public products: ProductType[] = [];
  public loading: boolean = false;
  public pageTitle: string = 'Наши чайные коллекции';

  private subscription: Subscription | null = null;
  private searchValue: string = '';


  constructor(private productService: ProductService, private router: Router) {
  }


  ngOnInit() {

    this.subscription = this.productService.subj
      .pipe(
        tap(() => {
          this.loading = true;
        }),
        switchMap((str: string)=>{
          this.searchValue = str;
          return this.productService.getProductsWithFilter(this.searchValue);
        })
      )
      .subscribe({
        next: (products: ProductType[]) => {

          this.products = Object.values(products);

          if (this.searchValue) {
            if (this.products.length) {
              this.pageTitle = `Результаты поиска по запросу ${this.searchValue}`
            } else {
              this.pageTitle = 'Ничего не найдено'
            }
          } else {
            this.pageTitle = 'Наши чайные коллекции'
          }

          this.loading = false;
          this.searchValue = '';

        },
        error: ()=>{
          this.loading = false;
          this.router.navigate(['']);
        }
      })

  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }


}
