import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { ToastrService } from 'ngx-toastr';
import { AppStateService } from 'src/app/appStateService';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})
export class NavigationbarComponent implements OnInit {
  isdropdown: boolean = false;

  constructor(private toaster: ToastrService,
    private keycloakService: KeycloakService,
    private router: Router,
    public appStateService: AppStateService) { }

  ngOnInit(): void {
  }

  onUpdateProfile() {
    this.toggleDropdown();
    this.router.navigate(['/profile']);
  }

  onLogin() {
    this.router.navigate(['/mypolicies']);
  }

  onLogout() {
    this.keycloakService.logout('http://localhost:4200');
  }

  toggleDropdown() {
    this.isdropdown = !this.isdropdown;
  }

  onSecuritySettings() {
    this.router.navigate(['/securitySettings']);
  }

  onMyPolicies() {
    this.router.navigate(['/mypolicies']);
  }
}
