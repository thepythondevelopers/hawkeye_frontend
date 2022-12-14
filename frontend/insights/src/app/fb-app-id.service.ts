import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import { FacebookLoginProvider} from '@abacritt/angularx-social-login';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FbAppIdService {
  flp: any;

  constructor(private router : Router,private http : HttpClient) {
    console.log("fb app id="+localStorage.getItem("fb_app_id"));
   }

  app_id(req:any){
    environment.fb_app_id=req.fb_id;
    //console.log("after fb app id="+environment.fb_app_id);
    localStorage.setItem("fb_app_id",environment.fb_app_id)
    window.location.href ="https://hawkeye.pamsar.com/login-with-facebook";
  }
}
