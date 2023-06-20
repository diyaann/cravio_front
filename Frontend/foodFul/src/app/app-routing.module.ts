import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { AdminComponent } from './admin/admin.component';
import { UpdateMenuComponent } from './update-menu/update-menu.component';
import { ViewMenusComponent } from './view-menus/view-menus.component';
import { ViewRestaurantsComponent } from './view-restaurants/view-restaurants.component';

const routes: Routes = [
  {  path: '', component: AdminComponent },
  { path: 'add-restaurant', component: AddRestaurantComponent },
  { path: 'add-menu', component: AddMenuComponent },
  { path: 'view-restaurants', component: ViewRestaurantsComponent },
  // { path: 'view-menus', component: ViewMenusComponent},
  { path: 'update-menu/:prodName', component: UpdateMenuComponent },
  { path: 'view-menus/:restaurantName', component: ViewMenusComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
