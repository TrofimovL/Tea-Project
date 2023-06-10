import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaxWordsPipe} from "./pipes/max-words.pipe";
import {RouterModule} from "@angular/router";
import {CardComponent} from "./card/card.component";


@NgModule({
  declarations: [
    MaxWordsPipe,
    CardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    MaxWordsPipe,
    CardComponent,
  ]
})
export class  SharedModule { }
