import { Component } from '@angular/core';
import {Subject} from "rxjs";
import {Router} from "@angular/router";

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

  async searchProducts(){

    await this.router.navigate(['/catalog']);

    HeaderComponent.subject.next(this.searchValue);

  }

}
