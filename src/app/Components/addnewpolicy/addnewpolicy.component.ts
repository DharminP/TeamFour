import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { policy } from 'src/app/Models/Policy';
import { PoliciesServiceService } from 'src/app/Services/policies-service.service';

@Component({
  selector: 'app-addnewpolicy',
  templateUrl: './addnewpolicy.component.html',
  styleUrls: ['./addnewpolicy.component.css']
})
export class AddnewpolicyComponent implements OnInit {
  policy: policy = {
    pid: 0,
    pname: "",
    ptype: "GMC",
    pgrade: 12,
    pstatus: "A",
    pdesc_short: "",
    pdesc: "",
    pCoverage: 0,
    pPremium: 0,
    Gender: "M",
    AgeGroup: "18-30",
    Members: "U",
    Insurer : "null"
  }
  constructor(private policyservice: PoliciesServiceService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  OnClickCreatePolicy() {
    console.log(this.policy)
    debugger;
    if (this.policy.pname == "") {
      this.toastr.warning("Please enter policy name.")
      return;
    }
    else if (this.policy.ptype == "null") {
      this.toastr.warning("Please select policy type.")
      return;
    }
    else if (this.policy.pgrade == 0) {
      this.toastr.warning("Please select policy grade.")
      return;
    }
    else if (this.policy.Insurer == "null") {
      this.toastr.warning("Please select insurer.")
      return;
    }
    else {      
      this.policyservice.CreatePolicy(this.policy)
        .subscribe({
          next: () => {
            this.toastr.success("Saved Successfully!!!");            
            this.router.navigate(['../../allpolicies']);
          }
        });
    }

  }

}
