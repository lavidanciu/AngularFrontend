import { Injectable } from '@angular/core';
import {BehaviorSubject, map} from "rxjs";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  private cartItemList : any =[]
  private productList = new BehaviorSubject<any>([]);
  private done:boolean=false;
  constructor(private http: HttpClient) {}
  getcartItemList()
  {
    return this.cartItemList
  }
  getProducts(){
    return this.productList.asObservable();
  }

  addtoCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.TotalPrice();
    console.log(this.cartItemList)
  }
  TotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal =grandTotal+a.price
    })
    return grandTotal;
  }
  url="http://localhost:8080/";
  removeCartItem(product: any){
    this.done=false
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id== a.id && this.done==false){
        this.cartItemList.splice(index,1)
        this.done=true
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAll(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
  public getItemmsSelected(productsSelected:any) {
    return this.http.post(this.url+'items',productsSelected );
  }


}
