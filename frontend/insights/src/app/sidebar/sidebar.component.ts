import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CheckUserPlanService } from '../check-user-plan.service';
import { GetInstaAccountsService } from '../get-insta-accounts.service';
import { ModalserviceService } from '../modalservice.service';

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
  toDisplay4 = false;
  switch_account_1: any;
  switch_account_2: any;
  switch_account_3: any;
  switch_account_4: any;
  switch_account_5: any;
  access_token_1: any;
  access_token_2: any;
  access_token_3: any;
  access_token_4: any;
  access_token_5: any;
  ig_id_1: any;
  ig_id_2: any;
  ig_id_3: any;
  ig_id_4: any;
  ig_id_5: any;
  toDisplaymodal: any=false;
  toDisplaymodal_sub: any=false;

  constructor(private modaldata:ModalserviceService,private gia: GetInstaAccountsService,private toast:NgToastService,private cup: CheckUserPlanService,private router: Router) {}

  ngOnInit(): void {
  }
  switch_account(){
    this.toDisplay4 = !this.toDisplay4;
    this.gia.accounts(localStorage.getItem("email")).subscribe((res)=>{
      console.log("response::",Object.entries(res)[0]);
      this.switch_account_1=Object.entries(res)[0][1].account_1;
      this.switch_account_2=Object.entries(res)[0][1].account_2;
      this.switch_account_3=Object.entries(res)[0][1].account_3;
      this.switch_account_4=Object.entries(res)[0][1].account_4;
      this.switch_account_5=Object.entries(res)[0][1].account_5;
      this.access_token_1=Object.entries(res)[0][1].access_token_1;
      this.access_token_2=Object.entries(res)[0][1].access_token_2;
      this.access_token_3=Object.entries(res)[0][1].access_token_3;
      this.access_token_4=Object.entries(res)[0][1].access_token_4;
      this.access_token_5=Object.entries(res)[0][1].access_token_5;
      this.ig_id_1=Object.entries(res)[0][1].ig_id_1;
      this.ig_id_2=Object.entries(res)[0][1].ig_id_2;
      this.ig_id_3=Object.entries(res)[0][1].ig_id_3;
      this.ig_id_4=Object.entries(res)[0][1].ig_id_4;
      this.ig_id_5=Object.entries(res)[0][1].ig_id_5;
    })
    /*let email=localStorage.getItem("email");
    let fb_app_id=localStorage.getItem("fb_app_id");
    localStorage.clear();
    localStorage.setItem("email",<any>email);
    localStorage.setItem("fb_app_id",<any>fb_app_id);
    alert("To switch between ig account just change the connected ig account to your fb page and then connect with facebook");
    window.location.href="https://localhost:4200/login-with-facebook";*/
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
  sa_1(){
    localStorage.setItem("access_token",this.access_token_1);
    localStorage.setItem("ig_id",this.ig_id_1);
    window.location.reload();
  }
  sa_2(){
    localStorage.setItem("access_token",this.access_token_2);
    localStorage.setItem("ig_id",this.ig_id_2);
    window.location.reload();
  }
  sa_3(){
    localStorage.setItem("access_token",this.access_token_3);
    localStorage.setItem("ig_id",this.ig_id_3);
    window.location.reload();
  }
  sa_4(){
    localStorage.setItem("access_token",this.access_token_4);
    localStorage.setItem("ig_id",this.ig_id_4);
    window.location.reload();
  }
  sa_5(){
    localStorage.setItem("access_token",this.access_token_5);
    localStorage.setItem("ig_id",this.ig_id_5);
    window.location.reload();
  }
  close_modal(){
    this.toDisplaymodal=false;
    this.toDisplaymodal_sub=false;
  }
  cancel_sub(){
    this.toDisplaymodal_sub=true;
  }
  ea_1(){
    this.toDisplaymodal=true;
    localStorage.setItem("edit_for","account_1");
  }
  ea_2(){
    this.toDisplaymodal=true;
    localStorage.setItem("edit_for","account_2");
  }
  ea_3(){
    this.toDisplaymodal=true;
    localStorage.setItem("edit_for","account_3");
  }
  ea_4(){
    this.toDisplaymodal=true;
    localStorage.setItem("edit_for","account_4");
  }
  ea_5(){
    this.toDisplaymodal=true;
    localStorage.setItem("edit_for","account_5");
  }
  modal_data(data:any){
    console.log("modal-data::",data);
    this.modaldata.change_name(localStorage.getItem("email"),data,localStorage.getItem("edit_for")).subscribe((res)=>{
      console.log("response from modal data::",Object.entries(res));
      if(Object.entries(res)[0][1]==="name updated successfully"){
        localStorage.removeItem("edit_for");
        window.location.reload()
      }
    })
  }
  modal_data_sub(data:any){
    console.log("modal-data_sub::",data);
      this.modaldata.cancel_subscription(localStorage.getItem("email")).subscribe((res:any)=>{
        if(Object.entries(res)[0][1]==="Subscription cancelled successfully"){
          this.toast.success({detail:"Success Message",summary:"Subscription cancelled successfully",duration:5000});
          let email=localStorage.getItem("email");
          localStorage.clear();
          localStorage.setItem("email",<any>email);
          this.router.navigate(['/pricing']);

        }
      })
  }
}
