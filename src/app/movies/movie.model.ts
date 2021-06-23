import { GenreDto } from '../genres/genre.model';
import { CinemaModelDTO } from '../cinemas/cinema.model';
import { ActorDto, ActorMovieDto } from '../actors/actor.model';
export interface MovieModelDTO {
  id: number;
  title: string;
  resume: string;
  moviesTheaters: boolean;
  trailer: string;
  releaseDate: Date;
  poster: string;
  genres: GenreDto[];
  actors: ActorMovieDto[];
  cinemas: CinemaModelDTO[];
}

export interface MovieCreateDTO {
  title: string;
  resume: string;
  moviesTheaters: boolean;
  trailer: string;
  releaseDate: Date;
  poster: File;
  genresIds: number[];
  cinemasIds: number[];
  actors: ActorMovieDto[];
}

export interface MovieCinemaGenre {
  genres: GenreDto[];
  cinemas: CinemaModelDTO[];
}

export interface LandingPageDto {
  moviesTheaters: MovieModelDTO[];
  comingSoon: MovieModelDTO[];
}

export interface MovieDetailDto {
  movie: MovieModelDTO;
  selectedGenres: GenreDto[];
  unselectedGenres: GenreDto[];
  selectedCinemas: CinemaModelDTO[];
  unselectedCinemas: CinemaModelDTO[];
  actors: ActorMovieDto[];
}
