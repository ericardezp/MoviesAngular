import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { firstLetterUppercase } from 'src/app/validators/firstLetterUppercase';
import { GenreModelDTO } from '../genre.model';

@Component({
  selector: 'app-form-genre',
  templateUrl: './form-genre.component.html',
  styleUrls: ['./form-genre.component.css']
})
export class FormGenreComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  @Input() genreModel: GenreModelDTO;


  @Output() saveChangesEvent: EventEmitter<GenreModelDTO> = new EventEmitter<GenreModelDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      genreName: [
        '',
        {
          validators: [Validators.required, Validators.minLength(3), firstLetterUppercase()]
        },
      ],
    });

    if (this.genreModel !== undefined) {
      this.form.patchValue(this.genreModel);
    }
  }

  saveChanges(): void {
    // ... guardar cambios
    this.saveChangesEvent.emit(this.form.value);
  }

  showErrorGenreName(): string {
    const field = this.form.get('genreName');
    if (field.hasError('required')) {
      return 'El campo Nombre del Género es requerido';
    }

    if (field.hasError('minlength')) {
      return 'La longitud mínima es de 3 caracteres';
    }

    if (field.hasError('firstLetterUppercase')) {
      return field.getError('firstLetterUppercase').message;
    }

    return '';
  }
}
