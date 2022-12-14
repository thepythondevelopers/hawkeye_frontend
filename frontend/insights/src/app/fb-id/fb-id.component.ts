import { Component, OnInit } from '@angular/core';
import { FbAppIdService } from '../fb-app-id.service';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fb-id',
  templateUrl: './fb-id.component.html',
  styleUrls: ['./fb-id.component.css','../login/login.component.css']
})
export class FbIdComponent implements OnInit {

  constructor(private router : Router,private toast:NgToastService,private fb_app_id : FbAppIdService) {
    if(localStorage.getItem("fb_app_id")){
      this.router.navigate(['/login-with-facebook']);  
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
