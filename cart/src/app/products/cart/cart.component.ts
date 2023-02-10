import { Component,OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cartitem:any=[]//array
  grand=0;
  updategrand=0
    constructor(private cart:CartService ,private router:Router){}
    
    ngOnInit(): void {
        this.cart.cartlist.subscribe(
          (data:any)=>{
            console.log(data);
           this.cartitem=data
           console.log(this.cartitem);
           this.grand=this.cart.gettotal()
           
            
          }
        )
    }

    removecart(product:any){
      this.cart.removecart(product)
    }

    removeall(){
      this.cart.removeall()
    }

    //discounts

    discount5per(){
      let discount=(this.grand*5)/100
      this.updategrand=this.grand-discount
    }

    proceed(){
      alert('order placed')
      this.router.navigateByUrl('')
    }
}
