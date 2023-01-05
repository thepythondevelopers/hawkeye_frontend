import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreateOtpCollectionService {

  constructor(private http:HttpClient) { }

  create_otp_collection(data:any){
    return this.http.post(environment.baseURL+'/create_otp_collection',{"email":data});
  }
  expire_otp(data:any){
    return this.http.post(environment.baseURL+'/expire_otp',{"email":data});
  }
}
