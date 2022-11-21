import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { KeycloakService } from 'keycloak-angular';
import { ToastrService } from 'ngx-toastr';
import { AppStateService } from 'src/app/appStateService';
import { ProfileService } from 'src/app/Services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userDetails: any;
  profileForm: any;

  constructor(
    private keycloakService: KeycloakService,
    private profileService: ProfileService,
    private appStateService: AppStateService,
    private fb: FormBuilder, 
    private toaster: ToastrService) { }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      firstName: [''],
      lastName: [''],
    });
    this.keycloakService.loadUserProfile().then((x) => {
      this.appStateService.userId = x.id;
      this.appStateService.userDetails = x;
      this.profileForm.patchValue({
        firstName: this.appStateService.userDetails.firstName,
        lastName: this.appStateService.userDetails.lastName
      })
    });
  }

  onSubmit() {
    this.profileService.UpdateProfile(this.profileForm.value, (res: any) => {
      this.toaster.success('Profile updated successfully');
    }, (err: any) => { this.toaster.error('Error occured while updating the profile.');});
  }
}
