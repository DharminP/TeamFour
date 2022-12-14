import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { policy, userPolicy } from '../Models/Policy';
import { UsersDetail } from '../Models/UsersDetail';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userdetalmodel = new UsersDetail();
  _policiesGlobal = new Array<policy>;
  constructor(private httpclient: HttpClient) { }
  
  url = environment.UserDomain;
  adminUrl = environment.AdminDomain;
  public GetAllPolicy(ptype: string, Gender: string, AgeGroup: string, Members: string, pgrade: string): Observable<policy[]> {
    var RequesteURL = this.url + '/Dashboard/GetRelevantPolicies?ptype=' + ptype + '&Gender=' + Gender + '&AgeGroup=' + AgeGroup + '&Members=' + Members + '&pgrade=12'        
    return this.httpclient.get<policy[]>(RequesteURL)    
  }

  // public GetAllPolicies(): Observable<policy[]> {
  //   var RequesteURL = this.url + '/Dashboard'        
  //   return this.httpclient.get<policy[]>(RequesteURL)    
  // }
  public GetAllPolicies() {
    
    var RequesteURL = this.url + '/Dashboard'        
    console.log("GetAllPolicies Before");
    console.log(this.httpclient.get(RequesteURL))
    console.log("GetAllPolicies after");
    return this.httpclient.get(RequesteURL)    
  }

  public GetMyPolicy(): Observable<userPolicy[]> {
    return this.httpclient.get<userPolicy[]>(this.adminUrl + '/Policy/MyPolicy?uid=1')
  }

  public AddMyPolicy(mypolicy: userPolicy): Observable<userPolicy[]> {
    return this.httpclient.post<userPolicy[]>(this.adminUrl + '/Policy/AddPolicy', mypolicy)
  }
}