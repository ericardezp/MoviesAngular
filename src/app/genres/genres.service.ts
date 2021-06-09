import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GenreDto, GenreModelDTO } from './genre.model';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private httpClient: HttpClient) { }

  private apiUrl = environment.apiUrl + 'genres';

  public GetGenres(): Observable<GenreDto[]> {
    return this.httpClient.get<GenreDto[]>(this.apiUrl);
  }

  public AddGenre(genreModel: GenreModelDTO) {
    return this.httpClient.post(this.apiUrl, genreModel);
  }
}
