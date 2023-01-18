import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CookieService } from 'ngx-cookie-service';
import { CheckUserPlanService } from '../check-user-plan.service';
import { ProfileImageService } from '../profile-image.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css','../dashboard/dashboard.component.css']
})
export class NavbarComponent implements OnInit {
  toDisplay_dropdown_beside_profile=false;
  profile_image: any;
  base64String:any;
  sdp: any=false;
  imageurl: any;
  toDisplay_ctf: boolean=false;
  constructor(private toast:NgToastService,private cup: CheckUserPlanService,private domSanitizer: DomSanitizer,private cookieService: CookieService,private router: Router,private pis: ProfileImageService) { 
    if(localStorage.getItem("access_token")){
      this.toDisplay_ctf=true;
    }
    else{
      this.toDisplay_ctf=false;
    }
    this.pis.get_profile_image().subscribe((res)=>{
      console.log("profile image=",Object.entries(res)[0][1].data.data);
      if(Object.entries(res)[0][0]==="updated_profile_image"){
        let TYPED_ARRAY = new Uint8Array(Object.entries(res)[0][1].data.data);
        const STRING_CHAR = TYPED_ARRAY.reduce((data, byte)=> {
          return data + String.fromCharCode(byte);
          }, '')
          let base64String = btoa(STRING_CHAR);
          this.imageurl = 'data:image/jpg;base64, ' + base64String;
      }
      if(Object.entries(res)[0][1]==="show default avatar"){
      this.sdp=true;
      console.log("sdp="+this.sdp);
      }
    })
  }

  ngOnInit(): void {
  }
  dropdown_beside_profile(){
    this.toDisplay_dropdown_beside_profile=!this.toDisplay_dropdown_beside_profile;
  }
  logout(){
    localStorage.clear();
    //this.cookieService.deleteAll();
    this.router.navigate(['/home']);
  }
  profile(){
    this.router.navigate(['/profile']);
  }
  redirect(){
      if(localStorage.getItem("access_token")){
        this.router.navigate(['/dashboard'])
      }
      else{
        this.router.navigate(['/pricing'])
      }
  }
  ndp(){
    let email=localStorage.getItem('email');
    this.cup.check_user_plan(email).subscribe((res:any)=>{
      console.log("plan response=",res.user_current_plan.plan);
      if(res.user_current_plan.plan==="Null"){
        this.toast.info({detail:"Failure Message",summary:"Please buy a suscription first",duration:5000});
      }
      else{
        if(!localStorage.getItem("access_token")){
        this.router.navigate(['/login-with-facebook']);
        }
        else{
          this.router.navigate(['/dashboard']);
        }
      }
    });
  }
}
