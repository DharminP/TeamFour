import { Component, OnInit } from '@angular/core';
import { policy, userPolicy } from 'src/app/Models/Policy';
import { UserService } from 'src/app/Services/user.service';
import { UUID } from 'angular2-uuid';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-policy-summary',
  templateUrl: './policy-summary.component.html',
  styleUrls: ['./policy-summary.component.css']
})
export class PolicySummaryComponent implements OnInit {
  _policyChoosen = new policy;
  tax?: number;
  policyid: UUID = '';
  constructor(private _UserService: UserService,
    private toaster: ToastrService,
    private router: Router) { }
  myDate = new Date();
  ngOnInit(): void {
    this._policyChoosen = this._UserService._policiesGlobal.filter(p => p.pid === this._UserService.userdetalmodel.pid)[0]
  }

  onCheckout() {
    let policyId = UUID.UUID().split('-')[0];
    this.toaster.success("Your Policy Number is " + policyId);
    let myPolicy = new userPolicy();
    myPolicy.AgeGroup = this._policyChoosen.AgeGroup;
    myPolicy.Gender = this._policyChoosen.Gender;
    myPolicy.Members = this._policyChoosen.Members;
    myPolicy.pdesc = this._policyChoosen.pdesc;
    myPolicy.Insurer = this._policyChoosen.Insurer;
    myPolicy.pCoverage = this._policyChoosen.pCoverage;
    myPolicy.pname = this._policyChoosen.pname;
    myPolicy.pPremium = this._policyChoosen.pPremium;
    myPolicy.policyId = policyId;
    myPolicy.uid = 1;
    this._UserService.AddMyPolicy(myPolicy).subscribe({
      next: (result) => {
        this.router.navigate(['/mypolicies']);
      }
    });
  }
}
