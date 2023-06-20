import { Component } from '@angular/core';
import { Menu } from 'src/app/model/Menu';
import { ConnectionService } from 'src/app/service/connection.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-customer-cart',
  templateUrl: './customer-cart.component.html',
  styleUrls: ['./customer-cart.component.css']
})
export class CustomerCartComponent {

  menus:Menu[];
  username=localStorage.getItem('customerEmail');
  constructor(private connectService: ConnectionService,private location: Location){}
  ngOnInit(): void {
    this.connectService.getCart(this.username).subscribe(
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
  checkout(){}
}
