import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieCreateDTO, MovieModelDTO } from '../movie.model';
import { MultipleSelectorModel } from '../../utilities/multiple-selector/multiple-selector.model';
import { ActorMovieDto } from '../../actors/actor.model';

@Component({
  selector: 'app-form-movie',
  templateUrl: './form-movie.component.html',
  styleUrls: ['./form-movie.component.css'],
})
export class FormMovieComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  form: FormGroup;
  genresSelected: MultipleSelectorModel[] = [];
  cinemasSelected: MultipleSelectorModel[] = [];

  @Input() errors: string[] = [];
  @Input() movie: MovieModelDTO;
  @Input() genresNotSelected: MultipleSelectorModel[];
  @Input() cinemasNotSelected: MultipleSelectorModel[];
  @Input() actorsSelected: ActorMovieDto[] = [];

  @Output() saveChangesEvent: EventEmitter<MovieCreateDTO> = new EventEmitter<MovieCreateDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: [
        '',
        {
          validators: [Validators.required],
        },
      ],
      resume: '',
      moviesTheaters: false,
      trailer: '',
      releaseDate: '',
      poster: '',
      genresIds: '',
      cinemasIds: '',
      actors: ''
    });

    if (this.movie !== undefined) {
      this.form.patchValue(this.movie);
    }
  }

  fileSelected(file: File): void {
    this.form.get('poster').setValue(file);
  }

  changeMarkDown(textValue: string): void {
    this.form.get('resume').setValue(textValue);
  }

  saveChanges(): void {
    const genresIds = this.genresSelected.map((item) => item.identifier);
    this.form.get('genresIds').setValue(genresIds);

    const cinemasIds = this.cinemasSelected.map((item) => item.identifier);
    this.form.get('cinemasIds').setValue(cinemasIds);

    const actors = this.actorsSelected.map((val) => {
      return { id: val.id, character: val.character };
    });
    this.form.get('actors').setValue(actors);

    this.saveChangesEvent.emit(this.form.value);
  }
}
