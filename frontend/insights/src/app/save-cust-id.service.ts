import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SaveCustIdService {

  constructor(private http:HttpClient) { }

  save_cust_id(email:any,ci:any){
    return this.http.post(environment.baseURL+'/save_cust_id',{"email":email,"ci":ci});
  }
}
