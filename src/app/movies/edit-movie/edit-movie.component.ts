import { Component, OnInit } from '@angular/core';
import { MovieCreateDTO, MovieModelDTO } from '../movie.model';
import { MoviesService } from '../movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MultipleSelectorModel } from '../../utilities/multiple-selector/multiple-selector.model';
import { ActorMovieDto } from 'src/app/actors/actor.model';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css'],
})
export class EditMovieComponent implements OnInit {
  constructor(
    private moviesService: MoviesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  movie: MovieModelDTO;
  genresSelected: MultipleSelectorModel[];
  genresNotSelected: MultipleSelectorModel[];
  cinemasSelected: MultipleSelectorModel[];
  cinemasNotSelected: MultipleSelectorModel[];
  actorsSelected: ActorMovieDto[];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.moviesService.GetMovieDetail(params.id).subscribe(movieDetailDto => {
        this.movie = movieDetailDto.movie;

        this.genresSelected = movieDetailDto.selectedGenres.map((genre) => {
          return {
            identifier: genre.id,
            value: genre.genreName,
          } as MultipleSelectorModel;
        });
        this.genresNotSelected = movieDetailDto.unselectedGenres.map((genre) => {
          return {
            identifier: genre.id,
            value: genre.genreName,
          } as MultipleSelectorModel;
        });

        this.cinemasSelected = movieDetailDto.selectedCinemas.map((cinema) => {
          return {
            identifier: cinema.id,
            value: cinema.cinemaName,
          } as MultipleSelectorModel;
        });
        this.cinemasNotSelected = movieDetailDto.unselectedCinemas.map((cinema) => {
          return {
            identifier: cinema.id,
            value: cinema.cinemaName,
          } as MultipleSelectorModel;
        });

        this.actorsSelected = movieDetailDto.actors;

      });
    });
  }

  saveChanges(movie: MovieCreateDTO): void {
    this.moviesService.EditMovie(this.movie.id, movie).subscribe(() => {
      this.router.navigate(['/peliculas/' + this.movie.id]);
    })
  }
}
