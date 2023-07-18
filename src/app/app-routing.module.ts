import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children:[
      {path: '', loadChildren: ()=> import('./feature/main/main.module').then(m => m.MainModule)},
      {path: 'catalog', loadChildren: ()=> import('./feature/products/products.module').then(m => m.ProductsModule)},
      {path: 'order', loadChildren: ()=> import('./feature/order/order.module').then(m => m.OrderModule)},
    ]
  },

  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
