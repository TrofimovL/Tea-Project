import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {delay, Observable, Subscription} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  private observable: Observable<void> = new Observable<void>((observer) => {
    observer.next()
  });
  private subscription: Subscription | null = null;

  public showPopup: boolean = false;

  @ViewChild('popup') popup: ElementRef | undefined;


  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
    this.subscription = this.observable.pipe(delay(10e3)).subscribe({
      next: () => {
        this.showPopup = true;
      }
    })
  }


  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  closePopup() {
    this.showPopup = false;

    this.subscription = this.observable.pipe(delay(30e3)).subscribe({
      next: () => {
        this.open(this.popup);
      }
    })
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }


}
