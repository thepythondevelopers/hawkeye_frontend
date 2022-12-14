import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
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
  constructor(private cookieService: CookieService,private router: Router,private pis: ProfileImageService) { 
    this.pis.get_profile_image().subscribe((res)=>{
      console.log("response form set profile image=",Object.entries(res))
      if(Object.entries(res)[0][0]==="updated_profile_image"){
        this.profile_image=Object.entries(res)[0][1].data;
      console.log("response from get image=",Object.entries(res)[0][1].data);
      this.base64String="data:image/png;base64,"+Object.entries(res)[0][1].data;
      //console.log("base url64=",this.base64String);
      }
      if(Object.entries(res)[0][0]==="insta_profile_image"){
      console.log("response from get image=",Object.entries(res)[0][1]);
      this.base64String=Object.entries(res)[0][1];
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
    this.cookieService.deleteAll();
    this.router.navigate(['/signup']);
  }
  profile(){
    this.router.navigate(['/profile']);
  }
}
