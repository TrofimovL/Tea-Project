import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "./shared/shared.module";
import {FeatureModule} from "./feature/feature.module";
import {CoreModule} from "./core/core.module";
import {HeaderComponent} from "./shared/layout/header/header.component";
import {FooterComponent} from "./shared/layout/footer/footer.component";
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
registerLocaleData(localeRu);
import * as $ from "jquery";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    CoreModule,
    SharedModule,
    FeatureModule,

    AppRoutingModule,
    FormsModule,
  ],
  providers:[{
      provide: LOCALE_ID,
      useValue: 'ru-RU'
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
