import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GenreDto } from './genre.model';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private httpClient: HttpClient) { }

  private apiUrl = environment.apiUrl;

  public GetGenres(): Observable<GenreDto[]> {
    return this.httpClient.get<GenreDto[]>(this.apiUrl);
  }
}
