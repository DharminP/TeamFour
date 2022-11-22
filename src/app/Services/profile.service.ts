import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppStateService } from '../appStateService';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    tokenUrl = "http://localhost:8080/auth/realms/master/protocol/openid-connect/token";
    baseUrl = "http://localhost:8080/auth/admin/realms/Team4_POC/users/"
    constructor(private http: HttpClient, private appStateService: AppStateService) { }

    public UpdateProfile(profile: any, successCallback: any, errorCallback: any) {
        let token = '';
        let options = {
            headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        };
        let body = new URLSearchParams();
        body.set('client_id', 'admin-cli');
        body.set('client_secret', 'y7deRbppsOTIwSTOydLFMWxGeYs8oWvt');
        body.set('grant_type', 'client_credentials');


        this.http
            .post(this.tokenUrl, body.toString(), options).subscribe({
                next: (Response: any) => {
                    this.appStateService.token = Response.access_token;
                    options = {
                        headers: new HttpHeaders().set('Authorization', token)
                    };
                    this.http.put(this.baseUrl + this.appStateService.userId, profile, options).subscribe({
                        next: (res: any) => {
                            successCallback(res);
                        },
                        error: (err: any) => {
                            errorCallback(err);
                        }
                    })
                }
            });
    }

    public ResetPassword(profile: any, successCallback: any, errorCallback: any) {
        let token = '';
        let options = {
            headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        };
        let body = new URLSearchParams();
        body.set('client_id', 'admin-cli');
        body.set('client_secret', 'y7deRbppsOTIwSTOydLFMWxGeYs8oWvt');
        body.set('grant_type', 'client_credentials');


        this.http
            .post(this.tokenUrl, body.toString(), options).subscribe({
                next: (Response: any) => {
                    this.appStateService.token = Response.access_token;
                    options = {
                        headers: new HttpHeaders().set('Authorization', token)
                    };
                    this.http.put(this.baseUrl + this.appStateService.userId + '/reset-password', profile, options).subscribe({
                        next: (res: any) => {
                            successCallback(res);
                        },
                        error: (err: any) => {
                            errorCallback(err);
                        }
                    })
                }
            });
    }
}
