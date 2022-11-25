import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewpolicyComponent } from './Components/addnewpolicy/addnewpolicy.component';
import { AllPoliciesComponent } from './Components/all-policies/all-policies.component';
import { ApplicationExceptionComponent } from './Components/application-exception/application-exception.component';
import { CollectuserdetailPersonalComponent } from './Components/collectuserdetail-personal/collectuserdetail-personal.component';
import { CollectuserdetailComponent } from './Components/collectuserdetail/collectuserdetail.component';
import { CollectuserdetailageComponent } from './Components/collectuserdetailage/collectuserdetailage.component';
import { EditpolicyComponent } from './Components/editpolicy/editpolicy.component';
import { InsurancetypeComponent } from './Components/insurancetype/insurancetype.component';
import { MyPoliciesComponent } from './Components/my-policies/my-policies.component';
import { NavigationbarComponent } from './Components/navigationbar/navigationbar.component';
import { PolicySummaryComponent } from './Components/policy-summary/policy-summary.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { ViewallplansComponent } from './Components/viewallplans/viewallplans.component';
import { KCAuthGuard } from './custom-keycloak-auth-guard';

const routes: Routes = [
  {
    path: "appexception",
    component: ApplicationExceptionComponent
  },
  {
    path: "",
    component: NavigationbarComponent,
    children: [
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
      },
      {
        path: "mypolicies",
        component: MyPoliciesComponent,
        canActivate: [KCAuthGuard]
      },
      {
        path: "profile",
        component: ProfileComponent,
        canActivate: [KCAuthGuard]
      },
      {
        path: "Summary",
        component: PolicySummaryComponent,
        canActivate: [KCAuthGuard]
      },
      {
        path: "securitySettings",
        component: ResetPasswordComponent,
        canActivate: [KCAuthGuard]
      },
      {
        path: "allpolicies",
        component: AllPoliciesComponent,
        data: { roles: ['admin']},
        canActivate: [KCAuthGuard]
      },
      {
        path: "editpolicy/:pid",
        component: EditpolicyComponent,
        canActivate: [KCAuthGuard]
      },
      {
        path: "addnewpolicy",
        component: AddnewpolicyComponent,
        canActivate: [KCAuthGuard]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
