import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { policy } from 'src/app/Models/Policy';
import { PoliciesServiceService } from 'src/app/Services/policies-service.service';

@Component({
  selector: 'app-editpolicy',
  templateUrl: './editpolicy.component.html',
  styleUrls: ['./editpolicy.component.css']
})
export class EditpolicyComponent implements OnInit {  
  policy: policy = {
    pid: 0,
    pname: "",
    ptype: "",
    pgrade: 0,
    pstatus: "A",
    pdesc_short: "",
    pdesc: "",
    pCoverage: 0,
    pPremium: 0,
    Gender: "",
    AgeGroup: "",
    Members: "",
    Insurer: ""
  }
  constructor(private policyservice: PoliciesServiceService
    , private route: ActivatedRoute
    , private router: Router
    , private toastr: ToastrService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (param) => {
        const id = param.get('pid')
        if (id) {
          this.policyservice.GetPolicyById(parseInt(id))
            .subscribe({
              next: (response) => {
                console.log(response)                
                this.policy = JSON.parse(JSON.stringify(response)).Result[0]       
              }
            })
        }
      }
    })
  }
  OnClickSavePolicy() {
    console.log("EditSave-" + this.policy);
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
      this.policyservice.UpdatePolicy(this.policy)
        .subscribe({
          next: () => {
            this.toastr.success("Updated Successfully.")
            this.router.navigate(['../../allpolicies']);
          }
        })
    }
  }

}
