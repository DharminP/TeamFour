import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-application-exception',
  templateUrl: './application-exception.component.html',
  styleUrls: ['./application-exception.component.scss']
})
export class ApplicationExceptionComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private keycloakservice: KeycloakService,
    private router: Router
  ) { }

  ngOnInit() {
  }

}
