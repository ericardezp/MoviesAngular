import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { MovieCinemaGenre, MovieCreateDTO, MovieModelDTO, LandingPageDto, MovieDetailDto } from './movie.model';
import { dateFormatter } from '../utilities/helpers';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) {}

  private apiUrl = environment.apiUrl + 'movies';

  public GetLandingPage(): Observable<LandingPageDto> {
    return this.httpClient.get<LandingPageDto>(this.apiUrl);
  }

  public GetMovieById(id: number): Observable<MovieModelDTO> {
    return this.httpClient.get<MovieModelDTO>(`${this.apiUrl}/${id}`);
  }

  public GetMovieDetail(id: number): Observable<MovieDetailDto> {
    return this.httpClient.get<MovieDetailDto>(`${this.apiUrl}/MovieDetail/${id}`);
  }

  public GetGenreCinema(): Observable<MovieCinemaGenre> {
    return this.httpClient.get<MovieCinemaGenre>(`${this.apiUrl}/catalogs`);
  }

  public AddMovie(movie: MovieCreateDTO): Observable<number> {
    const formData = this.formDataBuilder(movie);
    return this.httpClient.post<number>(this.apiUrl, formData);
  }

  public EditMovie(id: number, movie: MovieCreateDTO): Observable<object> {
    const formData = this.formDataBuilder(movie);
    return this.httpClient.put(`${this.apiUrl}/${id}`, formData);
  }

  public DeleteMovie(id: number): Observable<object> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }

  public filter(values: any): Observable<any> {
    const params = new HttpParams({fromObject: values});
    return this.httpClient.get<MovieModelDTO[]>(`${this.apiUrl}/filter`, {params, observe: 'response'});
  }

  private formDataBuilder(movie: MovieCreateDTO): FormData {
    const formData = new FormData();

    formData.append('title', movie.title);
    formData.append('resume', movie.resume);
    formData.append('trailer', movie.trailer);
    formData.append('moviesTheaters', String(movie.moviesTheaters));
    if (movie.releaseDate) {
      formData.append('releaseDate', dateFormatter(movie.releaseDate))
    }
    if (movie.poster) {
      formData.append('poster', movie.poster);
    }
    formData.append('genresIds', JSON.stringify(movie.genresIds));
    formData.append('cinemasIds', JSON.stringify(movie.cinemasIds));
    formData.append('actors', JSON.stringify(movie.actors));

    return formData;
  }
}
