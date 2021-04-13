import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieCreateDTO, MovieModelDTO } from '../movie.model';
import { MultipleSelectorModel } from '../../utilities/multiple-selector/multiple-selector.model';

@Component({
  selector: 'app-form-movie',
  templateUrl: './form-movie.component.html',
  styleUrls: ['./form-movie.component.css']
})
export class FormMovieComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  @Input() movie: MovieModelDTO;

  @Output() saveChangesEvent: EventEmitter<MovieCreateDTO> = new EventEmitter<MovieCreateDTO>();

  catalogGenres: MultipleSelectorModel[] = [
    {identifier: 1, value: 'Drama'},
    {identifier: 2, value: 'Acción'},
    {identifier: 3, value: 'Comedia'},
    {identifier: 4, value: 'Terror'},
    {identifier: 5, value: 'Suspenso'}
  ];

  selectedGenres: MultipleSelectorModel[] = [];

  catalogCinemas: MultipleSelectorModel[] = [
    {identifier: 1, value: 'Gold Class Cinema - Apodaca'},
    {identifier: 2, value: 'Gold Class Cinema - Guadalupe'},
    {identifier: 3, value: 'Gold Class Cinema - Monterrey'},
    {identifier: 4, value: 'Gold Class Cinema - San Pedro'},
    {identifier: 5, value: 'Gold Class Cinema - Lindavista'}
  ];

  selectedCinemas: MultipleSelectorModel[] = [];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: [
        '',
        {
          validators: [Validators.required]
        }
      ],
      resume: '',
      moviesTheaters: false,
      trailer: '',
      releaseDate: '',
      poster: '',
      genresId: '',
      cinemasId: ''
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
    const genresId = this.selectedGenres.map(item => item.identifier);
    this.form.get('genresId').setValue(genresId);

    const cinemasId = this.selectedCinemas.map(item => item.identifier);
    this.form.get('cinemasId').setValue(cinemasId);

    this.saveChangesEvent.emit(this.form.value);
  }
}
