import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackComponent } from './back-office/back/back.component';
import { FrontComponent } from './front-office/front/front.component';
import { DeliveryComponent } from './front-office/delivery/delivery.component';
import { CartComponent } from './front-office/cart/cart.component';
import { UserComponent } from './front-office/user/user.component';
import { ProductComponent } from './front-office/product/product.component';
import { PublicationComponent } from './front-office/publication/publication.component';
import { ChartsComponent } from './back-office/charts/charts.component';
import { ContentComponent } from './back-office/content/content.component';

const routes: Routes = [

  {path: '', component:FrontComponent,},
   /*children:[
    {path:'', loadChildren:()=>import('./front-office/front/front.module').then(m=>m.FrontModule)}
  ]},*/
  {path:'admin', component:BackComponent},
  {path:'charts', component:ChartsComponent},
  {path:'content', component:ContentComponent},
  //children:[
   // {path:'back',loadChildren:()=>import('./back-office/back-office.module').then(m=>m.BackOfficeModule)},
    

 
  {path: 'delivery', component: DeliveryComponent},
  {path: 'cart', component: CartComponent},
  {path: 'user', component: UserComponent},
  {path: 'product', component: ProductComponent},
  {path: 'publication', component: PublicationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
