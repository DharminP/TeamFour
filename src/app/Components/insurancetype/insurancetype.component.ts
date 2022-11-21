import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-insurancetype',
  templateUrl: './insurancetype.component.html',
  styleUrls: ['./insurancetype.component.css']
})
export class InsurancetypeComponent implements OnInit {

  constructor(private toaster: ToastrService
    , private router: Router
    , private _UserService: UserService) { }

  ngOnInit(): void {
  }
  onTypeClick(type: string) {
    this._UserService.userdetalmodel.InsuranceType = type;
    this.router.navigate(['/collectuserdetail'])
  }
}


