import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { Tips1Component } from './tips/tips1/tips1.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:searchTerm', component: HomeComponent },
  { path: 'tag/:tag', component: HomeComponent },
  {path:'food/:id', component:FoodPageComponent},
  {path:'cart-page', component: CartPageComponent},
  {path:'login', component: LoginPageComponent},
  {path:'tips1',component:Tips1Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
