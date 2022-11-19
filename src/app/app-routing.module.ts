import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectuserdetailPersonalComponent } from './Components/collectuserdetail-personal/collectuserdetail-personal.component';
import { CollectuserdetailComponent } from './Components/collectuserdetail/collectuserdetail.component';
import { CollectuserdetailageComponent } from './Components/collectuserdetailage/collectuserdetailage.component';
import { InsurancetypeComponent } from './Components/insurancetype/insurancetype.component';
import { ViewallplansComponent } from './Components/viewallplans/viewallplans.component';

const routes: Routes = [
  {
    path: "",
    component: InsurancetypeComponent
  },
  {
    path: "Insurancetyperoute",
    component: InsurancetypeComponent
  },
  {
    path: "collectuserdetail",
    component: CollectuserdetailComponent
  },
  {
    path: "collectage",
    component: CollectuserdetailageComponent
  },
  {
    path: "collectpersonaldetail",
    component: CollectuserdetailPersonalComponent
  },
  {
    path: "viewplans",
    component: ViewallplansComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
