import {AfterViewInit, Component, OnDestroy} from '@angular/core';
import {Observable, Subscription} from "rxjs";



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit, OnDestroy {

  private observable: Observable<number>;
  private subscription: Subscription | null = null;

  private popup: JQuery | null = null;
  private body: JQuery | null = null;


  constructor() {


    this.observable = new Observable<number>((observer) => {
      let count = 0;

      const interval = setInterval(() => {
        observer.next(count++);
      }, 10000);

      const timeout = setTimeout(() => {
        observer.complete();
      }, 10000);

      return {
        unsubscribe() {
          clearInterval(interval);
          clearTimeout(timeout);
        }
      }


    })
  }


  ngAfterViewInit() {

    this.subscription = this.observable.subscribe({
      next: () => {

        this.popup = $('#modalWindow');
        this.body = $('body');

        this.showPopup();

        $('.modalClose').click('click', () => {
          this.closePopup()
        })


      }
    })
  }


  showPopup() {

    this.popup?.css({'display': 'block', 'role': 'dialog', 'background-color': 'rgba(0,0,0,0.56)'})
    setTimeout(() => {
      this.popup?.addClass('show')
    }, 100)

    this.body?.addClass('modal-open')
    this.body?.css({'padding-right': '15px'})
  }


  closePopup() {
    this.popup?.removeClass('show')

    setTimeout(() => {
      this.popup?.css({'display': 'none', 'background-color': 'rgba(0,0,0,0)'})
    }, 100)

    this.body?.removeClass('modal-open')
    this.body?.css({'padding-right': '0'})
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }


}
