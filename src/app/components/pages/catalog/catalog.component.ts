import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {ProductType} from "../../../types/product.type";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";
import {HeaderComponent} from "../../common/header/header.component";

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

    this.loading = true;

    this.subscription = HeaderComponent.subject.subscribe({
      next: (value) => {
        this.searchValue = value;
        console.log('search')
        this.renderProducts();
      }
    })

    console.log(this.searchValue)

    if (!this.searchValue) {
      console.log('default')

      this.renderProducts();
    }

    this.searchValue = '';
  }


  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  renderProducts() {
    this.productService.getProducts(this.searchValue).subscribe({
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
