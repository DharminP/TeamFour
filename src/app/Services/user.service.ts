import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersDetail } from '../Models/UsersDetail';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { policy } from '../Models/Policy';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient: HttpClient) { }
  url = environment.UserDomain;
  public GetAllPolicy(ptype: string, Gender: string, AgeGroup: string, Members: string, pgrade: string): Observable<policy[]> {
    return this.httpclient.get<policy[]>(this.url + '/Dashboard/GetRelevantPolicies?ptype=GMC&Gender=M&AgeGroup=18-30&Members=U&pgrade=12')
  }
}