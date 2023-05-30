import {Component} from '@angular/core';
import {Subject} from "rxjs";
import {Router} from "@angular/router";
import {ProductService} from "../../../services/product.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  searchValue: string = ''

  public static subject: Subject<string>;

  constructor(private router: Router) {
    HeaderComponent.subject = new Subject<string>();
  }

  searchProducts() {
    console.log(1)
    ProductService.searchInput = this.searchValue;
    // console.log(ProductService.subjectSearchInput)
    ProductService.subjectSearchInput.next(this.searchValue)


    console.log(3)


    // HeaderComponent.subject.next(this.searchValue);

    this.router.navigate(['/catalog']);
    console.log(4)



    // ProductService.searchInput = '';

  }

}
