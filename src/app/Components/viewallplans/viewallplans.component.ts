import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, QueryParamsHandling, Route } from '@angular/router';
import { policy } from 'src/app/Models/Policy';
import { UserService } from 'src/app/Services/user.service';



@Component({
  selector: 'app-viewallplans',
  templateUrl: './viewallplans.component.html',
  styleUrls: ['./viewallplans.component.css']
})
export class ViewallplansComponent implements OnInit {
  
  _policies = new Array<policy>;
  term: string = "";
  constructor(private _UserService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {     
    //http://localhost:4200/viewplans?U=true&S=false&C=false&AgeGroup=18-30&Gender=M&Name=Dharmin&Mobile=1236985785
    //ptype: string, Gender: string, AgeGroup: string, Members: string, pgrade: string
    this.route.queryParamMap.subscribe({
      
      next: (param) => {  
        this._UserService.GetAllPolicy('GMC','M','18-30','U','12').subscribe({
          next: (result) => {
            console.log(result);
            this._policies = result 
           
          }
        })
      }
    })

  }
}
