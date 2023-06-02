import {Component, OnInit} from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {ProductService} from "../../../services/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public product!: ProductType;

  public loading: boolean = false;


  constructor(
    private productService: ProductService,
  ) {
  }


  ngOnInit() {

    this.loading = true;

    const id = window.location.href.split('catalog/')[1];

    if (id) {
      this.productService.getProduct(id)?.subscribe({
        next: (product: ProductType) => {
          this.product = product;
          this.loading = false;
        }
      })
    }

  }

}
