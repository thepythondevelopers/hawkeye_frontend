import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModalserviceService {

  constructor(private http:HttpClient) { }

  change_name(email:any,req:any,edit_for:any){
    console.log("change name::",email,req);
    return this.http.post(environment.baseURL+'/edit_name',{"email":email,"name":req.name,"edit_for":edit_for});
  }
}
