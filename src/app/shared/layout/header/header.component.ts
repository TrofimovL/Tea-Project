import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {ProductService} from "../../../core/services/product.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  searchValue: string = ''

  constructor(private router: Router, private productService: ProductService) {
  }

  searchProducts() {
    this.router.navigate(['/catalog']);
    this.productService.subj.next(this.searchValue);

  }

}
