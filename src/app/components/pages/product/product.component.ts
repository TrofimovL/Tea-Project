import {Component, OnInit} from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {ProductService} from "../../../services/product.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public product!: ProductType;

  private subscription: Subscription | null = null;

  constructor(
    private productService: ProductService,
  ) {
  }


  ngOnInit() {

    const id = window.location.href.split('catalog/')[1];

    if (id) {
      this.productService.getProduct(id)?.subscribe({
        next: (product) => {
          this.product = product;
        }
      })
    }


    // this.productService.getProduct(window.localStorage.getItem("productId"))?.subscribe({
    //     next: (product)=>{
    //       this.product = product;
    //     }
    //   })


    // const productStr: string | null = window.localStorage.getItem("product");
    //
    // if (productStr) {
    //   this.product = JSON.parse(productStr);
    // }
  }

}
