import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { ViewMenusComponent } from './view-menus/view-menus.component';
import { ViewRestaurantsComponent } from './view-restaurants/view-restaurants.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateMenuComponent } from './update-menu/update-menu.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AddRestaurantComponent,
    AddMenuComponent,
    ViewMenusComponent,
    ViewRestaurantsComponent,
    UpdateMenuComponent,
    AdminHeaderComponent,
    AdminFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
