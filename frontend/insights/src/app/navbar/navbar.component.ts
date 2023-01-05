import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
  sdp: any=false;
  imageurl: any;
  constructor(private domSanitizer: DomSanitizer,private cookieService: CookieService,private router: Router,private pis: ProfileImageService) { 
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
    this.router.navigate(['/signup']);
  }
  profile(){
    this.router.navigate(['/profile']);
  }
}
