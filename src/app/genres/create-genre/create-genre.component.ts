import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GenreModelDTO } from '../genre.model';
import { GenresService } from '../genres.service';
import { parserErrors } from '../../utilities/helpers';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css'],
})
export class CreateGenreComponent {
  errors: string[] = [];

  constructor(private router: Router, private genreServices: GenresService) {}

  saveChanges(genreModel: GenreModelDTO): void {
    this.genreServices.AddGenre(genreModel).subscribe(
      () => {
        this.router.navigate(['/generos']);
      },
      (error) => {
        this.errors = parserErrors(error);
      }
    );
  }
}
