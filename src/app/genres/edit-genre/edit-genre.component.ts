import { Component, OnInit } from '@angular/core';
import { GenreDto, GenreModelDTO } from '../genre.model';
import { Router, ActivatedRoute } from '@angular/router';
import { GenresService } from '../genres.service';
import { parserErrors } from 'src/app/utilities/helpers';

@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.css'],
})
export class EditGenreComponent implements OnInit {
  constructor(
    private router: Router,
    private genresService: GenresService,
    private activatedRoute: ActivatedRoute
  ) {}

  genreModel: GenreDto;
  errors: string[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.genresService.GetGenreById(params.id).subscribe(
        (genreDto) => {
          this.genreModel = genreDto;
        },
        () => this.router.navigate(['/generos'])
      );
    });
  }

  saveChanges(genreDto: GenreModelDTO): void {
    this.genresService.UpdateGenre(this.genreModel.id, genreDto).subscribe(
      () => {
        this.router.navigate(['/generos']);
      },
      (error) => {
        this.errors = parserErrors(error);
      }
    );
  }
}
