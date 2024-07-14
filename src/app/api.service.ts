import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

private data = new BehaviorSubject(" ");
public userDataName = this.data.asObservable(); 


  constructor(private httpservice: HttpClient) { }



  registerdata(payload: any) {
    return this.httpservice.post("http://test-1-env.eba-hjda8m8i.ap-south-1.elasticbeanstalk.com/sample/auth/register.php", payload)
  }

  login(payload: any) {
    return this.httpservice.post("http://test-1-env.eba-hjda8m8i.ap-south-1.elasticbeanstalk.com/sample/auth/login.php", payload)
  }

  getAllProducts() {
    return this.httpservice.get("http://test-1-env.eba-hjda8m8i.ap-south-1.elasticbeanstalk.com/sample/products/getAll.php")
  }

  addProduct(payload: any) {
    return this.httpservice.post("http://test-1-env.eba-hjda8m8i.ap-south-1.elasticbeanstalk.com/sample/products/add.php", payload)
  }
  
  addToCart(payload: any) {
    return this.httpservice.post("http://test-1-env.eba-hjda8m8i.ap-south-1.elasticbeanstalk.com/sample/cart/add.php", payload)
  }
  getAllCartItems(payload:any){
    return this.httpservice.post("http://test-1-env.eba-hjda8m8i.ap-south-1.elasticbeanstalk.com/sample/cart/getAll.php",payload)
  }
  deleteCartItem(payload:any){
    return this.httpservice.post("http://test-1-env.eba-hjda8m8i.ap-south-1.elasticbeanstalk.com/sample/cart/delete.php",payload)
  }
  updateQuantity(payload:any){
    return this.httpservice.post("http://test-1-env.eba-hjda8m8i.ap-south-1.elasticbeanstalk.com/sample/cart/updateQty.php",payload)
  }

}
