import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserData } from '../security.model';

@Component({
  selector: 'app-form-authentication',
  templateUrl: './form-authentication.component.html',
  styleUrls: ['./form-authentication.component.css']
})
export class FormAuthenticationComponent implements OnInit {

  @Input() errors: string[] = [];
  @Input() action: string;
  @Output() sendEvent: EventEmitter<UserData> = new EventEmitter<UserData>();

  formGroup: FormGroup;

  constructor(private formBuiler: FormBuilder) { }

  ngOnInit(): void {
    this.setupForm();
  }

  setupForm(): void {
    this.formGroup = this.formBuiler.group({
      email: ['', {
        validators: [Validators.required, Validators.email]
      }],
      password: ['', {
        validators: [Validators.required]
      }]
    });
  }

  getErrorMessageEmail(): string {
    const control = this.formGroup.get('email');
    if (control.hasError('required')){
      return 'El campo Email es requerido';
    }

    if (control.hasError('email')){
      return 'El Email no es válido';
    }

    return '';
  }
}
