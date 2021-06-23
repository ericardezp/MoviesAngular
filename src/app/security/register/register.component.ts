import { Component, OnInit } from '@angular/core';
import { UserData } from '../security.model';
import { SecurityService } from '../security.service';
import { parserErrors } from '../../utilities/helpers';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  errors: string[] = [];
  constructor(private securityService: SecurityService) { }

  ngOnInit(): void {
  }

  registerUser(userData: UserData): void {
    this.securityService.registerUser(userData).subscribe(response => {
      console.log(response);
    }, errors => this.errors = parserErrors(errors));
  }

}
