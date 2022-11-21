import { Component, OnInit } from '@angular/core';
import { policy } from 'src/app/Models/Policy';
import { UserService } from 'src/app/Services/user.service';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-policy-summary',
  templateUrl: './policy-summary.component.html',
  styleUrls: ['./policy-summary.component.css']
})
export class PolicySummaryComponent implements OnInit {
  _policyChoosen = new Array<policy>;
  tax?: number;
  constructor(private _UserService: UserService) { }
  myDate = new Date();
  ngOnInit(): void {
    this._policyChoosen = this._UserService._policiesGlobal.filter(p => p.pid === this._UserService.userdetalmodel.pid)
  }
}
