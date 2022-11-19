import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-collectuserdetail',
  templateUrl: './collectuserdetail.component.html',
  styleUrls: ['./collectuserdetail.component.css']
})
export class CollectuserdetailComponent implements OnInit {

  iType: string = "";
  constructor(private router: Router, private route: ActivatedRoute, private toaster: ToastrService) { }

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
    const btncheck1 = document.getElementById('btncheck1',) as HTMLInputElement | null;
    const btncheck2 = document.getElementById('btncheck2',) as HTMLInputElement | null;
    const btncheck3 = document.getElementById('btncheck3',) as HTMLInputElement | null;

    console.log(btncheck1?.checked);
    if (!btncheck1?.checked && !btncheck2?.checked && !btncheck3?.checked) {
      this.toaster.error('Please select atleast 1 member')
      return;
    }

    this.router.navigate(['/collectage'], {
      queryParams: {
        'iType': this.iType
        , 'U': btncheck1?.checked
        , 'S': btncheck2?.checked
        , 'C': btncheck3?.checked
      }
    });
  }
  OnClickBack() {
    this.route.queryParamMap.subscribe(
      {
        next: (param) => {
          this.router.navigate(['/Insurancetyperoute'],
            {
              queryParams:
              {
                'iType': param.get('iTtype')
                , 'U': param.get('U')
                , 'S': param.get('S')
                , 'C': param.get('C')
              }
            });
        }
      });
  }

}
