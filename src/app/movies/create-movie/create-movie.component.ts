import { Component, OnInit } from '@angular/core';
import { MovieCreateDTO } from '../movie.model';
import { MoviesService } from '../movies.service';
import { MultipleSelectorModel } from '../../utilities/multiple-selector/multiple-selector.model';
import { parserErrors } from '../../utilities/helpers';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css'],
})
export class CreateMovieComponent implements OnInit {
  constructor(private moviesService: MoviesService) {}

  errors: string[] = [];
  genresNotSelected: MultipleSelectorModel[];
  cinemasNotSelected: MultipleSelectorModel[];

  ngOnInit(): void {
    this.moviesService.GetGenreCinema().subscribe((result) => {
      this.genresNotSelected = result.genres.map((genre) => {
        return {
          identifier: genre.id,
          value: genre.genreName,
        } as MultipleSelectorModel;
      });

      this.cinemasNotSelected = result.cinemas.map((cinema) => {
        return {
          identifier: cinema.id,
          value: cinema.cinemaName,
        } as MultipleSelectorModel;
      });
    }, error => console.error(error));
  }

  saveChanges(movie: MovieCreateDTO): void {
    this.moviesService.AddMovie(movie)
    .subscribe(() => console.log('Successfull'),
    error => this.errors = parserErrors(error));
  }
}
