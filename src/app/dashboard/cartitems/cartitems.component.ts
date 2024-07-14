import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-cartitems',
  templateUrl: './cartitems.component.html',
  styleUrl: './cartitems.component.scss'
})
export class CartitemsComponent implements OnInit {
  // name: any;
  constructor(private apiservice: ApiService) { }
  userdetails: any
  cartitemslist: any[] = [];
  grandtotal:number= 0;
 msg:any=''
  ngOnInit() {
    // if(typeof window !== 'undefined' && window.sessionStorage){
    //   var user = window.sessionStorage.getItem('token')
    //   if(user){ 
    //     this.name = JSON.parse(user).username
    //   }
    //   }
   this.showAllCarts();
  }
  showAllCarts(){
    let datastored: any = sessionStorage.getItem('token')
    this.userdetails = JSON.parse(datastored)
    let payload = {
      user_id: this.userdetails.id
    }
    this.apiservice.getAllCartItems(payload).subscribe((res: any) => {
      this.cartitemslist = res.cart_list
      this.grandTotal();
    }, (error) => { })
  }
  deleteItem(item: any) {
    let datastored: any = sessionStorage.getItem('token')
    this.userdetails = JSON.parse(datastored)
let payload ={
    user_id: this.userdetails.id,
    product_id: item.product_id
}
this.apiservice.deleteCartItem(payload).subscribe((res:any)=>{
  this.showAllCarts();
alert(this.msg=res.message)
},(error)=>{

})
  }
  increaseQty(item:any){
    let datastored:any = sessionStorage.getItem('token')
   this.userdetails = JSON.parse(datastored)
    let payload ={
      user_id:this.userdetails.id ,
      product_id: item.product_id,
      quantity: item.quantity +1,
  }
 this.apiservice.updateQuantity(payload).subscribe((res:any)=>{
  this. showAllCarts();
  // alert(this.msg = res.message)
  
 },(error)=>{}) 
  }
  decreaseQty(item:any){
  
    if(item.quantity >1){
      let datastored:any = sessionStorage.getItem('token')
      this.userdetails = JSON.parse(datastored)
      let payload ={
        user_id:this.userdetails.id ,
        product_id: item.product_id,
        quantity: item.quantity -1,
    }
   this.apiservice.updateQuantity(payload).subscribe((res:any)=>{
    this. showAllCarts();
    // alert(this.msg = res.message);
    
   },(error)=>{}) 
    };
  };
  cartItemTotalPrice(eachitem:any):number{
var price :any= (eachitem.price * eachitem.quantity).toFixed(2);
return price;
  };
  grandTotal(){
  this.grandtotal = this.cartitemslist.reduce((total,eachitem)=>{
    return total + (eachitem.price * eachitem.quantity);
  },0).toFixed(2);
  }
};
