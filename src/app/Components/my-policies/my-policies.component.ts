import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { policy } from 'src/app/Models/Policy';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-my-policies',
  templateUrl: './my-policies.component.html',
  styleUrls: ['./my-policies.component.css']
})
export class MyPoliciesComponent implements OnInit {
  _mypolicies = new Array<policy>;

  constructor(private _UserService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this._UserService.GetMyPolicy().subscribe({
      next: (result) => {
        console.log(result);
        this._mypolicies = result;
      }
    })
  }

}
