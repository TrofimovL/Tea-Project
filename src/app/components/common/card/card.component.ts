import {Component, Input} from '@angular/core';
import {ProductType} from "../../../types/product.type";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() product!: ProductType;

  productLocalStorage(){
    window.localStorage.setItem("product", JSON.stringify(this.product));
  }


}
