import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GenreDto, GenreModelDto } from './genre.model';

@Injectable({
  providedIn: 'root',
})
export class GenresService {
  constructor(private httpClient: HttpClient) {}

  private apiUrl = environment.apiUrl + 'genres';

  public GetGenres(): Observable<GenreDto[]>{
    return this.httpClient.get<GenreDto[]>(this.apiUrl);
  }

  public GetPaginate(currentPage: number, recordsPage: number): Observable<any> {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('CurrentPage', currentPage.toString());
    httpParams = httpParams.append('recordsPerPage', recordsPage.toString());
    return this.httpClient.get<GenreDto[]>(`${this.apiUrl}/GetPaginate`, {observe: 'response', params: httpParams });
  }

  public GetGenreById(id: number): Observable<GenreDto> {
    return this.httpClient.get<GenreDto>(`${this.apiUrl}/${id}`);
  }

  public AddGenre(genreModel: GenreModelDto): Observable<object> {
    return this.httpClient.post(this.apiUrl, genreModel);
  }

  public UpdateGenre(id: number, genreModel: GenreModelDto): Observable<object> {
    return this.httpClient.put(`${this.apiUrl}/${id}`, genreModel);
  }

  public DeleteGenre(id: number): Observable<object> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }
}
