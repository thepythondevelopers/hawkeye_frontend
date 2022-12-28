import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetCustIdService {

  constructor(private http:HttpClient) { }

  get_cust_id(data:any){
    return this.http.post(environment.baseURL+'/get_cust_id',{"email":data});
  }
}
