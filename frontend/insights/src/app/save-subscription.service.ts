import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SaveSubscriptionService {

  constructor(private http:HttpClient) { }

  save_subscription(data:any,si:any){
    return this.http.post(environment.baseURL+'/save_subscription_id',{"email":data,"sub_id":si});
  }
}
