import { Component, Input, OnInit } from '@angular/core';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css'],
})
export class AuthorizationComponent implements OnInit {
  @Input() role: string;

  constructor(private securityService: SecurityService) {}

  ngOnInit(): void {}

  isAuthorized(): boolean {
    if (this.role) {
      return this.securityService.getRole() === this.role;
    } else {
      return this.securityService.isLoggedIn();
    }
  }

  isAuthorizedd(): boolean {
    if (this.role) {
      return this.securityService.getRole() === 'OtroRol';
    } else {
      return this.securityService.isLoggedIn();
    }
  }

}
