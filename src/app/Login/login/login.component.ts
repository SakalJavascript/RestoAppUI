import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService,
              private router:Router) { }
  form:FormGroup=new FormGroup({
    username:new FormControl('',Validators.required),
    password:new FormControl('',[ Validators.required,Validators.minLength(8), this.validatePassword 
    ]),
  })

  IsShowPass=false;

  error:string | undefined;
  ngOnInit(): void {
  }

  validatePassword(control:AbstractControl) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;
    return passwordRegex.test(control.value) ? null : { invalidPassword: true };
  }
  
  Login()
  {
     
    this.authService.login(this.form.value)
    .subscribe((respose:{JwtToken:String})=>{
      if(respose.JwtToken!=null)
      {
        localStorage.setItem('JwtToken', respose.JwtToken.toString())
        this.router.navigate(['/home-page']);
        
      }

    },(error)=>{
      this.error= error.error
    })

  }

}
