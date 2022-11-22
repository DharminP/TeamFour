import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersDetail } from 'src/app/Models/UsersDetail';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-collectuserdetail',
  templateUrl: './collectuserdetail.component.html',
  styleUrls: ['./collectuserdetail.component.css']
})
export class CollectuserdetailComponent implements OnInit {

  iType: string = "";
  constructor(private router: Router, private route: ActivatedRoute, private toaster: ToastrService
    , private _UserService: UserService
  ) { }

  ngOnInit(): void {
    const btncheck1 = document.getElementById('btncheck1',) as HTMLInputElement | null;
    const btncheck2 = document.getElementById('btncheck2',) as HTMLInputElement | null;
    const btncheck3 = document.getElementById('btncheck3',) as HTMLInputElement | null;

    this.route.queryParamMap
      .subscribe({
        next: (param) => {
          console.log(param)
          const ParaiType = param.get('iType')
          if (ParaiType != null) {
            this.iType = ParaiType
          }
          if (btncheck2 != null && param.get('S') == 'true') {
            btncheck2.checked = true;
          }
          if (btncheck3 != null && param.get('C') == 'true') {
            btncheck3.checked = true;
          }
        }
      })
  }
  onClickProceed() {
    const btncheck2 = document.getElementById('btncheck2',) as HTMLInputElement;
    const btncheck3 = document.getElementById('btncheck3',) as HTMLInputElement;
    this._UserService.userdetalmodel.isSelfSelected = true;
    this._UserService.userdetalmodel.isSpouseSelected = btncheck2.checked;
    this._UserService.userdetalmodel.isChildrenSelected = btncheck3.checked;

    this.router.navigate(['/collectage']);
  }
  OnClickBack() {
    this.router.navigate(['/Insurancetyperoute'])
  }

}
