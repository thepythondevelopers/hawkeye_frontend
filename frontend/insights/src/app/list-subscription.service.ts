import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ListSubscriptionService {

  constructor(private http: HttpClient) { }

  list_subscription(data:any){
    return this.http.post(environment.baseURL+'/list_subscription',{"ci":data});
  }

}
