import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {

  constructor(private http:HttpClient) { }

  send_email(data:any,sub:any){
    return this.http.post(environment.baseURL+"/send_email",{"email":data,"sub":sub});
  }
}
