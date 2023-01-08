import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from '../signup.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  cb: boolean=false;
  eye: boolean=false;
  eye2: boolean=false;
  constructor(private toast:NgToastService, private router : Router, private signup : SignupService) { 
    if(localStorage.getItem("email")){
      this.router.navigate(['/dashboard']);
    }
  }
  signupdata(data:any){
    if(this.cb===true)
    this.signup.signup(data);
    else
    this.toast.error({detail:"Failure Message",summary:"Please accept the terms and condition to continue",duration:5000});
  }
  checkbox(){
    this.cb=!this.cb;
  }
  eyeone(){
    this.eye=!this.eye;
  }
  eyetwo(){
    this.eye2=!this.eye2;
  }
  ngOnInit(): void {
  }
}
