import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';
import { AppStateService } from './appStateService';
import { UserService } from './Services/user.service';

@Injectable({
  providedIn: 'root'
})
export class KCAuthGuard extends KeycloakAuthGuard {
  constructor(
    protected override readonly router: Router,
    protected readonly keycloak: KeycloakService,
    private appStateService: AppStateService,
    private userService: UserService
  ) {
    super(router, keycloak);
  }

  public async isAccessAllowed(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {

    if (state.url == '/') {
      this.router.navigate(['/login']);
      return true;
    }
    // Force the user to log in if currently unauthenticated.
    if (!this.authenticated) {
      await this.keycloak.login({
        redirectUri: window.location.origin + state.url,
        idpHint: this.appStateService.idpHint ? this.appStateService.idpHint : '',
      });
    }
    this.keycloak.loadUserProfile().then((x) => {
      this.appStateService.userId = x.id;
      this.appStateService.userDetails = x;
      this.userService.userdetalmodel.InsuranceType = "GMC";
      this.userService.userdetalmodel.UAge = "18-30";
      this.userService.userdetalmodel.UGender = "M";
      this.userService.userdetalmodel.isSelfSelected = true;

    });

    // Get the roles required from the route.
    const requiredRoles = route.data['roles'];

    // Allow the user to proceed if no additional roles are required to access the route.
    if (!(requiredRoles instanceof Array) || requiredRoles.length === 0) {
      return true;
    }

    // Allow the user to proceed if all the required roles are present.
    return requiredRoles.every((role) => this.roles.includes(role));
  }
}