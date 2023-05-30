import {Component, OnInit} from '@angular/core';
import {ProductType} from "../../../types/product.type";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  // @Input() product!: ProductType;

  public product!: ProductType;


  ngOnInit() {

    // $('html, body').animate({ scrollTop: 0 }, 'fast');

    const productStr: string | null = window.localStorage.getItem("product");

    if (productStr) {
      this.product = JSON.parse(productStr);

    }
  }

}
