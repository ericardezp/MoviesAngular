import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CinemaCreateDTO, CinemaModelDTO } from './cinema.model';

@Injectable({
  providedIn: 'root'
})
export class CinemasService {

  constructor(private httpClient: HttpClient) {}

  private apiUrl = environment.apiUrl + 'cinemas';

  public GetCinemas(currentPage: number, recordsPage: number): Observable<any> {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('CurrentPage', currentPage.toString());
    httpParams = httpParams.append('recordsPerPage', recordsPage.toString());
    return this.httpClient.get<CinemaModelDTO[]>(this.apiUrl, {observe: 'response', params: httpParams });
  }

  public GetCinemaById(id: number): Observable<CinemaModelDTO> {
    return this.httpClient.get<CinemaModelDTO>(`${this.apiUrl}/${id}`);
  }

  public AddCinema(cinemaCreateDto: CinemaCreateDTO): Observable<object> {
    return this.httpClient.post(this.apiUrl, cinemaCreateDto);
  }

  public UpdateCinema(id: number, cinemaModel: CinemaCreateDTO): Observable<object> {
    return this.httpClient.put(`${this.apiUrl}/${id}`, cinemaModel);
  }

  public DeleteCinema(id: number): Observable<object> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }
}
