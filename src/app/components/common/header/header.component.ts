import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProductService} from "../../../services/product.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  searchValue: string = ''

  constructor(private router: Router, private productService: ProductService) {
  }

  ngOnInit() {

  }

  searchProducts() {
    this.router.navigate(['/catalog']);
    this.productService.subj.next(this.searchValue);

  }

}
