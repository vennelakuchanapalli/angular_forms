import {Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.scss'
})
export class ProductdetailsComponent implements OnInit{
  productdetails:any=[];
  isshowdetails:boolean=true
constructor(private activatedroutes: ActivatedRoute,private apiservice:ApiService){}
ngOnInit(){

let id = this.activatedroutes.snapshot.paramMap.get('id')
this.apiservice.getAllProducts().subscribe((res:any)=>{
  
this.productdetails = res.products.filter((itme:any)=>itme.id == id)


},(error)=>{

})

}
details(){
  this.isshowdetails =false
}
}
