import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-collectuserdetailage',
  templateUrl: './collectuserdetailage.component.html',
  styleUrls: ['./collectuserdetailage.component.css']
})
export class CollectuserdetailageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router
    , private _UserService: UserService
  ) { }


  ngOnInit(): void {
    const ddlAge = document.getElementById('ddlAge') as HTMLInputElement | null;
    this.route.queryParamMap.subscribe({
      next: (param) => {
        const AgeGroup = param.get('AgeGroup')
        if (ddlAge != null && AgeGroup != null) {
          ddlAge.value = AgeGroup;
        }
      }
    })
  }
  onClickProceed() {
    const ddlAge = document.getElementById('ddlAge') as HTMLInputElement | null;
    if (ddlAge)
      this._UserService.userdetalmodel.UAge = ddlAge.value;
    this.router.navigate(['/collectpersonaldetail']);
  }

  OnClickBack() {
    this.route.queryParamMap.subscribe(
      {
        next: (param) => {
          this.router.navigate(['/collectuserdetail'],
            {
              queryParams:
              {
                'iType': param.get('iType')
                , 'U': param.get('U')
                , 'S': param.get('S')
                , 'C': param.get('C')
              }
            });
        }
      });
  }

}
