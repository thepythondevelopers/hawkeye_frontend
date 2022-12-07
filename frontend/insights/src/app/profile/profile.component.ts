import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileImageService } from '../profile-image.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile_image: any;
  base64String:any;
  constructor(private router: Router,private pis: ProfileImageService) {
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
  editprofile(data:any){

  }
}
