import { Component, IterableDiffers, OnInit, reflectComponentType } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { __values } from 'tslib';
import { ToastrService } from 'ngx-toastr';

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
    this.route.queryParamMap.subscribe({
      next: (param) => {
        this.router.navigate(['/viewplans'], {
          queryParams: {
            'iType': param.get('iTtype')
            , 'U': param.get('U')
            , 'S': param.get('S')
            , 'C': param.get('C')
            , 'AgeGroup': param.get('AgeGroup')
            , 'Gender': this.Gender
            , 'Name': txtFullname?.value
            , 'Mobile': txtMobile?.value
          }
        }
        );
      }
    })
  }
  GoBack() {
    this.route.queryParamMap.subscribe({
      next: (param) => {
        this.router.navigate(['/collectage'], {
          queryParams: {
            'iType': param.get('iTtype')
            , 'U': param.get('U')
            , 'S': param.get('S')
            , 'C': param.get('C')
            , 'AgeGroup': param.get('AgeGroup')
          }
        }
        );
      }
    })
  }
}
