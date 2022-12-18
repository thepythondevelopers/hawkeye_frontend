import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UpdateProfileImageService {

  constructor(private http: HttpClient) { }

  update_image(req:any){
    console.log("image form data=",req);
    return this.http.post(environment.baseURL+"/update_profile_image",req);
  }
}
