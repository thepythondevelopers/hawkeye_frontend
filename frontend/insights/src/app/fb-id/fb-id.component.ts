import { Component, OnInit } from '@angular/core';
import { FbAppIdService } from '../fb-app-id.service';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';
import { CheckUserPlanService } from '../check-user-plan.service';

@Component({
  selector: 'app-fb-id',
  templateUrl: './fb-id.component.html',
  styleUrls: ['./fb-id.component.css','../login/login.component.css']
})
export class FbIdComponent implements OnInit {

  constructor(private cup: CheckUserPlanService,private router : Router,private toast:NgToastService,private fb_app_id : FbAppIdService) {

    let email=localStorage.getItem('email');
    this.cup.check_user_plan(email).subscribe((res:any)=>{
      console.log("plan response=",res.user_current_plan.plan);
      if(res.user_current_plan.plan==="Null"){
        this.router.navigate(['/pricing'])
      }
    });

    if(localStorage.getItem("fb_app_id")){
      this.router.navigate(['/login-with-facebook']);  
    }
    if(!localStorage.getItem("email")){
      this.router.navigate(['/signup']);  
    }
   }
  logindata(data:any){
    if(data.fb_id)
    this.fb_app_id.app_id(data);
    else{
      this.toast.error({detail:"Failure Message",summary:"Facebook App Id Cannot be empty",duration:5000}); 
    } 
  }
  ngOnInit(): void {
  }

}
