import { JsonPipe } from '@angular/common';
import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, QueryParamsHandling, Route, Router, TitleStrategy } from '@angular/router';
import { policy } from 'src/app/Models/Policy';
import { UserService } from 'src/app/Services/user.service';



@Component({
  selector: 'app-viewallplans',
  templateUrl: './viewallplans.component.html',
  styleUrls: ['./viewallplans.component.css']
})
export class ViewallplansComponent implements OnInit {

  _p = new Array<policy>;
  term: string = "";
  // _policies: any = []
  _policies: policy[] = [];

  constructor(private _UserService: UserService, private route: ActivatedRoute
    , private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this._UserService.userdetalmodel)
    if (this._UserService.userdetalmodel.InsuranceType) {
      var member = 'U'
      if (this._UserService.userdetalmodel.isSpouseSelected == true)
        member = member + '_S'
      if (this._UserService.userdetalmodel.isChildrenSelected == true)
        member = member + '_C'
      this._UserService.GetAllPolicy(this._UserService.userdetalmodel.InsuranceType
        , this._UserService.userdetalmodel.UGender
        , this._UserService.userdetalmodel.UAge
        , member, '12')
        .subscribe({
          next: (result) => {
            this._policies = JSON.parse(JSON.stringify(result)).Result;
            this._UserService._policiesGlobal = JSON.parse(JSON.stringify(result)).Result;
          }
        });
    }
    else {
      this._UserService.GetAllPolicies()
        .subscribe({
          next: (result) => {            
            this._policies = JSON.parse(JSON.stringify(result)).Result;
            this._UserService._policiesGlobal = this._policies
          }
        });
    }
  }
  OnClickChoosePolicy(pid: number) {
    this._UserService.userdetalmodel.pid = pid;
    this.router.navigate(["/Summary"])
  }
}
