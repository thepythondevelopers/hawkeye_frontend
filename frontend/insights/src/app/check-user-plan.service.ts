import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CheckUserPlanService {

  constructor(private http: HttpClient) { }

  check_user_plan(req:any){
    return this.http.post(environment.baseURL+"/user_current_plan",({"email":req}));
  }
}
