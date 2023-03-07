import { Component, OnInit } from '@angular/core';
import {CartServiceService} from "../services/cart-service.service";
import {map} from "rxjs";
import Swal from 'sweetalert2'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products:any=[]
  public Total : number=0;
  constructor(private  serviceCart:CartServiceService) { }

  ngOnInit(): void {
    this.serviceCart.getProducts()
      .subscribe((res:any)=>{
        this.products = res;
        this.Total = this.serviceCart.TotalPrice();
      })
  }
  removeItem(item: any) {
    this.serviceCart.removeCartItem(item);
  }

  emptycart() {
    this.serviceCart.removeAll();
  }

  ProductsQuantity(product:any) {

    this.serviceCart.getItemmsSelected(product).subscribe(
      {
        next:(response)=>
        {
          console.log(response)

        },
        error: (err)=> console.log(err),
        complete: ()=>console.log("complete tranfer data ")
      }
    );


  }

  simpleAlert()
  {
    Swal.fire("Thank you !Your order has been sent")!
  }

}

