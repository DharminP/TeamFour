import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsurancetypeComponent } from './Components/insurancetype/insurancetype.component';
import { NavigationbarComponent } from './Components/navigationbar/navigationbar.component';
import { CollectuserdetailComponent } from './Components/collectuserdetail/collectuserdetail.component';
import { CollectuserdetailageComponent } from './Components/collectuserdetailage/collectuserdetailage.component';
import { CollectuserdetailPersonalComponent } from './Components/collectuserdetail-personal/collectuserdetail-personal.component';
import { ViewallplansComponent } from './Components/viewallplans/viewallplans.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    InsurancetypeComponent,
    NavigationbarComponent,
    CollectuserdetailComponent,
    CollectuserdetailageComponent,
    CollectuserdetailPersonalComponent,
    ViewallplansComponent,   
  

  ],
  imports: [
    BrowserModule,
    Ng2SearchPipeModule,    
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
