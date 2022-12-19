import { Component, OnInit } from '@angular/core';
import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Router } from '@angular/router';
import { CheckoutService } from '../checkout.service';
import { CheckUserPlanService } from '../check-user-plan.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
@Injectable()
export class PricingComponent implements OnInit {

  constructor(private toast:NgToastService,private cup: CheckUserPlanService,private http: HttpClient,private router : Router,private checkout: CheckoutService) { 

  }

  ngOnInit(): void {
    if(!localStorage.getItem('email')){
      this.router.navigate(['/login'])
    }
  }

  in_development(){
    this.toast.info({detail:"Info Message",summary:"This plan is under devlopment",duration:5000});
  }

  freelancer_package(data:any) {
    let email=localStorage.getItem("email");
    this.cup.check_user_plan(email).subscribe((response:any)=>{
      if(response.user_current_plan.plan==="Null"){
        if(localStorage.getItem('email')){
          console.log("freelancer checkout button working fine");
          this.checkout.checkout_service(data).subscribe((res)=>{
            console.log("checkout response",Object.entries(res));
            window.location.href =<any>[Object.entries(res)[44][1]];
          });
        }
      }
      else{
        this.toast.warning({detail:"Warning Message",summary:"You already have this suscription",duration:5000});
      }
    })
  }
}
