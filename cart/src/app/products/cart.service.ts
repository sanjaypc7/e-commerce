import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartarray:any=[];//array
  cartlist=new BehaviorSubject([])//list


  constructor() { }

  //addtocart

  addtocart(product:any){
    this.cartarray.push(product)
    this.cartlist.next(this.cartarray)//stream of data
    console.log(this.cartlist);
    let total=this.gettotal()
    console.log(total);
    
    
  }

  //grand total
  gettotal(){
    let grandtotal=0;
    this.cartarray.map((item:any)=>{
      grandtotal+=item.price
    })
    return grandtotal
  }

  //remove a single item from the cart

  removecart(product:any){
    this.cartarray.map((item:any,index:any)=>{
      if(product.id===item.id){
        this.cartarray.splice(index,1)//remove cart
      }
    })
    this.cartlist.next(this.cartarray)//update cartlist
  }

  //empty cartlist

  removeall(){
    this.cartarray=[]
    this.cartlist.next(this.cartarray)
  }
}
