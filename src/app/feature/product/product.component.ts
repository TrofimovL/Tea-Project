import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {ProductService} from "../../core/services/product.service";
import {Subscription, switchMap} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {

  public product!: ProductType;

  public loading: boolean = false;

  private subscription: Subscription | undefined;

  private querySubscription: Subscription | undefined;



  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {
  }


  ngOnInit() {

    this.loading = true;

    this.querySubscription = this.activatedRoute.queryParams
      .pipe(
        switchMap((queryParams) => {
          return this.productService.getProduct(queryParams['id']);
        })
      )
      .subscribe((product:ProductType) => {

        this.product = product;
        this.loading = false;
      })

  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

}
