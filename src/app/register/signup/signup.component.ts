import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  reactiveForm:any
  msg: any;
constructor(private formBuilder:FormBuilder, private router:Router, private apiservice:ApiService){
this.setUpForm();
}
setUpForm(){
  this.reactiveForm = this.formBuilder.group({
    username : ['',[Validators.required]],
    email : ['',[ Validators.required,Validators.email]],
    password:['',[Validators.required , Validators.minLength(6) ]],
    mobilenumber :[''],
    address : [''],
    state:['']
  })
}
signup(form:any){
  const payload={
    username : this.reactiveForm.get('username').value,
    email : this.reactiveForm.get('email').value,
    password : this.reactiveForm.get('password').value,
    phone: this.reactiveForm.get('mobilenumber').value,
    address: this.reactiveForm.get('address').value,
    state: this.reactiveForm.get('state').value
  }
  console.log(payload)
this.apiservice.registerdata(payload).subscribe((res:any)=>{
   if(res.status === 'success'){
    this.router.navigate(['/login'])
  }else{
    alert(this.msg = res.message)
  }
})
}
// signup(form: any) {
//   if (this.reactiveForm.invalid) {
//     this.markAllAsDirty();
//     return;
//   }
//   console.log(form);
// }

// markAllAsDirty() {
//   Object.keys(this.reactiveForm.controls).forEach(control => {
//     this.reactiveForm.get(control).markAsDirty();
//   });
// }

}
