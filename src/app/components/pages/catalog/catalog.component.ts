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


  }


  ngOnInit() {

    this.loading = true;


    console.log(ProductService.searchInput)

    this.subscription = ProductService.subjectSearchInput.subscribe({
      next: (value) => {

        console.log('got it')
        this.searchValue = value;
        this.renderProducts();
      }
    })




    if (!ProductService.searchInput) {

      this.renderProducts();
    }


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
