import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {ProductType} from "../../../types/product.type";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

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

    // Если всё из конструктора перенести в OnInit, то поиск из главной страницы не будет работать.

    console.log('on init started')

    this.loading = true;

    this.subscription = ProductService.subjectSearchInput.subscribe({
      next: (value) => {

        console.log('got it')
        this.searchValue = value;
        this.renderProducts();
      }
    })

    if (!this.searchValue) {
      this.renderProducts();
    }

    console.log('on init finished')

  }


  ngOnInit() {


  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  renderProducts() {
    this.productService.getProductsWithFilter(this.searchValue).subscribe({
      next: (products) => {

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

      },
      error: () => {
        this.loading = false;
        this.router.navigate(['']);
      }
    })
  }


}
