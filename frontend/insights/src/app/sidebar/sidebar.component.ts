import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CheckUserPlanService } from '../check-user-plan.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css', '../dashboard/dashboard.component.css']
})
export class SidebarComponent implements OnInit {
  toDisplay = false;
  toDisplay_fdo=false;
  toDisplay1 = false;
  toDisplay3 = false;
  constructor(private toast:NgToastService,private cup: CheckUserPlanService,private router: Router) { }

  ngOnInit(): void {
  }
  switch_account(){
    let email=localStorage.getItem("email");
    let fb_app_id=localStorage.getItem("fb_app_id");
    localStorage.clear();
    localStorage.setItem("email",<any>email);
    localStorage.setItem("fb_app_id",<any>fb_app_id);
    alert("To switch between ig account just change the connected ig account to your fb page and then connect with facebook");
    window.location.href="https://hawkeye.pamsar.com/login-with-facebook";
  }
  toggleData1() {
    this.toDisplay1 = !this.toDisplay1;
    this.toDisplay_fdo=false;
  }
  toggleData() {
    this.toDisplay = !this.toDisplay;
  }
  toggleData3() {
    this.toDisplay3 = !this.toDisplay3;
  }
  ndp(){
    let email=localStorage.getItem('email');
    this.cup.check_user_plan(email).subscribe((res:any)=>{
      console.log("plan response=",res.user_current_plan.plan);
      if(res.user_current_plan.plan==="Null"){
        this.toast.info({detail:"Failure Message",summary:"Please buy a suscription first",duration:5000});
      }
      else{
        this.router.navigate(['/dashboard']);
      }
    });
  }
  fdp(){
    this.toDisplay_fdo=!this.toDisplay_fdo;
  }
  idp(){
    this.router.navigate(['/impression/calender'])
  }
  rdp(){
    this.router.navigate(['/reach/calender'])
  }
  npdp(){
    this.router.navigate(['/newpost/calender'])
  }
  wdp(){
    this.router.navigate(['/wbcs/calender'])
  }
  pcdp(){
    this.router.navigate(['/profile-visits/calender'])
  }
  bcity(){
    this.router.navigate(['followers-details/city'])
  }
  bcountry(){
    this.router.navigate(['followers-details/country'])
  }
  bga(){
    this.router.navigate(['followers-details/gender_age'])
  }
}
