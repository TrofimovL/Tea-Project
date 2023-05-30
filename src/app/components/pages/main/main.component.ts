import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {delay, Observable, Subscription} from "rxjs";
import {ProductService} from "../../../services/product.service";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy, AfterViewInit {

  private observable: Observable<number>;
  private subscription: Subscription | null = null;

  public showPopup: boolean = false;


  constructor() {

    this.observable = new Observable<number>((observer) => {

      // const timeout = setTimeout(() => {
      //   observer.complete();
      // }, 5000);

      observer.next();

      return {
        unsubscribe() {
          // clearTimeout(timeout);
        }
      }


    })
  }

  ngAfterViewInit() {



  }


  ngOnInit() {

    this.subscription = this.observable.pipe(delay(500000)).subscribe({
      next: () => {
        this.showPopup = true;
      }
    })

    // console.log(ProductService.observablePopup);
    //
    // this.subscription = ProductService.observablePopup
    //   .pipe(delay(5000))
    //   .subscribe({
    //     next: ()=>{
    //       this.showPopup = true;
    //       console.log(111)
    //     }
    //   })


  }

  closePopup() {
    this.showPopup = false;
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }


}
