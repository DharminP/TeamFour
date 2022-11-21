import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpEvent,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { AppStateService } from './appStateService';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private appStateService: AppStateService, private router: Router) { }
  private counter = 0;
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(this.addTokenToRequest(request, this.appStateService.token)).pipe(tap((event: HttpEvent<any>) => {
      // if (event instanceof HttpResponse) {
      //   this.onEnd(request);
      // }
    },
      (err: any) => {
        //this.onEnd(request);
      }));
  }

  // private onEnd(request): void {
  //   if (!this.router.url.includes("/issue_edit") && !this.router.url.includes("/add_issue") && !request.url.includes("/RefreshToken") && !request.url.includes("/fetchtypeaheaddata")
  //     && !request.url.includes("crsNotifications")) {
  //     this.counter == 0 ? this.counter : this.counter--;
  //     if (this.counter <= 0) {
  //       this.loaderService.display(false);
  //       this.counter = 0;
  //     }
  //   }
  // }

  private addTokenToRequest(request: HttpRequest<any>, token: string): HttpRequest<any> {
    if (this.router.url.includes("/profile")) {
      return request.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
    }
    return request.clone();
  }
}
