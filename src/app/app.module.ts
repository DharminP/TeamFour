import { APP_INITIALIZER, NgModule } from '@angular/core';
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
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './Components/profile/profile.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { AppStateService } from './appStateService';
import { TokenInterceptor } from './tokenInterceptor';


@NgModule({
  declarations: [
    AppComponent,
    InsurancetypeComponent,
    NavigationbarComponent, 
    CollectuserdetailComponent,
    CollectuserdetailageComponent,
    CollectuserdetailPersonalComponent,
    ViewallplansComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    Ng2SearchPipeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    KeycloakAngularModule,
    ToastrModule.forRoot()

  ],
  providers: [AppStateService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }


function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080/auth',
        realm: 'Team4_POC',
        clientId: 'POC',
      },
      initOptions: {
        //onLoad: 'login-required',
        //onLoad: 'check-sso',
        checkLoginIframe: false,
      },
      loadUserProfileAtStartUp: true,
    });
}
