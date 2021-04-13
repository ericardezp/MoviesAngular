export interface MovieModelDTO {
  title: string;
  resume: string;
  moviesTheaters: boolean;
  trailer: string;
  releaseDate: Date;
  poster: string;
}

export interface MovieCreateDTO {
  title: string;
  resume: string;
  moviesTheaters: boolean;
  trailer: string;
  releaseDate: Date;
  poster: File;
}
