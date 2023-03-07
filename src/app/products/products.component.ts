import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service'
import {CartServiceService} from "../services/cart-service.service";
import {NgForm} from "@angular/forms";
import {NavbarComponent} from "../navbar/navbar.component";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public productList : any;
  opened: boolean=false;
  product: any;
  constructor(private api: ProductsService,private cart:CartServiceService) { }

  ngOnInit(): void {

    this.api.getAllProducts().subscribe(res=>{
      this.productList = res;
    })
  }

  addtocart(item: any){
    this.cart.addtoCart(item);
  }


}

