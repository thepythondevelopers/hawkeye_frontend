import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CfiService {

  constructor(private http: HttpClient) { }

  create_five_insta_allotments_for_the_user(){
    return this.http.post(environment.baseURL+'/space_for_insta_accounts',{"email":localStorage.getItem("email")});
  }
}
