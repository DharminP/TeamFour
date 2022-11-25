import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { policy } from '../Models/Policy';

@Injectable({
  providedIn: 'root'
})
export class PoliciesServiceService {
  adminUrl = environment.AdminDomain + "/policy";
  constructor(private httpclient: HttpClient) { }

  public GetAllPolicy(): Observable<policy[]> {
    return this.httpclient.get<policy[]>(this.adminUrl);
  }
  public CreatePolicy(policy: policy): Observable<policy[]> {
    console.log("Create---" + this.adminUrl + '--' + policy);
    return this.httpclient.post<policy[]>(this.adminUrl, policy);
  }
  public DeletePolicy(id: number): Observable<policy[]> {
    return this.httpclient.delete<policy[]>(this.adminUrl + '/' + id);
  }
  public GetPolicyById(id: number): Observable<policy> {
    return this.httpclient.get<policy>(this.adminUrl + '/' + id);
  }
  public UpdatePolicy(policy: policy): Observable<policy> {
    console.log("ES" + policy.members);
    return this.httpclient.put<policy>(this.adminUrl, policy);
  }
}
