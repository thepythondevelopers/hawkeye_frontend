import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetInstaAccountsService {

  constructor(private http: HttpClient) { }

  accounts(data:any){
    return this.http.post(environment.baseURL+'/get_insta_accounts',{"email":data});
  }
  check_allocation(data:any){
    return this.http.post(environment.baseURL+'/check_allocation',{"email":data});
  }
}
