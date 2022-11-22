import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { KeycloakService } from 'keycloak-angular';
import { ToastrService } from 'ngx-toastr';
import { AppStateService } from 'src/app/appStateService';
import { ProfileService } from 'src/app/Services/profile.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetForm: any;

  constructor(
    private keycloakService: KeycloakService,
    private profileService: ProfileService,
    private appStateService: AppStateService,
    private fb: FormBuilder,
    private toaster: ToastrService) { }

  ngOnInit(): void {
    this.resetForm = this.fb.group({
      Password: [''],
      ConfirmPassword: [''],
    },
      {
        validator: (form: FormGroup) => {
          return form.get("Password")?.value !==
            form.get("ConfirmPassword")?.value
            ? { PasswordMismatch: true }
            : null;
        }
      });
  }

  onSubmit() {
    this.profileService.ResetPassword({type: "password", value: this.resetForm.value.Password }, (res: any) => {
      this.toaster.success('Password reset successfully');
    }, (err: any) => { this.toaster.error('Error occured while updating the password.'); });
  }
}