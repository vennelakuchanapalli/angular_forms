import { Component, OnInit , OnChanges} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',

})
export class NavbarComponent implements OnInit , OnChanges {
  name:any
  
constructor(private router: Router, ){}

ngOnInit(){
//  this.datastored = sessionStorage.getItem('token')
//  this.name = JSON.parse(this.datastored).username

if(typeof window !== 'undefined' && window.sessionStorage){
var user = window.sessionStorage.getItem('token')
if(user){ 
  this.name = JSON.parse(user).username
}
}
}

ngOnChanges(){
  if(typeof window !== 'undefined' && window.sessionStorage){
    var user = window.sessionStorage.getItem('token')
    if(user){ 
      this.name = JSON.parse(user).username
    }
    }
}
}
