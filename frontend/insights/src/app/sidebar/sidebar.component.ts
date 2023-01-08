import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CheckUserPlanService } from '../check-user-plan.service';
import { GetCustIdService } from '../get-cust-id.service';
import { GetInstaAccountsService } from '../get-insta-accounts.service';
import { ModalserviceService } from '../modalservice.service';
import { UpdateCardService } from '../update-card.service';
import html2canvas from 'html2canvas';
import { SendEmailService } from '../send-email.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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

  constructor(private http:HttpClient,private se:SendEmailService,private cust_id:GetCustIdService,private uc:UpdateCardService,private modaldata:ModalserviceService,private gia: GetInstaAccountsService,private toast:NgToastService,private cup: CheckUserPlanService,private router: Router) {}

  ngOnInit(): void {
  }
  switch_account(){
    this.gia.accounts(localStorage.getItem("email")).subscribe((res)=>{
      try{
      this.toDisplay4 = !this.toDisplay4;
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
      }
      catch{
        this.toDisplay4=false;
        this.toast.error({detail:"Failure Message",summary:"Please buy a plan first",duration:5000});
      }
    })
    /*let email=localStorage.getItem("email");
    localStorage.clear();
    localStorage.setItem("email",<any>email);
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
        if(!localStorage.getItem("access_token")){
        this.router.navigate(['/login-with-facebook']);
        }
        else{
          this.router.navigate(['/dashboard']);
        }
      }
    });
  }
  fdp(){
    this.toDisplay_fdo=!this.toDisplay_fdo;
  }
  prp(){
    this.router.navigate(['/pricing'])
  }
  idp(){
    this.http.post(environment.baseURL+'/get_plans',{"email":localStorage.getItem('email')}).subscribe((response)=>{
      let my_plan = Object.entries(response)[0][1];
      console.log("My plan=",my_plan);
      if(my_plan==="Null" || my_plan==="Freelancer"){
        //this.router.navigate(['/dashboard']);
        this.toast.error({detail:"Failure Message",summary:"You need to upgrade your plan to access this page.",duration:5000});
      }
      else{
        this.router.navigate(['/impression/calender'])
      }
    })
  }
  rdp(){
    this.http.post(environment.baseURL+'/get_plans',{"email":localStorage.getItem('email')}).subscribe((response)=>{
      let my_plan = Object.entries(response)[0][1];
      console.log("My plan=",my_plan);
      if(my_plan==="Null" || my_plan==="Freelancer"){
        //this.router.navigate(['/dashboard']);
        this.toast.error({detail:"Failure Message",summary:"You need to upgrade your plan to access this page.",duration:5000});
      }
      else{
        this.router.navigate(['/reach/calender'])
      }
    })
  }
  npdp(){
    this.http.post(environment.baseURL+'/get_plans',{"email":localStorage.getItem('email')}).subscribe((response)=>{
      let my_plan = Object.entries(response)[0][1];
      console.log("My plan=",my_plan);
      if(my_plan==="Null" || my_plan==="Freelancer"){
        //this.router.navigate(['/dashboard']);
        this.toast.error({detail:"Failure Message",summary:"You need to upgrade your plan to access this page.",duration:5000});
      }
      else{
        this.router.navigate(['/newpost/calender'])
      }
    })
  }
  wdp(){
    this.http.post(environment.baseURL+'/get_plans',{"email":localStorage.getItem('email')}).subscribe((response)=>{
      let my_plan = Object.entries(response)[0][1];
      console.log("My plan=",my_plan);
      if(my_plan==="Null" || my_plan==="Freelancer"){
        //this.router.navigate(['/dashboard']);
        this.toast.error({detail:"Failure Message",summary:"You need to upgrade your plan to access this page.",duration:5000});
      }
      else{
        this.router.navigate(['/wbcs/calender'])
      }
    })
  }
  pcdp(){
    this.http.post(environment.baseURL+'/get_plans',{"email":localStorage.getItem('email')}).subscribe((response)=>{
      let my_plan = Object.entries(response)[0][1];
      console.log("My plan=",my_plan);
      if(my_plan==="Null" || my_plan==="Freelancer"){
        //this.router.navigate(['/dashboard']);
        this.toast.error({detail:"Failure Message",summary:"You need to upgrade your plan to access this page.",duration:5000});
      }
      else{
        this.router.navigate(['/profile-visits/calender'])
      }
    })
  }
  bcity(){
    this.http.post(environment.baseURL+'/get_plans',{"email":localStorage.getItem('email')}).subscribe((response)=>{
      let my_plan = Object.entries(response)[0][1];
      console.log("My plan=",my_plan);
      if(my_plan==="Null" || my_plan==="Freelancer"){
        //this.router.navigate(['/dashboard']);
        this.toast.error({detail:"Failure Message",summary:"You need to upgrade your plan to access this page.",duration:5000});
      }
      else{
        this.router.navigate(['followers-details/city'])
      }
    })
  }
  bcountry(){
    this.http.post(environment.baseURL+'/get_plans',{"email":localStorage.getItem('email')}).subscribe((response)=>{
      let my_plan = Object.entries(response)[0][1];
      console.log("My plan=",my_plan);
      if(my_plan==="Null" || my_plan==="Freelancer"){
        //this.router.navigate(['/dashboard']);
        this.toast.error({detail:"Failure Message",summary:"You need to upgrade your plan to access this page.",duration:5000});
      }
      else{
        this.router.navigate(['followers-details/country'])
      }
    })
  }
  bga(){
    this.http.post(environment.baseURL+'/get_plans',{"email":localStorage.getItem('email')}).subscribe((response)=>{
      let my_plan = Object.entries(response)[0][1];
      console.log("My plan=",my_plan);
      if(my_plan==="Null" || my_plan==="Freelancer"){
        //this.router.navigate(['/dashboard']);
        this.toast.error({detail:"Failure Message",summary:"You need to upgrade your plan to access this page.",duration:5000});
      }
      else{
        this.router.navigate(['followers-details/gender_age'])
      }
    })
  }
  sa_1(){
    if(this.access_token_1 && this.ig_id_1){
      localStorage.setItem("access_token",this.access_token_1);
      localStorage.setItem("ig_id",this.ig_id_1);
      window.location.reload();
    }
    else{
      this.toast.error({detail:"Failure Message",summary:"No ig account attached to it.",duration:5000});
    }
  }
  sa_2(){
    if(this.access_token_2 && this.ig_id_2){
      localStorage.setItem("access_token",this.access_token_2);
      localStorage.setItem("ig_id",this.ig_id_2);
      window.location.reload();
    }
    else{
      this.toast.error({detail:"Failure Message",summary:"No ig account attached to it.",duration:5000});
    }
  }
  sa_3(){
    if(this.access_token_3 && this.ig_id_3){
      localStorage.setItem("access_token",this.access_token_3);
      localStorage.setItem("ig_id",this.ig_id_3);
      window.location.reload();
    }
    else{
      this.toast.error({detail:"Failure Message",summary:"No ig account attached to it.",duration:5000});
    }
  }
  sa_4(){
    if(this.access_token_4 && this.ig_id_4){
      localStorage.setItem("access_token",this.access_token_4);
      localStorage.setItem("ig_id",this.ig_id_4);
      window.location.reload();
    }
    else{
      this.toast.error({detail:"Failure Message",summary:"No ig account attached to it.",duration:5000});
    }
  }
  sa_5(){
    if(this.access_token_5 && this.ig_id_5){
      localStorage.setItem("access_token",this.access_token_5);
      localStorage.setItem("ig_id",this.ig_id_5);
      window.location.reload();
    }
    else{
      this.toast.error({detail:"Failure Message",summary:"No ig account attached to it.",duration:5000});
    }
  }
  close_modal(){
    this.toDisplaymodal=false;
    this.toDisplaymodal_sub=false;
  }
  cancel_sub(){
    this.http.post(environment.baseURL+'/get_plans',{"email":localStorage.getItem('email')}).subscribe((response)=>{
      let my_plan = Object.entries(response)[0][1];
      console.log("My plan=",my_plan);
      if(my_plan==='Null'){
        this.toDisplaymodal_sub=false;
        this.toast.error({detail:"Failure Message",summary:"You have'nt purchased any plan yet",duration:5000});
      }
      else{
        this.toDisplaymodal_sub=true;
      }
    })
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
          this.toDisplaymodal_sub=false;
          let email=localStorage.getItem("email");
          localStorage.clear();
          localStorage.setItem("email",<any>email);
          this.router.navigate(['/pricing']);
          this.se.send_email(localStorage.getItem("email"),"cancel").subscribe((res)=>{
            console.log("You have Successfully cancelled your suscription");
          })
        window.location.reload();
        }
      })
  }
  in_development(){
    this.toast.info({detail:"Info Message",summary:"This plan is under devlopment",duration:5000});
  }
  profile(){
    this.router.navigate(['/profile']);
  }
  captureScreen(){
    html2canvas(document.body).then(function(canvas){
      var generatedImage=canvas.toDataURL("image/png").replace("image/png","image/octet-stream");
      window.location.href=generatedImage;
    });
  }
  update_card(){
    this.cust_id.get_cust_id(localStorage.getItem("email")).subscribe((response)=>{
      console.log("reponse from get customer id::",response);
      /*this.uc.list_card().subscribe((res)=>{
        console.log("response from list card::",res);
        this.uc.update_card().subscribe((resp)=>{
          console.log("response from update card::",resp);
        })
      })*/
    })
    
  }
}
