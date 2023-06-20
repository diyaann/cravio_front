import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from 'src/app/model/Menu';
import { ConnectionService } from 'src/app/service/connection.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.css']
})
export class ListMenuComponent {
  menus: Menu[];
  restname:string;
  cart:Menu;
  customerEmail = localStorage.getItem('customerEmail');
  constructor(private connectService: ConnectionService, private route: ActivatedRoute,private location: Location, private router: Router) {
    // const username =localStorage.getItem('customerEmail');
  }
    
  // ngOnInit() {
  //   this.fetchMenus();
   
  // }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.restname = params['restaurantName'];
      console.log(this.restname);
      this.fetchMenus();
    });
  }
  fetchMenus() {
    // this.connectService.getMenu().subscribe(
    //   (data: any[]) => {
    //     this.menus = data;
    //   },
    //   (error: any) => {
    //     console.log(error);
    //   }
    // );
    this.connectService.getMenu(this.restname).subscribe(
      (response) => {
        this.menus = response;
        console.log(this.menus);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  goBack(): void {
    this.location.back();
  }

  addToCart(menu: Menu): void {
    this.cart= new Menu();
    console.log(menu.product);
    this.cart.product=menu.product;
    console.log(this.cart.product);
    this.cart.price=menu.price;
    this.cart.restname=menu.restname;
    this.cart.image=menu.image;
    this.cart.description=menu.description;
    this.cart.username=this.customerEmail;

    this.connectService.addItemToCart(this.cart).subscribe(
      data => 
      {
        alert("Added");
        console.log(data)
      },
      err => alert("Already present!")
      );
  }
}
