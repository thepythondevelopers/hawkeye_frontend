import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private http: HttpClient) { }

  get_user_details(){
    return this.http.post(environment.baseURL+"/user_details",{"email":localStorage.getItem("email")});
  }
}
