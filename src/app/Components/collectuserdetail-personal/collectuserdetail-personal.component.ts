import { Component, IterableDiffers, OnInit, reflectComponentType } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { __values } from 'tslib';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-collectuserdetail-personal',
  templateUrl: './collectuserdetail-personal.component.html',
  styleUrls: ['./collectuserdetail-personal.component.css']
})
export class CollectuserdetailPersonalComponent implements OnInit {

  Gender: string = "M";
  constructor(private route: ActivatedRoute
    , private router: Router
    , private toaster: ToastrService
    , private _UserService: UserService
  ) { }

  ngOnInit(): void {

  }
  Radiochange(SelectedValue: string) {
    this.Gender = SelectedValue;
  }

  OnClickViewPlan() {
    const txtFullname = document.getElementById('txtFullname') as HTMLInputElement | null;
    const txtMobile = document.getElementById('txtMobile') as HTMLInputElement | null;
    if (txtFullname?.value.trim().length == 0) {
      this.toaster.error('Kindly enter full name!!!')
      return
    }
    if (txtMobile != null) {
      if (txtMobile?.value.trim().length == 0 || txtMobile?.value.trim().length < 10 || txtMobile?.value.trim().length > 10) {
        this.toaster.error('Kindly enter valid mobile number!!!')
        return
      }
    }
    if (txtFullname)
      this._UserService.userdetalmodel.UName = txtFullname?.value
    if (txtMobile)
      this._UserService.userdetalmodel.UMobileNumber = txtMobile.value

    this._UserService.userdetalmodel.UGender = this.Gender;
    this.router.navigate(['/viewplans']);    
  }
  GoBack() {
    this.router.navigate(['/collectage']);
  }

}
