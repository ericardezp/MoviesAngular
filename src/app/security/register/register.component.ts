import { Component, OnInit } from '@angular/core';
import { UserData } from '../security.model';
import { SecurityService } from '../security.service';
import { parserErrors } from '../../utilities/helpers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  errors: string[] = [];
  constructor(
    private securityService: SecurityService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  registerUser(userData: UserData): void {
    this.securityService.registerUser(userData).subscribe(
      (response) => {
        this.securityService.setTokenData(response);
        this.router.navigate(['/']);
      },
      (errors) => (this.errors = parserErrors(errors))
    );
  }
}
