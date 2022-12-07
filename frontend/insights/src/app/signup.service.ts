import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private toast:NgToastService,private http : HttpClient, private router: Router) { }
  signup(req:any){
    if(req.fname==="")
    this.toast.error({detail:"Failure Message",summary:"First name cannot be empty",duration:5000});
    else if(req.lname==="")
    this.toast.error({detail:"Failure Message",summary:"Last name cannot be empty",duration:5000});
    else if(req.email==="")
    this.toast.error({detail:"Failure Message",summary:"Email cannot be empty",duration:5000});
    else if(req.phno==="")
    this.toast.error({detail:"Failure Message",summary:"Phone number cannot be empty",duration:5000});
    else if(req.password==="")
    this.toast.error({detail:"Failure Message",summary:"Password cannot be empty",duration:5000});
    else if(req.confirm_password==="")
    this.toast.error({detail:"Failure Message",summary:"Confirm Password cannot be empty",duration:5000});
    else if(req.password!==req.confirm_password)
    this.toast.error({detail:"Failure Message",summary:"Password and confirm password does'nt match",duration:5000});
    else if(req.password.length<6)
    this.toast.error({detail:"Failure Message",summary:"Password must be atleast 6 characters long",duration:5000});
    else if(req.password.length>8)
    this.toast.error({detail:"Failure Message",summary:"Password cannot be more than 8 characters long",duration:5000});
    else{
      console.log('request from signup',req);
    this.http.post(environment.baseURL+'/register',(req)).subscribe((res:any)=>{
      if(res.msg==="registration successfull"){
        this.toast.success({detail:"Success Message",summary:res.msg,duration:5000});
        this.router.navigate(['/login']);
      }
      else if(res.msg==="Email already exists"){
        this.toast.error({detail:"Failure Message",summary:res.msg,duration:5000});
      }
    })
    }

    }
  }
