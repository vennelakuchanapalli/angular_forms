import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../api.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.scss'
})
export class AddproductComponent {
  addProductForm:any;
msg:any
form:any
constructor(private router:Router, private apiservice:ApiService, private formBuilder:FormBuilder){
  this.settingAddProduct();
}

settingAddProduct(){
this.addProductForm = this.formBuilder.group({  
  productName:['',[Validators.required]],
  productPrice:['',[Validators.required]],
  productSKU: ['',[Validators.required]],  
    productDescription:[''] ,   
    productCategory: [''],
    productStockQuantity:[''] 
})
}
addProducutToList(form:any){
  let payload ={
       name: this.addProductForm.get('productName').value,
      description:  this.addProductForm.get('productDescription').value,
      price: this.addProductForm.get('productPrice').value,
      sku: this.addProductForm.get('productName').value,
      category:this.addProductForm.get('productCategory').value,
      stock_quantity:this.addProductForm.get('productStockQuantity').value  
  }
this.apiservice.addProduct(payload).subscribe((res:any)=>{
if(res.ststus === 'success'){
this.msg = res.message

}
},(error)=>{})
}
// ngOnDestroy(){
  
//   this.router.navigate(['dashboard/productlist'])
//   const isshow=true
// }

}
