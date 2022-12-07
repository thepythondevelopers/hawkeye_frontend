import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private toast:NgToastService,private router : Router, private login : LoginService) {
    /*if(localStorage.getItem("jwt")){
      this.router.navigate(['/login-with-facebook']);
    }*/
    if(localStorage.getItem("email")){
      this.router.navigate(['/login-with-facebook']);
    }
   }
  logindata(data:any){
    if(data.email && data.password)
    this.login.Login(data);
    else{
      if(!data.email)
      this.toast.error({detail:"Failure Message",summary:"Email Cannot be empty",duration:5000}); 
      else if(!data.password)
      this.toast.error({detail:"Failure Message",summary:"Password Cannot be empty",duration:5000});
    } 
  }
  ngOnInit(): void {
  }

}
