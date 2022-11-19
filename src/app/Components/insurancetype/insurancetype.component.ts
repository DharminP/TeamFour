import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-insurancetype',
  templateUrl: './insurancetype.component.html',
  styleUrls: ['./insurancetype.component.css']
})
export class InsurancetypeComponent implements OnInit {

  constructor(private toaster: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }
  onTypeClick(type: string) {
    this.router.navigate(['/collectuserdetail']);
    // this.router.navigate(['/collectuserdetail'], {
    //   queryParams: { 'iType': type }
    // })
  }
}


