import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from '../model/Menu';
import { ConnectionService } from '../service/connection.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-view-menus',
  templateUrl: './view-menus.component.html',
  styleUrls: ['./view-menus.component.css']
})

export class ViewMenusComponent {

  menus: Menu[];
  restname:string;

  constructor(private connectService: ConnectionService, private route: ActivatedRoute,private location: Location, private router: Router) {}

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

  updateItem(prodName: string): void {
    this.router.navigate(['/update-menu', prodName]);
  }
}
