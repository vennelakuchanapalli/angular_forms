import { Component } from '@angular/core';
import { FormBuilder, MinLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: any;
  form: any;
 
  constructor(private formBuilder: FormBuilder, private router: Router, private apiservice: ApiService) {
    this.setLoginForm();
  }

  setLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.maxLength(15)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }
  logIn(form: any) {
    let payload = {
      username: this.loginForm.get('username').value,
      password: this.loginForm.get('password').value
    }

    this.apiservice.login(payload).subscribe((res: any) => {
     
     if (res.status === 'success') {

        sessionStorage.setItem("token", JSON.stringify(res.user))
        alert(res.message)
        // navigating from one module to other module 
        this.router.navigate(['/dashboard/productlist']);
      }
     
    }, (error) => {

    })
  }


}
