import {Component, OnDestroy, OnInit} from '@angular/core';
import {delay, Observable, Subscription} from "rxjs";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  private observable: Observable<number> = new Observable<number>((observer)=>{observer.next()});
  private subscription: Subscription | null = null;

  public showPopup: boolean = false;


  constructor() {
  }



  ngOnInit() {

    this.subscription = this.observable.pipe(delay(10000)).subscribe({
      next: () => {
        this.showPopup = true;
      }
    })
  }

  closePopup() {
    this.showPopup = false;
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
