import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';
import { AppStateService } from './appStateService';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private readonly keycloak: KeycloakService, private router: Router, private appStateService: AppStateService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.keycloak.isUserInRole('admin')) {
      this.router.navigate(['/appexception']);
    }
    return true;
  }
}