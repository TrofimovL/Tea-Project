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

  async searchProducts() {
    console.log(1)
    await this.router.navigate(['/catalog']);
    console.log(2)
    // ProductService.searchInput = this.searchValue;
    ProductService.subjectSearchInput.next(this.searchValue)
    console.log(3)

  }

}
