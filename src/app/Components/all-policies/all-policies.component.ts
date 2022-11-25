import { Component, OnInit } from '@angular/core';
import { policy } from 'src/app/Models/Policy';
import { PoliciesServiceService } from 'src/app/Services/policies-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-all-policies',
  templateUrl: './all-policies.component.html',
  styleUrls: ['./all-policies.component.css']
})
export class AllPoliciesComponent implements OnInit {
  policies = new Array<policy>;
  term: string = "";
  constructor(private policyservice: PoliciesServiceService
    , private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.policyservice.GetAllPolicy()
      .subscribe({
        next: (response) => {
          console.log(response);
          this.policies = response;
        }
      })
  }
  OnDeleteClick(content: any, pid: any) {

    this.policyservice.DeletePolicy(parseInt(pid))
      .subscribe({
        next: (response) => {
          this.policies = response;
          this.toastr.warning("Deleted Successfully.")
        }
      })
  }

}
