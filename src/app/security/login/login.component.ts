import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../security.service';
import { Router } from '@angular/router';
import { UserData } from '../security.model';
import { parserErrors } from 'src/app/utilities/helpers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  errors: string[] = [];

  constructor(
    private securityService: SecurityService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  loginUser(userData: UserData): void {
    this.securityService.loginUser(userData).subscribe(
      (response) => {
        this.securityService.setTokenData(response);
        this.router.navigate(['/']);
      },
      (errors) => (this.errors = parserErrors(errors))
    );
  }
}
