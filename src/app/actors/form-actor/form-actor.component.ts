import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActorCreateDTO, ActorModelDTO } from '../actor.model';

@Component({
  selector: 'app-form-actor',
  templateUrl: './form-actor.component.html',
  styleUrls: ['./form-actor.component.css']
})
export class FormActorComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  @Input() actorModel: ActorModelDTO;

  @Output() saveChangesEvent: EventEmitter<ActorCreateDTO> = new EventEmitter<ActorCreateDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      actorName: [
        '',
        {
          validators: [Validators.required]
        }
      ],
      dateBirth: '',
      photo: '',
      biography: ''
    });

    if (this.actorModel !== undefined) {
      this.form.patchValue(this.actorModel);
    }

  }

  fileSelected(file: File): void {
    this.form.get('photo').setValue(file);
  }

  changeMarkDown(textContent: string): void {
    this.form.get('biography').setValue(textContent);
  }

  saveChanges(): void {
    this.saveChangesEvent.emit(this.form.value);
  }
}
