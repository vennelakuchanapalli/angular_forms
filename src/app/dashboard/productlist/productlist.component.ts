import { Component, DoCheck, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';
import { PipePipe } from '../../pipe.pipe';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.scss',
})
export class ProductlistComponent implements OnInit {
  productlists: any = [];
  productdetails: any
  isshow = true;
  isAddedToCart = false
  msg: any = ''
  filterproduct:any=''
  constructor(private router: Router, private apiservice: ApiService) {}
  tableheader = ["id", "name", "sku", "price", "stock_quantity", "Add To Cart", "Details"]
  ngOnInit() {
    
    // this.isshow=true
    this.apiservice.getAllProducts().subscribe((res: any) => {
      this.productlists = res.products
    }, () => {})
  }
  addToCart(product: any) {
    let storeddata: any = sessionStorage.getItem('token')
    this.productdetails = JSON.parse(storeddata)
    let payload = {
      user_id: this.productdetails.id,
      product_id: product.id,
      quantity: 1
    }
    console.log(payload)
    this.apiservice.addToCart(payload).subscribe((res: any) => {
      alert(this.msg = res.message)
    }, (error) => {
    })
  }
  showdetails(id: any) {
    
    this.router.navigate(['dashboard/productlist', id])
  }
}
